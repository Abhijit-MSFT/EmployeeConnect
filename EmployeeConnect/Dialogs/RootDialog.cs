using EmployeeConnect.Common;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using Microsoft.Bot.Connector.Teams;
using Microsoft.Bot.Connector.Teams.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


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

            /*Task Module Added*/
            //var tMessage = (Activity)await result;
            //var treply = tMessage.CreateReply();
            //ThumbnailCard Tcard = GetTaskModuleOptions();
            //treply.Attachments.Add(Tcard.ToAttachment());
            //await context.PostAsync(treply);
            //context.Wait(MessageReceivedAsync);
            /*Ends here*/

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
                        card = Helper.CardHelper.UpcomingEventsTraining();
                        //reply.Text = "Upcoming events and training";
                        reply.Attachments.Add(card);
                        break;
                    //case Common.Constants.ReviewTasks:
                    //    card = Helper.CardHelper.ReviewTasks();
                    ///    reply.Attachments.Add(card);
                    //    break;
                    case Common.Constants.PendingApprovals:
                        card = Helper.CardHelper.PendingApprovals();
                        reply.Attachments.Add(card);
                        break;
                    case Common.Constants.PendingTasks:
                        card = Helper.CardHelper.PendingTasks();
                        reply.Attachments.Add(card);
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
                    //case Constants.NextMonthRoster:
                    //    card = CardHelper.GetMonthlyRosterCard();
                    //    break;
                    //case Constants.NextWeekRoster:
                    //    card = await CardHelper.GetWeeklyRosterCard(userDetails.UserPrincipalName);
                    //    break;
                    //case Constants.UpdateCard:
                    //    card = CardHelper.GetUpdateScreen();
                    //    break;
                    //default:
                    //    card = CardHelper.GetWelcomeScreen(userDetails.GivenName ?? userDetails.Name);
                    //    break;
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
                    case Common.Constants.CreateTicket:
                        reply.Text = "This functionality is under construction";
                        //deeplink to createTicket
                        break;
                    case Common.Constants.WifiRequest:
                        //deeplink to createTicket
                        reply.Text = "This functionality is under construction";
                        break;
                    default:
                        if (message.Trim().All(char.IsDigit))
                        {         //if message was a number,it is a newsId 
                            card = Helper.CardHelper.GetNewsCardbyId(message.Trim());
                            if (card == null)
                                reply.Text = "I dont have that info";
                            else
                                reply.Attachments.Add(card);
                        }
                        else
                        {
                            reply.Text = "I dont have that info";
                        }
                        break;
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

            return card;
        }

        private async Task HandleActions(IDialogContext context, Activity activity)
        {
            //var actionDetails = JsonConvert.DeserializeObject<ActionDetails>(activity.Value.ToString());
            //var userDetails = await GetCurrentUserDetails(activity);
            //var type = actionDetails.ActionType;

            //Attachment card = null;

            //switch (type)
            //{
            //    case Constants.ShowDetailedRoster:
            //        card = await GetDetailedRoasterCard(activity, userDetails);
            //        break;
            //    case Constants.NextWeekRoster:
            //        card = await CardHelper.GetWeeklyRosterCard(userDetails.UserPrincipalName);
            //        break;
            //    case Constants.NextMonthRoster:
            //        card = CardHelper.GetMonthlyRosterCard();
            //        break;
            //    case Constants.WeatherCard:
            //        card = await GetWeatherCard(activity);
            //        break;
            //    case Constants.CurrencyCard:
            //        card = await GetCurrencyCard(activity);
            //        break;
            //}

            var reply = context.MakeMessage();
            // reply.Attachments.Add(card);
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

    }
}
