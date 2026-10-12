const { spawn } = require("node:child_process");
function safe(req) { return spawn("/usr/bin/report-tool", ["--name", req.body.name], { shell: false }); }
