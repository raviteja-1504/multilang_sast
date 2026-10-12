import { byId } from "./repo";
export function findOrder(db: any, id: string) { const orderId = id; return byId(db, orderId); }
