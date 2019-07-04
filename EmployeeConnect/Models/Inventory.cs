using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{

    public class InventoryModel
    {
        public Inventory[] Inventory { get; set; }
    }

    public class Inventory
    {
        public string inventoryNo { get; set; }
        public string description { get; set; }
        public string vendorName { get; set; }
        public string vendorNo { get; set; }
        public string amount { get; set; }
    }

}