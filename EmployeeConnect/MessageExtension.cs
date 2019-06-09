using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.WebPages;
using Microsoft.Bot.Connector;
using Microsoft.Bot.Connector.Teams;
using Microsoft.Bot.Connector.Teams.Models;
using EmployeeConnect.Models;
using EmployeeConnect.Helper;
using EmployeeConnect.Controllers;
using System.Windows.Forms;

namespace EmployeeConnect
{
    public class MessageExtension
    {
        public static ComposeExtensionResponse HandleMessageExtensionQuery(ConnectorClient connector, Activity activity)
        {
           // GetDataHelper helper = new GetDataHelper();
            var query = activity.GetComposeExtensionQueryData();
            if (query == null)
            {
                // We only process the 'getRandomText' queries with this message extension
                return null;
            }
            if (query.CommandId == "News")
            {
                NewsModel news  = GetDataHelper.GetNews();
                var title = "";
                var titleParam = query.Parameters?.FirstOrDefault(p => p.Name == "newstitle");
                var response = new ComposeExtensionResponse(new ComposeExtensionResult("list", "result"));
                ComposeExtensionAttachment[] attachments = null;
                if (titleParam != null)
                {
                    title = titleParam.Value.ToString();
                   // List<string> searchtitle = news.Select(a => a.NewsTitle).Where(c => c.ToLower().Contains(title.ToLower())).Select(d => d).ToList();
                  //  List<string> searchImages = news.Where(a => a.NewsTitle.ToLower().Contains(title.ToLower())).Select(c => c.NewsThumbnailUrl).ToList();
                  //  List<string> searchDateTime = news.Where(a => a.NewsTitle.ToLower().Contains(title.ToLower())).Select(c => c.NewsDateTIme).ToList();
                  //  List<string> searchviews = news.Where(a => a.NewsTitle.ToLower().Contains(title.ToLower())).Select(c => c.NoOfViews).ToList();
                  //  List<string> searchby = news.Where(a => a.NewsTitle.ToLower().Contains(title.ToLower())).Select(c => c.NewsBy).ToList();
                  //  int attacCount = searchtitle.Count();
                   // attachments = new ComposeExtensionAttachment[attacCount];
                   // for (int i = 0; i < attacCount; i++)
                  //  {
                  //      attachments[i] = GetAttachment(searchImages[i], searchtitle[i], searchDateTime[i], searchviews[i],searchby[i]);
                  //  }


                    response.ComposeExtension.Attachments = attachments.ToList();
                }
                else
                {
                    
                   // List<string> searchtitle = news.Select(c => c.NewsTitle).ToList();
                   // List<string> searchImages = news.Select(c => c.NewsThumbnailUrl).ToList();
                  //  List<string> searchDateTime = news.Select(c => c.NewsDateTIme).ToList();
                  //  List<string> searchviews = news.Select(c => c.NoOfViews).ToList();
                  //  List<string> searchby=news.Select(c => c.NewsBy).ToList();
                  //  attachments = new ComposeExtensionAttachment[searchtitle.Count()];
                  //  for (int i = 0; i < searchtitle.Count(); i++)
                  //  {
                  //      attachments[i] = GetAttachment(searchImages[i], searchtitle[i], searchDateTime[i], searchviews[i],searchby[i]);
                  //  }
                    response.ComposeExtension.Attachments = attachments.ToList();
                }
                return response;
            }
            else
            {
                return null;
            }

            
        }

        private static ComposeExtensionAttachment GetAttachment(string image,string title,string datetime,string views,string by )
        {
            var card = new ThumbnailCard
            {
                Title = title,
                Subtitle=datetime,
                Text=views,
                ///Text = by,
                Images = new List<CardImage>
                {
                    new CardImage(image)
                }
            };
            
            return card
                .ToAttachment()
                .ToComposeExtensionAttachment();
        }
    }
}
