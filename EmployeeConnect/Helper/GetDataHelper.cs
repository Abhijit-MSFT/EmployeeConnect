using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Script.Serialization;
using EmployeeConnect.Models;
using System.Net;
using Chronic;
using Newtonsoft.Json;

namespace EmployeeConnect.Helper
{
    public class GetDataHelper
    {
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

        public static News UpdateNewsMockData()
        {
            NewsModel news = GetNews();
            int NewsCount = news.news.Count();
            string dt = DateTime.Now.Date.Date.ToString("M/dd/yyyy, h:mm tt");
            
            for (int i = 0; i < NewsCount; i++)
            {
                news.news[0].NewsDateTIme = dt;
                
            }
            return null;
        }
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
            return pref;
        }

        //Makes a UPrefObject from SetPreferences object
        public static Preference makeUPrefObject(SetPreferences pref)
        {
            Preference uPref = new Preference();
            uPref.UserName = pref.UserName;
            NewsPreference newsPref = new NewsPreference();
            EandtPreference entPref = new EandtPreference();
            TaskPreference taskPref = new TaskPreference();
            newsPref.NewsNotificationFlag = true;
            newsPref.NewsNotifyMe = "true";
            entPref.EandTNotificationFlag = true;
            entPref.EandTNotifyMe = "true";
            taskPref.TaskNotificationFlag = true;
            taskPref.TaskNotifyMe = "true";
            string[] time = {"11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM" };
            string[] category = {"Finance","Media","Art","Business","Culture","Technology"};
            switch (pref.SetNewsChoice)
            {
                case "1":
                    newsPref.NewsNotificationTime = "9:00 AM";
                    break;
                case "2":
                    newsPref.NewsNotificationTime = "5:00 PM";
                    break;
                case "3":
                    newsPref.NewsNotificationTime = time[Int32.Parse(pref.SetNewsPreferredTime)-1];
                    break;
                default:
                    break;
            }
            switch (pref.SetENTChoice)
            {
                case "1":
                    entPref.EandTNotificationTime = "9:00 AM";
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
                    taskPref.TaskNotificationTime = "9:00 AM";
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
                newsPref.SelectedCategories = new string[0];
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
                    newsPref.SelectedCategories[i] = category[Int32.Parse(arr[i])-1];
            }
            uPref.News = new NewsPreference[1];
            uPref.EandT = new EandtPreference[1];
            uPref.Task = new TaskPreference[1];
            uPref.News[0] = newsPref;
            uPref.EandT[0] = entPref;
            uPref.Task[0] = taskPref;
            
            return uPref;
        }

        //Updates the UPreferences json with the preference
        public static void WritePreferences(Preference pref)
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Preferences/Userpreferences.json";
            string json = File.ReadAllText(file);
            int i;
            EmployeeConnect.Models.UPreferences uPref = new JavaScriptSerializer().Deserialize<EmployeeConnect.Models.UPreferences>(json);
            List<EmployeeConnect.Models.Preference> list = uPref.preferences.ToList();
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

                    //Event
                    if (ETObj["EventsAndTraining"][i]["ETFlag"].Equals("E"))
                        ETObj["EventsAndTraining"][i]["ETAddRemoveFlag"] = ETObj["EventsAndTraining"][i]["ETAddRemoveFlag"].Equals("Removed") ? "Added" : "Removed";

                    //Training
                    else
                        ETObj["EventsAndTraining"][i]["register"] = ETObj["EventsAndTraining"][i]["register"].Equals("true") ? "false" : "true";
                    string FileOutput = Newtonsoft.Json.JsonConvert.SerializeObject(ETObj, Newtonsoft.Json.Formatting.Indented);
                    File.WriteAllText(file, FileOutput);
                    break;
                }
            }
        }


    }
}






