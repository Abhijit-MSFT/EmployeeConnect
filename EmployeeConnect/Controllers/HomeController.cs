using EmployeeConnect.Helper;
using EmployeeConnect.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Web.Mvc;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using System.Globalization;
using Microsoft.Ajax.Utilities;
using System.Web.Script.Serialization;
//using EO.Internal;

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
            PurchaseOrders[] filterList = new PurchaseOrders[taskList.PurchaseOrder.Length];
          
            filterList = taskList.PurchaseOrder.Where(e => e.PoStatus != "declined").ToArray();
            PurchaseOrders[] approvedList = new PurchaseOrders[filterList.Length];
            PurchaseOrders[] pendingList = new PurchaseOrders[filterList.Length];

            approvedList = filterList.Where(i => i.PoStatus == "approved").ToArray();
            pendingList =  filterList.Where(i => i.PoStatus == "pending").ToArray();

            taskList.ApprovedPO = approvedList;
            taskList.PendingPO = pendingList;
            taskList.PurchaseOrder = filterList;
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

        JObject globalTicketData = new JObject();
        [Route("createticketindb")]
        public string CreateTicketindb(string category, string description, string prioritySelected)
        {
            int ticketNumber = 000000324567;
            DateTime currentDate = DateTime.Now;
            CultureInfo invC = CultureInfo.InvariantCulture;
            currentDate.ToString("f", invC);
            JObject data = new JObject(
                new JProperty("Category", category),
                new JProperty("Description", description),
                new JProperty("Priority", prioritySelected),
                new JProperty("TicketNo", ticketNumber),
                new JProperty("Date", currentDate));
            globalTicketData = data;
            var objectData = data.ToString();
            JavaScriptSerializer js = new JavaScriptSerializer();
            var parsedData = js.Serialize(objectData);
            return parsedData;
        }


        [Route("ticketcomplete")]
        public ActionResult TicketComplete(int ticketNoId)
        {
            var currentTicketData = globalTicketData.ToString();
            JavaScriptSerializer js = new JavaScriptSerializer();
           // var parsedData = js.Serialize(currentTicketData);

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
            NewsModel news = new NewsModel();
            news = GetDataHelper.GetNews();
            return View(news);
        }

        [Route("getNewsInfo")]
        public JObject GetNewsInfo(string NewsId)
        {
            return JObject.FromObject(CardHelper.GetNewsCardbyId(NewsId));
        }


        [Route("preferences")]
        public ActionResult Preferences()
        {
            return View("Preferences");
        }

        [Route("policies")]
        public ActionResult Policies()
        {
            return View("Policies");
        }


        [Route("purchaseorder")]
        [HttpGet]
        public ActionResult PurchaseOrder(string poNumber)
        {

            TempData["data"] = poNumber;
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
        public ActionResult EventandTrainingTab(string id)
        {
            EandTModel eventsListData = new EandTModel();
            eventsListData = GetDataHelper.GetEandT();
            foreach(var item in eventsListData.EventsAndtraining)
            {
                if(item.ETID == id)
                {
                    
                    GetDataHelper.ETStatusUpdate(item.ETID);
                    //string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/EventsAndTraining_June.json";
                }
            }
            EventsAndTraining[] EventGrid = new EventsAndTraining[eventsListData.EventsAndtraining.Length];
            EventsAndTraining[] UpcomingEventGrid = new EventsAndTraining[eventsListData.EventsAndtraining.Length];
            EventsAndTraining[] TrainingGrid = new EventsAndTraining[eventsListData.EventsAndtraining.Length];
            EventsAndTraining[] UpcomingTrainingGrid = new EventsAndTraining[eventsListData.EventsAndtraining.Length];
            TrainingGrid = eventsListData.EventsAndtraining.Where(i => i.UserAdded == true).ToArray();
            UpcomingTrainingGrid = eventsListData.EventsAndtraining.Where(i => i.UserAdded == false).ToArray();
            EventGrid = eventsListData.EventsAndtraining.Where(i => i.UserAdded == true).ToArray();
            UpcomingEventGrid = eventsListData.EventsAndtraining.Where(i => i.UserAdded == false).
                                                                Where(i => i.UserAdded == false).ToArray();
            EventGrid = TrainingGrid;
            UpcomingEventGrid = UpcomingTrainingGrid;
            eventsListData.EventGrid = EventGrid;
            eventsListData.UpcomingEventGrid = UpcomingEventGrid;
            return View(eventsListData);
        }


        [Route("getEventInfo")]
        public JObject GetEventInfo(string eventId)
        {
            return JObject.FromObject(CardHelper.GetETbyID(eventId));
        }

    }
}
