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

func TestPolicyAmendmentIntentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PolicyAmendmentIntent(nil)
		if ent == nil {
			t.Fatal("expected non-nil PolicyAmendmentIntentEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"policy_amendment_intent": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.PolicyAmendmentIntent(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.PolicyAmendmentIntent(nil).Stream("list", nil, nil) {
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
		setup := policy_amendment_intentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "policy_amendment_intent." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set KOTA_TEST_POLICY_AMENDMENT_INTENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		policyAmendmentIntentRef01Ent := client.PolicyAmendmentIntent(nil)
		policyAmendmentIntentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "policy_amendment_intent"}, setup.data), "policy_amendment_intent_ref01"))
		policyAmendmentIntentRef01Data["policy_id"] = setup.idmap["policy01"]

		policyAmendmentIntentRef01DataResult, err := policyAmendmentIntentRef01Ent.Create(policyAmendmentIntentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		policyAmendmentIntentRef01Data = core.ToMapAny(entityData(policyAmendmentIntentRef01DataResult))
		if policyAmendmentIntentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if policyAmendmentIntentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		policyAmendmentIntentRef01Match := map[string]any{
			"policy_id": setup.idmap["policy01"],
		}

		policyAmendmentIntentRef01ListResult, err := policyAmendmentIntentRef01Ent.List(policyAmendmentIntentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		policyAmendmentIntentRef01List, policyAmendmentIntentRef01ListOk := policyAmendmentIntentRef01ListResult.([]any)
		if !policyAmendmentIntentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", policyAmendmentIntentRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(policyAmendmentIntentRef01List), map[string]any{"id": policyAmendmentIntentRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		policyAmendmentIntentRef01MatchDt0 := map[string]any{
			"id": policyAmendmentIntentRef01Data["id"],
		}
		policyAmendmentIntentRef01DataDt0Loaded, err := policyAmendmentIntentRef01Ent.Load(policyAmendmentIntentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		policyAmendmentIntentRef01DataDt0LoadResult := core.ToMapAny(entityData(policyAmendmentIntentRef01DataDt0Loaded))
		if policyAmendmentIntentRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if policyAmendmentIntentRef01DataDt0LoadResult["id"] != policyAmendmentIntentRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func policy_amendment_intentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "policy_amendment_intent", "PolicyAmendmentIntentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read policy_amendment_intent test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse policy_amendment_intent test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"policy_amendment_intent01", "policy_amendment_intent02", "policy_amendment_intent03", "policy01", "policy02", "policy03"},
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
	entidEnvRaw := os.Getenv("KOTA_TEST_POLICY_AMENDMENT_INTENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KOTA_TEST_POLICY_AMENDMENT_INTENT_ENTID": idmap,
		"KOTA_TEST_LIVE":      "FALSE",
		"KOTA_TEST_EXPLAIN":   "FALSE",
		"KOTA_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["KOTA_TEST_POLICY_AMENDMENT_INTENT_ENTID"])
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
