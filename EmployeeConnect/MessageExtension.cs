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
            var query = activity.GetComposeExtensionQueryData();
            if (query == null)
            {
                // We only process the 'getRandomText' queries with this message extension
                return null;
            }
            if (query.CommandId == "News")
            {
                NewsModel news = GetDataHelper.GetNews();
                var title = "";
                var titleParam = query.Parameters?.FirstOrDefault(p => p.Name == "newstitle");
                var response = new ComposeExtensionResponse(new ComposeExtensionResult("list", "result"));
                ComposeExtensionAttachment[] attachments = null;
                if (titleParam != null)
                {
                    title = titleParam.Value.ToString();
                    List<string> searchtitle = news.news.Select(a => a.NewsTitle).Where(c => c.ToLower().Contains(title.ToLower())).Select(d => d).ToList();
                    List<string> searchImages = news.news.Where(a => a.NewsTitle.ToLower().Contains(title.ToLower())).Select(c => c.NewsThumbnailUrl).ToList();
                    List<string> searchDateTime = news.news.Where(a => a.NewsTitle.ToLower().Contains(title.ToLower())).Select(c => c.NewsDateTIme).ToList();
                    List<string> searchdetail = news.news.Where(a => a.NewsTitle.ToLower().Contains(title.ToLower())).Select(c => c.DetailedNews).ToList();
                    List<string> searchby = news.news.Where(a => a.NewsTitle.ToLower().Contains(title.ToLower())).Select(c => c.NewsBy).ToList();
                    int attacCount = searchtitle.Count();
                    attachments = new ComposeExtensionAttachment[attacCount];
                    for (int i = 0; i < attacCount; i++)
                    {
                        attachments[i] = GetAttachment(searchImages[i], searchtitle[i], searchby[i], searchdetail[i]);
                    }

                    response.ComposeExtension.Attachments = attachments.ToList();
                }
                else
                {

                    List<string> searchtitle = news.news.Select(c => c.NewsTitle).Take(20).ToList();
                    List<string> searchImages = news.news.Select(c => c.NewsThumbnailUrl).Take(20).ToList();
                    List<string> searchDateTime = news.news.Select(c => c.NewsDateTIme).Take(20).ToList();
                    List<string> searchdetail = news.news.Select(c => c.DetailedNews).Take(20).ToList();
                    List<string> searchby = news.news.Select(c => c.NewsBy).Take(20).ToList();
                    attachments = new ComposeExtensionAttachment[searchtitle.Count()];
                    for (int i = 0; i < searchtitle.Count(); i++)
                    {
                        attachments[i] = GetAttachment(searchImages[i], searchtitle[i], searchby[i], searchdetail[i]);
                    }
                    response.ComposeExtension.Attachments = attachments.ToList();
                }
                return response;
            }
            else if (query.CommandId == "Task")
            {
                PO task = GetDataHelper.GetPOs();
                var title = "";
                var titleParam = query.Parameters?.FirstOrDefault(p => p.Name == "tasktitle");
                var response = new ComposeExtensionResponse(new ComposeExtensionResult("list", "result"));
                ComposeExtensionAttachment[] attachments = null;
                if (titleParam != null)
                {
                    title = titleParam.Value.ToString();
                    List<string> description = task.PurchaseOrder.Select(a => a.Description).Where(c => c.ToLower().Contains(title.ToLower())).Select(d => d).ToList();
                    List<string> totamount = task.PurchaseOrder.Where(a => a.Description.ToLower().Contains(title.ToLower())).Select(c => c.TotalAmount).ToList();
                    List<string> postatus = task.PurchaseOrder.Where(a => a.Description.ToLower().Contains(title.ToLower())).Select(c => c.PoStatus).ToList();
                    int attacCount = description.Count();
                    attachments = new ComposeExtensionAttachment[attacCount];
                    for (int i = 0; i < attacCount; i++)
                    {
                        attachments[i] = GetAttachments(description[i], totamount[i], postatus[i]);
                    }

                    response.ComposeExtension.Attachments = attachments.ToList();
                }
                else
                {

                    List<string> description = task.PurchaseOrder.Select(c => c.Description).Take(20).ToList();
                    List<string> totamount = task.PurchaseOrder.Select(c => c.TotalAmount).Take(20).ToList();
                    List<string> postatus = task.PurchaseOrder.Select(c => c.PoStatus).Take(20).ToList();
                    attachments = new ComposeExtensionAttachment[description.Count()];
                    for (int i = 0; i < description.Count(); i++)
                    {
                        attachments[i] = GetAttachments(description[i], totamount[i], postatus[i]);
                    }
                    response.ComposeExtension.Attachments = attachments.ToList();
                }
                return response;
            }
            else if (query.CommandId == "EventesAndTraining")

            {
                EandTModel eventsTrainings = GetDataHelper.GetEandT();
                var title = "";
                var titleParam = query.Parameters?.FirstOrDefault(p => p.Name == "EventsAndTrainingtitle");
                var response = new ComposeExtensionResponse(new ComposeExtensionResult("list", "result"));
                ComposeExtensionAttachment[] attachments = null;

                if (titleParam != null)
                {
                    title = titleParam.Value.ToString();
                    List<string> searchTitle = eventsTrainings.EventsAndtraining.Select(a => a.ETTitle).Where(c => c.ToLower().Contains(title.ToLower())).Select(d => d).ToList();
                    List<string> searchdetails = eventsTrainings.EventsAndtraining.Select(a => a.ETDetails).Where(c => c.ToLower().Contains(title.ToLower())).Select(d => d).ToList();
                    List<string> searchdate = eventsTrainings.EventsAndtraining.Where(a => a.ETTitle.ToLower().Contains(title.ToLower())).Select(d => d.ETStartDate).ToList();
                    List<string> searchimage = eventsTrainings.EventsAndtraining.Where(a => a.ETTitle.ToLower().Contains(title.ToLower())).Select(d => d.ETThumbnailUrl).ToList();
                    List<string> searchETType = eventsTrainings.EventsAndtraining.Where(a => a.ETTitle.ToLower().Contains(title.ToLower())).Select(d => d.ETType).ToList();
                    int attacCount = searchTitle.Count();

                    attachments = new ComposeExtensionAttachment[attacCount];

                    for (int i = 0; i < attacCount; i++)
                    {
                        attachments[i] = GetAttachment(searchimage[i], searchTitle[i] + ',' + searchETType[i], searchdate[i], searchdetails[i]);
                    }

                    response.ComposeExtension.Attachments = attachments.ToList();
                }
                else
                {
                    List<string> searchTitle = eventsTrainings.EventsAndtraining.Select(c => c.ETTitle).Take(6).ToList();
                    List<string> searchdetails = eventsTrainings.EventsAndtraining.Select(c => c.ETDetails).Take(6).ToList();
                    List<string> searchdate = eventsTrainings.EventsAndtraining.Select(c => c.ETStartDate).Take(6).ToList();
                    List<string> searchimage = eventsTrainings.EventsAndtraining.Select(c => c.ETThumbnailUrl).Take(6).ToList();
                    List<string> searchETType = eventsTrainings.EventsAndtraining.Select(c => c.ETType).Take(6).ToList();
                    attachments = new ComposeExtensionAttachment[searchTitle.Count];
                    for (int i = 0; i < searchTitle.Count; i++)
                    {
                        attachments[i] = GetAttachment(searchimage[i], searchTitle[i] + ',' + searchETType[i], searchdate[i], searchdetails[i]);
                    }

                    response.ComposeExtension.Attachments = attachments.ToList();
                }
                return response;

            }
            else
            {
                return null;
            }
        }
        private static ComposeExtensionAttachment GetAttachments(string ponumber, string vendorname, string postatus)
        {
            var card = new ThumbnailCard
            {
                Title = ponumber,
                Subtitle = vendorname,
                Text = postatus
            };

            return card
                .ToAttachment()
                .ToComposeExtensionAttachment();
        }
        private static ComposeExtensionAttachment GetAttachment(string image, string title, string date, string views)
        {
            var card = new ThumbnailCard
            {
                Title = title,
                Subtitle = date,
                Text = views,
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
