import javax.servlet.http.HttpServletRequest;
class CommandController {
  Process run(HttpServletRequest request) throws Exception {
    String tool = request.getParameter("tool");
    String command = "convert " + tool;
    return Runtime.getRuntime().exec(command);
  }
}
