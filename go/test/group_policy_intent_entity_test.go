package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/kota-sdk/go"
	"github.com/voxgig-sdk/kota-sdk/go/core"

	vs "github.com/voxgig-sdk/kota-sdk/go/utility/struct"
)

func TestGroupPolicyIntentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GroupPolicyIntent(nil)
		if ent == nil {
			t.Fatal("expected non-nil GroupPolicyIntentEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"group_policy_intent": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.GroupPolicyIntent(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.GroupPolicyIntent(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := group_policy_intentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "group_policy_intent." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set KOTA_TEST_GROUP_POLICY_INTENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		groupPolicyIntentRef01Ent := client.GroupPolicyIntent(nil)
		groupPolicyIntentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "group_policy_intent"}, setup.data), "group_policy_intent_ref01"))

		groupPolicyIntentRef01DataResult, err := groupPolicyIntentRef01Ent.Create(groupPolicyIntentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		groupPolicyIntentRef01Data = core.ToMapAny(entityData(groupPolicyIntentRef01DataResult))
		if groupPolicyIntentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if groupPolicyIntentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		groupPolicyIntentRef01Match := map[string]any{}

		groupPolicyIntentRef01ListResult, err := groupPolicyIntentRef01Ent.List(groupPolicyIntentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		groupPolicyIntentRef01List, groupPolicyIntentRef01ListOk := groupPolicyIntentRef01ListResult.([]any)
		if !groupPolicyIntentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", groupPolicyIntentRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(groupPolicyIntentRef01List), map[string]any{"id": groupPolicyIntentRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		groupPolicyIntentRef01MatchDt0 := map[string]any{
			"id": groupPolicyIntentRef01Data["id"],
		}
		groupPolicyIntentRef01DataDt0Loaded, err := groupPolicyIntentRef01Ent.Load(groupPolicyIntentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		groupPolicyIntentRef01DataDt0LoadResult := core.ToMapAny(entityData(groupPolicyIntentRef01DataDt0Loaded))
		if groupPolicyIntentRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if groupPolicyIntentRef01DataDt0LoadResult["id"] != groupPolicyIntentRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func group_policy_intentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "group_policy_intent", "GroupPolicyIntentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read group_policy_intent test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse group_policy_intent test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"group_policy_intent01", "group_policy_intent02", "group_policy_intent03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("KOTA_TEST_GROUP_POLICY_INTENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KOTA_TEST_GROUP_POLICY_INTENT_ENTID": idmap,
		"KOTA_TEST_LIVE":      "FALSE",
		"KOTA_TEST_EXPLAIN":   "FALSE",
		"KOTA_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["KOTA_TEST_GROUP_POLICY_INTENT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["KOTA_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["KOTA_APIKEY"],
			},
			extra,
		})
		client = sdk.NewKotaSDK(core.ToMapAny(mergedOpts))
	}

	live := env["KOTA_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["KOTA_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
