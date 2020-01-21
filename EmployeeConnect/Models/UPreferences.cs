using System;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class UPreferences
    {
        public UPreferences() { }
        public Preference[] Preferences { get; set; }
    }

    public class Preference
    {
        public Preference(){ }
        public string UserName { get; set; }
        public UserInfo[] UserInfo { get; set; } = new[] { new UserInfo() };    
        public NewsPreference News { get; set; } = new NewsPreference() { SelectedCategories = new string[] { } };
        public EandtPreference EandT { get; set; } = new EandtPreference() ;
        public TaskPreference Task { get; set; } = new TaskPreference();
    }

    public class NewsPreference
    {
        public string[] SelectedCategories { get; set; }
        public bool NewsNotificationFlag { get; set; }
        public string NewsNotifyMe { get; set; }
        public DateTime NewsNotificationTime { get; set; }
    }

    public class EandtPreference
    {
        public bool EandTNotificationFlag { get; set; }
        public string EandTNotifyMe { get; set; }
        public DateTime EandTNotificationTime { get; set; }
    }

    public class TaskPreference
    {
        public bool TaskNotificationFlag { get; set; }
        public string TaskNotifyMe { get; set; }
        public DateTime TaskNotificationTime { get; set; }
    }
}





