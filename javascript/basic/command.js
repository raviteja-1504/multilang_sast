// JS-02 Command injection: options are not the command argument
const { exec } = require("node:child_process");
function runReport(req) {
  const command = "report-tool --name " + req.body.command;
  return exec(command, { timeout: 1000 });
}
