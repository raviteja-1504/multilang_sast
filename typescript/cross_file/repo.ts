export function byId(db: any, orderId: string) {
  const sql = "SELECT * FROM orders WHERE id = " + orderId;
  return db.query(sql);
}
