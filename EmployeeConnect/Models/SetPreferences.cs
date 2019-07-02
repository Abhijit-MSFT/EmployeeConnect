using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class SetPreferences
    {        
        public string SetNewsChoice { get; set; }
        public string UserName { get; set; }
        
        public string SetNewsPreferredTime { get; set; }
        
        public string SetENTChoice { get; set; }
        
        public string SetENTPreferredTime { get; set; }
        
        public string SetTaskRemindersChoice { get; set; }
        
        public string SetTaskReminderPreferredTime { get; set; }
        
        public string NewsCategory1 { get; set; }
        
        public string NewsCategory2 { get; set; }
    }
}