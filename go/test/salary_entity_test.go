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

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const salaryEntityLiveStrict = true


func TestSalaryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Salary(nil)
		if ent == nil {
			t.Fatal("expected non-nil SalaryEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.Salary(nil).List(map[string]any{"employee_id": 1}, nil)
		if sdkerr, ok := err.(*core.KotaError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := salaryBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "salary." + _op, _mode); _shouldSkip {
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
					liveMiss(t, salaryEntityLiveStrict, "Live entity test blocked: needs %s via KOTA_TEST_SALARY_ENTID", _liveKey)
				}
			}
		}
		client := setup.client

		// CREATE
		salaryRef01Ent := client.Salary(nil)
		salaryRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "salary"}), "salary_ref01"))
		salaryRef01Data["employee_id"] = setup.idmap["employee01"]

		salaryRef01DataResult, err := salaryRef01Ent.Create(salaryRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		salaryRef01Data = core.ToMapAny(entityData(salaryRef01DataResult))
		if salaryRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if salaryRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		salaryRef01Match := map[string]any{
			"employee_id": setup.idmap["employee01"],
		}

		salaryRef01ListResult, err := salaryRef01Ent.List(salaryRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		salaryRef01List, salaryRef01ListOk := salaryRef01ListResult.([]any)
		if !salaryRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", salaryRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(salaryRef01List), map[string]any{"id": salaryRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		salaryRef01MatchDt0 := map[string]any{
			"id": salaryRef01Data["id"],
		}
		salaryRef01DataDt0Loaded, err := salaryRef01Ent.Load(salaryRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		salaryRef01DataDt0LoadResult := core.ToMapAny(entityData(salaryRef01DataDt0Loaded))
		if salaryRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if salaryRef01DataDt0LoadResult["id"] != salaryRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		salaryRef01MatchRm0 := map[string]any{
			"id": salaryRef01Data["id"],
		}
		_, err = salaryRef01Ent.Remove(salaryRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		salaryRef01MatchRt0 := map[string]any{
			"employee_id": setup.idmap["employee01"],
		}

		salaryRef01ListRt0Result, err := salaryRef01Ent.List(salaryRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		salaryRef01ListRt0, salaryRef01ListRt0Ok := salaryRef01ListRt0Result.([]any)
		if !salaryRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", salaryRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(salaryRef01ListRt0), map[string]any{"id": salaryRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func salaryBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "salary", "SalaryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read salary test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse salary test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"salary01", "salary02", "salary03", "employee01", "employee02", "employee03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("KOTA_TEST_SALARY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KOTA_TEST_SALARY_ENTID": idmap,
		"KOTA_TEST_LIVE":      "FALSE",
		"KOTA_TEST_EXPLAIN":   "FALSE",
		"KOTA_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["KOTA_TEST_SALARY_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
