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

func TestEmployeeEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Employee(nil)
		if ent == nil {
			t.Fatal("expected non-nil EmployeeEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"employee": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Employee(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.MakeConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.Employee(nil).Stream("list", nil, nil) {
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
		setup := employeeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "employee." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set KOTA_TEST_EMPLOYEE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		employeeRef01Ent := client.Employee(nil)
		employeeRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "employee"}, setup.data), "employee_ref01"))

		employeeRef01DataResult, err := employeeRef01Ent.Create(employeeRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		employeeRef01Data = core.ToMapAny(entityData(employeeRef01DataResult))
		if employeeRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if employeeRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		employeeRef01Match := map[string]any{}

		employeeRef01ListResult, err := employeeRef01Ent.List(employeeRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		employeeRef01List, employeeRef01ListOk := employeeRef01ListResult.([]any)
		if !employeeRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", employeeRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(employeeRef01List), map[string]any{"id": employeeRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		employeeRef01DataUp0Up := map[string]any{
			"id": employeeRef01Data["id"],
		}

		employeeRef01MarkdefUp0Name := "date_of_birth"
		employeeRef01MarkdefUp0Value := fmt.Sprintf("Mark01-employee_ref01_%d", setup.now)
		employeeRef01DataUp0Up[employeeRef01MarkdefUp0Name] = employeeRef01MarkdefUp0Value

		employeeRef01ResdataUp0Result, err := employeeRef01Ent.Update(employeeRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		employeeRef01ResdataUp0 := core.ToMapAny(entityData(employeeRef01ResdataUp0Result))
		if employeeRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if employeeRef01ResdataUp0["id"] != employeeRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if employeeRef01ResdataUp0[employeeRef01MarkdefUp0Name] != employeeRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", employeeRef01MarkdefUp0Name, employeeRef01ResdataUp0[employeeRef01MarkdefUp0Name])
		}

		// LOAD
		employeeRef01MatchDt0 := map[string]any{
			"id": employeeRef01Data["id"],
		}
		employeeRef01DataDt0Loaded, err := employeeRef01Ent.Load(employeeRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		employeeRef01DataDt0LoadResult := core.ToMapAny(entityData(employeeRef01DataDt0Loaded))
		if employeeRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if employeeRef01DataDt0LoadResult["id"] != employeeRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func employeeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "employee", "EmployeeTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read employee test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse employee test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"employee01", "employee02", "employee03"},
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
	entidEnvRaw := os.Getenv("KOTA_TEST_EMPLOYEE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KOTA_TEST_EMPLOYEE_ENTID": idmap,
		"KOTA_TEST_LIVE":      "FALSE",
		"KOTA_TEST_EXPLAIN":   "FALSE",
		"KOTA_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["KOTA_TEST_EMPLOYEE_ENTID"])
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
