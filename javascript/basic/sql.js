// JS-01 SQL injection
function getOrder(req, db) {
  const id = req.query.id;
  const sql = "SELECT * FROM orders WHERE id = '" + id + "'";
  return db.query(sql);
}
