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

        public static void UpdatePOStatus(string poNo)
        {
            if (poNo == null)
                return;
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/PurchaseOrders.json";
            string json = File.ReadAllText(file);

            Newtonsoft.Json.Linq.JObject poObj = Newtonsoft.Json.Linq.JObject.Parse(json);
            for (int poCount = 0; poCount < poObj["purchaseOrder"].Count(); poCount++)
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
        public static TicketsDataModel GetTickets()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/SupportTickets/") + @"/Tickets.json";
            TicketsDataModel ticket = new TicketsDataModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            ticket = (new JavaScriptSerializer().Deserialize<TicketsDataModel>(json));
            return ticket;
        }

        public static TicketModel GetTicket()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Ticket.json";
            TicketModel ticket = new TicketModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            ticket = (new JavaScriptSerializer().Deserialize<TicketModel>(json));
            return ticket;
        }

        public static InventoryModel GetInventoryData()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Inventory.json";
            InventoryModel inventory = new InventoryModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            inventory = new JavaScriptSerializer().Deserialize<InventoryModel>(json);
            return inventory;
        }

        //to get the preferences from the card json 
        public static SetPreferences SetPreferencesData(string json)
        {
            SetPreferences pref = new SetPreferences();
            pref = (new JavaScriptSerializer().Deserialize<SetPreferences>(json));
            userName = pref.UserName;
            return pref;
        }

        //Makes a UPrefObject from SetPreferences object
        public static Preference MakeUPrefObject(SetPreferences pref, string uID, string serviceURL, string tenID)
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
            uPref.News = new NewsPreference();
            uPref.EandT = new EandtPreference();
            uPref.Task = new TaskPreference();
            uPref.UserInfo[0] = uInfo;
            uPref.News = newsPref;
            uPref.EandT = entPref;
            uPref.Task = taskPref;

            return uPref;
        }
        
        public static UPreferences ReadPreferences()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Preferences/Userpreferences.json";
            UPreferences pref = new UPreferences();
            string json = File.ReadAllText(file);
            pref = new JavaScriptSerializer().Deserialize<UPreferences>(json);
            return pref;
        }

        public static Preference UserPreference(string userName)
        {
            UPreferences uPrefs = GetDataHelper.ReadPreferences();
            Preference uPref = uPrefs.Preferences.Where(c => c.UserName == userName).FirstOrDefault(); ;
            return uPref;
        }

        public static void WritePreferences(Preference newPref)
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Preferences/Userpreferences.json";
            string json = File.ReadAllText(file);
            int i;
            UPreferences uPref = new JavaScriptSerializer().Deserialize<UPreferences>(json);
            if (uPref == null)
            {
                uPref = new UPreferences();
                // Add new record and return;
                uPref.Preferences = new[] { newPref };


            }
            else
            {
                var oldPrefList = uPref.Preferences.ToList();
                var oldPref = oldPrefList.FirstOrDefault(u => u.UserName == newPref.UserName);
                if (oldPref == null)
                {
                    // TODO: update this logic
                    var allPref = uPref.Preferences.ToList();
                    allPref.Add(newPref);
                    uPref.Preferences = allPref.ToArray();
                }
                else
                {
                    //var oldPrefList =  uPref.preferences.ToList();
                    //var oldPrefObj = oldPrefList.FirstOrDefault(  )
                    oldPrefList.Remove(oldPref);
                    oldPrefList.Add(newPref);
                    //uPref.preferences = oldPrefList.ToArray();
                    // oldPref = newPref;
                    uPref.Preferences = oldPrefList.ToArray();
                }
                //var cat = uPref.preferences.Select(c => c.News).FirstOrDefault().Select(d => d.SelectedCategories).FirstOrDefault();

                //List<Preference> list = uPref.preferences.ToList();
                //for (i = 0; i < list.Count(); i++)
                //{
                //    if (list[i].UserName.Equals(pref.UserName))
                //    {
                //        //rewrite
                //        list[i] = pref;
                //        break;
                //    }
                //}
                //if (i == list.Count())
                //    list.Add(pref);
                //uPref.preferences = list.ToArray();
            }
            var convertedJson = JsonConvert.SerializeObject(uPref, Formatting.Indented);
            File.WriteAllText(file, convertedJson);
            return;
        }
               
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
                    string FileOutput = Newtonsoft.Json.JsonConvert.SerializeObject(ETObj, Newtonsoft.Json.Formatting.Indented);
                    File.WriteAllText(file, FileOutput);
                    break;
                }
            }
        }

        public static void SaveVisitorInfo(JObject visitorData)
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
             
        public static void SaveTicketsInfo(JObject ticketData)
        {
            TicketsDataModel currentTicket = GetDataHelper.GetTickets();

            int TicketCount = currentTicket.Tickets.Count();
            var tNo = Convert.ToInt32(ticketData.GetValue("TicketNo"));
            var ticDes = ticketData.GetValue("Description").ToString();
            var ticDate = ticketData.GetValue("Date").ToString();
            var ticPriority = ticketData.GetValue("Priority").ToString();
            var ticCat = ticketData.GetValue("Category").ToString();

            JavaScriptSerializer js = new JavaScriptSerializer();
            string TicketJson = js.Serialize(currentTicket);
            string filePath = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/SupportTickets") + @"/Tickets.json";
            if (File.Exists(filePath))
            {
                File.WriteAllText(filePath, TicketJson);
            }
        }
               
        public static NewsModel GetPreferredNews(string username)
        {
            Preference uPref = UserPreference(username);
            NewsModel news = GetNews();
            
            string[] categories = uPref.News.SelectedCategories;

            //if cat count is zero then return all the news cats
            if (categories.Count() == 0) return news;

            var prefNews = new List<News>();
            for (int i = 0; i < categories.Count(); i++)
            {
                var newss = news.news.Where(w => w.Category.Equals(categories[i]));
                prefNews = prefNews.Concat(newss).ToList();
            }

            news.news = prefNews.ToArray();
            return news;
        }




    }
}






