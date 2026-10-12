using Microsoft.AspNetCore.Mvc;
public class SafeRedirectController : Controller {
  public IActionResult Continue(string next) {
    if (Url.IsLocalUrl(next)) return Redirect(next);
    return RedirectToAction("Index");
  }
}
