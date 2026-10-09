-- Salary entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("kota_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

-- main.kit.test.live.strict is true (the default is true): a live
-- request that fails, or a live test missing an input it needs,
-- fails the test.
-- An account with no record for a test to read skips it either way.
local LIVE_STRICT = true


describe("SalaryEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Salary(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:Salary(nil):list({ ["employee_id"] = 1 }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = salary_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "salary." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live then
      for _, _live_key in ipairs({"employee01"}) do
        if setup.synthetic_only or setup.idmap[_live_key] == nil then
          runner.live_miss(pending, LIVE_STRICT, "Live entity test blocked: needs " .. _live_key .. " via KOTA_TEST_SALARY_ENTID")
        end
      end
    end
    local client = setup.client

    -- CREATE
    local salary_ref01_ent = client:Salary(nil)
    local salary_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.salary"), "salary_ref01"))
    salary_ref01_data["employee_id"] = setup.idmap["employee01"]

    local salary_ref01_data_result, err = salary_ref01_ent:create(salary_ref01_data, nil)
    assert.is_nil(err)
    salary_ref01_data = helpers.to_map(type(salary_ref01_data_result) == 'table' and salary_ref01_data_result.data_get and salary_ref01_data_result:data_get() or salary_ref01_data_result)
    assert.is_not_nil(salary_ref01_data)
    assert.is_not_nil(salary_ref01_data["id"])

    -- LIST
    local salary_ref01_match = {
      ["employee_id"] = setup.idmap["employee01"],
    }

    local salary_ref01_list_result, err = salary_ref01_ent:list(salary_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(salary_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(salary_ref01_list_result),
      { id = salary_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- LOAD
    local salary_ref01_match_dt0 = {
      id = salary_ref01_data["id"],
    }
    local salary_ref01_data_dt0_loaded, err = salary_ref01_ent:load(salary_ref01_match_dt0, nil)
    assert.is_nil(err)
    local salary_ref01_data_dt0_load_result = helpers.to_map(type(salary_ref01_data_dt0_loaded) == 'table' and salary_ref01_data_dt0_loaded.data_get and salary_ref01_data_dt0_loaded:data_get() or salary_ref01_data_dt0_loaded)
    assert.is_not_nil(salary_ref01_data_dt0_load_result)
    assert.are.equal(salary_ref01_data_dt0_load_result["id"], salary_ref01_data["id"])

    -- REMOVE
    local salary_ref01_match_rm0 = {
      id = salary_ref01_data["id"],
    }
    salary_ref01_match_rm0["employee_id"] = setup.idmap["employee_id"] or setup.idmap["employee01"]
    local _, err = salary_ref01_ent:remove(salary_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local salary_ref01_match_rt0 = {
      ["employee_id"] = setup.idmap["employee01"],
    }

    local salary_ref01_list_rt0_result, err = salary_ref01_ent:list(salary_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(salary_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(salary_ref01_list_rt0_result),
      { id = salary_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function salary_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/salary/SalaryTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read salary test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "salary01", "salary02", "salary03", "employee01", "employee02", "employee03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("KOTA_TEST_SALARY_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["KOTA_TEST_SALARY_ENTID"] = idmap,
    ["KOTA_TEST_LIVE"] = "FALSE",
    ["KOTA_TEST_EXPLAIN"] = "FALSE",
    ["KOTA_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["KOTA_TEST_SALARY_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["KOTA_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["KOTA_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["KOTA_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["KOTA_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
