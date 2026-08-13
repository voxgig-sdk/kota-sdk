# kota-cli

boru-driven command-line client **and** interactive REPL for the Kota
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/kota-cli)
make build

# 2. See usage (words, entities, env vars)
./kota-cli --help

# 3. Provide credentials once, via the environment
export KOTA_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./kota-cli list associated_person
./kota-cli load 1 associated_person            # {id:1} shorthand
./kota-cli load '{id:1}' associated_person       # explicit match map
./kota-cli update '{name:"x"}' associated_person
./kota-cli list associated_person_eligibility_response_paged_list

# 5. Override the API base URL for a single call
KOTA_BASE=https://api.example.com ./kota-cli list associated_person

# 6. No arguments -> interactive REPL
./kota-cli
kota> list associated_person
kota> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/kota-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export KOTA_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/kota-cli list associated_person
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./kota-cli list associated_person
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Load a single record

```sh
./kota-cli load 1 associated_person          # scalar shorthand for {id:1}
./kota-cli load '{id:1}' associated_person     # explicit match map
```

The query is either a **scalar** (`1`, treated as `{id:1}`) or a **match map**
(`{id:1}`, `{slug:"acme"}`). Quote the map so your shell passes it through intact.

### Update a record

```sh
./kota-cli update '{id:1,name:"new"}' associated_person
```

The match map carries both the selector and the new field values; the updated
record is printed back.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export KOTA_APIKEY=sk_live_xxx            # API key
export KOTA_BASE=https://api.example.com  # optional: override the API base URL
./kota-cli list associated_person
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `kota>`). Each line is
evaluated as its own boru expression:

```text
$ ./kota-cli
kota> list associated_person
kota> /help
kota> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 40 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `associated_person`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `KOTA_APIKEY` | API key sent with every request. |
| `KOTA_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/kota-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 40 entities this SDK exposes (any is valid as `<entity>`):

associated_person associated_person_eligibility_response_paged_list contribution_report contribution_report_employee_breakdown contribution_report_employee_breakdown_response_paged_list create_hosted_session_token create_session_token dependent dependents_management_intent eligibility_check employee employee_health_insurance_offer employee_health_insurance_offer_response_paged_list employee_health_insurance_policy employee_health_insurance_policy_response_paged_list employer employer_health_insurance_policy employer_health_insurance_policy_response_paged_list employer_health_insurance_quote employer_health_insurance_quote_response_paged_list enrolment_intent enrolment_intent_requirement_response_paged_list event group group_employee group_employee_response_paged_list group_policy group_policy_intent group_policy_intent_requirement_response_paged_list group_quote group_quote_intent group_quote_intent_requirement_response_paged_list plan policy policy_amendment_intent policy_import_intent provider replay webhook_endpoint webhook_endpoint_response_paged_list

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./kota-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
