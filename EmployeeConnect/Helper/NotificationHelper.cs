using Microsoft.Bot.Connector;
using Microsoft.Bot.Connector.Teams.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

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

    }
}