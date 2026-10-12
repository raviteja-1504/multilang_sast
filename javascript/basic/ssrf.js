// JS-03 SSRF: only URL argument is tainted
async function proxy(req, fetch) {
  const target = req.query.url;
  return fetch(target, { headers: { "x-trace": "fixed" } });
}
