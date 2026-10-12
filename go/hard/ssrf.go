package benchmark
import "net/http"
func Fetch(w http.ResponseWriter, r *http.Request) {
  target := r.URL.Query().Get("url")
  req, _ := http.NewRequest("GET", target, nil)
  client := &http.Client{}; _, _ = client.Do(req)
}
