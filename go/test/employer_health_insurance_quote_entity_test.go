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

func TestEmployerHealthInsuranceQuoteEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EmployerHealthInsuranceQuote(nil)
		if ent == nil {
			t.Fatal("expected non-nil EmployerHealthInsuranceQuoteEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := employer_health_insurance_quoteBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "employer_health_insurance_quote." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		employerHealthInsuranceQuoteRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.employer_health_insurance_quote", setup.data)))
		var employerHealthInsuranceQuoteRef01Data map[string]any
		if len(employerHealthInsuranceQuoteRef01DataRaw) > 0 {
			employerHealthInsuranceQuoteRef01Data = core.ToMapAny(employerHealthInsuranceQuoteRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = employerHealthInsuranceQuoteRef01Data

		// LOAD
		employerHealthInsuranceQuoteRef01Ent := client.EmployerHealthInsuranceQuote(nil)
		employerHealthInsuranceQuoteRef01MatchDt0 := map[string]any{
			"id": employerHealthInsuranceQuoteRef01Data["id"],
		}
		employerHealthInsuranceQuoteRef01DataDt0Loaded, err := employerHealthInsuranceQuoteRef01Ent.Load(employerHealthInsuranceQuoteRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		employerHealthInsuranceQuoteRef01DataDt0LoadResult := core.ToMapAny(entityData(employerHealthInsuranceQuoteRef01DataDt0Loaded))
		if employerHealthInsuranceQuoteRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if employerHealthInsuranceQuoteRef01DataDt0LoadResult["id"] != employerHealthInsuranceQuoteRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func employer_health_insurance_quoteBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "employer_health_insurance_quote", "EmployerHealthInsuranceQuoteTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read employer_health_insurance_quote test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse employer_health_insurance_quote test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"employer_health_insurance_quote01", "employer_health_insurance_quote02", "employer_health_insurance_quote03", "employer01", "employer02", "employer03"},
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
	entidEnvRaw := os.Getenv("KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_ENTID": idmap,
		"KOTA_TEST_LIVE":      "FALSE",
		"KOTA_TEST_EXPLAIN":   "FALSE",
		"KOTA_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_ENTID"])
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
