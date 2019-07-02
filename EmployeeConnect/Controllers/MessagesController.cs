using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using EmployeeConnect.Dialogs;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using Microsoft.Bot.Connector.Teams.Models;
using EmployeeConnect.Helper;
using Newtonsoft.Json;
using EmployeeConnect.Common;
using Newtonsoft.Json.Linq;
using EmployeeConnect.Models;
using System.IO;

namespace EmployeeConnect.Controllers
{
    [BotAuthentication]
    public class MessagesController : ApiController
    {
        [HttpPost]  
        public async Task<HttpResponseMessage> Post([FromBody] Activity activity)
        {
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
                    Models.BotFrameworkCardValue<string> action;

                    try
                    {
                        action = JsonConvert.DeserializeObject<Models.TaskModuleActionData<string>>(activityValue).Data;
                    }
                    catch (Exception)
                    {
                        action = JsonConvert.DeserializeObject<Models.BotFrameworkCardValue<string>>(activityValue);
                    }
                    Models.TaskInfo taskInfo = GetTaskInfo(action.Data);
                    Models.TaskEnvelope taskEnvelope = new Models.TaskEnvelope
                    {
                        Task = new Models.Task()
                        {
                            Type = Models.TaskType.Continue,
                            TaskInfo = taskInfo
                        }
                    };
                    return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);
                case "task/submit":
                    string data = JsonConvert.DeserializeObject<Models.TaskModuleSubmitData<string>>(activityValue).Data;
                    //string datajson = JsonConvert.DeserializeObject<Models.TaskModuleSubmitData<string>>(activityValue).DataJson;
                    if (data.Length > 2 && data.Substring(0, 2) == "ET")
                    {
                        ETid = data.Substring(2);
                        //will update the button action Added<->Removed
                        GetDataHelper.ETStatusUpdate(ETid);
                        return new HttpResponseMessage(HttpStatusCode.Accepted);
                    }
                    switch (data)
                    {
                        //When close is pressed on task module card
                        case "close_button":
                            break;
                        default:    //need to build
                            break;
                    }
                    break;
                case "composeExtension/submitAction":
                    string commandid = JsonConvert.DeserializeObject<Models.TaskModuleSubmitData<string>>(activityValue).commandId;
                    taskInfo = GetTaskInfo(commandid);
                    taskEnvelope = new Models.TaskEnvelope
                    {
                        Task = new Models.Task()
                        {
                            Type = Models.TaskType.Continue,
                            TaskInfo = taskInfo
                        }
                    };

                    return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);
                case "composeExtension/onCardButtonClicked":
                    ETid = JsonConvert.DeserializeObject<Models.TaskModuleSubmitData<string>>(activityValue).Data;
                    GetDataHelper.ETStatusUpdate(ETid);
                    break;
            }
            return new HttpResponseMessage(HttpStatusCode.Accepted);
        }

        private static TaskInfo GetTaskInfo(string actionInfo)
        {
            TaskInfo taskInfo = new TaskInfo();
            if (actionInfo.StartsWith("news:"))
            {
                taskInfo.Card = JObject.FromObject(Helper.CardHelper.GetNewsCardbyId(actionInfo.Substring(5)));
                SetTaskInfo(taskInfo, TaskModelUIConstant.NewsCard);
                return taskInfo;
            }
            if (actionInfo.StartsWith("events:"))
            {
                taskInfo.Card = JObject.FromObject(Helper.CardHelper.GetETbyID(actionInfo.Substring(7)));
                SetTaskInfo(taskInfo, TaskModelUIConstant.ETCard);
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
                    if (channelData.Team == null)   //if bot added in personal scope,send a welcome message to user
                    {
                        if (message.MembersAdded.Any(m => m.Id.Contains(message.Recipient.Id)))
                        {
                            // Bot was added to a team: send welcome message
                            var connectorClient = new ConnectorClient(new Uri(message.ServiceUrl));
                            Activity welcomeMessage = message.CreateReply();

                            welcomeMessage.Text = "Welcome.Let's get your Preferences set.";
                            Attachment card = Helper.CardHelper.SetTimePrefrences();
                            welcomeMessage.Attachments.Add(card);
                            await connectorClient.Conversations.ReplyToActivityWithRetriesAsync(welcomeMessage);
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

        //changes the status of eT Registered<->Unregistered, Added<->Remove
      
    }
}
