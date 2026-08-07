# kota-mcp

[MCP](https://modelcontextprotocol.io) server exposing the Kota SDK as
two agent tools — `kota_list` and `kota_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/kota-mcp)
make build

# 2. Provide credentials via the environment
export KOTA_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user kota \
  -- /absolute/path/to/kota-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./kota-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// kota_list: first page of records
{ "entity": "associated_person" }
{ "entity": "associated_person", "query": { } }

// kota_load: one record by id
{ "entity": "associated_person", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/kota-mcp
   ```

2. **Set your API key:**

   ```sh
   export KOTA_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user kota \
     -- "$PWD"/dist/*/kota-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `kota_list` and `kota_load` tools now appear
   in new sessions. Ask the agent to *"list associated_person using kota"*
   and it calls `kota_list` with `{"entity":"associated_person"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export KOTA_APIKEY=sk_live_xxx            # API key
export KOTA_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./kota-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `kota_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "associated_person" }
```

### Call the `kota_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "associated_person", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `kota_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `kota_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 40 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `KOTA_APIKEY` | API key sent with every request. |
| `KOTA_BASE` | Optional override of the API base URL. |

### Entities

The 40 entities valid as the `entity` argument:

associated_person | associated_person_eligibility_response_paged_list | contribution_report | contribution_report_employee_breakdown | contribution_report_employee_breakdown_response_paged_list | create_hosted_session_token | create_session_token | dependent | dependents_management_intent | eligibility_check | employee | employee_health_insurance_offer | employee_health_insurance_offer_response_paged_list | employee_health_insurance_policy | employee_health_insurance_policy_response_paged_list | employer | employer_health_insurance_policy | employer_health_insurance_policy_response_paged_list | employer_health_insurance_quote | employer_health_insurance_quote_response_paged_list | enrolment_intent | enrolment_intent_requirement_response_paged_list | event | group | group_employee | group_employee_response_paged_list | group_policy | group_policy_intent | group_policy_intent_requirement_response_paged_list | group_quote | group_quote_intent | group_quote_intent_requirement_response_paged_list | plan | policy | policy_amendment_intent | policy_import_intent | provider | replay | webhook_endpoint | webhook_endpoint_response_paged_list

### Smoke test via HTTP (raw JSON-RPC)

```sh
./kota-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"kota_load","arguments":{"entity":"associated_person","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
