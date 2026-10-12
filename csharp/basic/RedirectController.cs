using Microsoft.AspNetCore.Mvc;
public class RedirectController : Controller {
  public IActionResult Continue(string next) { return Redirect(next); }
}
