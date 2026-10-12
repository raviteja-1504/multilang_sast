# Hard-case checklist
- Direct source-to-sink, aliasing, reassignment, and 3–8 call hops.
- Cross-file import/call propagation.
- Exact sink argument precision: tainted timeout/header/options should not become SSRF/command injection when URL/command is constant.
- Wrong-context sanitizer: HTML escaping does not sanitize SQL.
- Safe parameterized SQL, safe argv, redirect allowlists.
- Duplicates folded; evidence includes source, hops, sink argument, and sanitizer context.
