using EmployeeConnect.Models;
using Microsoft.Bot.Connector;
using Microsoft.Bot.Connector.Teams.Models;
using System;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;


namespace EmployeeConnect.Helper
{
    public class NotificationHelper
    {
        public static async Task<bool> SendNotification(string userId, string serviceUrl, string tenantId, Attachment attachment)
        {
            MicrosoftAppCredentials.TrustServiceUrl(serviceUrl);
            using (var connectorClient = new ConnectorClient(new Uri(serviceUrl)))
            {
                var parameters = new ConversationParameters
                {
                    Members = new ChannelAccount[] { new ChannelAccount(userId) },
                    ChannelData = new TeamsChannelData
                    {
                        Tenant = new TenantInfo() { Id = tenantId },
                        //Notification = new NotificationInfo() {  Alert = true}
                    }
                };

                try
                {
                    var conversationResource = await connectorClient.Conversations.CreateConversationAsync(parameters);

                    var message = Activity.CreateMessageActivity();
                    message.Conversation = new ConversationAccount(id: conversationResource.Id.ToString());
                    message.ChannelData = new TeamsChannelData() { Notification = new NotificationInfo() { Alert = true } };
                    message.Attachments.Add(attachment);

                    await connectorClient.Conversations.SendToConversationAsync((Activity)message);
                }
                catch (Exception)
                {
                    // Write exception
                    return false;

                }

                return true;
            }


        }


        //news notification as per preferences
        public static async System.Threading.Tasks.Task CheckPrefAndSendNewsCard()
        {
            UPreferences UserPref = GetDataHelper.ReadPreferences();
            int UPrefCount = UserPref.Preferences.Count();
            Attachment card = null;

            for (int i = 0; i < UPrefCount; i++)
            {
                string userName = UserPref.Preferences[i].UserName;

                DateTime NewsNotificationTime1 = UserPref.Preferences[i].News.NewsNotificationTime;
                //DateTime NewsNotificationTime = DateTime.ParseExact(UserPref.Preferences[i].News.NewsNotificationTime, "H:mm tt", CultureInfo.InvariantCulture);
                DateTime NewsNotificationTime = UserPref.Preferences[i].News.NewsNotificationTime;
                //List<string[]> NewsCat = UserPref.preferences[i].News.Select(c => c.SelectedCategories).ToList();

                DateTime currTime = DateTime.Now;
                if (NewsNotificationTime >= currTime.AddMinutes(-10) || NewsNotificationTime <= currTime.AddMinutes(10))
                {
                    card = Helper.CardHelper.GetNewsCard(userName);
                    string uIn = UserPref.Preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
                    string tenID = UserPref.Preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
                    string serURL = UserPref.Preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
                    await NotificationHelper.SendNotification(uIn, serURL, tenID, card);
                }
            }
        }


        //eAndt notification as per preferences
        public static async System.Threading.Tasks.Task CheckPrefAndSendEandTCard()
        {
            UPreferences UserPref = GetDataHelper.ReadPreferences();
            int UPrefCount = UserPref.Preferences.Count();
            Attachment card = null;

            for (int i = 0; i < UPrefCount; i++)
            {
                string userName = UserPref.Preferences[i].UserName;
                DateTime ETNotificationTime = DateTime.ParseExact(UserPref.Preferences[i].EandT.EandTNotificationTime.ToString(), "H:mm tt", CultureInfo.InvariantCulture);

                //List<string[]> NewsCat = UserPref.preferences[i].News.Select(c => c.SelectedCategories).ToList();

                DateTime currTime = DateTime.Now;
                if (ETNotificationTime >= currTime.AddMinutes(-10) || ETNotificationTime <= currTime.AddMinutes(10))
                {
                    card = Helper.CardHelper.GetETCard();
                    string uIn = UserPref.Preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
                    string tenID = UserPref.Preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
                    string serURL = UserPref.Preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
                    await NotificationHelper.SendNotification(uIn, serURL, tenID, card);
                }
            }
        }

        //Task notification as per preferences
        //public static async System.Threading.Tasks.Task CheckPrefAndSendTaskCard()
        //{
        //    UPreferences UserPref = GetDataHelper.readPreferences();
        //    int UPrefCount = UserPref.Preferences.Count();
        //    Attachment card = null;

        //    for (int i = 0; i < UPrefCount; i++)
        //    {
        //        string userName = UserPref.Preferences[i].UserName;
        //        DateTime TaskNotificationTime = DateTime.ParseExact(UserPref.Preferences[i].Task.Select(c => c.TaskNotificationTime).ToString(), "H:mm tt", CultureInfo.InvariantCulture);

        //        //List<string[]> NewsCat = UserPref.preferences[i].News.Select(c => c.SelectedCategories).ToList();

        //        DateTime currTime = DateTime.Now;
        //        if (TaskNotificationTime >= currTime.AddMinutes(-10) || TaskNotificationTime <= currTime.AddMinutes(10))
        //        {
        //            card = Helper.CardHelper.PendingTasksCard();
        //            string uIn = UserPref.Preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
        //            string tenID = UserPref.Preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
        //            string serURL = UserPref.Preferences[i].UserInfo.Select(c => c.UniqueID).ToString();
        //            await NotificationHelper.SendNotification(uIn, serURL, tenID, card);
        //        }
        //    }
        //}


        //Update MockData


    }
}