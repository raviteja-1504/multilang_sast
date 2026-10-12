// JS-04 Path traversal
const fs = require("node:fs/promises");
async function download(req) {
  const file = "/srv/uploads/" + req.params.file;
  return fs.readFile(file, "utf8");
}
