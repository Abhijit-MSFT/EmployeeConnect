using System.Threading.Tasks;

using Microsoft.Bot.Connector;
using Microsoft.Bot.Connector.Teams;

namespace EmployeeConnect
{
    public class EchoBot
    {
        public static async Task EchoMessage(ConnectorClient connector, Activity activity)
        {
            var reply = activity.CreateReply("You said: " + activity.GetTextWithoutMentions());
            await connector.Conversations.ReplyToActivityWithRetriesAsync(reply);
        }
    }
}
