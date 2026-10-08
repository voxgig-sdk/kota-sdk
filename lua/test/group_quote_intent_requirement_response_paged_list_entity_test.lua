-- GroupQuoteIntentRequirementResponsePagedList entity test

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


describe("GroupQuoteIntentRequirementResponsePagedListEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:GroupQuoteIntentRequirementResponsePagedList(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:GroupQuoteIntentRequirementResponsePagedList(nil):list({ ["id"] = 1 }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = group_quote_intent_requirement_response_paged_list_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "group_quote_intent_requirement_response_paged_list." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local group_quote_intent_requirement_response_paged_list_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.group_quote_intent_requirement_response_paged_list")))
    local group_quote_intent_requirement_response_paged_list_ref01_data = nil
    if #group_quote_intent_requirement_response_paged_list_ref01_data_raw > 0 then
      group_quote_intent_requirement_response_paged_list_ref01_data = helpers.to_map(group_quote_intent_requirement_response_paged_list_ref01_data_raw[1][2])
    end

  end)
end)

function group_quote_intent_requirement_response_paged_list_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/group_quote_intent_requirement_response_paged_list/GroupQuoteIntentRequirementResponsePagedListTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read group_quote_intent_requirement_response_paged_list test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "group_quote_intent_requirement_response_paged_list01", "group_quote_intent_requirement_response_paged_list02", "group_quote_intent_requirement_response_paged_list03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("KOTA_TEST_GROUP_QUOTE_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["KOTA_TEST_GROUP_QUOTE_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST_ENTID"] = idmap,
    ["KOTA_TEST_LIVE"] = "FALSE",
    ["KOTA_TEST_EXPLAIN"] = "FALSE",
    ["KOTA_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["KOTA_TEST_GROUP_QUOTE_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST_ENTID"])
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
