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

func TestDependentsManagementIntentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DependentsManagementIntent(nil)
		if ent == nil {
			t.Fatal("expected non-nil DependentsManagementIntentEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := dependents_management_intentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "dependents_management_intent." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dependentsManagementIntentRef01Ent := client.DependentsManagementIntent(nil)
		dependentsManagementIntentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "dependents_management_intent"}, setup.data), "dependents_management_intent_ref01"))
		dependentsManagementIntentRef01Data["dependents_management_intent_id"] = setup.idmap["dependents_management_intent01"]

		dependentsManagementIntentRef01DataResult, err := dependentsManagementIntentRef01Ent.Create(dependentsManagementIntentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dependentsManagementIntentRef01Data = core.ToMapAny(entityData(dependentsManagementIntentRef01DataResult))
		if dependentsManagementIntentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if dependentsManagementIntentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		dependentsManagementIntentRef01MatchDt0 := map[string]any{
			"id": dependentsManagementIntentRef01Data["id"],
		}
		dependentsManagementIntentRef01DataDt0Loaded, err := dependentsManagementIntentRef01Ent.Load(dependentsManagementIntentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		dependentsManagementIntentRef01DataDt0LoadResult := core.ToMapAny(entityData(dependentsManagementIntentRef01DataDt0Loaded))
		if dependentsManagementIntentRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if dependentsManagementIntentRef01DataDt0LoadResult["id"] != dependentsManagementIntentRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func dependents_management_intentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "dependents_management_intent", "DependentsManagementIntentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read dependents_management_intent test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse dependents_management_intent test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"dependents_management_intent01", "dependents_management_intent02", "dependents_management_intent03", "enrolment_intent01", "enrolment_intent02", "enrolment_intent03", "policy01", "policy02", "policy03", "policy_amendment_intent01", "policy_amendment_intent02", "policy_amendment_intent03"},
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
	entidEnvRaw := os.Getenv("KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID": idmap,
		"KOTA_TEST_LIVE":      "FALSE",
		"KOTA_TEST_EXPLAIN":   "FALSE",
		"KOTA_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID"])
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
