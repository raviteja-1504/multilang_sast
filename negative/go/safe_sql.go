package benchmark
import ("database/sql"; "net/http")
func Safe(w http.ResponseWriter, r *http.Request, db *sql.DB) {
  id := r.URL.Query().Get("id")
  _, _ = db.Query("SELECT * FROM users WHERE id = ?", id)
}
