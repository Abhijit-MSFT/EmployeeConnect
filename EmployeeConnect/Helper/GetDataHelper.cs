using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Web.Script.Serialization;
using EmployeeConnect.Models;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace EmployeeConnect.Helper
{
    public class GetDataHelper
    {
        public static string userName = "";
        public static NewsModel GetNews()
        {            
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/NewsData.json";
            NewsModel news = new NewsModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            news = (new JavaScriptSerializer().Deserialize<NewsModel>(json));
            return news;
        }

        public static EandTModel GetEandT()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/EventsAndTraining_June.json";
            EandTModel eventsTrainings = new EandTModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            eventsTrainings = (new JavaScriptSerializer().Deserialize<EandTModel>(json));
            return eventsTrainings;
        }

        public static PO GetPOs()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/PurchaseOrders.json";
            PO POs = new PO();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            POs = (new JavaScriptSerializer().Deserialize<PO>(json));
            return POs;

        }

        public static void updatePOStatus(string poNo)
        {
            if (poNo == null)
                return;
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/PurchaseOrders.json";
            string json = File.ReadAllText(file);

            Newtonsoft.Json.Linq.JObject poObj = Newtonsoft.Json.Linq.JObject.Parse(json);
            for(int poCount =0; poCount<poObj["purchaseOrder"].Count();poCount++)
            {
                if (poObj["purchaseOrder"][poCount]["poNumber"].ToString().Equals(poNo))
                {
                    poObj["purchaseOrder"][poCount]["poStatus"] = poObj["purchaseOrder"][poCount]["poStatus"].Equals("pending") ? "approved" : "declined";
                    string FileOutput = JsonConvert.SerializeObject(poObj, Newtonsoft.Json.Formatting.Indented);
                    File.WriteAllText(file, FileOutput);
                    break;
                }
            }

            return;
        }
        //public static GNews GetNewsData()
        //{
        //    string url = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=491637f419cd4bf297467458807be25f";
        //    using (WebClient client = new WebClient())
        //    {
        //        GNews news = null;
        //        string json = null;

        //        json = client.DownloadString(url);
        //        news = (new JavaScriptSerializer().Deserialize<GNews>(json));
        //        //return news;
        //        return news.status == "ok" ? news : null;
        //    }
        //}

        public static TicketModel getTicket()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Ticket.json";
            TicketModel ticket = new TicketModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            ticket = (new JavaScriptSerializer().Deserialize<TicketModel>(json));
            return ticket;
        }

        public static InventoryModel getInventoryData()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Inventory.json";
            InventoryModel inventory = new InventoryModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            inventory = new JavaScriptSerializer().Deserialize<InventoryModel>(json);
            return inventory;
        }

        //to get the preferences from the card json 
        public static SetPreferences setPreferencesData(string json)
        {
            SetPreferences pref = new SetPreferences();
            pref = (new JavaScriptSerializer().Deserialize<SetPreferences>(json));
            userName = pref.UserName;
            return pref;
        }

        //Makes a UPrefObject from SetPreferences object
        public static Preference makeUPrefObject(SetPreferences pref, string uID, string serviceURL, string tenID)
        {
            Preference uPref = new Preference();
            uPref.UserName = pref.UserName;
            UserInfo uInfo = new UserInfo();
            NewsPreference newsPref = new NewsPreference();
            EandtPreference entPref = new EandtPreference();
            TaskPreference taskPref = new TaskPreference();
            uInfo.UniqueID = uID;
            uInfo.ServiceURl = serviceURL;
            uInfo.TenantID = tenID;
            newsPref.NewsNotificationFlag = true;
            newsPref.NewsNotifyMe = "true";
            entPref.EandTNotificationFlag = true;
            entPref.EandTNotifyMe = "true";
            taskPref.TaskNotificationFlag = true;
            taskPref.TaskNotifyMe = "true";
            string[] time = { "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM" };
            string[] category = { "Finance", "Media", "Design", "AI", "Data", "Business", "CS", "Technology", "Animation", "IT" };
            switch (pref.SetNewsChoice)
            {
                case "1":
                    newsPref.NewsNotificationTime = "8:00 AM";
                    break;
                case "2":
                    newsPref.NewsNotificationTime = "5:00 PM";
                    break;
                case "3":
                    newsPref.NewsNotificationTime = time[Int32.Parse(pref.SetNewsPreferredTime) - 1];
                    break;
                default:
                    break;
            }
            switch (pref.SetENTChoice)
            {
                case "1":
                    entPref.EandTNotificationTime = "8:00 AM";
                    break;
                case "2":
                    entPref.EandTNotificationTime = "5:00 PM";
                    break;
                case "3":
                    entPref.EandTNotificationTime = time[Int32.Parse(pref.SetENTPreferredTime) - 1];
                    break;
                default:
                    break;
            }
            switch (pref.SetTaskRemindersChoice)
            {
                case "1":
                    taskPref.TaskNotificationTime = "8:00 AM";
                    break;
                case "2":
                    taskPref.TaskNotificationTime = "5:00 PM";
                    break;
                case "3":
                    taskPref.TaskNotificationTime = time[Int32.Parse(pref.SetTaskReminderPreferredTime) - 1];
                    break;
                default:
                    break;
            }
            string newsCategory;
            if (pref.NewsCategory1 == null && pref.NewsCategory2 == null)
                newsPref.SelectedCategories = category;
            else
            {
                if (pref.NewsCategory1 != null && pref.NewsCategory2 == null)
                    newsCategory = pref.NewsCategory1;
                else if (pref.NewsCategory1 == null && pref.NewsCategory2 != null)
                    newsCategory = pref.NewsCategory2;
                else
                    newsCategory = pref.NewsCategory1 + "," + pref.NewsCategory2;

                var arr = newsCategory.Split(',');
                newsPref.SelectedCategories = new string[arr.Count()];
                for (int i = 0; i < arr.Count(); i++)
                    newsPref.SelectedCategories[i] = category[Int32.Parse(arr[i]) - 1];
            }
            uPref.UserInfo = new UserInfo[1];
            uPref.News = new NewsPreference[1];
            uPref.EandT = new EandtPreference[1];
            uPref.Task = new TaskPreference[1];
            uPref.UserInfo[0] = uInfo;
            uPref.News[0] = newsPref;
            uPref.EandT[0] = entPref;
            uPref.Task[0] = taskPref;

            return uPref;
        }
        
        public static UPreferences readPreferences()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Preferences/Userpreferences.json";
            string json = File.ReadAllText(file);
            UPreferences uPref = new JavaScriptSerializer().Deserialize<UPreferences>(json);           
            
            return uPref;
        }

        //Updates the UPreferences json with the preference
        public static void WritePreferences(Preference pref)
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Preferences/Userpreferences.json";
            string json = File.ReadAllText(file);
            int i;
            UPreferences uPref = new JavaScriptSerializer().Deserialize<UPreferences>(json);
            List<Preference> list = uPref.preferences.ToList();
            for (i = 0; i < list.Count(); i++)
            {
                if (list[i].UserName.Equals(pref.UserName))
                {
                    //rewrite
                    list[i] = pref;
                    break;
                }                
            }
            if (i == list.Count())
                list.Add(pref);
            uPref.preferences = list.ToArray();
            var convertedJson = JsonConvert.SerializeObject(uPref, Formatting.Indented);
            File.WriteAllText(file, convertedJson);
            return;
        }

        //changes the status of eT Registered<->Unregistered, Added<->Remove
        public static void ETStatusUpdate(string ETid)
        {
            if (ETid == null)
                return;
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/EventsAndTraining_June.json";
            string json = File.ReadAllText(file);

            Newtonsoft.Json.Linq.JObject ETObj = Newtonsoft.Json.Linq.JObject.Parse(json);
            for (int i = 0; i < ETObj["EventsAndTraining"].Count(); i++)
            {
                if (ETObj["EventsAndTraining"][i]["ETID"].ToString().Equals(ETid))
                {
                    ETObj["EventsAndTraining"][i]["UserAdded"] = !(bool)ETObj["EventsAndTraining"][i]["UserAdded"];

                    ////Event
                    //if (ETObj["EventsAndTraining"][i]["ETFlag"].Equals("E"))
                    //    ETObj["EventsAndTraining"][i]["ETAddRemoveFlag"] = ETObj["EventsAndTraining"][i]["ETAddRemoveFlag"].Equals("Removed") ? "Added" : "Removed";

                    ////Training
                    //else
                    //    ETObj["EventsAndTraining"][i]["register"] = ETObj["EventsAndTraining"][i]["register"].Equals("true") ? "false" : "true";
                    string FileOutput = Newtonsoft.Json.JsonConvert.SerializeObject(ETObj, Newtonsoft.Json.Formatting.Indented);
                    File.WriteAllText(file, FileOutput);
                    break;
                }
            }
        }

        public static void saveVisitorInfo(JObject visitorData)
        {
           VisitorDataModel currentVisitor = new VisitorDataModel()
            {               

                VhostName = visitorData.GetValue("hostName").ToString(),
                VhostLocation = visitorData.GetValue("hostLocation").ToString(),
                Vdate = visitorData.GetValue("Date").ToString(),
                Vtime = visitorData.GetValue("Time").ToString(),
                Vpurpose = visitorData.GetValue("purpose").ToString(),
                Vorg = visitorData.GetValue("org").ToString(),
                Vcontact = visitorData.GetValue("contactNo").ToString()

           };
            JavaScriptSerializer js = new JavaScriptSerializer();
            string visitorJson = js.Serialize(currentVisitor);
            string filePath = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/VisitorReg") + @"/Visitors.json";
            if (File.Exists(filePath))
            {
                File.AppendAllText(filePath, visitorJson);
            }
        }

        public static void saveTicketsInfo(JObject ticketData)
        {
            TicketsDataModel currentTicket = new TicketsDataModel()
            {
                ticketNo = Convert.ToInt32(ticketData.GetValue("TicketNo")),
                ticketDescription = ticketData.GetValue("Description").ToString(),
                date = ticketData.GetValue("Date").ToString(),
                priority = ticketData.GetValue("Priority").ToString(),
                category = ticketData.GetValue("Category").ToString()
            };
            JavaScriptSerializer js = new JavaScriptSerializer();
            string TicketJson = js.Serialize(currentTicket);
            string filePath = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/SupportTickets") + @"/Tickets.json";
            if (File.Exists(filePath))
            {
                File.AppendAllText(filePath, TicketJson);
            }

        }

        public static UPreferences getPreferences()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Preferences/Userpreferences.json";
            UPreferences pref = new UPreferences();
            string json = File.ReadAllText(file);
            pref = new JavaScriptSerializer().Deserialize<UPreferences>(json);
            return pref;
        }

        public static NewsModel getPreferredNews(string username)
        {
            UPreferences uPref = getPreferences();
            List<EmployeeConnect.Models.Preference> list = uPref.preferences.ToList();
            int i;
            for (i = 0; i < list.Count(); i++)
            {
                if (list[i].UserName.Equals(username))
                {
                    break;
                }
            }
            NewsModel newsM = GetNews();
            if (i == list.Count())
            {
                return newsM;
            }
            string[] categories = list[i].News[0].SelectedCategories;
            var prefNews = new List<News>();
            for (int j = 0; j < categories.Count(); j++)
            {
                var news = newsM.news.Where(w => w.Category.Equals(categories[j]));
                prefNews = prefNews.Concat(news).ToList();
            }
            newsM.news = prefNews.ToArray();
            return newsM;
        }
               
        //news notification as per preferences
        public static async System.Threading.Tasks.Task CheckPrefAndSendNewsCard()
        {
            UPreferences UserPref = GetDataHelper.readPreferences();
            int UPrefCount = UserPref.preferences.Count();
            Attachment card = null;

            for (int i = 0; i < UPrefCount; i++)
            {
                string userName = UserPref.preferences[i].UserName;

                string NewsNotificationTime1 = UserPref.preferences[i].News.Select(c => c.NewsNotificationTime).FirstOrDefault();
                DateTime NewsNotificationTime = DateTime.ParseExact(UserPref.preferences[i].News.Select(c => c.NewsNotificationTime).FirstOrDefault(), "H:mm tt", CultureInfo.InvariantCulture);
                //List<string[]> NewsCat = UserPref.preferences[i].News.Select(c => c.SelectedCategories).ToList();

                DateTime currTime = DateTime.Now;
                if (NewsNotificationTime >= currTime.AddMinutes(-10) || NewsNotificationTime <= currTime.AddMinutes(10))
                {
                    card = Helper.CardHelper.getNewsCard(userName);
                    string uIn = UserPref.preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
                    string tenID =  UserPref.preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
                    string serURL =  UserPref.preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
                    await NotificationHelper.SendNotification(uIn, serURL, tenID, card);                     
                }
            }            
        }

        //eAndt notification as per preferences
        public static async System.Threading.Tasks.Task CheckPrefAndSendEandTCard()
        {
            UPreferences UserPref = GetDataHelper.readPreferences();
            int UPrefCount = UserPref.preferences.Count();
            Attachment card = null;

            for (int i = 0; i < UPrefCount; i++)
            {
                string userName = UserPref.preferences[i].UserName;
                DateTime ETNotificationTime = DateTime.ParseExact(UserPref.preferences[i].EandT.Select(c => c.EandTNotificationTime).ToString(), "H:mm tt", CultureInfo.InvariantCulture);

                //List<string[]> NewsCat = UserPref.preferences[i].News.Select(c => c.SelectedCategories).ToList();

                DateTime currTime = DateTime.Now;
                if (ETNotificationTime >= currTime.AddMinutes(-10) || ETNotificationTime <= currTime.AddMinutes(10))
                {
                    card = Helper.CardHelper.getETCard();
                    string uIn = UserPref.preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
                    string tenID = UserPref.preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
                    string serURL = UserPref.preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
                    await NotificationHelper.SendNotification(uIn, serURL, tenID, card);
                }
            }
        }

        ////Task notification as per preferences
        //public static async System.Threading.Tasks.Task CheckPrefAndSendTaskCard()
        //{
        //    UPreferences UserPref = GetDataHelper.readPreferences();
        //    int UPrefCount = UserPref.preferences.Count();
        //    Attachment card = null;

        //    for (int i = 0; i < UPrefCount; i++)
        //    {
        //        string userName = UserPref.preferences[i].UserName;
        //        DateTime TaskNotificationTime = DateTime.ParseExact(UserPref.preferences[i].Task.Select(c => c.TaskNotificationTime).ToString(), "H:mm tt", CultureInfo.InvariantCulture);

        //        //List<string[]> NewsCat = UserPref.preferences[i].News.Select(c => c.SelectedCategories).ToList();

        //        DateTime currTime = DateTime.Now;
        //        if (TaskNotificationTime >= currTime.AddMinutes(-10) || TaskNotificationTime <= currTime.AddMinutes(10))
        //        {
        //            card = Helper.CardHelper.PendingTasksCard();
        //            string uIn = UserPref.preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
        //            string tenID = UserPref.preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
        //            string serURL = UserPref.preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
        //            await NotificationHelper.SendNotification(uIn, serURL, tenID, card);
        //        }
        //    }
        //}


        //Update MockData

        public static void UpdateNewsMockData()
        {
            string filename = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/NewsData.json";
            if (File.Exists(filename))
            {
                NewsModel news = GetNews();
                int NewsCount = news.news.Count();
                
                DateTime[] last15Days = Enumerable.Range(0, 15).Select(i => DateTime.Now.Date.AddDays(-i)).ToArray();

                for (int i = 0; i < NewsCount; i++)
                {
                    Random r = new Random();
                    int randomnum = r.Next(0, last15Days.Length);
                    news.news[i].NewsDateTIme = last15Days[randomnum].ToString("M/dd/yyyy, h:mm tt");

                }
                string json = JsonConvert.SerializeObject(news); //create json object

                File.WriteAllText(filename, json);
            }
        }

        public static void UpdateETMockData()
        {
            string filename = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/EventsAndTraining_June.json";
            if (File.Exists(filename))
            {
                EandTModel eandt = GetEandT();
                int eandtCount = eandt.EventsAndtraining.Count();

                for (int i = 0; i < eandtCount; i++)
                {
                    

                }


                string json = File.ReadAllText(filename);
            }
            

            //EventsAndTraining et = new JavaScriptSerializer().Deserialize<EventsAndTraining>(json);

            //foreach(EventsAndTraining i in et)
            //{
            //    et.ETDate = DateTime.Now.Date.ToString("MM/dd/yyyy");
            //}


            
        }
      
    }
}






