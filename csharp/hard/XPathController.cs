using System.Xml;
using Microsoft.AspNetCore.Mvc;
public class XPathController : Controller {
  public XmlNode Find(string name, XmlDocument document) {
    var xpath = "//user[name/text()='" + name + "']";
    return document.SelectSingleNode(xpath);
  }
}
