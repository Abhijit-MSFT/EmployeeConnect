using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.WebPages;
using Microsoft.Bot.Connector;
using Microsoft.Bot.Connector.Teams;
using Microsoft.Bot.Connector.Teams.Models;
using EmployeeConnect.Models;
using EmployeeConnect.Helper;
using System.Threading.Tasks;

namespace EmployeeConnect
{
    public class MessageExtension
    {
        public static ComposeExtensionResponse HandleMessageExtensionQuery(ConnectorClient connector, Activity activity, Dictionary<int, string> Dica)
        {
            //var query = activity.GetComposeExtensionQueryData();
            //if (query == null || query.CommandId != "News")
            //{
            //    // We only process the 'getRandomText' queries with this message extension
            //    return null;
            //}

            //var title = "";
            //var titleParam = query.Parameters?.FirstOrDefault(p => p.Name == "query");
            //if (titleParam != null)
            //{
            //    title = titleParam.Value.ToString();
            //}

            //var attachments = new ComposeExtensionAttachment[5];
            //for (int i = 0; i < 5; i++)
            //{
            //    attachments[i] = GetAttachment(title);
            //}

            //var response = new ComposeExtensionResponse(new ComposeExtensionResult("list", "result"));
            //response.ComposeExtension.Attachments = attachments.ToList();

            //return response;

            // Dictionary<int, string> result
            //GetDataHelper helper = new GetDataHelper();
            var query = activity.GetComposeExtensionQueryData();
            if (query == null)
            {
                return null;
            }
            if (query.CommandId == "News")
            {
                NewsModel news = GetDataHelper.GetNews();
                var title = "";
                var titleParam = query.Parameters?.FirstOrDefault(p => p.Name == "query");
                var response = new ComposeExtensionResponse(new ComposeExtensionResult("list", "result"));
                ComposeExtensionAttachment[] attachments = null;
                if (titleParam != null)
                {
                    title = titleParam.Value.ToString();
                    List<string> searchtitle = news.news.Select(a => a.NewsTitle).Where(c => c.ToLower().Contains(title.ToLower())).Select(d => d).ToList();
                    List<string> searchImages = news.news.Where(a => a.NewsTitle.ToLower().Contains(title.ToLower())).Select(c => c.NewsThumbnailUrl).ToList();
                    List<string> searchDateTime = news.news.Where(a => a.NewsTitle.ToLower().Contains(title.ToLower())).Select(c => c.NewsDateTIme).ToList();
                    List<string> searchviews = news.news.Where(a => a.NewsTitle.ToLower().Contains(title.ToLower())).Select(c => c.NoOfViews).ToList();
                    List<string> searchby = news.news.Where(a => a.NewsTitle.ToLower().Contains(title.ToLower())).Select(c => c.NewsBy).ToList();
                    int attacCount = searchtitle.Count();
                    attachments = new ComposeExtensionAttachment[attacCount];
                    for (int i = 0; i < attacCount; i++)
                    {
                        attachments[i] = GetAttachment(searchtitle[i]);
                    }


                    response.ComposeExtension.Attachments = attachments.ToList();
                }
                else
                {

                    List<string> searchtitle = news.news.Select(c => c.NewsTitle).Take(10).ToList();
                    List<string> searchImages = news.news.Select(c => c.NewsThumbnailUrl).Take(20).ToList();
                    //List<string> searchDateTime = news.news.Select(c => c.NewsDateTIme).Take(20).ToList();
                    //List<string> searchviews = news.news.Select(c => c.NoOfViews).Take(20).ToList();
                    //List<string> searchby=news.news.Select(c => c.NewsBy).Take(20).ToList();
                    attachments = new ComposeExtensionAttachment[searchtitle.Count()];
                    for (int i = 0; i < searchtitle.Count(); i++)
                    {
                        attachments[i] = GetAttachment(searchtitle[i]);
                    }
                    response.ComposeExtension.Attachments = attachments.ToList();
                }
                return response;
            }

            return null;


        }

        private static ComposeExtensionAttachment GetAttachment(string title)
        {
            var card = new ThumbnailCard
            {
                Title = title
            };

            return card
                .ToAttachment()
                .ToComposeExtensionAttachment();
        }
    }
}
