package sdktest

import (
	"encoding/json"
	"fmt"
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

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const associated_personEntityLiveStrict = true


func TestAssociatedPersonEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AssociatedPerson(nil)
		if ent == nil {
			t.Fatal("expected non-nil AssociatedPersonEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.AssociatedPerson(nil).List(map[string]any{"employee_id": 1}, nil)
		if sdkerr, ok := err.(*core.KotaError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := associated_personBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "associated_person." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"employee01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, associated_personEntityLiveStrict, "Live entity test blocked: needs %s via KOTA_TEST_ASSOCIATED_PERSON_ENTID", _liveKey)
				}
			}
		}
		client := setup.client

		// CREATE
		associatedPersonRef01Ent := client.AssociatedPerson(nil)
		associatedPersonRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "associated_person"}), "associated_person_ref01"))
		associatedPersonRef01Data["employee_id"] = setup.idmap["employee01"]

		associatedPersonRef01DataResult, err := associatedPersonRef01Ent.Create(associatedPersonRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		associatedPersonRef01Data = core.ToMapAny(entityData(associatedPersonRef01DataResult))
		if associatedPersonRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if associatedPersonRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		associatedPersonRef01Match := map[string]any{
			"employee_id": setup.idmap["employee01"],
		}

		associatedPersonRef01ListResult, err := associatedPersonRef01Ent.List(associatedPersonRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		associatedPersonRef01List, associatedPersonRef01ListOk := associatedPersonRef01ListResult.([]any)
		if !associatedPersonRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", associatedPersonRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(associatedPersonRef01List), map[string]any{"id": associatedPersonRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		associatedPersonRef01DataUp0Up := map[string]any{
			"id": associatedPersonRef01Data["id"],
			"employee_id": setup.idmap["employee_id"],
		}

		associatedPersonRef01MarkdefUp0Name := "date_of_birth"
		associatedPersonRef01MarkdefUp0Value := fmt.Sprintf("Mark01-associated_person_ref01_%d", setup.now)
		associatedPersonRef01DataUp0Up[associatedPersonRef01MarkdefUp0Name] = associatedPersonRef01MarkdefUp0Value

		associatedPersonRef01ResdataUp0Result, err := associatedPersonRef01Ent.Update(associatedPersonRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		associatedPersonRef01ResdataUp0 := core.ToMapAny(entityData(associatedPersonRef01ResdataUp0Result))
		if associatedPersonRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if associatedPersonRef01ResdataUp0["id"] != associatedPersonRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if associatedPersonRef01ResdataUp0[associatedPersonRef01MarkdefUp0Name] != associatedPersonRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", associatedPersonRef01MarkdefUp0Name, associatedPersonRef01ResdataUp0[associatedPersonRef01MarkdefUp0Name])
		}

		// LOAD
		associatedPersonRef01MatchDt0 := map[string]any{
			"id": associatedPersonRef01Data["id"],
		}
		associatedPersonRef01DataDt0Loaded, err := associatedPersonRef01Ent.Load(associatedPersonRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		associatedPersonRef01DataDt0LoadResult := core.ToMapAny(entityData(associatedPersonRef01DataDt0Loaded))
		if associatedPersonRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if associatedPersonRef01DataDt0LoadResult["id"] != associatedPersonRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		associatedPersonRef01MatchRm0 := map[string]any{
			"id": associatedPersonRef01Data["id"],
		}
		_, err = associatedPersonRef01Ent.Remove(associatedPersonRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		associatedPersonRef01MatchRt0 := map[string]any{
			"employee_id": setup.idmap["employee01"],
		}

		associatedPersonRef01ListRt0Result, err := associatedPersonRef01Ent.List(associatedPersonRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		associatedPersonRef01ListRt0, associatedPersonRef01ListRt0Ok := associatedPersonRef01ListRt0Result.([]any)
		if !associatedPersonRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", associatedPersonRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(associatedPersonRef01ListRt0), map[string]any{"id": associatedPersonRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func associated_personBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "associated_person", "AssociatedPersonTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read associated_person test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse associated_person test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"associated_person01", "associated_person02", "associated_person03", "employee01", "employee02", "employee03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("KOTA_TEST_ASSOCIATED_PERSON_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KOTA_TEST_ASSOCIATED_PERSON_ENTID": idmap,
		"KOTA_TEST_LIVE":      "FALSE",
		"KOTA_TEST_EXPLAIN":   "FALSE",
		"KOTA_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["KOTA_TEST_ASSOCIATED_PERSON_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add employee_id alias for update test.
	if idmapResolved["employee_id"] == nil {
		idmapResolved["employee_id"] = idmapResolved["employee01"]
	}

	if env["KOTA_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["KOTA_APIKEY"],
			},
			extraOpts,
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
