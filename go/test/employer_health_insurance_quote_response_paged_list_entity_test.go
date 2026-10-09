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
const employer_health_insurance_quote_response_paged_listEntityLiveStrict = true


func TestEmployerHealthInsuranceQuoteResponsePagedListEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EmployerHealthInsuranceQuoteResponsePagedList(nil)
		if ent == nil {
			t.Fatal("expected non-nil EmployerHealthInsuranceQuoteResponsePagedListEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.EmployerHealthInsuranceQuoteResponsePagedList(nil).List(map[string]any{"employer_id": 1}, nil)
		if sdkerr, ok := err.(*core.KotaError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := employer_health_insurance_quote_response_paged_listBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "employer_health_insurance_quote_response_paged_list." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"employer01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, employer_health_insurance_quote_response_paged_listEntityLiveStrict, "Live entity test blocked: needs %s via KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_RESPONSE_PAGED_LIST_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		employerHealthInsuranceQuoteResponsePagedListRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.employer_health_insurance_quote_response_paged_list")))
		var employerHealthInsuranceQuoteResponsePagedListRef01Data map[string]any
		if len(employerHealthInsuranceQuoteResponsePagedListRef01DataRaw) > 0 {
			employerHealthInsuranceQuoteResponsePagedListRef01Data = core.ToMapAny(employerHealthInsuranceQuoteResponsePagedListRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = employerHealthInsuranceQuoteResponsePagedListRef01Data

		// LIST
		employerHealthInsuranceQuoteResponsePagedListRef01Ent := client.EmployerHealthInsuranceQuoteResponsePagedList(nil)
		employerHealthInsuranceQuoteResponsePagedListRef01Match := map[string]any{
			"employer_id": setup.idmap["employer01"],
		}

		employerHealthInsuranceQuoteResponsePagedListRef01ListResult, err := employerHealthInsuranceQuoteResponsePagedListRef01Ent.List(employerHealthInsuranceQuoteResponsePagedListRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, employerHealthInsuranceQuoteResponsePagedListRef01ListOk := employerHealthInsuranceQuoteResponsePagedListRef01ListResult.([]any)
		if !employerHealthInsuranceQuoteResponsePagedListRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", employerHealthInsuranceQuoteResponsePagedListRef01ListResult)
		}

	})
}

func employer_health_insurance_quote_response_paged_listBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "employer_health_insurance_quote_response_paged_list", "EmployerHealthInsuranceQuoteResponsePagedListTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read employer_health_insurance_quote_response_paged_list test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse employer_health_insurance_quote_response_paged_list test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"employer_health_insurance_quote_response_paged_list01", "employer_health_insurance_quote_response_paged_list02", "employer_health_insurance_quote_response_paged_list03", "employer01", "employer02", "employer03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_RESPONSE_PAGED_LIST_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_RESPONSE_PAGED_LIST_ENTID": idmap,
		"KOTA_TEST_LIVE":      "FALSE",
		"KOTA_TEST_EXPLAIN":   "FALSE",
		"KOTA_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_RESPONSE_PAGED_LIST_ENTID"])
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
