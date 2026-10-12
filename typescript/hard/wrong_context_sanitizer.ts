declare function escapeHtml(value: string): string;
export function lookup(req: any, db: any) {
  const escaped = escapeHtml(req.query.id);
  const sql = "SELECT * FROM users WHERE id = '" + escaped + "'";
  return db.query(sql);
}
