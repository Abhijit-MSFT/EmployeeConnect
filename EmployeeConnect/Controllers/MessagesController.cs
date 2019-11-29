using EmployeeConnect.Common;
using EmployeeConnect.Dialogs;
using EmployeeConnect.Helper;
using EmployeeConnect.Models;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using Microsoft.Bot.Connector.Teams;
using Microsoft.Bot.Connector.Teams.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace EmployeeConnect.Controllers
{
    [BotAuthentication]
    public class MessagesController : ApiController
    {
        [HttpPost]
        public async Task<HttpResponseMessage> Post([FromBody] Activity activity)
        {
            //GetDataHelper.GetEandTFromSPandWriteToFile();
            switch (activity.Type)
            {
                case ActivityTypes.Message:
                    await Conversation.SendAsync(activity, () => new RootDialog());
                    break;
                case ActivityTypes.Invoke:
                    return await HandleInvokeActivity(activity);
                case ActivityTypes.ConversationUpdate:
                    await HandleConversationUpdate(activity);
                    break;
            }
            return new HttpResponseMessage(HttpStatusCode.Accepted);
        }

        private async Task<HttpResponseMessage> HandleInvokeActivity(Activity activity)
        {
            var activityValue = activity.Value.ToString();
            string ETid;
            Models.TaskInfo taskInfo;
            Models.TaskEnvelope taskEnvelope;
            switch (activity.Name)
            {
                case "signin/verifyState":
                    await Conversation.SendAsync(activity, () => new RootDialog());
                    break;
                case "composeExtension/query":
                    // Handle fetching task module content
                    var connector = new ConnectorClient(new Uri(activity.ServiceUrl));
                    var response = MessageExtension.HandleMessageExtensionQuery(connector, activity);
                    return response != null ? Request.CreateResponse<ComposeExtensionResponse>(response) : new HttpResponseMessage(HttpStatusCode.OK);
                case "task/fetch":
                    // Handle fetching task module content
                    string action = string.Empty;

                    try
                    {
                        var input = JsonConvert.DeserializeObject<TaskFetchData>(activityValue);
                        action = input.data.data;

                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex);
                        // action = JsonConvert.DeserializeObject<Models.BotFrameworkCardValue<string>>(activityValue);
                    }
                    taskInfo = GetTaskInfo(action);

                    taskEnvelope = new Models.TaskEnvelope
                    {
                        Task = new Models.Task()
                        {
                            Type = Models.TaskType.Continue.ToString().ToLower(),
                            TaskInfo = taskInfo
                        }
                    };
                    return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);
                case "task/submit":
                    string taskId = JsonConvert.DeserializeObject<TaskModuleSubmitData<TicketTaskData>>(activityValue).Data.action;
                    //string commandid = details.commandId;
                    switch (taskId)
                    {

                        case "ticketcomplete":
                            var createTicketData = JsonConvert.DeserializeObject<SubmitActionData<TicketTaskData>>(activityValue).data;
                            taskInfo = GetTaskInfo(taskId);
                            var ticketurl = "?ticketNoId=" + createTicketData.ticketNo + "&description=" + createTicketData.TDescription + "&category=" + createTicketData.TCategory + "&priority=" + createTicketData.TPriority;
                            taskInfo.Url = taskInfo.Url + ticketurl;
                            taskInfo.FallbackUrl = taskInfo.FallbackUrl + ticketurl;

                            taskEnvelope = new Models.TaskEnvelope
                            {
                                Task = new Models.Task()
                                {
                                    Type = Models.TaskType.Continue.ToString().ToLower(),
                                    TaskInfo = taskInfo
                                }
                            };

                            return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);
                        case "podecline":
                            var podeclineData = JsonConvert.DeserializeObject<SubmitActionData<PODeclineData>>(activityValue).data;
                            taskInfo = GetTaskInfo(taskId);
                            var declineUrl = "?poNo=" + podeclineData.poNumber;
                            taskInfo.Url = taskInfo.Url + declineUrl;
                            taskInfo.FallbackUrl = taskInfo.FallbackUrl + declineUrl;

                            taskEnvelope = new Models.TaskEnvelope
                            {
                                Task = new Models.Task()
                                {
                                    Type = Models.TaskType.Continue.ToString().ToLower(),
                                    TaskInfo = taskInfo
                                }
                            };

                            return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);
                        case "decline":
                            var declineData = JsonConvert.DeserializeObject<SubmitActionData<DeclineData>>(activityValue).data;
                            taskId = "declined";
                            taskInfo = GetTaskInfo(taskId);
                            var decUrl = "?poNo=" + declineData.PONo + "&reason=" + declineData.reason + "&comment=" + declineData.comments;
                            taskInfo.Url = taskInfo.Url + decUrl;
                            taskInfo.FallbackUrl = taskInfo.FallbackUrl + decUrl;

                            taskEnvelope = new Models.TaskEnvelope
                            {
                                Task = new Models.Task()
                                {
                                    Type = Models.TaskType.Continue.ToString().ToLower(),
                                    TaskInfo = taskInfo
                                }
                            };

                            return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);
                        case "editVisitorRequest":
                            taskInfo = GetTaskInfo(taskId);
                            taskEnvelope = new Models.TaskEnvelope
                            {
                                Task = new Models.Task()
                                {
                                    Type = Models.TaskType.Continue.ToString().ToLower(),
                                    TaskInfo = taskInfo
                                }
                            };
                            return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);
                        case "editTicket":

                            taskInfo = GetTaskInfo(taskId);
                            taskEnvelope = new Models.TaskEnvelope
                            {
                                Task = new Models.Task()
                                {
                                    Type = Models.TaskType.Continue.ToString().ToLower(),
                                    TaskInfo = taskInfo
                                }
                            };

                            return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);

                        case "sendrequest":
                            var savevisitordata = JsonConvert.DeserializeObject<SubmitActionData<VisitorData>>(activityValue).data;
                            taskInfo = GetTaskInfo(taskId);
                            var vurl = "?Date=" + savevisitordata.Vdate + "&Time=" + savevisitordata.Vtime + "&Contact=" + savevisitordata.Vcontact + "&location=" + savevisitordata.VhostLocation + "&purpose=" + savevisitordata.Vpurpose + "&hostName=" + savevisitordata.VhostName + "&org=" + savevisitordata.Vorg;
                            taskInfo.Url = taskInfo.Url + vurl;
                            taskInfo.FallbackUrl = taskInfo.FallbackUrl + vurl;

                            taskEnvelope = new Models.TaskEnvelope
                            {
                                Task = new Models.Task()
                                {
                                    Type = Models.TaskType.Continue.ToString().ToLower(),
                                    TaskInfo = taskInfo
                                }
                            };

                            return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);

                        case TaskModuleIds.toggleEventStatus:
                            // TODO Event - EventTaskData
                            var eventData = JsonConvert.DeserializeObject<SubmitActionData<EventTaskData>>(activityValue).data;

                            //will update the button action Added<->Removed
                            GetDataHelper.ETStatusUpdate(eventData.eventId);
                            return new HttpResponseMessage(HttpStatusCode.Accepted);

                        default: // Handled all remaining cases for task module. Ex-  Close, PoDeclinedClosed
                            return Request.CreateResponse(HttpStatusCode.OK);

                    }
                case "composeExtension/submitAction":

                    var details = JsonConvert.DeserializeObject<SubmitActionData>(activityValue);
                    string commandid = details.commandId;
                    switch (details.commandId)
                    {
                        case "createticket":
                            var createTicketData = JsonConvert.DeserializeObject<SubmitActionData<TicketTaskData>>(activityValue);
                            if (createTicketData.data == null)
                            {
                                commandid = details.commandId;
                                taskInfo = GetTaskInfo(commandid);
                                taskEnvelope = new Models.TaskEnvelope
                                {
                                    Task = new Models.Task()
                                    {
                                        Type = Models.TaskType.Continue.ToString().ToLower(),
                                        TaskInfo = taskInfo
                                    }
                                };

                                return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);
                            }
                            else if (createTicketData.data.action == "submit")
                            {
                                return Request.CreateResponse(HttpStatusCode.OK);
                            }
                            else if (createTicketData.data.action == "submitTicket")
                            {
                                return Request.CreateResponse(HttpStatusCode.OK);
                            }
                            else
                            {
                                commandid = createTicketData.data.action;
                                taskInfo = GetTaskInfo(commandid);
                                var ticketurl = "?ticketNoId=" + createTicketData.data.ticketNo + "&description=" + createTicketData.data.TDescription + "&category=" + createTicketData.data.TCategory + "&priority=" + createTicketData.data.TPriority;
                                taskInfo.Url = taskInfo.Url + ticketurl;
                                taskInfo.FallbackUrl = taskInfo.FallbackUrl + ticketurl;
                                taskEnvelope = new Models.TaskEnvelope
                                {
                                    Task = new Models.Task()
                                    {
                                        Type = Models.TaskType.Continue.ToString().ToLower(),
                                        TaskInfo = taskInfo
                                    }
                                };

                                return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);
                            }
                        case "visitorregistration":
                            var savevisitordata = JsonConvert.DeserializeObject<SubmitActionData<VisitorData>>(activityValue);

                            if (savevisitordata.data == null)
                            {
                                commandid = details.commandId;
                                taskInfo = GetTaskInfo(commandid);
                                taskEnvelope = new Models.TaskEnvelope
                                {
                                    Task = new Models.Task()
                                    {
                                        Type = Models.TaskType.Continue.ToString().ToLower(),
                                        TaskInfo = taskInfo
                                    }
                                };

                                return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);
                            }
                            else if (savevisitordata.data.action == "submitVisitor")
                            {
                                return Request.CreateResponse(HttpStatusCode.OK);
                            }
                            else if (savevisitordata.data.action == "submitRequest")
                            {
                                return Request.CreateResponse(HttpStatusCode.OK);
                            }
                            else
                            {
                                commandid = savevisitordata.data.action;
                                taskInfo = GetTaskInfo(commandid);
                                var ticketurl = "?Date=" + savevisitordata.data.Vdate + "&Time=" + savevisitordata.data.Vtime + "&Contact=" + savevisitordata.data.Vcontact + "&location=" + savevisitordata.data.VhostLocation + "&purpose=" + savevisitordata.data.Vpurpose + "&hostName=" + savevisitordata.data.VhostName + "&org=" + savevisitordata.data.Vorg;
                                taskInfo.Url = taskInfo.Url + ticketurl;
                                taskInfo.FallbackUrl = taskInfo.FallbackUrl + ticketurl;
                                taskEnvelope = new Models.TaskEnvelope
                                {
                                    Task = new Models.Task()
                                    {
                                        Type = Models.TaskType.Continue.ToString().ToLower(),
                                        TaskInfo = taskInfo
                                    }
                                };

                                return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);
                            }
                        default:
                            commandid = details.commandId;
                            break;
                    }
                    break;
                case "composeExtension/onCardButtonClicked":
                    ETid = JsonConvert.DeserializeObject<Models.TaskModuleSubmitData<string>>(activityValue).Data;
                    GetDataHelper.ETStatusUpdate(ETid);
                    break;
            }
            return new HttpResponseMessage(HttpStatusCode.Accepted);
        }

        private static TaskInfo GetTaskInfo(string actionInfo)
        {


            string EandTID = actionInfo.Substring(7);
            string newsID = actionInfo.Substring(5);
          
            TaskInfo taskInfo = new TaskInfo();
            if (actionInfo.StartsWith("news:"))
            {
                Dictionary<int, string> newsDic = new Dictionary<int, string>();

                newsDic.Add(33, "Bringing-human-like-reasoning-to-driverless-car-navigation.aspx");
                newsDic.Add(32, "Microsoft-Hackathon-2019-winning-team--‘Think-bigger-–-and-believe-you-can-change-the-world’.aspx");
                newsDic.Add(31, "How-building-robots-together-is-opening-doors-and-hearts.aspx");
                newsDic.Add(29, "Microsoft%E2%80%99s-AI-for-Accessibility-grant-winners--%E2%80%98You-want-to-be-seen-as-the-person-you-are.aspx");
                newsDic.Add(30, "Xbox-Game-Pass-Subscription-Service-Headed-to-PC-With-Over-100-Titles.aspx");
                newsDic.Add(40, "With-a-hop,-a-skip-and-a-jump,-high-flying-robot-leaps-through-obstacles-with-ease.aspx");
                newsDic.Add(41, "Teaching-language-models-grammar-really-does-make-them-smarter.aspx");
                newsDic.Add(42, "Unmoored’--Times-Square-installation-shows-how-artists-can-anchor-storytelling-with-mixed-reality.aspx");
                newsDic.Add(43, "How-gamers-with-disabilities-helped-design-the-new-Xbox-Adaptive-Controller’s-elegantly-accessible-packaging.aspx");
                newsDic.Add(45, "How-(and-Why)-Collaboration-Brings-About-Stronger,-More-Creative-Web-Design.aspx");
                newsDic.Add(44, "What’s-the-solution-to-the-growing-problem-of-passwords--You,-says-Microsoft.aspx");

                if (newsDic.ContainsKey(Convert.ToInt32(newsID)))
                {
                    string newsName = newsDic[Convert.ToInt32(newsID)];

                    taskInfo.Url = "https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/_layouts/15/teamslogon.aspx?spfx=true&dest=/sites/EmployeeConnectPrototype/SitePages/"+ newsName;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.NewsCard);
                    taskInfo.Title = "News";
                    return taskInfo;
                }
               
               

                //taskInfo.Card = CardHelper.GetNewsCardbyId(actionInfo.Substring(5));            
       
            }
            if (actionInfo.StartsWith("events:"))
            {
               // string EandTID = actionInfo.Substring(7);
                //taskInfo.Card = CardHelper.GetETbyID(actionInfo.Substring(7));
                 taskInfo.Url = "https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/_layouts/15/Event.aspx?ListGuid=59c3fe4a-12f2-4ece-bcf2-eb850a0c357d&ItemId=" + EandTID;
                SetTaskInfo(taskInfo, TaskModelUIConstant.ETCard);
                return taskInfo;
            }
            if (actionInfo.StartsWith("purchaseorder?poNumber="))
            {
                taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + actionInfo;
                //taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + "/purchaseorder?poNumber=" + "739248" + "&vendorno=" + "68282";
                SetTaskInfo(taskInfo, TaskModelUIConstant.PurchaseOrder);
                return taskInfo;
            }
            switch (actionInfo)
            {
                case TaskModuleIds.PurchaseOrder:
                    taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + TaskModuleIds.PurchaseOrder;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.PurchaseOrder);
                    break;
                case TaskModuleIds.PODecline:
                    taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + TaskModuleIds.PODecline;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.PoDecline);
                    break;
                case TaskModuleIds.Declined:
                    taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + TaskModuleIds.Declined;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.Declined);
                    break;
                case TaskModuleIds.CreateTicket:
                    taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + TaskModuleIds.CreateTicket;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.CreateTicket);
                    break;
                case TaskModuleIds.TicketComplete:
                    taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + TaskModuleIds.TicketComplete;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.TicketComplete);
                    break;
                case TaskModuleIds.SendRequest:
                    taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + TaskModuleIds.SendRequest;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.SendRequest);
                    break;
                case TaskModuleIds.EventCard:
                    //taskInfo.Card = CardHelper.GetETbyID("7");
                    // taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + TaskModuleIds.EventCard;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.ETCard);
                    break;
                case TaskModuleIds.VisitorRegistration:
                    taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + TaskModuleIds.VisitorRegistration;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.VisitorRegistration);
                    break;
                case TaskModuleIds.pendingDates:
                    taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + TaskModuleIds.pendingDates;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.PendingDates);
                    break;
                case TaskModuleIds.editTicket:
                    taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + TaskModuleIds.CreateTicket;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.CreateTicket);
                    break;
                case TaskModuleIds.editVisitorRequest:
                    taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + TaskModuleIds.VisitorRegistration;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.VisitorRegistration);
                    break;
                default:
                    break;
            }
            return taskInfo;
        }

        private static void SetTaskInfo(Models.TaskInfo taskInfo, UIConstants uIConstants)
        {
            taskInfo.Height = uIConstants.Height;
            taskInfo.Width = uIConstants.Width;
        }


        /// <summary>
        /// Handle request to fetch task module content.
        /// </summary>
        private static async System.Threading.Tasks.Task HandleConversationUpdate(Activity message)
        {
            //if(message.)
            ConnectorClient connector = new ConnectorClient(new Uri(message.ServiceUrl));
            var channelData = message.GetChannelData<TeamsChannelData>();
            // Treat 1:1 add/remove events as if they were add/remove of a team member

            if (channelData.EventType == null)
            {
                if (message.MembersAdded != null)
                    channelData.EventType = "teamMemberAdded";
                if (message.MembersRemoved != null)
                    channelData.EventType = "teamMemberRemoved";
            }
            switch (channelData.EventType)
            {
                case "teamMemberAdded":
                    // Team member was added (user or bot)
                    var members = await connector.Conversations.GetConversationMembersAsync(message.Conversation.Id);

                    var userDetails = members.FirstOrDefault(m => m.Id == message.From.Id)?.AsTeamsChannelAccount();
                    if (channelData.Team == null)   //if bot added in personal scope,send a welcome message to user
                    {
                        if (message.MembersAdded.Any(m => m.Id.Contains(message.Recipient.Id)))
                        {
                            // Bot was added to a team: send welcome message
                            var connectorClient = new ConnectorClient(new Uri(message.ServiceUrl));
                            //Activity welcomeMessage = message.CreateReply();

                            await Conversation.SendAsync(message, () => new RootDialog());
                            //For get Prefrences card
                            /*
                            welcomeMessage.Text = string.Format("Hi {0}.Let's get your Preferences set.",userDetails.Name);
                            Attachment card = Helper.CardHelper.SetTimePrefrences();
                            welcomeMessage.Attachments.Add(card);
                            await connectorClient.Conversations.ReplyToActivityWithRetriesAsync(welcomeMessage);*/

                            //For Welcome Card

                            /*string url = await RootDialog.getSigninUrl(message);
                            await RootDialog.SendOAuthCardAsync(context, (Activity)context.Activity);
                            List<Attachment> res;
                            res = Helper.CardHelper.WelcomeCard(url);
                            for (int i = 0; i < res.Count(); i++)
                                welcomeMessage.Attachments.Add(res.ElementAt(i));
                            welcomeMessage.AttachmentLayout = AttachmentLayoutTypes.Carousel;
                            await connectorClient.Conversations.ReplyToActivityWithRetriesAsync(welcomeMessage);*/
                        }
                    }
                    break;
                case "teamMemberRemoved":
                    // Add team & channel details 
                    if (message.MembersRemoved.Any(m => m.Id.Contains(message.Recipient.Id)))
                    {
                        // Bot was removed from a team: remove entry for the team in the database
                    }
                    else
                    {
                        // Member was removed from a team: update the team member  count
                    }
                    break;
                // Update the team and channel info in the database when the team is rename or when channel are added/removed/renamed
                case "teamRenamed":
                    // Rename team & channel details 
                    break;
                case "channelCreated":
                    break;
                case "channelRenamed":
                    break;
                case "channelDeleted":
                    break;
                default:
                    break;
            }
        }


    }
}
