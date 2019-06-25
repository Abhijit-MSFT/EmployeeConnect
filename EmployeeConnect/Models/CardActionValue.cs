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

        [JsonProperty("dat")]
        public T Dataa { get; set; }
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
    public class TaskModuleSubmitData<T>
    {
        [JsonProperty("commandId")]
        public T commandId { get; set; }



        [JsonProperty("data")]
        public T Data { get; set; }

        public T DataJson { get; set; }

    }
}