using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Common
{
    public static class TaskModelUIConstant
    {
      public static UIConstants PurchaseOrder { get; set; } =
            new UIConstants(750, 480, "Purchase Order", TaskModuleIds.PurchaseOrder, "Purchase Order");
        public static UIConstants  NewsCard { get; set; } =
            new UIConstants(1000, 900, "News Card", TaskModuleIds.Newscard, "News Card");
        public static UIConstants CreateTicket { get; set; } =
        new UIConstants(560, 480, "Create Ticket", TaskModuleIds.CreateTicket, "Create Ticket");

        public static UIConstants TicketComplete { get; set; } =
        new UIConstants(350, 450, "Ticket Complete", TaskModuleIds.TicketComplete, "Ticket Complete");

        public static UIConstants VisitorRegistration { get; set; } =
    new UIConstants(500, 535, "Visitor Registration", TaskModuleIds.VisitorRegistration, "Visitor Registration");  
    public static UIConstants SendRequest { get; set; } =
    new UIConstants(400, 459, "Send Request", TaskModuleIds.SendRequest, "Send Request");
        public static UIConstants PoDecline { get; set; } =
        new UIConstants(400, 320, "PO Decline", TaskModuleIds.PODecline, "PO Decline"); // changed it for testing - Abhijit - original was 367
        public static UIConstants Declined { get; set; } =
        new UIConstants(400, 170, "Declined", TaskModuleIds.Declined, "Declined");    // changed it for testing - Abhijit

        public static UIConstants ETCard { get; set; } =
        new UIConstants(850, 700, "ET Card: Inputs", TaskModuleIds.ETcard, "ET Card");

        public static UIConstants POCard { get; set; } =
        new UIConstants(750,600, "PO Card", TaskModuleIds.ETcard, "PO Card");

        public static UIConstants PendingDates { get; set; } =
       new UIConstants(950,1500, "Pending Dates", TaskModuleIds.ETcard, "Pending Dates");

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
        public const string VisitorRegistration = "visitorregistration";
        public const string PODecline = "podecline";
        public const string Declined = "declined";
        public const string donedecline = "donedecline";
        public const string Newscard = "newscard";
        public const string ETcard = "ETcard";
        public const string SendRequest = "sendrequest";
        public const string EventCard = "eventcard";
        public const string POCard = "pocard";
        public const string pendingDates = "pendingdates";
        public const string editTicket = "editTicket";
        public const string editVisitorRequest = "editVisitorRequest";
        public const string toggleEventStatus = "toggleEventStatus";
        
    }
}
