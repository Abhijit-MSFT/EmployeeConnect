using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class PurchaseOrders
    {
        public string PoNumber { get; set; }
        public string Description { get; set; }
        public string VendorName { get; set; }
        public string Vendorno { get; set; }
        public string TotalAmount { get; set; }
        public string PoStatus { get; set; }
        public Podetail[] PoDetails { get; set; }
    }

    public class Podetail
    {
        public string ItemCode { get; set; }
        public string ItemDescription { get; set; }
        public string UnitPrice { get; set; }
        public string Quantity { get; set; }
    }

}