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

func TestAssociatedPersonEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AssociatedPerson(nil)
		if ent == nil {
			t.Fatal("expected non-nil AssociatedPersonEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"associated_person": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.AssociatedPerson(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.AssociatedPerson(nil).Stream("list", nil, nil) {
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
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set KOTA_TEST_ASSOCIATED_PERSON_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		associatedPersonRef01Ent := client.AssociatedPerson(nil)
		associatedPersonRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "associated_person"}, setup.data), "associated_person_ref01"))
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
	idmap := vs.Transform(
		[]any{"associated_person01", "associated_person02", "associated_person03", "employee01", "employee02", "employee03"},
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
	entidEnvRaw := os.Getenv("KOTA_TEST_ASSOCIATED_PERSON_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KOTA_TEST_ASSOCIATED_PERSON_ENTID": idmap,
		"KOTA_TEST_LIVE":      "FALSE",
		"KOTA_TEST_EXPLAIN":   "FALSE",
		"KOTA_APIKEY":         "NONE",
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
