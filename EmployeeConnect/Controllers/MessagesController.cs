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
using AdaptiveCards;
using Newtonsoft.Json.Linq;
using EmployeeConnect.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Script.Serialization;
using EmployeeConnect.Models;
using System.Net;
using System.Drawing;
using System.Web.Caching;

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
                    switch (data)
                    {
                        case "close_button":
                            break;
                        default:
                            int n = data.Length;
                            string t = data.Substring(n - 4, 4);

                            int x = Int32.Parse(t);
                            x = x - 1231;
                            string s;
                            string r;
                            bool b;
                            b = data[0] == 'R' ? false : true;
                            s = data[0] == 'R' ? "Removed" : "Added";
                            r = data[0] == 'R' ? "false" : "true";
                            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/EventsandTraining_June.json";
                            string json = File.ReadAllText(file);
                            dynamic jsonObj = Newtonsoft.Json.JsonConvert.DeserializeObject(json);
                            if(jsonObj["EventsAndTraining"][x]["ETFlag"]=="E")
                            {
                                jsonObj["EventsAndTraining"][x]["ETAddRemoveFlag"] = s;
                                jsonObj["EventsAndTraining"][x]["register"] = null;
                            }
                            else
                            {
                                jsonObj["EventsAndTraining"][x]["ETAddRemoveFlag"] = null;
                                jsonObj["EventsAndTraining"][x]["register"] =r;
                            }
                            jsonObj["EventsAndTraining"][x]["UserAdded"] = b;
                            string output = Newtonsoft.Json.JsonConvert.SerializeObject(jsonObj, Newtonsoft.Json.Formatting.Indented);
                            File.WriteAllText(file, output);
                            break;
                    }
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
                case TaskModuleIds.CreateTicket:
                    taskInfo.Url = taskInfo.FallbackUrl = ApplicationSettings.BaseUrl + "/" + TaskModuleIds.CreateTicket;
                    SetTaskInfo(taskInfo, TaskModelUIConstant.CreateTicket);
                    break;
                case TaskModuleIds.VisitorRegistration:
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
    }
}
