using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class NewsCategories
    {
        public Cat[] Categories { get; set; }
    }
    public class Cat
    {
        public string Category { get; set; }
        public string CatThumbnailURL { get; set; }
    }
}