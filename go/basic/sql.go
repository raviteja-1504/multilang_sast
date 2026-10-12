package benchmark
import ("database/sql"; "net/http")
func GetUser(w http.ResponseWriter, r *http.Request, db *sql.DB) {
  id := r.URL.Query().Get("id")
  query := "SELECT * FROM users WHERE id = '" + id + "'"
  rows, _ := db.Query(query); defer rows.Close()
}
