import java.sql.*;
class HardNegatives {
  void safe(Connection c, String id) throws Exception {
    PreparedStatement ps = c.prepareStatement("SELECT * FROM users WHERE id = ?");
    ps.setString(1, id); ps.executeQuery();
  }
}
