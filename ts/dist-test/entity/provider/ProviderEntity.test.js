"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ProviderEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.Provider();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'provider.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "description", "req": true, "short": "Description of the provider.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "employer_platform_url", "req": false, "short": "URL to the employer portal/platform for this provider, if available.", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 1 }, { "active": true, "name": "id", "req": true, "short": "Unique identifier for the provider.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "kota_hub_url", "req": false, "short": "URL to the Kota Hub page for this platform, if configured.", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 3 }, { "active": true, "name": "logo_url", "req": true, "short": "URL to the provider's logo image.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "name", "req": true, "short": "The name of the provider.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "object", "readOnly": true, "req": false, "short": "Object type.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "support_phone", "req": true, "short": "Customer support phone number.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "supported_countries", "req": true, "short": "List of countries supported by this provider.", "type": "`$ARRAY`", "index$": 8 }, { "active": true, "name": "website_url", "req": true, "short": "The provider's main website URL.", "type": "`$STRING`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "provider", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_platform_id", "orig": "x_platform_id", "reqd": false, "type": "`$STRING`" }], "query": [{ "active": true, "kind": "query", "name": "country", "orig": "country", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "page_size", "orig": "page_size", "reqd": false, "type": "`$INTEGER`", "index$": 2 }] }, "contract": { "id": "GET /providers", "json": "{\"operationId\":\"ListProviders\",\"parameters\":[{\"description\":\"Filter by country; only providers that support this country are returned.\",\"in\":\"query\",\"name\":\"country\",\"schema\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"value\":{\"allOf\":[{\"enum\":[\"af\",\"ax\",\"al\",\"dz\",\"as\",\"ad\",\"ao\",\"ai\",\"aq\",\"ag\",\"ar\",\"am\",\"aw\",\"au\",\"at\",\"az\",\"bs\",\"bh\",\"bd\",\"bb\",\"by\",\"be\",\"bz\",\"bj\",\"bm\",\"bt\",\"bo\",\"bq\",\"ba\",\"bw\",\"bv\",\"br\",\"io\",\"bn\",\"bg\",\"bf\",\"bi\",\"cv\",\"kh\",\"cm\",\"ca\",\"ky\",\"cf\",\"td\",\"cl\",\"cn\",\"cx\",\"cc\",\"co\",\"km\",\"cg\",\"cd\",\"ck\",\"cr\",\"ci\",\"hr\",\"cu\",\"cw\",\"cy\",\"cz\",\"dk\",\"dj\",\"dm\",\"do\",\"ec\",\"eg\",\"sv\",\"gq\",\"er\",\"ee\",\"sz\",\"et\",\"fk\",\"fo\",\"fj\",\"fi\",\"fr\",\"gf\",\"pf\",\"tf\",\"ga\",\"gm\",\"ge\",\"de\",\"gh\",\"gi\",\"gr\",\"gl\",\"gd\",\"gp\",\"gu\",\"gt\",\"gg\",\"gn\",\"gw\",\"gy\",\"ht\",\"hm\",\"va\",\"hn\",\"hk\",\"hu\",\"is\",\"in\",\"id\",\"ir\",\"iq\",\"ie\",\"im\",\"il\",\"it\",\"jm\",\"jp\",\"je\",\"jo\",\"kz\",\"ke\",\"ki\",\"kp\",\"kr\",\"xk\",\"kw\",\"kg\",\"la\",\"lv\",\"lb\",\"ls\",\"lr\",\"ly\",\"li\",\"lt\",\"lu\",\"mo\",\"mg\",\"mw\",\"my\",\"mv\",\"ml\",\"mt\",\"mh\",\"mq\",\"mr\",\"mu\",\"yt\",\"mx\",\"fm\",\"md\",\"mc\",\"mn\",\"me\",\"ms\",\"ma\",\"mz\",\"mm\",\"na\",\"nr\",\"np\",\"nl\",\"nc\",\"nz\",\"ni\",\"ne\",\"ng\",\"nu\",\"nf\",\"mk\",\"mp\",\"no\",\"om\",\"pk\",\"pw\",\"ps\",\"pa\",\"pg\",\"py\",\"pe\",\"ph\",\"pn\",\"pl\",\"pt\",\"pr\",\"qa\",\"re\",\"ro\",\"ru\",\"rw\",\"bl\",\"sh\",\"kn\",\"lc\",\"mf\",\"pm\",\"vc\",\"ws\",\"sm\",\"st\",\"sa\",\"sn\",\"rs\",\"sc\",\"sl\",\"sg\",\"sx\",\"sk\",\"si\",\"sb\",\"so\",\"za\",\"gs\",\"ss\",\"es\",\"lk\",\"sd\",\"sr\",\"sj\",\"se\",\"ch\",\"sy\",\"tw\",\"tj\",\"tz\",\"th\",\"tl\",\"tg\",\"tk\",\"to\",\"tt\",\"tn\",\"tr\",\"tm\",\"tc\",\"tv\",\"ug\",\"ua\",\"ae\",\"gb\",\"um\",\"us\",\"uy\",\"uz\",\"vu\",\"ve\",\"vn\",\"vg\",\"vi\",\"wf\",\"eh\",\"ye\",\"zm\",\"zw\"],\"type\":\"string\"}]}},\"type\":\"object\"}],\"description\":\"Filter by country; only providers that support this country are returned.\"}},{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"in\":\"query\",\"name\":\"page_size\",\"schema\":{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"has_next_page\":{\"description\":\"Whether there are more pages available after this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"has_previous_page\":{\"description\":\"Whether there are more pages available before this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"items\":{\"description\":\"A paginated array containing the response elements\",\"items\":{\"additionalProperties\":false,\"properties\":{\"description\":{\"description\":\"Description of the provider.\",\"type\":\"string\"},\"employer_platform_url\":{\"description\":\"URL to the employer portal/platform for this provider, if available.\",\"type\":[\"null\",\"string\"]},\"id\":{\"description\":\"Unique identifier for the provider. Prefixed with `pr_`.\",\"example\":\"pr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pr_.+\",\"type\":\"string\"},\"kota_hub_url\":{\"description\":\"URL to the Kota Hub page for this platform, if configured.\",\"type\":[\"null\",\"string\"]},\"logo_url\":{\"description\":\"URL to the provider's logo image.\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the provider.\",\"type\":\"string\"},\"object\":{\"description\":\"Object type. Always `provider`.\",\"readOnly\":true,\"type\":\"string\"},\"support_phone\":{\"description\":\"Customer support phone number.\",\"type\":\"string\"},\"supported_countries\":{\"description\":\"List of countries supported by this provider.\",\"items\":{\"enum\":[\"af\",\"ax\",\"al\",\"dz\",\"as\",\"ad\",\"ao\",\"ai\",\"aq\",\"ag\",\"ar\",\"am\",\"aw\",\"au\",\"at\",\"az\",\"bs\",\"bh\",\"bd\",\"bb\",\"by\",\"be\",\"bz\",\"bj\",\"bm\",\"bt\",\"bo\",\"bq\",\"ba\",\"bw\",\"bv\",\"br\",\"io\",\"bn\",\"bg\",\"bf\",\"bi\",\"cv\",\"kh\",\"cm\",\"ca\",\"ky\",\"cf\",\"td\",\"cl\",\"cn\",\"cx\",\"cc\",\"co\",\"km\",\"cg\",\"cd\",\"ck\",\"cr\",\"ci\",\"hr\",\"cu\",\"cw\",\"cy\",\"cz\",\"dk\",\"dj\",\"dm\",\"do\",\"ec\",\"eg\",\"sv\",\"gq\",\"er\",\"ee\",\"sz\",\"et\",\"fk\",\"fo\",\"fj\",\"fi\",\"fr\",\"gf\",\"pf\",\"tf\",\"ga\",\"gm\",\"ge\",\"de\",\"gh\",\"gi\",\"gr\",\"gl\",\"gd\",\"gp\",\"gu\",\"gt\",\"gg\",\"gn\",\"gw\",\"gy\",\"ht\",\"hm\",\"va\",\"hn\",\"hk\",\"hu\",\"is\",\"in\",\"id\",\"ir\",\"iq\",\"ie\",\"im\",\"il\",\"it\",\"jm\",\"jp\",\"je\",\"jo\",\"kz\",\"ke\",\"ki\",\"kp\",\"kr\",\"xk\",\"kw\",\"kg\",\"la\",\"lv\",\"lb\",\"ls\",\"lr\",\"ly\",\"li\",\"lt\",\"lu\",\"mo\",\"mg\",\"mw\",\"my\",\"mv\",\"ml\",\"mt\",\"mh\",\"mq\",\"mr\",\"mu\",\"yt\",\"mx\",\"fm\",\"md\",\"mc\",\"mn\",\"me\",\"ms\",\"ma\",\"mz\",\"mm\",\"na\",\"nr\",\"np\",\"nl\",\"nc\",\"nz\",\"ni\",\"ne\",\"ng\",\"nu\",\"nf\",\"mk\",\"mp\",\"no\",\"om\",\"pk\",\"pw\",\"ps\",\"pa\",\"pg\",\"py\",\"pe\",\"ph\",\"pn\",\"pl\",\"pt\",\"pr\",\"qa\",\"re\",\"ro\",\"ru\",\"rw\",\"bl\",\"sh\",\"kn\",\"lc\",\"mf\",\"pm\",\"vc\",\"ws\",\"sm\",\"st\",\"sa\",\"sn\",\"rs\",\"sc\",\"sl\",\"sg\",\"sx\",\"sk\",\"si\",\"sb\",\"so\",\"za\",\"gs\",\"ss\",\"es\",\"lk\",\"sd\",\"sr\",\"sj\",\"se\",\"ch\",\"sy\",\"tw\",\"tj\",\"tz\",\"th\",\"tl\",\"tg\",\"tk\",\"to\",\"tt\",\"tn\",\"tr\",\"tm\",\"tc\",\"tv\",\"ug\",\"ua\",\"ae\",\"gb\",\"um\",\"us\",\"uy\",\"uz\",\"vu\",\"ve\",\"vn\",\"vg\",\"vi\",\"wf\",\"eh\",\"ye\",\"zm\",\"zw\"],\"type\":\"string\"},\"type\":\"array\"},\"website_url\":{\"description\":\"The provider's main website URL.\",\"type\":\"string\"}},\"required\":[\"description\",\"id\",\"logo_url\",\"name\",\"support_phone\",\"supported_countries\",\"website_url\"],\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"description\":\"The current page of the results\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"page_size\":{\"description\":\"The number of results on this page. This can be different from the requested page size if the total number of results is less than the requested page size\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"total_count\":{\"description\":\"The total number of elements available in the response. This is the total number of elements available across all pages, not just the current page.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"items\",\"page\",\"page_size\",\"total_count\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"errors\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":\"object\"},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Bad Request\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/providers", "segments": [{ "lit": "providers" }], "select": { "exist": ["country", "page", "page_size", "x_platform_id"] }, "transform": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_platform_id", "orig": "x_platform_id", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a", "kind": "param", "name": "id", "orig": "provider_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /providers/{provider_id}", "json": "{\"operationId\":\"RetrieveProvider\",\"parameters\":[{\"in\":\"path\",\"name\":\"provider_id\",\"required\":true,\"schema\":{\"example\":\"pr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pr_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"description\":{\"description\":\"Description of the provider.\",\"type\":\"string\"},\"employer_platform_url\":{\"description\":\"URL to the employer portal/platform for this provider, if available.\",\"type\":[\"null\",\"string\"]},\"id\":{\"description\":\"Unique identifier for the provider. Prefixed with `pr_`.\",\"example\":\"pr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pr_.+\",\"type\":\"string\"},\"kota_hub_url\":{\"description\":\"URL to the Kota Hub page for this platform, if configured.\",\"type\":[\"null\",\"string\"]},\"logo_url\":{\"description\":\"URL to the provider's logo image.\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the provider.\",\"type\":\"string\"},\"object\":{\"description\":\"Object type. Always `provider`.\",\"readOnly\":true,\"type\":\"string\"},\"support_phone\":{\"description\":\"Customer support phone number.\",\"type\":\"string\"},\"supported_countries\":{\"description\":\"List of countries supported by this provider.\",\"items\":{\"enum\":[\"af\",\"ax\",\"al\",\"dz\",\"as\",\"ad\",\"ao\",\"ai\",\"aq\",\"ag\",\"ar\",\"am\",\"aw\",\"au\",\"at\",\"az\",\"bs\",\"bh\",\"bd\",\"bb\",\"by\",\"be\",\"bz\",\"bj\",\"bm\",\"bt\",\"bo\",\"bq\",\"ba\",\"bw\",\"bv\",\"br\",\"io\",\"bn\",\"bg\",\"bf\",\"bi\",\"cv\",\"kh\",\"cm\",\"ca\",\"ky\",\"cf\",\"td\",\"cl\",\"cn\",\"cx\",\"cc\",\"co\",\"km\",\"cg\",\"cd\",\"ck\",\"cr\",\"ci\",\"hr\",\"cu\",\"cw\",\"cy\",\"cz\",\"dk\",\"dj\",\"dm\",\"do\",\"ec\",\"eg\",\"sv\",\"gq\",\"er\",\"ee\",\"sz\",\"et\",\"fk\",\"fo\",\"fj\",\"fi\",\"fr\",\"gf\",\"pf\",\"tf\",\"ga\",\"gm\",\"ge\",\"de\",\"gh\",\"gi\",\"gr\",\"gl\",\"gd\",\"gp\",\"gu\",\"gt\",\"gg\",\"gn\",\"gw\",\"gy\",\"ht\",\"hm\",\"va\",\"hn\",\"hk\",\"hu\",\"is\",\"in\",\"id\",\"ir\",\"iq\",\"ie\",\"im\",\"il\",\"it\",\"jm\",\"jp\",\"je\",\"jo\",\"kz\",\"ke\",\"ki\",\"kp\",\"kr\",\"xk\",\"kw\",\"kg\",\"la\",\"lv\",\"lb\",\"ls\",\"lr\",\"ly\",\"li\",\"lt\",\"lu\",\"mo\",\"mg\",\"mw\",\"my\",\"mv\",\"ml\",\"mt\",\"mh\",\"mq\",\"mr\",\"mu\",\"yt\",\"mx\",\"fm\",\"md\",\"mc\",\"mn\",\"me\",\"ms\",\"ma\",\"mz\",\"mm\",\"na\",\"nr\",\"np\",\"nl\",\"nc\",\"nz\",\"ni\",\"ne\",\"ng\",\"nu\",\"nf\",\"mk\",\"mp\",\"no\",\"om\",\"pk\",\"pw\",\"ps\",\"pa\",\"pg\",\"py\",\"pe\",\"ph\",\"pn\",\"pl\",\"pt\",\"pr\",\"qa\",\"re\",\"ro\",\"ru\",\"rw\",\"bl\",\"sh\",\"kn\",\"lc\",\"mf\",\"pm\",\"vc\",\"ws\",\"sm\",\"st\",\"sa\",\"sn\",\"rs\",\"sc\",\"sl\",\"sg\",\"sx\",\"sk\",\"si\",\"sb\",\"so\",\"za\",\"gs\",\"ss\",\"es\",\"lk\",\"sd\",\"sr\",\"sj\",\"se\",\"ch\",\"sy\",\"tw\",\"tj\",\"tz\",\"th\",\"tl\",\"tg\",\"tk\",\"to\",\"tt\",\"tn\",\"tr\",\"tm\",\"tc\",\"tv\",\"ug\",\"ua\",\"ae\",\"gb\",\"um\",\"us\",\"uy\",\"uz\",\"vu\",\"ve\",\"vn\",\"vg\",\"vi\",\"wf\",\"eh\",\"ye\",\"zm\",\"zw\"],\"type\":\"string\"},\"type\":\"array\"},\"website_url\":{\"description\":\"The provider's main website URL.\",\"type\":\"string\"}},\"required\":[\"description\",\"id\",\"logo_url\",\"name\",\"support_phone\",\"supported_countries\",\"website_url\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/providers/{provider_id}", "rename": { "param": { "provider_id": "id" } }, "segments": [{ "lit": "providers" }, { "var": "id" }], "select": { "exist": ["id", "x_platform_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "provider", "name__orig": "provider", "Name": "Provider", "name_": "provider", "name-": "provider", "NAME": "PROVIDER", "index$": 36 }, { "active": true, "entity": "provider", "key$": "BasicProviderFlow", "kind": "basic", "name": "BasicProviderFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "provider_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "provider_ref01", "srcdatavar": "provider_ref01_data", "suffix": "_dt0" }, "match": { "id": "provider01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-provider_ref01" } }], "index$": 1 }] }, 'Provider');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let provider_ref01_data = Object.values(setup.data.existing.provider)[0];
        // LIST
        const provider_ref01_ent = client.Provider();
        const provider_ref01_match = {};
        const provider_ref01_list = (await provider_ref01_ent.list(provider_ref01_match)).map((e) => e.data());
        // LOAD
        const provider_ref01_match_dt0 = {};
        provider_ref01_match_dt0.id = provider_ref01_data.id;
        const provider_ref01_data_dt0 = (await provider_ref01_ent.load(provider_ref01_match_dt0)).data();
        (0, node_assert_1.default)(provider_ref01_data_dt0.id === provider_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/provider/ProviderTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KotaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['provider01', 'provider02', 'provider03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOTA_TEST_PROVIDER_ENTID': idmap,
        'KOTA_TEST_LIVE': 'FALSE',
        'KOTA_TEST_EXPLAIN': 'FALSE',
        'KOTA_APIKEY': '',
    });
    idmap = env['KOTA_TEST_PROVIDER_ENTID'];
    const live = 'TRUE' === env.KOTA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOTA_TEST_PROVIDER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.KotaSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.KOTA_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.KOTA_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ProviderEntity.test.js.map