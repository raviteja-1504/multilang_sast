package benchmark
import ("net/http"; "os/exec")
func RunTool(w http.ResponseWriter, r *http.Request) {
  tool := r.URL.Query().Get("tool")
  command := "reporter --input " + tool
  _ = exec.Command("sh", "-c", command)
}
