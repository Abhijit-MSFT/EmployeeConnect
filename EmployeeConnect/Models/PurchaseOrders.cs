using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class PO
    {
        public List<PurchaseOrders> purchaseOrder { get; set; }
    }

    public class PurchaseOrders
    {
        [JsonProperty(PropertyName = "poNumber")]
        public string PoNumber { get; set; }
        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }
        [JsonProperty(PropertyName = "InvoiceNo")]
        public string InvoiceNo { get; set; }
        [JsonProperty(PropertyName = "vendorName")]
        public string VendorName { get; set; }
        [JsonProperty(PropertyName = "vendorNo")]
        public string vendorNo { get; set; }
        [JsonProperty(PropertyName = "totalAmount")]
        public string TotalAmount { get; set; }
        [JsonProperty(PropertyName = "poStatus")]
        public string PoStatus { get; set; }
        [JsonProperty(PropertyName = "poDetails")]
        public List<Podetail> PoDetails { get; set; }
    }

    public class Podetail
    {
        [JsonProperty(PropertyName = "itemCode")]
        public string ItemCode { get; set; }
        [JsonProperty(PropertyName = "itemDescription")]
        public string ItemDescription { get; set; }
        [JsonProperty(PropertyName = "unitPrice")]
        public string UnitPrice { get; set; }
        [JsonProperty(PropertyName = "quantity")]
        public string Quantity { get; set; }
    }



}