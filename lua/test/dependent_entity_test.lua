-- Dependent entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("kota_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("DependentEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Dependent(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = dependent_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "dependent." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set KOTA_TEST_DEPENDENT_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local dependent_ref01_ent = client:Dependent(nil)
    local dependent_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.dependent"), "dependent_ref01"))
    dependent_ref01_data["dependents_management_intent_id"] = setup.idmap["dependents_management_intent01"]

    local dependent_ref01_data_result, err = dependent_ref01_ent:create(dependent_ref01_data, nil)
    assert.is_nil(err)
    dependent_ref01_data = helpers.to_map(type(dependent_ref01_data_result) == 'table' and dependent_ref01_data_result.data_get and dependent_ref01_data_result:data_get() or dependent_ref01_data_result)
    assert.is_not_nil(dependent_ref01_data)
    assert.is_not_nil(dependent_ref01_data["id"])

    -- REMOVE
    local dependent_ref01_match_rm0 = {
      id = dependent_ref01_data["id"],
    }
    local _, err = dependent_ref01_ent:remove(dependent_ref01_match_rm0, nil)
    assert.is_nil(err)

  end)
end)

function dependent_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/dependent/DependentTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read dependent test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "dependent01", "dependent02", "dependent03", "dependents_management_intent01", "dependents_management_intent02", "dependents_management_intent03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("KOTA_TEST_DEPENDENT_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["KOTA_TEST_DEPENDENT_ENTID"] = idmap,
    ["KOTA_TEST_LIVE"] = "FALSE",
    ["KOTA_TEST_EXPLAIN"] = "FALSE",
    ["KOTA_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["KOTA_TEST_DEPENDENT_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["KOTA_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
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
