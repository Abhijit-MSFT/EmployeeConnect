using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class BotFrameworkCardValue<T>
    {
        [JsonProperty("type")]
        public object Type { get; set; } = "task/fetch";

        [JsonProperty("data")]
        public T Data { get; set; }
    }


    public class TaskFetchData
    {
        public Data data { get; set; }
    }

    public class Data
    {
        public string type { get; set; }
        public string data { get; set; }
    }

    

    public class AdaptiveCardValue<T>
    {
        [JsonProperty("msteams")]
        public object Type { get; set; } = JsonConvert.DeserializeObject("{\"type\": \"task/fetch\" }");

        [JsonProperty("data")]
        public T Data { get; set; }
    }

    public class TaskModuleActionData<T>
    {
        [JsonProperty("data")]
        public BotFrameworkCardValue<T> Data { get; set; }
    }

    public class ActionDetails<T>
    {
        [JsonProperty("action")]
        public object Action { get; set; }

        [JsonProperty("TicketNo")]
        public string TicketNo { get; set; }

    }

    public class TaskModuleSubmitData<T>
    {
        [JsonProperty("commandId")]
        public T commandId { get; set; }

        [JsonProperty("data")]
        public T Data { get; set; }
    }
    public class TicketTaskData
    {
        public string ticketNo { get; set; }
        public string TDescription { get; set; }
        public string TCategory { get; set; }
        public string TPriority { get; set; }
        public string action { get; set; }
    }

    public class EventTaskData
    {
        public string eventId { get; set; }

        public string action { get; set; }
    }

    public class PODeclineData
    {
        public string poNumber { get; set; }
        public string action { get; set; }
    }
    public class DeclineData
    {
        public string PONo { get; set; }
        public string reason { get; set; }
        public string comments { get; set; }
        public string action { get; set; }
    }
    public class VisitorData
    {
        public string VhostName { get; set; }
        public string VhostLocation { get; set; }
        public string Vdate { get; set; }
        public string Vtime { get; set; }
        public string Vpurpose { get; set; }
        public string Vorg { get; set; }
        public string Vcontact { get; set; }
        public string action { get; set; }
    }

    public class SubmitActionData
    {
        public string commandId { get; set; }
    }



    public class SubmitActionData<T>
    {
        public string commandId { get; set; }
        public string commandContext { get; set; }
        public T data { get; set; }
    }
}