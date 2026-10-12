using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
public class SqlController : Controller {
  public object Get(string id) {
    var sql = "SELECT * FROM Users WHERE Id = '" + id + "'";
    using var conn = new SqlConnection("Server=localhost;Database=demo;");
    using var cmd = new SqlCommand(sql, conn); conn.Open(); return cmd.ExecuteReader();
  }
}
