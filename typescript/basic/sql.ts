type DB = { query: (sql: string) => unknown };
function executeReport(db: DB, sql: string) { return db.query(sql); }
export function report(req: { query: { name: string } }, db: DB) {
  const name = req.query.name;
  const sql = `SELECT * FROM reports WHERE name = '${name}'`;
  return executeReport(db, sql);
}
