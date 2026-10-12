# TrustLedger Multi-Language SAST Benchmark

Intentional, non-production static-analysis fixtures for parser, taint, source/sink, cross-file, sanitizer, and false-positive testing.

Languages: JavaScript, TypeScript, Java, Python, C#, PHP, Go, Rust, Ruby. The request said 9 languages and listed eight groups; JS and TS are separate targets, giving nine language targets.

**Safety:** Do not deploy these examples or expose them to a network. They use toy inputs and placeholder/local dependencies.

Scan the repository as a whole. Compare results to EXPECTED_FINDINGS.md. Review both positives and negatives. Record detection, source/sink lines, cross-file trace, sink-argument precision, sanitizer handling, duplicate count, and scan health.
