-- AssociatedPerson entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("kota_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("AssociatedPersonEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:AssociatedPerson(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["associated_person"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:AssociatedPerson(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:AssociatedPerson(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = associated_person_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "associated_person." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set KOTA_TEST_ASSOCIATED_PERSON_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local associated_person_ref01_ent = client:AssociatedPerson(nil)
    local associated_person_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.associated_person"), "associated_person_ref01"))
    associated_person_ref01_data["employee_id"] = setup.idmap["employee01"]

    local associated_person_ref01_data_result, err = associated_person_ref01_ent:create(associated_person_ref01_data, nil)
    assert.is_nil(err)
    associated_person_ref01_data = helpers.to_map(associated_person_ref01_data_result)
    assert.is_not_nil(associated_person_ref01_data)
    assert.is_not_nil(associated_person_ref01_data["id"])

    -- LIST
    local associated_person_ref01_match = {
      ["employee_id"] = setup.idmap["employee01"],
    }

    local associated_person_ref01_list_result, err = associated_person_ref01_ent:list(associated_person_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(associated_person_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(associated_person_ref01_list_result),
      { id = associated_person_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local associated_person_ref01_data_up0_up = {
      id = associated_person_ref01_data["id"],
      ["employee_id"] = setup.idmap["employee_id"],
    }

    local associated_person_ref01_markdef_up0_name = "date_of_birth"
    local associated_person_ref01_markdef_up0_value = "Mark01-associated_person_ref01_" .. tostring(setup.now)
    associated_person_ref01_data_up0_up[associated_person_ref01_markdef_up0_name] = associated_person_ref01_markdef_up0_value

    local associated_person_ref01_resdata_up0_result, err = associated_person_ref01_ent:update(associated_person_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local associated_person_ref01_resdata_up0 = helpers.to_map(associated_person_ref01_resdata_up0_result)
    assert.is_not_nil(associated_person_ref01_resdata_up0)
    assert.are.equal(associated_person_ref01_resdata_up0["id"], associated_person_ref01_data_up0_up["id"])
    assert.are.equal(associated_person_ref01_resdata_up0[associated_person_ref01_markdef_up0_name], associated_person_ref01_markdef_up0_value)

    -- LOAD
    local associated_person_ref01_match_dt0 = {
      id = associated_person_ref01_data["id"],
    }
    local associated_person_ref01_data_dt0_loaded, err = associated_person_ref01_ent:load(associated_person_ref01_match_dt0, nil)
    assert.is_nil(err)
    local associated_person_ref01_data_dt0_load_result = helpers.to_map(associated_person_ref01_data_dt0_loaded)
    assert.is_not_nil(associated_person_ref01_data_dt0_load_result)
    assert.are.equal(associated_person_ref01_data_dt0_load_result["id"], associated_person_ref01_data["id"])

    -- REMOVE
    local associated_person_ref01_match_rm0 = {
      id = associated_person_ref01_data["id"],
    }
    local _, err = associated_person_ref01_ent:remove(associated_person_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local associated_person_ref01_match_rt0 = {
      ["employee_id"] = setup.idmap["employee01"],
    }

    local associated_person_ref01_list_rt0_result, err = associated_person_ref01_ent:list(associated_person_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(associated_person_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(associated_person_ref01_list_rt0_result),
      { id = associated_person_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function associated_person_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/associated_person/AssociatedPersonTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read associated_person test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "associated_person01", "associated_person02", "associated_person03", "employee01", "employee02", "employee03" },
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
  local entid_env_raw = os.getenv("KOTA_TEST_ASSOCIATED_PERSON_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["KOTA_TEST_ASSOCIATED_PERSON_ENTID"] = idmap,
    ["KOTA_TEST_LIVE"] = "FALSE",
    ["KOTA_TEST_EXPLAIN"] = "FALSE",
    ["KOTA_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["KOTA_TEST_ASSOCIATED_PERSON_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["employee_id"] == nil then
    idmap_resolved["employee_id"] = idmap_resolved["employee01"]
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
