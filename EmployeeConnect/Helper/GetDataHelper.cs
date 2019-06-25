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
            inventory = (new JavaScriptSerializer().Deserialize<InventoryModel>(json));
            return inventory;
        }

        /*public static UserPreferences setPreferencesData(string json)
        {
            //string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Inventory.json";
            //InventoryModel inventory = new InventoryModel();
            //string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            UserPreferences pref = new UserPreferences();
            pref = (new JavaScriptSerializer().Deserialize<UserPreferences>(json));
            return pref;
        }*/
    }
}






