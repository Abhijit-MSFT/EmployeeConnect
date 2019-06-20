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
using EmployeeConnect.Models;
using EmployeeConnect.Helper;
using Newtonsoft.Json;
using EmployeeConnect.Common;
using Newtonsoft.Json.Linq;

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

        private HttpResponseMessage HandleInvokeMessages(Activity activity)
        {
            var activityValue = activity.Value.ToString();
            if (activity.Name == "task/fetch")
            {
                BotFrameworkCardValue<string> action;
                try
                {
                    action = JsonConvert.DeserializeObject<TaskModuleActionData<string>>(activityValue).Data;
                }
                catch (Exception)
                {
                    action = JsonConvert.DeserializeObject<BotFrameworkCardValue<string>>(activityValue);
                }

                TaskInfo taskInfo = GetTaskInfo(action.Data);
                TaskEnvelope taskEnvelope = new TaskEnvelope
                {
                    Task = new Models.Task()
                    {
                        Type = TaskType.Continue,
                        TaskInfo = taskInfo
                    }
                };
                return Request.CreateResponse(HttpStatusCode.OK, taskEnvelope);

            }
            else if (activity.Name == "task/submit")
            {
                ConnectorClient connector = new ConnectorClient(new Uri(activity.ServiceUrl));
                Activity reply = activity.CreateReply("Received = " + activity.Value.ToString());
                connector.Conversations.ReplyToActivity(reply);
            }
            return new HttpResponseMessage(HttpStatusCode.Accepted);
        }

        /// <summary>
        /// Handle an invoke activity.
        /// </summary>
        private async Task<HttpResponseMessage> HandleInvokeActivity(Activity activity)
        {
            var activityValue = activity.Value.ToString();
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
                      
                    
                case "task/submit":
                    // Handle submission of task module info
                    // Run this on a task so that 
                    ConnectorClient connectorclient = new ConnectorClient(new Uri(activity.ServiceUrl));
                    Activity reply = activity.CreateReply("Received = " + activity.Value.ToString());
                    connectorclient.Conversations.ReplyToActivity(reply);
                    return new HttpResponseMessage(HttpStatusCode.Accepted);
            }
            return new HttpResponseMessage(HttpStatusCode.Accepted);
        }

        private static TaskInfo GetTaskInfo(string actionInfo)
        {
            TaskInfo taskInfo = new TaskInfo();
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
                    SetTaskInfo(taskInfo, TaskModelUIConstant.EventCard);
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
           // taskInfo.Title = uIConstants.Title.ToString();
        }

        /// <summary>
        /// Handle request to fetch task module content.
        /// </summary>
        private static async System.Threading.Tasks.Task HandleConversationUpdate(Activity message)
        {
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
                    if (message.MembersAdded.Any(m => m.Id.Contains(message.Recipient.Id)))
                    {
                        // Bot was added to a team: send welcome message
                        message.Text = "hi";
                        await Conversation.SendAsync(message, () => new RootDialog());
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
