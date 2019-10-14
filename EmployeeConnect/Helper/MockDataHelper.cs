using EmployeeConnect.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Helper
{
    public class MockDataHelper
    {
        public static void UpdateNewsMockData()
        {
            string filename = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/NewsData.json";
            if (File.Exists(filename))
            {
                NewsModel news = GetDataHelper.GetNews();
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
                EandTModel eandt = GetDataHelper.GetEandT();
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