import { findOrder } from "./service";
export function getOrder(req: { query: { id: string } }, db: any) {
  return findOrder(db, req.query.id);
}
