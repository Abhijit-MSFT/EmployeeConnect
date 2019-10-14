using EmployeeConnect.Helper;
using EmployeeConnect.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Web.Mvc;
using System.Linq;
using System.Globalization;
using System.Web.Script.Serialization;
using System.Collections.Generic;
using System.Threading.Tasks;



namespace EmployeeConnect.Controllers
{
    public class EmployeeConnectController : Controller
    {
        public static int count = 1;

        [Route("")]
        public ActionResult Index()
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
            pendingList = filterList.Where(i => i.PoStatus == "pending").ToArray();

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

        [Route("ShowNews")]
        public async Task<ActionResult> ShowNews(string userName)
        {
            Preference uPref = GetDataHelper.UserPreference(userName);
            //Preference user = uPref..Where(c => c.UserName == userName).Select(d => d).FirstOrDefault();
            UserInfo userInfo = uPref.UserInfo.FirstOrDefault();

            var card = Helper.CardHelper.GetNewsCard(userName);
            await NotificationHelper.SendNotification(userInfo.UniqueID, userInfo.ServiceURl, userInfo.TenantID, card);

            return View();
        }

        [Route("ShowEnT")]
        public async Task<ActionResult> ShowEnT(string userName)
        {
            Preference uPref = GetDataHelper.UserPreference(userName);
            //Preference user = uPref.preferences.Where(c => c.UserName == userName).Select(d => d).FirstOrDefault();
            UserInfo userInfo = uPref.UserInfo.FirstOrDefault();

            var card = Helper.CardHelper.GetETCard();
            await NotificationHelper.SendNotification(userInfo.UniqueID, userInfo.ServiceURl, userInfo.TenantID, card);

            return View();
        }


        [Route("ShowTask")]
        public async Task<ActionResult> ShowTask(string userName)
        {
            Preference uPref = GetDataHelper.UserPreference(userName);
            //Preference user = uPref.preferences.Where(c => c.UserName == userName).Select(d => d).FirstOrDefault();
            UserInfo userInfo = uPref.UserInfo.FirstOrDefault();

            var card = Helper.CardHelper.PendingTasks();
            await NotificationHelper.SendNotification(userInfo.UniqueID, userInfo.ServiceURl, userInfo.TenantID, card);

            return View();
        }

        [Route("createticketindb")]
        public string CreateTicketindb(string category, string description, string prioritySelected)
        {
            Random no = new Random();
            int ticketNumber = no.Next();
            DateTime currentDate = DateTime.Now;
            CultureInfo invC = CultureInfo.InvariantCulture;
            currentDate.ToString("f", invC);
            JObject data = new JObject(
                new JProperty("Category", category),
                new JProperty("Description", description),
                new JProperty("Priority", prioritySelected),
                new JProperty("TicketNo", ticketNumber),
                new JProperty("Date", currentDate));
            var objectData = data.ToString();
            GetDataHelper.SaveTicketsInfo(data);
            JavaScriptSerializer js = new JavaScriptSerializer();
            var parsedData = js.Serialize(objectData);
            return parsedData;
        }

        [Route("sendRequestindb")]
        public string SendRequestIndb(string hostName, string hostLocation, string org, string contact, string purpose, string date, string time)
        {
            JObject data = new JObject(
               new JProperty("hostName", hostName),
               new JProperty("hostLocation", hostLocation),
               new JProperty("contactNo", contact),
               new JProperty("org", org),
               new JProperty("purpose", purpose),
               new JProperty("Date", date),
               new JProperty("Time", time));
            var objectData = data.ToString();
            GetDataHelper.SaveVisitorInfo(data);
            JavaScriptSerializer js = new JavaScriptSerializer();
            var parsedData = js.Serialize(objectData);
            return parsedData;
        }

        [Route("ticketcomplete")]
        public ActionResult TicketComplete(int ticketNoId, string description, string category, string priority)
        {
            List<string> ticketData = new List<string>();
            DateTime currentDate = DateTime.Now;
            CultureInfo invC = CultureInfo.InvariantCulture;
            currentDate.ToString("f", invC);
            ticketData.Add(description);
            ticketData.Add(category);
            ticketData.Add(priority);
            ticketData.Add(ticketNoId.ToString());
            ticketData.Add(currentDate.ToString());
            ViewBag.ticketList = ticketData;
            return View();
        }

        [Route("visitorregistration")]
        public ActionResult VisitorRegistration()
        {
            return View();
        }

        [Route("sendrequest")]
        public ActionResult SendRequest(string Date, string Time, string Contact, string location, string purpose, string hostName, string org)
        {
            List<string> visitorData = new List<string>();
            visitorData.Add(Date);
            visitorData.Add(Time);
            visitorData.Add(Contact);
            visitorData.Add(location);
            visitorData.Add(purpose);
            visitorData.Add(hostName);
            visitorData.Add(org);
            ViewBag.visitorList = visitorData;
            return View();
        }

        [Route("news")]
        public ActionResult News()
        {
            NewsModel news = new NewsModel();
            int day = DateTime.Now.Day;
            if (day == 15 || day == 30)
            {
                MockDataHelper.UpdateNewsMockData();
            }
            news = GetDataHelper.GetNews();
            return View(news);
        }


        [Route("getNewsInfo")]
        public JObject GetNewsInfo(string NewsId)
        {
            return JObject.FromObject(CardHelper.GetNewsCardbyId(NewsId));
        }


        [Route("preferences")]
        public ActionResult Preferences(string emailID)
        {
            //Preference pref = new Preference();
            Preference userPref = GetDataHelper.UserPreference(emailID);
            Preference user = new Preference() { UserName = emailID };
            if (userPref == null)
            {
                user = new Preference();// TODO: Add defaults
            }
            else
            {
                user = userPref;
                if (user == null)
                    user = new Preference() { UserName = emailID };

            }
            return View(user);
        }


        [Route("PreferenceInDb")]
        public void PreferenceInDb(string[] newsPrefCat, string newsTime, bool newsNotificationFlag, string newsNotifyMe, string eandtTime, string eandtNotify, bool eandtflag, string taskNotifyMe, string taskTime, bool taskNotificationFlag, string UserName, bool isAdded)
        {
            //Preference pref = new Preference();
            Preference userPref = GetDataHelper.UserPreference(UserName);
            Preference user = new Preference() { UserName = UserName };
            if (userPref != null)
            {
                user = userPref;
                if (user == null)
                    user = new Preference() { UserName = UserName };
            }


            user.News.NewsNotificationFlag = newsNotificationFlag;
            user.News.NewsNotificationTime = newsTime;

            var oldPrefList = user.News.SelectedCategories.ToList();
            foreach (var cat in newsPrefCat)
            {
                if (isAdded && !oldPrefList.Contains(cat))
                    oldPrefList.Add(cat);
                else
                    oldPrefList.Remove(cat);

            }
            user.News.SelectedCategories = oldPrefList.ToArray();


            // user.News[0].SelectedCategories = newsPrefCat;
            user.News.NewsNotifyMe = newsNotifyMe;

            user.EandT.EandTNotificationFlag = eandtflag;
            user.EandT.EandTNotifyMe = eandtNotify;
            user.EandT.EandTNotificationTime = eandtTime;

            user.Task.TaskNotificationFlag = taskNotificationFlag;
            user.Task.TaskNotificationTime = taskTime;
            user.Task.TaskNotifyMe = taskNotifyMe;

            GetDataHelper.WritePreferences(user);

        }


        [Route("policies")]
        public ActionResult Policies()
        {
            return View("Policies");
        }


        [Route("purchaseorder")]
        [HttpGet]
        public ActionResult PurchaseOrder(string poNumber, string vendorno)
        {
            TempData["data"] = poNumber;
            ViewBag.vendorNo = vendorno;
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
            ViewData["Sum"] = TotalPOSum;


            return View(poList);
        }


        [Route("podecline")]
        public ActionResult PODecline(string poNo, string reason, string comment)
        {
            PO poList = new PO();
            poList = GetDataHelper.GetPOs();
            TempData["data"] = poNo;
            foreach (var item in poList.PurchaseOrder)
            {
                if (item.PoNumber == poNo)
                {
                    GetDataHelper.UpdatePOStatus(poNo);
                }
            }
            return View();
        }


        [Route("declined")]
        public ActionResult Declined(string poNo)
        {
            TempData["data"] = poNo;
            return View();
        }


        [Route("pendingdates")]
        public ActionResult PendingDates()
        {
            //TempData["data"] = poNo;
            return View();
        }


        [Route("EventandTrainingTab")]
        public ActionResult EventandTrainingTab(string id)
        {
            EandTModel eventsListData = new EandTModel();
            eventsListData = GetDataHelper.GetEandT();
            foreach (var item in eventsListData.EventsAndtraining)
            {
                if (item.ETID == id)
                {
                    GetDataHelper.ETStatusUpdate(item.ETID);
                }
            }
            eventsListData = GetDataHelper.GetEandT();
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
