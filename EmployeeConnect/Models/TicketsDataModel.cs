using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{

    public class TicketsDataModel
    {
        public  int  ticketNo { get; set; }
        public  string ticketDescription { get; set; }
        public  string date { get; set; }
        public  string category { get; set; }
        public  string priority { get; set; }
    }
}