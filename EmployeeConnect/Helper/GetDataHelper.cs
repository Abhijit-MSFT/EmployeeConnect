using System.Collections.Generic;
using System.IO;
using System.Web.Script.Serialization;
using EmployeeConnect.Models;
using Newtonsoft.Json;

namespace EmployeeConnect.Helper
{
    public class GetDataHelper
    {
        public List<News> GetNews()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/NewsData.json";

            List<News> news = new List<News>();

            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            news = (new JavaScriptSerializer().Deserialize<List<News>>(json));

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

        public static List<PurchaseOrders> GetPOs()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/PurchaseOrders.json";
            List<PurchaseOrders> POs = new List<PurchaseOrders>();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            POs = (JsonConvert.DeserializeObject<List<PurchaseOrders>>(json));    
            return POs;
        }


    }
}