using EmployeeConnect.Helper;
using EmployeeConnect.Models;
using System;
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

        [Route("visitorregistration")]
        public ActionResult VisitorRegistration()
        {
            return View();
        }

        [Route("sendrequest")]
        public ActionResult SendRequest()
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
        [HttpGet]
        public ActionResult PurchaseOrder(string poNumber)
        {


            PO poList = new PO();
            poList = GetDataHelper.GetPOs();
            var podetaillist = poList.PurchaseOrder[0].PoDetails;
            for (int item = 0; item < poList.PurchaseOrder.Length; item++)
            {
                if (poList.PurchaseOrder[item].PoNumber == poNumber)
                {
                    podetaillist = poList.PurchaseOrder[item].PoDetails;
                    break;
                }
            }
            poList.PoDetails = podetaillist;
            int poTotal = 0;
            for (int poCount = 0; poCount < poList.PoDetails.Length; poCount++)
            {
                poList.PoDetails[poCount].Total = (Convert.ToInt32(poList.PoDetails[poCount].UnitPrice) * Convert.ToInt32(poList.PoDetails[poCount].Quantity)).ToString();
                poTotal += Convert.ToInt32(poList.PoDetails[poCount].Total);
            }
            string TotalPOSum = poTotal.ToString();
            
            return View(poList);
        }
        [Route("podecline")]
        public ActionResult PODecline()
        {
            return View();
        }

        [Route("declined")]
        public ActionResult Declined()
        {
            return View();
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
