﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using EmployeeConnect.Models;
using System.Net;

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
        public  static EandTModel UpdateEandT(string eventID)
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/EventsAndTraining_June.json";
            EandTModel eventsTrainings = new EandTModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            eventsTrainings = (new JavaScriptSerializer().Deserialize<EandTModel>(json));
            foreach(var item in eventsTrainings.EventsAndtraining)
            {
                if(item.ETID == eventID)
                {
                    item.UserAdded = true;
                }
            }
            File.WriteAllText(file,json);
            return eventsTrainings;

        }
        //public static GNews GetNewsData()
        //   {
        //       string url = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=491637f419cd4bf297467458807be25f";
        //       using (WebClient client = new WebClient())
        //       {
        //           GNews news = null;
        //           string json = null;

        //           json = client.DownloadString(url);
        //           news = (new JavaScriptSerializer().Deserialize<GNews>(json));
        //           //return news;
        //           return news.status == "ok" ? news : null;
        //       }
        // }

    }
}