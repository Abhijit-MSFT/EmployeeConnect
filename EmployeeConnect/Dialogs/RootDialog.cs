using EmployeeConnect.Common;
using EmployeeConnect.Helper;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using Microsoft.Bot.Connector.Teams;
using Microsoft.Bot.Connector.Teams.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;


namespace EmployeeConnect.Dialogs
{
    [Serializable]
    public class RootDialog : IDialog<object>
    {
        private const string ProfileKey = "profile";

        private const string EmailKey = "emailId";
        /// <summary>
        /// Called when the dialog is started.
        /// </summary>
        public async Task StartAsync(IDialogContext context)
        {
            context.Wait(MessageReceivedAsync);
        }

        /// <summary>
        /// Called when a message is received by the dialog
        /// </summary>
        private async Task MessageReceivedAsync(IDialogContext context, IAwaitable<IMessageActivity> result)
        {

            var activity = await result as Activity;
            var typingReply = activity.CreateReply();
            typingReply.Text = null;
            typingReply.Type = ActivityTypes.Typing;
            await context.PostAsync(typingReply);
            string message = string.Empty;
            string userEmailId = string.Empty;
            string emailKey = GetEmailKey(activity);
            var userDetails = await GetCurrentUserDetails(activity);
            string userName = userDetails.UserPrincipalName;


            Models.Preference uPref = GetDataHelper.UserPreference(userName);
            Models.Preference currUser = null;
            if (uPref != null && uPref.UserInfo != null)
            {
                currUser = uPref;
            }


            if (currUser == null)
            {
                string UniqueId = activity.From.Id;
                string ServiceURL = activity.ServiceUrl;
                string TenantId = activity.GetChannelData<TeamsChannelData>().Tenant.Id;

                Models.Preference userPref = new Models.Preference
                {
                    UserName = userName
                };                
                Models.UserInfo uInfo = new Models.UserInfo();
                Models.NewsPreference newsPref = new Models.NewsPreference();
                Models.EandtPreference entPref = new Models.EandtPreference();
                Models.TaskPreference taskPref = new Models.TaskPreference();
                uInfo.UniqueID = UniqueId;
                uInfo.ServiceURl = ServiceURL;
                uInfo.TenantID = TenantId;
                
                newsPref.NewsNotificationFlag = true;
                newsPref.NewsNotifyMe = "true";
                newsPref.SelectedCategories = new string[] { "AI", "Technology", "IT" };
                entPref.EandTNotificationFlag = true;
                entPref.EandTNotifyMe = "true";
                taskPref.TaskNotificationFlag = true;
                taskPref.TaskNotifyMe = "true";
                

                userPref.UserInfo = new[] { uInfo };
                userPref.News = newsPref;
                userPref.EandT = entPref;
                userPref.Task = taskPref;

                GetDataHelper.WritePreferences(userPref);

            }


            if (!context.ConversationData.ContainsKey(emailKey))
            {
                //await SendOAuthCardAsync(context, (Activity)context.Activity);
                //return;
            }

            if (userDetails == null)
            {
                await context.PostAsync("Failed to read user profile. Please try again.");
            }
            if (!string.IsNullOrEmpty(activity.Text))
            {
                message = Microsoft.Bot.Connector.Teams.ActivityExtensions.GetTextWithoutMentions(activity).ToLowerInvariant();
                Attachment card = null;
                var reply = context.MakeMessage();
                List<Attachment> res;
                switch (message.Trim())
                {
                    case Common.Constants.Welcome:
                        string url = await GetSigninUrl(activity);
                        res = Helper.CardHelper.WelcomeCard();
                        for (int i = 0; i < res.Count(); i++)
                            reply.Attachments.Add(res.ElementAt(i));
                        reply.AttachmentLayout = AttachmentLayoutTypes.Carousel;
                        break;
                    case Common.Constants.SetPrefrences:
                        card = Helper.CardHelper.SetTimePrefrences();
                        reply.Text = string.Format("Set a preferred time to receive notifications for latest news, upcoming events and trainings and task reminders.");
                        reply.Attachments.Add(card);
                        break;
                    case Common.Constants.UpcomingEventsTraining:
                        card = Helper.CardHelper.GetETCard();
                        reply.Attachments.Add(card);
                        break;
                    case Common.Constants.PendingApprovals:

                        card = Helper.CardHelper.PendingApprovals();
                        if (card != null)
                            reply.Attachments.Add(card);
                        else
                            reply.Text = "No pending approvals to show.";
                        break;
                    case Common.Constants.PendingTasks:
                        card = Helper.CardHelper.PendingTasks();
                        if (card != null)
                            reply.Attachments.Add(card);
                        else
                            reply.Text = "No pending submissions to show.";
                        break;
                    case Common.Constants.TrendingNews:
                        card = Helper.CardHelper.GetNewsCard(userName);
                        reply.Attachments.Add(card);
                        break;
                    case Common.Constants.Policies:
                        card = Helper.CardHelper.GetPoliciesCard();
                        reply.Attachments.Add(card);
                        break;
                    case Common.Constants.MyTools:
                        card = Helper.CardHelper.GetMyToolsCard();
                        reply.Attachments.Add(card);
                        break;

                    case Common.Constants.HumanResourceTools:
                        card = Helper.CardHelper.HumanResourceCard();
                        reply.Attachments.Add(card);
                        break;
                    case Common.Constants.ITFacilitiesTools:
                        card = Helper.CardHelper.ITFacilitiesCard();
                        reply.Attachments.Add(card);
                        break;
                    case Common.Constants.PaymentsAndBenefitsTools:
                        card = Helper.CardHelper.PaymentsAndBenefitsCard();
                        reply.Attachments.Add(card);
                        break;
                    case Common.Constants.StoreOperationsTools:
                        card = Helper.CardHelper.StoreOperationsCard();
                        reply.Attachments.Add(card);
                        break;
                    case Common.Constants.ViewTicket:
                        card = Helper.CardHelper.Ticket();
                        if (card != null)
                            reply.Attachments.Add(card);
                        else
                            reply.Text = "No tickets to show.";
                        break;
                    default:
                        res = Helper.CardHelper.DefaultCard();
                        for (int i = 0; i < res.Count(); i++)
                            reply.Attachments.Add(res.ElementAt(i));
                        reply.AttachmentLayout = AttachmentLayoutTypes.Carousel;
                        //dont reply anything
                        //Attachment res1 = Helper.CardHelper.DefaultCard();
                        ////for (int i = 0; i < res.Count(); i++)
                        ////    reply.Attachments.Add(res.ElementAt(i));
                        ////reply.AttachmentLayout = AttachmentLayoutTypes.Carousel;
                        //reply.Attachments.Add(res1);
                        break;
                        //return;
                }

                await context.PostAsync(reply);

            }
            else if (activity.Value != null)
            {
                await HandleActions(context, activity);
                return;
            }
        }

        private async Task HandleActions(IDialogContext context, Activity activity)
        {
            var actionDetails = JsonConvert.DeserializeObject<Models.ActionDetails<string>>(activity.Value.ToString());
            var userDetails = await GetCurrentUserDetails(activity);
            var reply = context.MakeMessage();

            string userName = userDetails.UserPrincipalName;
            //int index = userName.IndexOf(' ');
            //index = userName.IndexOf(' ', index + 1);
            //userName = userName.Substring(0, index);
            string UniqueId = activity.From.Id;
            string ServiceURL = activity.ServiceUrl;
            string TenantId = activity.GetChannelData<TeamsChannelData>().Tenant.Id;
                       
            switch (actionDetails.Action)
            {
                case Constants.SetPrefrencesDone:   //Press Done button on set preferences
                    EmployeeConnect.Models.SetPreferences setPref = Helper.GetDataHelper.SetPreferencesData(activity.Value.ToString());
                    setPref.UserName = userName;
                    //setPref.UserName = userDetails.Name;
                    EmployeeConnect.Models.Preference pref = Helper.GetDataHelper.MakeUPrefObject(setPref, UniqueId, ServiceURL, TenantId);
                    Helper.GetDataHelper.WritePreferences(pref);
                    reply.Text = "Your preferences are set.";
                    break;
                case Constants.ShowPrefCard:   //Press Skip button on set preferences
                    reply.Attachments.Add(CardHelper.SetTimePrefrences());
                    break;
                case Constants.SetPrefrencesSkip:   //Press Skip button on set preferences
                    reply.Text = "";
                    return;
                case Constants.TicketCancel:        //cancels the ticket with a ticket number:removes it from Ticket.json
                    string ticketno = actionDetails.TicketNo;
                    if (CancelTicket(ticketno) == true)
                        reply.Text = "Ticket deleted successfully";
                    else
                        reply.Text = "Ticket not available";
                    break;
            }
            await context.PostAsync(reply);
            return;
        }

        private async Task<TeamsChannelAccount> GetCurrentUserDetails(Activity activity)
        {
            // Fetch the members in the current conversation
            ConnectorClient connector = new ConnectorClient(new Uri(activity.ServiceUrl));
            var members = await connector.Conversations.GetConversationMembersAsync(activity.Conversation.Id);

            return members.FirstOrDefault(m => m.Id == activity.From.Id)?.AsTeamsChannelAccount();

        }

        //Cancels the ticket with ticketNo,returns true if ticket removed
        public bool CancelTicket(string ticketNo)
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Ticket.json";
            string json = File.ReadAllText(file);

            Newtonsoft.Json.Linq.JObject ticketObj = Newtonsoft.Json.Linq.JObject.Parse(json);
            for (int i = 0; i < ticketObj["ticket"].Count(); i++)
            {
                string str = ticketObj["ticket"][i]["ticketNo"].ToString();
                if (ticketObj["ticket"][i]["ticketNo"].ToString().Equals(ticketNo))
                {
                    ticketObj["ticket"][i].Remove();
                    string output = Newtonsoft.Json.JsonConvert.SerializeObject(ticketObj, Newtonsoft.Json.Formatting.Indented);
                    File.WriteAllText(file, output);
                    return true;
                }
            }
            return false;
        }

        private static string GetEmailKey(IActivity activity)
        {
            return activity.From.Id + EmailKey;
        }

        public static async Task<string> GetSigninUrl(Activity activity)
        {
            var connectionName = "ReadProfile";
            // var authClient = activity.GetOAuthClient(new MicrosoftAppCredentials("57af17b5-0742-4dc8-b16f-c72cb30134cc", "jsYEJGD427;$ukmvgHQ85{#"));
            OAuthClient authClient = activity.GetOAuthClient();// new OAuthClient(new MicrosoftAppCredentials("57af17b5-0742-4dc8-b16f-c72cb30134cc", "jsYEJGD427;$ukmvgHQ85{#"));
            // var url = await authClient.OAuthApi.GetSignInLinkAsync(activity, );
            //var query = activity.GetComposeExtensionQueryData();
            JObject data = activity.Value as JObject;
            string link = "";
            // Check if the request comes with login state
            if (data != null && data["state"] != null)
            {                
                var token1 = await authClient.OAuthApi.GetUserTokenAsync(activity.From.Id, connectionName, data["state"].ToString());
            }
            else
            {
                var token = await authClient.OAuthApi.GetUserTokenAsync(activity.From.Id, connectionName).ConfigureAwait(false);
                if (token == null)
                {
                    // Send the login response with the auth link.
                    link = await authClient.OAuthApi.GetSignInLinkAsync(activity, connectionName);
                }
            }
            return link;
        }

    }
}
