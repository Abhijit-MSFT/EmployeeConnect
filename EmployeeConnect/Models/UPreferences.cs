using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class UPreferences
    {
        public Preference[] preferences { get; set; }
    }

    public class Preference
    {
        public string UserName { get; set; }
        public UserInfo[] UserInfo { get; set; }  
        public NewsPreference[] News { get; set; }
        public EandtPreference[] EandT { get; set; }
        public TaskPreference[] Task { get; set; }
    }

    public class NewsPreference
    {
        public string[] SelectedCategories { get; set; }
        public bool NewsNotificationFlag { get; set; }
        public string NewsNotifyMe { get; set; }
        public string NewsNotificationTime { get; set; }
    }

    public class EandtPreference
    {
        public bool EandTNotificationFlag { get; set; }
        public string EandTNotifyMe { get; set; }
        public string EandTNotificationTime { get; set; }
    }

    public class TaskPreference
    {
        public bool TaskNotificationFlag { get; set; }
        public string TaskNotifyMe { get; set; }
        public string TaskNotificationTime { get; set; }
    }
}





