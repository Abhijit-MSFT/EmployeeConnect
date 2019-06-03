using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class PurchaseOrders
    {
        [JsonProperty(PropertyName = "PoNumber")]
        public string PoNumber { get; set; }

        [JsonProperty(PropertyName = "InvoiceNo")]
        public string InvoiceNo { get; set; }

        [JsonProperty(PropertyName = "Description")]
        public string Description { get; set; }

        [JsonProperty(PropertyName = "VendorName")]
        public string VendorName { get; set; }

        [JsonProperty(PropertyName = "Vendorno")]
        public string Vendorno { get; set; }

        [JsonProperty(PropertyName = "TotalAmount")]
        public string TotalAmount { get; set; }

        [JsonProperty(PropertyName = "PoStatus")]
        public string PoStatus { get; set; }

        [JsonProperty(PropertyName = "PoDetails")]
        public List<Podetail> PoDetails { get; set; }
    }

    public class Podetail
    {
        [JsonProperty(PropertyName = "ItemCode")]
        public string ItemCode { get; set; }

        [JsonProperty(PropertyName = "ItemDescription")]
        public string ItemDescription { get; set; }

        [JsonProperty(PropertyName = "UnitPrice")]
        public string UnitPrice { get; set; }


        [JsonProperty(PropertyName = "Quantity")]
        public string Quantity { get; set; }
    }

}