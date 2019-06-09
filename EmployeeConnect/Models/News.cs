using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class NewsModel
    {
        public News[] news
        {
            get; set;

        }
    }
    public class News
    {
        //public News[] News { get; set; }
        [JsonProperty(PropertyName = "newsID")]
        public string NewsID { get; set; }

        [JsonProperty(PropertyName = "category")]
        public string Category { get; set; }

        [JsonProperty(PropertyName = "newsTitle")]
        public string NewsTitle { get; set; }

        [JsonProperty(PropertyName = "latestOrTrendingFlag")]
        public string LatestOrTrendingFlag { get; set; }

        [JsonProperty(PropertyName = "newsThumbnailUrl")]
        public string NewsThumbnailUrl { get; set; }

        [JsonProperty(PropertyName = "newsBy")]
        public string NewsBy { get; set; }

        [JsonProperty(PropertyName = "newsDateTIme")]
        public string NewsDateTIme { get; set; }

        [JsonProperty(PropertyName = "detailedNews")]
        public string DetailedNews { get; set; }

        [JsonProperty(PropertyName = "noOfViews")]
        public string NoOfViews { get; set; }
    }

}


