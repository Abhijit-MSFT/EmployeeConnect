using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{

    public class TicketModel
    {
        public Ticket[] ticket { get; set; }
    }

    public class Ticket
    {
        public string ticketCategory { get; set; }
        public string ticketNo { get; set; }
        public string description { get; set; }
        public string ticketPriority { get; set; }
        public string ticketDept { get; set; }
        public string ticketCreateDate { get; set; }
        public string ticketCloseDate { get; set; }
        public string ticketETADate { get; set; }
        public string ticketAssignedTo { get; set; }
        public string ticketStatus { get; set; }
    }

}