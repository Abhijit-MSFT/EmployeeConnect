using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class SetPreferences
    {

        [JsonProperty(PropertyName = "SetNewsChoice")]
        public string SetNewsChoice { get; set; }
        public string UserName { get; set; }

        [JsonProperty(PropertyName = "SetNewsPreferredTime")]
        public string SetNewsPreferredTime { get; set; }

        [JsonProperty(PropertyName = "SetENTChoice")]
        public string SetENTChoice { get; set; }

        [JsonProperty(PropertyName = "SetENTPreferredTime")]
        public string SetENTPreferredTime { get; set; }

        [JsonProperty(PropertyName = "SetTaskRemindersChoice")]
        public string SetTaskRemindersChoice { get; set; }

        [JsonProperty(PropertyName = "SetTaskReminderPreferredTime")]
        public string SetTaskReminderPreferredTime { get; set; }

        [JsonProperty(PropertyName = "NewsCategory1")]
        public string NewsCategory1 { get; set; }

        [JsonProperty(PropertyName = "NewsCategory2")]
        public string NewsCategory2 { get; set; }
    }
}