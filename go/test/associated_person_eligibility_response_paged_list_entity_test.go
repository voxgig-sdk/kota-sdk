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

func TestAssociatedPersonEligibilityResponsePagedListEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AssociatedPersonEligibilityResponsePagedList(nil)
		if ent == nil {
			t.Fatal("expected non-nil AssociatedPersonEligibilityResponsePagedListEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"associated_person_eligibility_response_paged_list": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.AssociatedPersonEligibilityResponsePagedList(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.AssociatedPersonEligibilityResponsePagedList(nil).Stream("list", nil, nil) {
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
		setup := associated_person_eligibility_response_paged_listBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "associated_person_eligibility_response_paged_list." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		associatedPersonEligibilityResponsePagedListRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.associated_person_eligibility_response_paged_list", setup.data)))
		var associatedPersonEligibilityResponsePagedListRef01Data map[string]any
		if len(associatedPersonEligibilityResponsePagedListRef01DataRaw) > 0 {
			associatedPersonEligibilityResponsePagedListRef01Data = core.ToMapAny(associatedPersonEligibilityResponsePagedListRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = associatedPersonEligibilityResponsePagedListRef01Data

		// LIST
		associatedPersonEligibilityResponsePagedListRef01Ent := client.AssociatedPersonEligibilityResponsePagedList(nil)
		associatedPersonEligibilityResponsePagedListRef01Match := map[string]any{
			"dependents_management_intent_id": setup.idmap["dependents_management_intent01"],
		}

		associatedPersonEligibilityResponsePagedListRef01ListResult, err := associatedPersonEligibilityResponsePagedListRef01Ent.List(associatedPersonEligibilityResponsePagedListRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, associatedPersonEligibilityResponsePagedListRef01ListOk := associatedPersonEligibilityResponsePagedListRef01ListResult.([]any)
		if !associatedPersonEligibilityResponsePagedListRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", associatedPersonEligibilityResponsePagedListRef01ListResult)
		}

	})
}

func associated_person_eligibility_response_paged_listBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "associated_person_eligibility_response_paged_list", "AssociatedPersonEligibilityResponsePagedListTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read associated_person_eligibility_response_paged_list test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse associated_person_eligibility_response_paged_list test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"associated_person_eligibility_response_paged_list01", "associated_person_eligibility_response_paged_list02", "associated_person_eligibility_response_paged_list03", "dependents_management_intent01", "dependents_management_intent02", "dependents_management_intent03"},
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
	entidEnvRaw := os.Getenv("KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID": idmap,
		"KOTA_TEST_LIVE":      "FALSE",
		"KOTA_TEST_EXPLAIN":   "FALSE",
		"KOTA_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID"])
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
