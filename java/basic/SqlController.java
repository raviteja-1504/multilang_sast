import javax.servlet.http.HttpServletRequest;
import java.sql.*;
class SqlController {
  String find(HttpServletRequest request, Connection connection) throws Exception {
    String id = request.getParameter("id");
    String sql = "SELECT * FROM users WHERE id = " + id;
    Statement stmt = connection.createStatement();
    ResultSet rs = stmt.executeQuery(sql);
    return rs.next() ? rs.getString(1) : null;
  }
}
