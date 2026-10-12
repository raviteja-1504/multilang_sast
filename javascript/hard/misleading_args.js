// Negative: input changes timeout only, not command text.
const { exec } = require("node:child_process");
function listFiles(req) { return exec("ls", { timeout: Number(req.query.timeout) }); }
// Negative: input changes header only, not URL.
async function fixedTarget(req, fetch) {
  return fetch("https://example.invalid/api", { headers: { "x-user": req.query.header } });
}
