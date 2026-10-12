export function lookup(req: any, db: any) {
  let first = req.query.customer;
  const second = first;
  let third = "customer=" + second;
  third = third + "&active=true";
  const finalQuery = "SELECT * FROM customers WHERE " + third;
  return db.query(finalQuery);
}
