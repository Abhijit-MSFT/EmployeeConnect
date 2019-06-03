using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class News
    {
        //public News[] News { get; set; }
        public string NewsID { get; set; }
        public string Category { get; set; }
        public string NewsTitle { get; set; }
        public string LatestOrTrendingFlag { get; set; }
        public string NewsThumbnailUrl { get; set; }
        public string NewsBy { get; set; }
        public string NewsDateTIme { get; set; }
        public string DetailedNews { get; set; }
        public string NoOfViews { get; set; }
    }

}


