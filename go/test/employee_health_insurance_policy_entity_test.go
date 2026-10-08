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
const employee_health_insurance_policyEntityLiveStrict = true


func TestEmployeeHealthInsurancePolicyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EmployeeHealthInsurancePolicy(nil)
		if ent == nil {
			t.Fatal("expected non-nil EmployeeHealthInsurancePolicyEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.EmployeeHealthInsurancePolicy(nil).Load(map[string]any{"employee_id": 1, "id": "x"}, nil)
		if sdkerr, ok := err.(*core.KotaError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := employee_health_insurance_policyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "employee_health_insurance_policy." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			liveMiss(t, employee_health_insurance_policyEntityLiveStrict, "Live entity test blocked: %s", "the flow loads a employee_health_insurance_policy record it has no list to find")
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		employeeHealthInsurancePolicyRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.employee_health_insurance_policy")))
		var employeeHealthInsurancePolicyRef01Data map[string]any
		if len(employeeHealthInsurancePolicyRef01DataRaw) > 0 {
			employeeHealthInsurancePolicyRef01Data = core.ToMapAny(employeeHealthInsurancePolicyRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = employeeHealthInsurancePolicyRef01Data

		// LOAD
		employeeHealthInsurancePolicyRef01Ent := client.EmployeeHealthInsurancePolicy(nil)
		employeeHealthInsurancePolicyRef01MatchDt0 := map[string]any{
			"id": employeeHealthInsurancePolicyRef01Data["id"],
		}
		employeeHealthInsurancePolicyRef01DataDt0Loaded, err := employeeHealthInsurancePolicyRef01Ent.Load(employeeHealthInsurancePolicyRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		employeeHealthInsurancePolicyRef01DataDt0LoadResult := core.ToMapAny(entityData(employeeHealthInsurancePolicyRef01DataDt0Loaded))
		if employeeHealthInsurancePolicyRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if employeeHealthInsurancePolicyRef01DataDt0LoadResult["id"] != employeeHealthInsurancePolicyRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func employee_health_insurance_policyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "employee_health_insurance_policy", "EmployeeHealthInsurancePolicyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read employee_health_insurance_policy test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse employee_health_insurance_policy test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"employee_health_insurance_policy01", "employee_health_insurance_policy02", "employee_health_insurance_policy03", "employee01", "employee02", "employee03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_POLICY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_POLICY_ENTID": idmap,
		"KOTA_TEST_LIVE":      "FALSE",
		"KOTA_TEST_EXPLAIN":   "FALSE",
		"KOTA_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_POLICY_ENTID"])
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
