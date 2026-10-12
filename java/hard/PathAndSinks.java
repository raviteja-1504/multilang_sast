import javax.servlet.http.HttpServletRequest;
import java.nio.file.*;
class PathAndSinks {
  String read(HttpServletRequest request) throws Exception {
    String name = request.getParameter("file");
    Path path = Paths.get("/srv/reports", name);
    return Files.readString(path);
  }
}
