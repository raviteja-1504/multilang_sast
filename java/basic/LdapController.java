import javax.servlet.http.HttpServletRequest;
class LdapController {
  Object search(HttpServletRequest request, Directory directory) {
    String user = request.getParameter("user");
    String filter = "(&(objectClass=person)(uid=" + user + "))";
    return directory.search("ou=people", 2, filter);
  }
}
interface Directory { Object search(String base, int scope, String filter); }
