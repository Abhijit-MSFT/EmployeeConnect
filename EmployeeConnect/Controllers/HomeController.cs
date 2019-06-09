using EmployeeConnect.Helper;
using EmployeeConnect.Models;
using System.Collections.Generic;
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

        [Route("Task")]
        public ActionResult Task()
        {
            PO taskList = new PO();
            taskList = GetDataHelper.GetPOs();
            return View(taskList);
        }
        [Route("Tools")]
        public ActionResult Tools()
        {
          return View();
        }
        [Route("createticket")]
        public ActionResult CreateTicket()
        {
            return View();
        }

        [Route("ticketcomplete")]
        public ActionResult TicketComplete()
        {
            return View();
        }

        [Route("news")]
        public ActionResult News()
        {
            NewsModel newsListData = new NewsModel();
            newsListData = GetDataHelper.GetNews();
            return View(newsListData);
        }

        [Route("purchaseorder")]
        public ActionResult PurchaseOrder()
        {
            PO poList = new PO();
            poList = GetDataHelper.GetPOs();
            return View(poList.PurchaseOrder);
        }

        [Route("EventandTrainingTab")]
        public ActionResult EventandTrainingTab()
        {
            EandTModel eventsListData = new EandTModel();
            eventsListData = GetDataHelper.GetEandT();
            return View(eventsListData);
        }

    }
}
