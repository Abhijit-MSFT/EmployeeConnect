using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Common
{
    public static class TaskModelUIConstant
    {
      public static UIConstants PurchaseOrder { get; set; } =
            new UIConstants(510, 450, "Purchase Order", TaskModuleIds.PurchaseOrder, "Purchase Order");
        public static UIConstants CreateTicket { get; set; } =
      new UIConstants(310, 250, "Create Ticket", TaskModuleIds.CreateTicket, "Create Ticket");

        public static UIConstants TicketComplete { get; set; } =
            new UIConstants(120, 60, "Ticket Complete", TaskModuleIds.TicketComplete, "Ticket Complete");
    }

    public class UIConstants
    {
        public UIConstants(int width, int height, string title, string id, string buttonTitle)
        {
            Width = width;
            Height = height;
            Title = title;
            Id = id;
            ButtonTitle = buttonTitle;
        }

        public int Height { get; set; }
        public int Width { get; set; }
        public string Title { get; set; }
        public string ButtonTitle { get; set; }
        public string Id { get; set; }
    }

    public class TaskModuleIds
    {
        public const string PurchaseOrder = "purchaseorder";
        public const string CreateTicket = "createticket";
        public const string TicketComplete = "ticketcomplete";

    }
}