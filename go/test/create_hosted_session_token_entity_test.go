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

func TestCreateHostedSessionTokenEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CreateHostedSessionToken(nil)
		if ent == nil {
			t.Fatal("expected non-nil CreateHostedSessionTokenEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := create_hosted_session_tokenBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "create_hosted_session_token." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set KOTA_TEST_CREATE_HOSTED_SESSION_TOKEN_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		createHostedSessionTokenRef01Ent := client.CreateHostedSessionToken(nil)
		createHostedSessionTokenRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "create_hosted_session_token"}, setup.data), "create_hosted_session_token_ref01"))

		createHostedSessionTokenRef01DataResult, err := createHostedSessionTokenRef01Ent.Create(createHostedSessionTokenRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		createHostedSessionTokenRef01Data = core.ToMapAny(createHostedSessionTokenRef01DataResult)
		if createHostedSessionTokenRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func create_hosted_session_tokenBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "create_hosted_session_token", "CreateHostedSessionTokenTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read create_hosted_session_token test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse create_hosted_session_token test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"create_hosted_session_token01", "create_hosted_session_token02", "create_hosted_session_token03"},
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
	entidEnvRaw := os.Getenv("KOTA_TEST_CREATE_HOSTED_SESSION_TOKEN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"KOTA_TEST_CREATE_HOSTED_SESSION_TOKEN_ENTID": idmap,
		"KOTA_TEST_LIVE":      "FALSE",
		"KOTA_TEST_EXPLAIN":   "FALSE",
		"KOTA_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["KOTA_TEST_CREATE_HOSTED_SESSION_TOKEN_ENTID"])
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
