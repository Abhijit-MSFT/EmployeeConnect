using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using EmployeeConnect.Models;

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

        public List<EventsAndTrainings> GetEandT()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/EventsAndTraining_June.json";

            List<EventsAndTrainings> eventsTrainings = new List<EventsAndTrainings>();

            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            eventsTrainings = (new JavaScriptSerializer().Deserialize<List<EventsAndTrainings>>(json));

            return eventsTrainings;
        }

        public List<PurchaseOrders> GetPOs()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/PurchaseOrders.json";

            List<PurchaseOrders> POs = new List<PurchaseOrders>();

            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            POs = (new JavaScriptSerializer().Deserialize<List<PurchaseOrders>>(json));

            return POs;
        }

    }
}