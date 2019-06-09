//changed
using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.Bot.Connector;
using Microsoft.Bot.Connector.Teams;
using Microsoft.Bot.Connector.Teams.Models;
//using Microsoft.Bot.Schema;
//using Microsoft.Teams.Samples.HelloWorld.Web.Controllers;
//using Microsoft.Teams.Samples.HelloWorld.Web.Models;
//using Microsoft.Teams.Samples.HelloWorld.Web.Helper;
using EmployeeConnect.Helper;
using EmployeeConnect.Models;

namespace Microsoft.Teams.Samples.HelloWorld.Web
{
    public class MessageExtension
    {
        public static ComposeExtensionResponse HandleMessageExtensionQuery(ConnectorClient connector, Activity activity)
        {
            GetDataHelper helper = new GetDataHelper();
            List<News> news = helper.GetNews();


            var query = activity.GetComposeExtensionQueryData();
            if (query == null /*|| (query.CommandId != "Speakers" || query.CommandId != "Sessions")*/)
            {
                return null;
            }

           /* if (query.CommandId == "speaker")
            {
                var title = "";
                var titleParam = query.Parameters?.FirstOrDefault(p => p.category == "speakerTitle");
                var response = new ComposeExtensionResponse(new ComposeExtensionResult("list", "result"));
                ComposeExtensionAttachment[] attachments = null;
                if (titleParam != null)
                {
                    title = titleParam.Value.ToString();

                    List<string> searchNames = speakers.Select(a => a.SpeakerName).Where(c => c.ToLower().Contains(title.ToLower())).Select(d => d).ToList();
                    List<string> searchImages = speakers.Where(a => a.SpeakerName.ToLower().Contains(title.ToLower())).Select(c => c.Snap).ToList();
                    List<string> searchBio = speakers.Where(a => a.SpeakerName.ToLower().Contains(title.ToLower())).Select(c => c.Bio).ToList();
                    List<string> searchTitle = speakers.Where(a => a.SpeakerName.ToLower().Contains(title.ToLower())).Select(c => c.Title).ToList();
                    int attacCount = searchNames.Count();

                    attachments = new ComposeExtensionAttachment[attacCount];
                    for (int i = 0; i < attacCount; i++)
                    {
                        attachments[i] = GetAttachment(searchImages[i], searchNames[i], searchTitle[i], searchBio[i]);
                    }
                    response.ComposeExtension.Attachments = attachments.ToList();
                }
                else
                {
                    List<string> searchNames = speakers.Select(c => c.SpeakerName).ToList();
                    List<string> searchImages = speakers.Select(c => c.Snap).ToList();
                    List<string> searchTitle = speakers.Select(c => c.Title).ToList();
                    List<string> searchBio = speakers.Select(c => c.Bio).ToList();
                    attachments = new ComposeExtensionAttachment[searchNames.Count];
                    for (int i = 0; i < searchNames.Count; i++)
                    {
                        attachments[i] = GetAttachment(searchImages[i], searchNames[i], searchTitle[i], searchBio[i]);
                    }
                    response.ComposeExtension.Attachments = attachments.ToList();
                }

                return response;
            }*/
            else if (query.CommandId == "EventsTrainings")
            {
                List<EventsAndTrainings> eventsTrainings = helper.GetEandT();

                var title = "";
                var titleParam = query.Parameters?.FirstOrDefault(p => p.Name == "ETTitle");
                var response = new ComposeExtensionResponse(new ComposeExtensionResult("list", "result"));
                ComposeExtensionAttachment[] attachments = null;
                if (titleParam != null)
                {
                    title = titleParam.Value.ToString();

                    List<string> searchTitle = eventsTrainings.Select(a => a.ETTitle).Where(c => c.ToLower().Contains(title.ToLower())).Select(d => d).ToList();
                    List<string> searchdate = eventsTrainings.Where(a => a.ETTitle.ToLower().Contains(title.ToLower())).Select(d => d.ETStartDate).ToList();
                    List<string> searchend = eventsTrainings.Where(a => a.ETTitle.ToLower().Contains(title.ToLower())).Select(d => d.ETEndDate).ToList();
                    List<string> searchETType = eventsTrainings.Where(a => a.ETTitle.ToLower().Contains(title.ToLower())).Select(d => d.ETType).ToList(); ;
                    int attacCount = searchTitle.Count();

                    attachments = new ComposeExtensionAttachment[attacCount];
                    for (int i = 0; i < attacCount; i++)
                    {
                       // string Type = searchSpeaker[i] + " - " + searchSessionType[i];
                        attachments[i] = GetAttachment(searchdate[i],searchend[i], searchTitle[i], searchETType[i]);
                    }
                    response.ComposeExtension.Attachments = attachments.ToList();
                }
                else
                {

                    List<string> searchTitle = eventsTrainings.Select(c => c.ETTitle).Take(20).ToList();
                    List<string> searchdate = eventsTrainings.Select(c => c.ETStartDate).Take(20).ToList();
                    List<string> searchend = eventsTrainings.Select(c => c.ETEndDate).Take(20).ToList();
                    List<string> searchETType = eventsTrainings.Select(c => c.ETType).ToList();
                    attachments = new ComposeExtensionAttachment[searchTitle.Count];
                    for (int i = 0; i < searchTitle.Count; i++)
                    {
                        //string speakerAndSessionType = searchSpeaker[i] + " - " + searchSessionType[i];
                        attachments[i] = GetAttachment(searchdate[i], searchend[i], searchTitle[i], searchETType[i]);
                    }
                    response.ComposeExtension.Attachments = attachments.ToList();
                }

                return response;
            }

            return null;

        }

        private static ComposeExtensionAttachment GetAttachment(string image, string Name, string title, string Bio)
        {
            var card = new ThumbnailCard
            {
                Title = Name,
                Subtitle = title,
                Text = Bio,
                Images = new List<CardImage>
                {
                    new CardImage(image)
                }

            };

            return card
                .ToAttachment()
                .ToComposeExtensionAttachment();
        }

        private static ComposeExtensionAttachment GetAttachments(string SessionName, string speaker, string abs)
        {
            var card = new ThumbnailCard
            {
                Title = SessionName,
                Subtitle = speaker,
                Text = abs,
                Buttons = new List<CardAction>
                {
                    new CardAction(ActionTypes.OpenUrl, "Agenda", value:"https://teams.microsoft.com/l/entity/dd957ead-8d7a-424a-af9e-a91eb63683c4/Emgmt")
                }
            };

            return card
                .ToAttachment()
                .ToComposeExtensionAttachment();
        }
    }
}

