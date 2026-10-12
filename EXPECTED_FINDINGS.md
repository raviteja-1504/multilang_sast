# Expected Findings

## Positive fixtures
- JS-01 `javascript/basic/sql.js`: query input -> concatenated SQL -> `db.query` query argument.
- JS-02 `javascript/basic/command.js`: request input -> command string -> `exec` command argument.
- JS-03 `javascript/basic/ssrf.js`: request URL -> `fetch` URL argument.
- JS-04 `javascript/basic/path.js`: request filename -> `readFile` path.
- JS-05 `javascript/basic/redirect.js`: request destination -> redirect URL.
- TS-01 `typescript/basic/sql.ts`: query input -> wrapper -> SQL sink.
- TS-02 `typescript/cross_file/{routes,service,repo}.ts`: route source -> service -> repository SQL sink across files.
- TS-03 `typescript/hard/alias_flow.ts`: aliases/reassignment -> SQL sink.
- TS-04 `typescript/hard/wrong_context_sanitizer.ts`: HTML escape does not neutralize SQL.
- JAVA-01 `java/basic/SqlController.java`: request parameter -> SQL -> `executeQuery`.
- JAVA-02 `java/basic/CommandController.java`: request parameter -> `Runtime.exec`.
- JAVA-03 `java/basic/LdapController.java`: input -> LDAP filter argument (not base/scope).
- JAVA-04 `java/hard/PathAndSinks.java`: input -> `Files.readString` path.
- PY-01..06: `python/basic/sql.py`, `command.py`, `ssrf.py`, `path.py`; `python/hard/template.py`, `unsafe_yaml.py`.
- CS-01..03: `csharp/basic/SqlController.cs`, `RedirectController.cs`; `csharp/hard/XPathController.cs`.
- PHP-01..03: `php/basic/sql.php`, `command.php`; `php/hard/ldap.php`.
- GO-01..03: `go/basic/sql.go`, `command.go`; `go/hard/ssrf.go`.
- RUST-01..03: `rust/basic/sql.rs`, `command.rs`; `rust/hard/ssrf.rs`.
- RUBY-01..03: `ruby/basic/sql.rb`, `command.rb`; `ruby/hard/ssti.rb`.

## Expected negatives
- `javascript/hard/misleading_args.js`: tainted timeout/header values must not become command injection or SSRF when command/URL is constant.
- `negative/javascript/safe_sql.js`: parameterized SQL.
- `negative/javascript/safe_command.js`: fixed executable + separate argv.
- `java/hard/HardNegatives.java`: prepared statement.
- `negative/python/safe_sql.py`: query parameter is bound separately.
- `negative/python/safe_path.py`: canonicalized path with containment check.
- `negative/csharp/SafeRedirect.cs`: local URL validation.
- `negative/php/safe_sql.php`: prepared statement.
- `negative/go/safe_sql.go`: parameterized query.
- `negative/rust/safe_command.rs`: fixed executable and separate arguments.
- `negative/ruby/safe_redirect.rb`: redirect allowlist.

A finding should include source, propagation path, exact sink argument, and sanitizer evidence when relevant. Severity depends on application context. This is a useful starter suite, not exhaustive coverage of every vulnerability or framework.
