﻿using EmployeeConnect.Common;
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
using System.Web.Script.Serialization;
using EmployeeConnect.Helper;

namespace EmployeeConnect.Dialogs
{
    [Serializable]
    public class RootDialog : IDialog<object>
    {
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
            var userDetails = await GetCurrentUserDetails(activity);
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
                        res = Helper.CardHelper.WelcomeCard();
                        for (int i = 0; i < res.Count(); i++)
                            reply.Attachments.Add(res.ElementAt(i));
                        reply.AttachmentLayout = AttachmentLayoutTypes.Carousel;
                        break;
                    case Common.Constants.SetPrefrences:
                        card = Helper.CardHelper.SetTimePrefrences();
                        reply.Text = "Set a preferred time to receive notifications for latest news, events and trainings and reminders.";
                        reply.Attachments.Add(card);
                        break;
                    case Common.Constants.UpcomingEventsTraining:
                        card = Helper.CardHelper.getETCard();
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
                        card = Helper.CardHelper.getNewsCard();
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
                        //dont reply anything
                        return;
                }

                await context.PostAsync(reply);

            }
            else if (activity.Value != null)
            {
                await HandleActions(context, activity);
                return;
            }
        }

        private static ThumbnailCard GetTaskModuleOptions()
        {
            ThumbnailCard card = new ThumbnailCard();
            card.Title = "Task Module Invocation from Thumbnail Card";
            card.Buttons = new List<CardAction>();

            card.Buttons.Add(new CardAction("invoke", TaskModelUIConstant.PurchaseOrder.ButtonTitle, null,
                new Models.BotFrameworkCardValue<string>()
                {
                    Data = TaskModelUIConstant.PurchaseOrder.Id
                }));
            card.Buttons.Add(new CardAction("invoke", TaskModelUIConstant.NewsCard.ButtonTitle, null,
                new Models.BotFrameworkCardValue<string>()
                {
                    Data = TaskModelUIConstant.NewsCard.Id
                }));

            return card;
        }

        private async Task HandleActions(IDialogContext context, Activity activity)
        {
            var actionDetails = JsonConvert.DeserializeObject<Models.ActionDetails<string>>(activity.Value.ToString());
            var userDetails = await GetCurrentUserDetails(activity);
            var reply = context.MakeMessage();
            switch (actionDetails.Action)
            {
                case Constants.SetPrefrencesDone:   //Press Done button on set preferences
                    EmployeeConnect.Models.SetPreferences setPref = Helper.GetDataHelper.setPreferencesData(activity.Value.ToString());
                    setPref.UserName = userDetails.Name;
                    EmployeeConnect.Models.Preference pref = Helper.GetDataHelper.makeUPrefObject(setPref);
                    Helper.GetDataHelper.WritePreferences(pref);
                    return;
                case Constants.SetPrefrencesSkip:   //Press Skip button on set preferences
                    reply.Text = "";
                    return;
                case Constants.TicketCancel:        //cancels the ticket with a ticket number:removes it from Ticket.json
                    string ticketno = actionDetails.TicketNo;
                    if(cancelTicket(ticketno)==true)
                        reply.Text = "Ticket deleted successfully";
                    else
                        reply.Text = "Ticket not available";
                    break;
            }
            await context.PostAsync(reply);
            return;
        }

        private static async Task<Attachment> GetDetailedRoasterCard(Activity activity, TeamsChannelAccount userDetails)
        {
            //var details = JsonConvert.DeserializeObject<AirlineActionDetails>(activity.Value.ToString());
            //Crew crew = await CabinCrewPlansHelper.ReadJson(userDetails.UserPrincipalName);
            //var datePlan = crew.plan.FirstOrDefault(c => c.flightDetails.flightStartDate.Date.ToString() == details.Id);
            //return CardHelper.GetDetailedRoster(datePlan);
            return null;
        }

        private async Task<TeamsChannelAccount> GetCurrentUserDetails(Activity activity)
        {
            // Fetch the members in the current conversation
            ConnectorClient connector = new ConnectorClient(new Uri(activity.ServiceUrl));
            var members = await connector.Conversations.GetConversationMembersAsync(activity.Conversation.Id);

            return members.FirstOrDefault(m => m.Id == activity.From.Id)?.AsTeamsChannelAccount();

        }

        //Cancels the ticket with ticketNo,returns true if ticket removed
        public bool cancelTicket(string ticketNo)
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

       
    }
}
