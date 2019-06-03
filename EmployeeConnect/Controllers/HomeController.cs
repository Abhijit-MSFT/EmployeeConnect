using EmployeeConnect.Helper;
using EmployeeConnect.Models;
using System.Web.Mvc;

namespace EmployeeConnect.Controllers
{
    public class EmployeeConnectController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("hello")]
        public ActionResult Hello()
        {
            return View("Index");
        }

        [Route("first")]
        public ActionResult First()
        {
            return View();
        }

        [Route("second")]
        public ActionResult Second()
        {
            return View();
        }

        [Route("configure")]
        public ActionResult Configure()
        {
            return View();
        }

        [Route("Tasks")]
        public ActionResult Tasks()
        {
            PO taskList = new PO();
            taskList = GetDataHelper.GetPOs();
            return View(taskList);
        }

    }
}
