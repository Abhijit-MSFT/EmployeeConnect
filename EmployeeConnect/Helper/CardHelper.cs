using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EmployeeConnect.Models;
using System.Security.Principal;
using Microsoft.Bot.Connector.Teams.Models;
using AdaptiveCards;
using Microsoft.Ajax.Utilities;
using Antlr.Runtime.Tree;
using Newtonsoft.Json;
using System.Web.Script.Serialization;
using System.Net;
using System.Windows.Forms;
using EmployeeConnect.Common;

namespace EmployeeConnect.Helper
{
    public class CardHelper
    {
        //returns a news ListCard containing specific number of messages
        public static Attachment getNewsCard(string username)
        {
            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            var buttonsList = new List<ListButton>();
            card.content.title = "";
            NewsModel newsL = Helper.GetDataHelper.getPreferredNews(username);
            Item item;
            item = new Item();
            item.title = "Top stories for you";
            item.type = "section";
            list.Add(item);

            if (newsL != null) 
            {
                var TrendingNews = newsL.news.Where(w => w.LatestOrTrendingFlag.Equals("Trending"));
                var SuggestedNews = newsL.news.Where(w => w.LatestOrTrendingFlag.Equals("Latest"));

                int MaxNewsCount = TrendingNews.Count();
                if (MaxNewsCount > 4)  
                    MaxNewsCount = 4;

                for (int i = 0; i < MaxNewsCount; i++)
                {
                    var news = TrendingNews.ElementAt(i);
                    string subtitle = news.DetailedNews.Substring(0, 100) + "...";
                    item = new Item();
                    item.title = news.NewsTitle;
                    item.icon = news.NewsThumbnailUrl;
                    item.id = news.NewsID;
                    item.subtitle = subtitle;
                    item.type = "resultItem";
                    item.tap = new Tap()
                    {
                        type = "invoke",
                        title = item.id,
                        value = "{ \"type\": \"task/fetch\", \"data\": \"news:" + item.id.ToString() + "\"}"

                    };

                    list.Add(item);
                }
                item = new Item();
                item.title = "Suggested stories";
                item.type = "section";
                list.Add(item);

                MaxNewsCount = SuggestedNews.Count();
                if (SuggestedNews.Count() > 4)
                    MaxNewsCount = 4;

                for (int i = 0; i < MaxNewsCount; i++)
                {
                    var news = SuggestedNews.ElementAt(i);
                    string subtitle = news.DetailedNews.Substring(0, 100) + "...";
                    item = new Item();
                    item.title = news.NewsTitle;
                    item.icon = news.NewsThumbnailUrl;
                    item.id = news.NewsID;
                    item.subtitle = subtitle;
                    item.type = "resultItem";
                    item.tap = new Tap()
                    {
                        type = "invoke",
                        title = item.id,
                        value = "{ \"type\": \"task/fetch\", \"data\": \"news:" + item.id.ToString() + "\"}"
                    };

                    list.Add(item);
                }              

                ListButton viewButton = new ListButton();
                viewButton.type = "openUrl";
                viewButton.title = "View more";
                viewButton.value = deepLinkTab("currNews", "news");
                buttonsList.Add(viewButton);

                card.content.buttons = buttonsList.ToArray();
                card.content.items = list.ToArray();

            }
            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;

        }
        public static string deepLinkTab(string EntityId, string EntityName)
        {
            return string.Format("https://teams.microsoft.com/l/entity/{0}/{1}?webUrl={2}", EmployeeConnect.Helper.ApplicationSettings.AppId, EntityId, ApplicationSettings.BaseUrl + "/" + EntityName);
        }

        //Returns the policies ListCard having Policies for every department.
        public static Attachment GetPoliciesCard()
        {
            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Please select a department to view policies";
            string[] dept = { "Human Resources", "Pay and Benefits", "IT & Facilities", "Store Operations" };

            string[] iconurl = { ApplicationSettings.BaseUrl + "/Images/Human Resources.jpeg", ApplicationSettings.BaseUrl + "/Images/Payment and benefits.jpg", ApplicationSettings.BaseUrl + "/Images/ITFacilities.jpg", ApplicationSettings.BaseUrl + "/Images/Store Operations.jpg" };

            for (int i = 0; i < 4; i++)
            {

                var item = new Item();
                item.icon = iconurl[i];
                item.id = i.ToString();
                item.title = dept[i];
                item.type = "resultItem";

                //item.tap = new Tap()
                //{
                //    type = "messageBack",
                //    //title = "title",
                //    text = item.title + " policy"


                //};
                item.tap = new Tap()
                {
                    type = "openUrl",
                    title = item.id,
                    value = deepLinkTab("policies", "Policies")
                };

                list.Add(item);
            }
            card.content.items = list.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;

        }

        //Returns the Tools ListCard having Tools for every department.
        public static Attachment GetMyToolsCard()
        {
            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Please select a department to view tools";

            string[] dept = { "Human Resources", "Payment and Benefits", "IT & Facilities", "Store Operations" };

            string[] iconurl = { ApplicationSettings.BaseUrl + "/Images/Human Resources.jpeg", ApplicationSettings.BaseUrl + "/Images/Payment and benefits.jpg", ApplicationSettings.BaseUrl + "/Images/ITFacilities.jpg", ApplicationSettings.BaseUrl + "/Images/Store Operations.jpg" };

            for (int i = 0; i < 4; i++)
            {

                var item = new Item();
                item.icon = iconurl[i];
                item.id = i.ToString();
                item.title = dept[i];
                item.type = "resultItem";
                item.tap = new Tap()
                {
                    type = "messageBack",
                    text = item.title + " tools"
                };

                list.Add(item);
            }
            card.content.items = list.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;

        }

        //gets the specific news card on tap
        public static Attachment GetNewsCardbyId(string id)
        {
            NewsModel newsL = Helper.GetDataHelper.GetNews();
            var SelectedNews = getNewsById(newsL, id);

            if (SelectedNews == null)   //could not find the news
                return null;
            var card = new AdaptiveCard("1.0")
            {
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {
                        Items = new List<AdaptiveElement>()
                        {
                            new AdaptiveImage
                            {
                                HorizontalAlignment = AdaptiveHorizontalAlignment.Center,
                                Url = new Uri(SelectedNews.NewsThumbnailUrl),
                                Id="imgId"
                            },
                            new AdaptiveTextBlock() //Title of News
                            {
                                Text = SelectedNews.NewsTitle,
                                Weight = AdaptiveTextWeight.Bolder,     // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Large,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true,
                                Id="TextId1"
                            },
                                new AdaptiveTextBlock()     //NewsBy on Date and Time
                            {
                                Text = "By " + SelectedNews.NewsBy + " on " + SelectedNews.NewsDateTIme,
                                Weight = AdaptiveTextWeight.Lighter,    // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Small,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true,
                                Id="TextId2"
                            },
                            new AdaptiveTextBlock()     //Detailed News
                            {
                                Text = SelectedNews.DetailedNews,
                                Weight = AdaptiveTextWeight.Default, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Default,       // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true,
                                Id="TextId3"
                            }
                        }
                    }
                },
                Actions =
                {
                    new AdaptiveSubmitAction() { Title = "Close", DataJson="{\"action\": \"close\"}" }
                }

            };
            Attachment attachment = new Attachment();

            attachment.ContentType = AdaptiveCard.ContentType;

            attachment.Content = card;

            return attachment;
        }

        //Returns the News with specific NewsID
        public static News getNewsById(NewsModel newsL, string id)
        {
            if (newsL == null)
                return null;
            foreach (var news in newsL.news)
            {
                if (news.NewsID.Equals(id))
                    return news;
            }
            return null;    // id doesn't exist
        }

        public static List<Attachment> WelcomeCard()
        {
            //Welcome Card
            var action = new List<AdaptiveAction>()
            {
                new AdaptiveSubmitAction()
                {
                    Title = "Let's get started",
                    DataJson = @"{'Action':'" + Constants.ShowPrefCard + "' }"
                }                

                //new AdaptiveShowCardAction()
                //{
                //    Title = "Let's get Started",
                //    Card=(AdaptiveCard)CardHelper.SetTimePrefrences().Content
                //}
            };
            var card1 = new AdaptiveCard("1.0")
            {
                BackgroundImage = new AdaptiveBackgroundImage(ApplicationSettings.BaseUrl + "/Images/signin_1.png"),
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {
                        Items = new List<AdaptiveElement>()
                        {                        
                            new AdaptiveTextBlock()
                            {
                                Text = "Welcome to Employee Connect",
                                Weight = AdaptiveTextWeight.Bolder, 
                                Size = AdaptiveTextSize.Large                                
                            },
                            
                            new AdaptiveTextBlock()
                            {
                                Text = "Keep yourself posted \r\rabout the latest news",
                                Wrap = true ,
                                 Weight = AdaptiveTextWeight.Bolder,
                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "The bot will keep you \r\r updated on the latest \r\r news in your organisation",
                                Wrap = true ,                                
                            }
                        }
                    }
                },

                Actions = action
            };
            var card2 = new AdaptiveCard("1.0")
            {
                BackgroundImage = new AdaptiveBackgroundImage(ApplicationSettings.BaseUrl + "/Images/signin_2.png"),
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {

                        Items = new List<AdaptiveElement>()
                        {

                            new AdaptiveTextBlock()
                            {
                                Text = "Welcome to Employee Connect",
                                Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Large// set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                            },
                            /*new AdaptiveTextBlock()
                            {
                                Text = "Please sign in to get started",
                                Wrap = true ,// True if text is allowed to wrap
                            },*/
                                new AdaptiveTextBlock()
                            {
                                Text = "Add events to your calendar",
                                Wrap = true ,// True if text is allowed to wrap
                                    Weight = AdaptiveTextWeight.Bolder

                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "The bot can send \r\r notifications to remind \r\r you about the latest \r\r events and trainings",
                                Wrap = true ,// True if text is allowed to wrap
                                MaxWidth = 2
                            }
                        }
                            // TextBlock Item allows for the inclusion of text, with various font sizes, weight and color
                            
                    }
                },

                Actions = action
            };
            var card3 = new AdaptiveCard("1.0")
            {
                BackgroundImage = new AdaptiveBackgroundImage(ApplicationSettings.BaseUrl + "/Images/signin_3.png"),
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {
                        Items = new List<AdaptiveElement>()
                        {
                            new AdaptiveTextBlock()
                            {
                                Text = "Welcome to Employee Connect",
                                Weight = AdaptiveTextWeight.Bolder,
                                Size = AdaptiveTextSize.Large
                            },                            
                            new AdaptiveTextBlock()
                            {
                                Text = "Create and manage your tasks",
                                Wrap = true,
                                Weight = AdaptiveTextWeight.Bolder

                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "The app identifies all your \r\r pending tasks and helps \r\r you manage everything at \r\r one place.",
                                Wrap = true,

                            }
                        }
                    }
                },

                Actions = action
            };
            List<Attachment> res = new List<Attachment>();
            res.Add(new Attachment()
            {
                ContentType = AdaptiveCard.ContentType,
                Content = card1
            });
            res.Add(new Attachment()
            {
                ContentType = AdaptiveCard.ContentType,
                Content = card2
            });
            res.Add(new Attachment()
            {
                ContentType = AdaptiveCard.ContentType,
                Content = card3
            });


            return res;
        }

        public static Attachment SetTimePrefrences()
        {
            List<AdaptiveColumn> list = new List<AdaptiveColumn>();
            list.Add(new AdaptiveColumn()
            {
                Items =
                {
                     new AdaptiveChoiceSetInput()
                    {
                        Id = "NewsCategory1",
                        //Value = "1", // please set default value here
                        Style = AdaptiveChoiceInputStyle.Expanded,
                        IsMultiSelect=true,// set the style of Choice set to compact
                        Wrap=true,
                        Choices =
                         {
                            new AdaptiveChoice
                            {
                                Title ="Finance",
                                Value = "1",
                            },
                            new AdaptiveChoice
                            {
                                Title = "Media",
                                Value = "2",
                            },
                            new AdaptiveChoice
                            {
                                Title = "Design",
                                Value = "3",
                            },
                            new AdaptiveChoice
                            {
                                Title = "AI",
                                Value = "4",
                            },
                            new AdaptiveChoice
                            {
                                Title = "Data",
                                Value = "5",
                            },
                        }
                }
               },
                Width = "500"
            });
            list.Add(new AdaptiveColumn()
            {
                Items =
                {
                     new AdaptiveChoiceSetInput()
                    {
                        Id = "NewsCategory2",
                        Style = AdaptiveChoiceInputStyle.Expanded,
                        IsMultiSelect=true,// set the style of Choice set to compact
                        Wrap=true,
                        Choices =
                        {
                            new AdaptiveChoice
                            {
                                Title = "Business",
                                Value = "6",
                            },
                            new AdaptiveChoice
                            {
                                Title = "CS",
                                Value = "7",
                            },
                            new AdaptiveChoice
                            {
                                Title = "Technology",
                                Value = "8",
                            },
                            new AdaptiveChoice
                            {
                                Title = "Animation",
                                Value = "9",
                            },
                            new AdaptiveChoice
                            {
                                Title = "IT",
                                Value = "10",
                            },

                        }
                }
               },
                Width = "500"
            });
            var card = new AdaptiveCard("1.0")
            {
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {
                        Items = new List<AdaptiveElement>()
                        {

                            new AdaptiveTextBlock()
                            {
                                Text = "News",
                                Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Large, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                            },
                            new AdaptiveChoiceSetInput()
                            {
                                Id = "SetNewsChoice",
                                Value = "1", // please set default value here
                                Style = AdaptiveChoiceInputStyle.Expanded, // set the style of Choice set to compact
                                Choices =
                                {
                                    // describes a choice input. the value should be a simple string without a ","
                                    new AdaptiveChoice
                                    {
                                        Title = "Beginning of the day",
                                        Value = "1" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "End of the day",
                                        Value = "2"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "Set preferred time",
                                        Value = "3"

                                    }

                                }
                            },
                            new AdaptiveChoiceSetInput()
                            {
                                Id = "SetNewsPreferredTime",
                                Value = "1",
                                Style = AdaptiveChoiceInputStyle.Compact,
                                Choices =
                                {
                                    new AdaptiveChoice
                                    {
                                        Title = "9:00 AM",
                                        Value = "1" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "10:00 AM",
                                        Value = "2" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },

                                    new AdaptiveChoice
                                    {
                                        Title = "11:00 AM",
                                        Value = "3" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "12:00 PM",
                                        Value = "4"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "1:00 PM",
                                        Value = "5"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "2:00 PM",
                                        Value = "6"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "3:00 PM",
                                        Value = "7"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "4:00 PM",
                                        Value = "8"
                                    }
                                }
                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "Select 5 or more categories for your news preferences.",
                                Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Medium, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                            },
                            new AdaptiveColumnSet()
                            {
                                Columns=list
                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "Event and training",
                                Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Large, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                            },
                            new AdaptiveChoiceSetInput()
                            {
                                Id = "SetENTChoice",
                                Value = "1", // please set default value here
                                Style = AdaptiveChoiceInputStyle.Expanded, // set the style of Choice set to compact
                                Choices =
                                {
                                    // describes a choice input. the value should be a simple string without a ","
                                    new AdaptiveChoice
                                    {
                                        Title = "Beginning of the day",
                                        Value = "1" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "End of the day",
                                        Value = "2"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "Set preferred time",
                                        Value = "3"

                                    }

                                }
                            },
                            new AdaptiveChoiceSetInput()
                            {
                                Id = "SetENTPreferredTime",
                                Value = "1",
                                Style = AdaptiveChoiceInputStyle.Compact,
                                Choices =
                                {
                                    new AdaptiveChoice
                                    {
                                        Title = "9:00 AM",
                                        Value = "1" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "10:00 AM",
                                        Value = "2" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },

                                    new AdaptiveChoice
                                    {
                                        Title = "11:00 AM",
                                        Value = "3" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "12:00 PM",
                                        Value = "4"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "1:00 PM",
                                        Value = "5"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "2:00 PM",
                                        Value = "6"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "3:00 PM",
                                        Value = "7"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "4:00 PM",
                                        Value = "8"
                                    }
                                }
                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "Task Reminders",
                                Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Large, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                            },
                            new AdaptiveChoiceSetInput()
                            {
                                Id = "SetTaskRemindersChoice",
                                Value = "1", // please set default value here
                                Style = AdaptiveChoiceInputStyle.Expanded, // set the style of Choice set to compact
                                Choices =
                                {
                                    // describes a choice input. the value should be a simple string without a ","
                                    new AdaptiveChoice
                                    {
                                        Title = "Beginning of the day",
                                        Value = "1" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "End of the day",
                                        Value = "2"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "Set preferred time",
                                        Value = "3"

                                    }

                                }
                            },
                            new AdaptiveChoiceSetInput()
                            {
                                Id = "SetTaskReminderPreferredTime",
                                Value = "1",
                                Style = AdaptiveChoiceInputStyle.Compact,
                                Choices =
                                {
                                    new AdaptiveChoice
                                    {
                                        Title = "9:00 AM",
                                        Value = "1" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "10:00 AM",
                                        Value = "2" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },

                                    new AdaptiveChoice
                                    {
                                        Title = "11:00 AM",
                                        Value = "3" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "12:00 PM",
                                        Value = "4"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "1:00 PM",
                                        Value = "5"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "2:00 PM",
                                        Value = "6"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "3:00 PM",
                                        Value = "7"
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "4:00 PM",
                                        Value = "8"
                                    }
                                }
                            }
                        }
                    }
                },
                Actions = new List<AdaptiveAction>()
                {
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
                    new AdaptiveSubmitAction()
                    {
                        Title = "Done",
                        DataJson=@"{'Action':'" + Constants.SetPrefrencesDone+"' }"
                     }
               }
            };

            Attachment attachment = new Attachment()
            {
                ContentType = AdaptiveCard.ContentType,
                Content = card
            };
            return attachment;

        }

        public static AdaptiveCard SetNewsPreferences()
        {
            List<AdaptiveColumn> list = new List<AdaptiveColumn>();
            list.Add(new AdaptiveColumn()
            {
                Items =
                {

                     new AdaptiveChoiceSetInput()
                    {
                        Id = "NewsCategory1",
                        //Value = "1", // please set default value here
                        Style = AdaptiveChoiceInputStyle.Expanded,
                        IsMultiSelect=true,// set the style of Choice set to compact
                        Wrap=true,
                        Choices =
                        {
                            new AdaptiveChoice
                            {
                                Title ="Finance",
                                Value = "1",
                            },
                            new AdaptiveChoice
                            {
                                Title = "Media",
                                Value = "2",
                            },
                            new AdaptiveChoice
                            {
                                Title = "Art",
                                Value = "3",
                            }
                        }
                }
               },
                Width = "500"
            });
            list.Add(new AdaptiveColumn()
            {
                Items =
                {
                     new AdaptiveChoiceSetInput()
                    {
                        Id = "NewsCategory2",
                        Style = AdaptiveChoiceInputStyle.Expanded,
                        IsMultiSelect=true,// set the style of Choice set to compact
                        Wrap=true,
                        Choices =
                        {
                            new AdaptiveChoice
                            {
                                Title = "Business",
                                Value = "4",
                            },
                            new AdaptiveChoice
                            {
                                Title = "Culture",
                                Value = "5",
                            },
                            new AdaptiveChoice
                            {
                                Title = "Technology",
                                Value = "6",
                            }

                        }
                }
               },
                Width = "500"
            });
            var card = new AdaptiveCard("1.0")
            {
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {
                        Items = new List<AdaptiveElement>()
                        {
                            new AdaptiveTextBlock()
                            {
                                Text = "Select 5 or more categories.",
                                Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Large, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                            },
                            new AdaptiveColumnSet()
                            {
                                Columns=list
                            }
                        }
                    }
                },
                Actions = new List<AdaptiveAction>()
                {
                    new AdaptiveSubmitAction()
                    {
                        Title = "Skip",
                        DataJson=@"{'Action':'" + Constants.SetPrefrencesSkip+"' }"
                    },
                     new AdaptiveSubmitAction()
                    {
                        Title = "Done",
                        DataJson=@"{'Action':'" + Constants.SetPrefrencesDone+"' }"
                     }
               }
            };

            return card;
        }

        public static Attachment getETCard()
        {
            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            var buttonsList = new List<ListButton>();
            card.content.title = "Upcoming Events and Trainings";
            EandTModel EandTL = Helper.GetDataHelper.GetEandT();
            Item item;
            if (EandTL != null)
            {
                var Events = EandTL.EventsAndtraining;
                int MaxEventsCount = Events.Count();
                int count = 0;
                //DateTime CurrDate = new DateTime(2019, 6, 1);
                DateTime CurrDate = DateTime.Now;
                for (int i = 0; i < MaxEventsCount; i++)
                {
                    var EandT = Events.ElementAt(i);
                    string date = "";
                    if (EandT.ETStartDate == EandT.ETEndDate)
                        date = EandT.ETStartDate;
                    else
                        date = EandT.ETStartDate + " to " + EandT.ETEndDate;
                    DateTime Dstart = DateTime.ParseExact(EandT.ETStartDate, "MM-dd-yyyy", System.Globalization.CultureInfo.InvariantCulture);
                    DateTime Dend = DateTime.ParseExact(EandT.ETEndDate, "MM-dd-yyyy", System.Globalization.CultureInfo.InvariantCulture);
                    if (count == 5)
                        break;
                    if (Dstart <= CurrDate.AddDays(15) && EandT.UserAdded && Dend >= CurrDate.AddDays(-15))
                    {
                        string subtitle = date + ' ' + "from" + ' ' + EandT.ETStartTime + '-' + EandT.ETEndTime;
                        string title = EandT.ETTitle;
                        item = new Item();
                        item.title = title;
                        //item.icon = EandT.ETThumbnailUrl;
                        if (EandT.ETFlag == "E")
                            item.icon = ApplicationSettings.BaseUrl + "/fonts/flagImg.png";
                        else
                            item.icon = ApplicationSettings.BaseUrl + "/fonts/shapeEve.png";
                        item.id = EandT.ETID;
                        item.subtitle = subtitle;
                        //item.flagImage = EandT.ETFlagImage;
                        item.type = "resultItem";
                        item.tap = new Tap()
                        {
                            type = "invoke",
                            title = item.id,
                            value = "{ \"type\": \"task/fetch\", \"data\": \"events:" + item.id.ToString() + "\"}"
                        };
                        count++;
                        list.Add(item);
                    }
                }
                /*item = new Item();
                item.type = "resultItem";
                item.title = "View more";
                item.icon = ApplicationSettings.BaseUrl + "/Images/purpleImage.JPG";
                item.tap = new Tap()
                {
                    type = "openUrl",
                    value = deepLinkTab("EandT", "Events and Trainings")
                };

                list.Add(item);*/
                ListButton viewButton = new ListButton();
                viewButton.type = "openUrl";
                viewButton.title = "View all events";
                viewButton.value = deepLinkTab("EandT", "Events and Trainings");
                buttonsList.Add(viewButton);



                card.content.buttons = buttonsList.ToArray();
                card.content.items = list.ToArray();
            }
            Attachment attachment = new Attachment();
            attachment.ContentType = card.contentType;
            attachment.Content = card.content;

            return attachment;
        }

        public static Attachment PendingTasks()
        {
            PO POlist = new PO();
            POlist = Helper.GetDataHelper.GetPOs();



            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            var buttonsList = new List<ListButton>();
            card.content.title = "Your pending submissions";
            Item item = new Item();

            item = new Item();
            item.title = "12";
            item.subtitle = "Days of pending timesheet";
            //item.id = POlist.PurchaseOrder[i].PoNumber;
            item.type = "resultItem";
            item.icon = ApplicationSettings.BaseUrl + "/Images/timesheet_icon.PNG";
            var url = "pendingdates";
            item.tap = new Tap()
            {
                type = "invoke",
                title = item.id,
                value = "{ \"type\": \"task/fetch\", \"data\": \"" + url + "\"}"
            };
            list.Add(item);
            item = new Item();
            item.title = "Rs. 25,000";
            item.subtitle = "Amount of unreconciled expenses";
            //item.id = POlist.PurchaseOrder[i].PoNumber;
            item.type = "resultItem";
            item.icon = ApplicationSettings.BaseUrl + "/Images/expense_icon.PNG";
            item.tap = new Tap()
            {
                type = "invoke",
                title = item.id,
                value = "{ \"type\": \"task/fetch\", \"data\": \"" + url + "\"}"
            };
            list.Add(item);
            card.content.items = list.ToArray();
            Attachment attachment = new Attachment();
            attachment.ContentType = card.contentType;
            attachment.Content = card.content;



            return attachment;
        }

        public static Attachment PendingTasksCard(string id)
        {
            EmployeeConnect.Models.PurchaseOrders POOrder = Helper.CardHelper.PendingTaskbyID(id);
            var card = new AdaptiveCard("1.0")
            {
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {
                        Items = new List<AdaptiveElement>()
                        {

                            new AdaptiveTextBlock()
                            {
                                Text = "Reminder: You have a pending task to review",
                                Weight = AdaptiveTextWeight.Default, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Default // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "Purchase Order",
                                Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Large // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                            },
                            new AdaptiveFactSet
                            {
                                Separator = true,
                                Spacing = AdaptiveSpacing.ExtraLarge,
                                Facts =
                                {
                                    // Describes a fact in a Adaptive FactSet as a key/value pair
                                    new AdaptiveFact
                                    {
                                        Title = "P.O. No.",
                                        Value = "\t"+POOrder.PoNumber,
                                    },
                                    new AdaptiveFact
                                    {
                                        Title = "Description",
                                        Value = POOrder.Description
                                    },
                                    new AdaptiveFact
                                    {
                                        Title = "Vendor Name",
                                        Value =  POOrder.VendorName
                                    },
                                    new AdaptiveFact
                                    {
                                        Title = "Vendor No.",
                                        Value = POOrder.vendorNo
                                    },
                                    new AdaptiveFact
                                    {
                                        Title = "Amount",
                                        Value = POOrder.TotalAmount
                                    }
                                }
                            }
                        }
                    }
                },
                Actions = new List<AdaptiveAction>()
                {
                     new AdaptiveSubmitAction
                     {
                        Title ="Approve",
                       Data= new PODeclineData { action = "podecline" }  
                     },
                     new AdaptiveSubmitAction
                     {
                        Title ="Decline",
                        DataJson="{\"action\": \"close\"}"
                     }
                }
            };
            Attachment attachment = new Attachment()
            {
                ContentType = AdaptiveCard.ContentType,
                Content = card
            };
            return attachment;
        }

        public static EmployeeConnect.Models.PurchaseOrders PendingTaskbyID(string id)
        {
            PO POlist = new PO();
            POlist = Helper.GetDataHelper.GetPOs();
            for (int i = 0; i < POlist.PurchaseOrder.Count(); i++)
            {
                if (id.Equals(POlist.PurchaseOrder[i].PoNumber))
                    return POlist.PurchaseOrder[i];
            }
            return new EmployeeConnect.Models.PurchaseOrders();
        }
        public static AdaptiveCard ReviewTasks()
        {
            AdaptiveCard card = new AdaptiveCard("1.0")
            {
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {
                        Items = new List<AdaptiveElement>()
                        {
                    new AdaptiveTextBlock()
                    {
                        Text = "Reminder: You have a pending task to review",
                        Weight = AdaptiveTextWeight.Default, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Default, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text = "You have timesheet waiting for " + 12 + " days",
                        Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Large, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    }
                        }
                    }
                },
                Actions = new List<AdaptiveAction>()
                {
                    new AdaptiveSubmitAction()
                    {
                        Title = "Fill timesheet",
                       // DataJson = "get the data"
                    }

                 }

            };
            return card;
        }
        public static Attachment PendingApprovals()
        {
            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "";

            Item item;
            item = new Item();
            item.title = "Purchase orders";
            item.type = "section";
            list.Add(item);

            PO POList = Helper.GetDataHelper.GetPOs();
            InventoryModel InvList = Helper.GetDataHelper.getInventoryData();

            var pending = POList.PurchaseOrder.Where(w => w.PoStatus.Equals("pending"));

            var invoice = POList.PurchaseOrder.Where(w => w.PoStatus.Equals("approved"));

            var inventory = InvList.Inventory;

            for (int i = 0; i < pending.Count(); i++)
            {
                item = new Item();
                var task = pending.ElementAt(i);
                item.title = task.Description;
                item.subtitle = "PoNumber: " + task.PoNumber;
                item.id = task.PoNumber;
                item.type = "resultItem";
                item.icon = ApplicationSettings.BaseUrl + "/Images/purchase_order.PNG";
                var url = "purchaseorder?poNumber=" + task.PoNumber.ToString() + "&vendorno=" + task.vendorNo.ToString();
                item.tap = new Tap()
                {
                    // /purchaseorder?poNumber="+PONumber+"&vendorno="+vendorNo;
                    type = "invoke",
                    title = item.id,
                    value = "{ \"type\": \"task/fetch\", \"data\": \"" + url + "\"}"
                };
                list.Add(item);
            }
            item = new Item();
            item.title = "Invoices";
            item.type = "section";
            list.Add(item);

            for (int i = 0; i < invoice.Count(); i++)
            {
                item = new Item();
                var task = invoice.ElementAt(i);
                item.title = task.Description;
                item.subtitle = "InvoiceNumber: " + task.PoNumber;
                item.id = task.PoNumber;
                item.type = "resultItem";
                item.icon = ApplicationSettings.BaseUrl + "/Images/invoice.PNG";
                var url = "purchaseorder?poNumber=" + task.PoNumber.ToString() + "&vendorno=" + task.vendorNo.ToString();
                item.tap = new Tap()
                {
                    type = "invoke",
                    title = item.id,
                    value = "{ \"type\": \"task/fetch\", \"data\": \"" + url + "\"}"
                };
                list.Add(item);
            }
            item = new Item();
            item.title = "Inventory";
            item.type = "section";
            list.Add(item);

            //for (int i = 0; i < inventory.Count(); i++)
            //{
            //    item = new Item();
            //    var task = inventory.ElementAt(i);
            //    item.title = task.description;
            //    item.subtitle = "InventoryNumber: " + task.inventoryNo;
            //    item.id = task.inventoryNo;
            //    item.type = "resultItem";
            //    item.icon = ApplicationSettings.BaseUrl + "/Images/inventory.PNG";
            //    item.tap = new Tap()
            //    {
            //        type = "invoke",
            //        title = item.id,
            //        //value = "{ \"type\": \"task/fetch\", \"data\": \"po:" + task.inventoryNo.ToString() + "\"}"
            //    };
            //    list.Add(item);
            //}
            card.content.items = list.ToArray();
            Attachment attachment = new Attachment()
            {
                ContentType = card.contentType,
                Content = card.content
            };
            return attachment;
        }

        public static Attachment Ticket()
        {
            TicketModel tickets = GetDataHelper.getTicket();
            Tics firstTicket = tickets.ticket.FirstOrDefault();
            if (firstTicket == null)
                return null;
            var card = new AdaptiveCard("1.0")
            {
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {
                        Items = new List<AdaptiveElement>()
                        {

                    new AdaptiveTextBlock()
                    {
                        Text = "Your ticket for employee support category has been created.",
                        Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Large, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text = firstTicket.ticketDept,
                        Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Default, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text =firstTicket.description,
                        Weight = AdaptiveTextWeight.Default, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Default, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text = firstTicket.ticketPriority,
                        Weight = AdaptiveTextWeight.Default, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Default,
                        Color= AdaptiveTextColor.Warning// set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveFactSet
                    {
                        Separator = true,
                        Facts =
                        {
                            new AdaptiveFact
                            {
                                Title = "Ticket No.",
                                Value = firstTicket.ticketNo
                            },
                            new AdaptiveFact
                            {
                                Title = "Date Created",
                                Value = firstTicket.ticketCreateDate
                            },
                            new AdaptiveFact
                            {
                                Title = "Assigned To",
                                Value = firstTicket.ticketAssignedTo
                            },
                            new AdaptiveFact
                            {
                                Title = "ETA date",
                                Value = firstTicket.ticketETADate
                            },
                            new AdaptiveFact
                            {
                                Title = "Status",
                                Value = firstTicket.ticketStatus
                            },

                        }
                    }
                        }
                    },
                },
                Actions = new List<AdaptiveAction>()
                {
                    new AdaptiveSubmitAction()
                    {
                        Title = "Cancel Ticket",
                        DataJson=@"{'Action':'" + Constants.TicketCancel+"', 'TicketNo':'" + firstTicket.ticketNo +"' }"
                    },
                     new AdaptiveSubmitAction()
                    {
                        Title = "Edit",
                        //DataJson=@"{'Action':'" + Constants.SetPrefrencesDone+"' }"
                     }
               }

            };
            Attachment attachment = new Attachment()
            {
                ContentType = AdaptiveCard.ContentType,
                Content = card
            };
            return attachment;
        }

        public static Attachment HumanResourceCard()
        {


            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Here are the tools under your HR department";
            string[] HRtools = { "Create business letter", "Create ticket", "Request leave", "View policies" };
            string[] HRtoolsSub = { "Create a business letter within a predesigned color and template.", "Raise a support ticket for any HR related queries.", "Request leave and check your status in the Leave application.", "View global policies for all employees." };
            string[] HRicons = { "/Images/createbusinessletter.JPG", "/Images/createticket.JPG", "/Images/requestleave.JPG", "/Images/viewpolicies.JPG" };
            for (int i = 0; i < HRtools.Count(); i++)
            {

                var item = new Item();
                //item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.icon = ApplicationSettings.BaseUrl + HRicons[i];
                item.id = i.ToString();


                item.type = "resultItem";
                item.title = HRtools[i];
                item.subtitle = HRtoolsSub[i];
                if (HRtools[i].Equals("Create ticket"))
                {
                    item.tap = new Tap()
                    {
                        type = "invoke",
                        title = item.id,
                        value = "{ \"type\": \"task/fetch\", \"data\": \"" + EmployeeConnect.Common.TaskModuleIds.CreateTicket + "\"}"
                    };
                }
                else
                {
                    item.tap = new Tap()
                    {
                        type = "messageBack",
                        text = item.title
                    };
                }
                list.Add(item);
            }
            card.content.items = list.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;

        }

        public static Attachment ITFacilitiesCard()
        {


            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Here are the tools under your IT department";
            string[] ITtools = { "Raise IT Support Ticket", "Submit Visitor Request", "Event IT Support Request", "Cafeteria Services App" };
            string[] ITtoolsSub = { "Submit your support request to the IT team.", "Fill a request form for short-term visitors.", "Fill out this form to request any equipment for events.", "Order your meals from the cafeteria online." };
            string[] ITicons = { "/Images/itsupportticket.JPG", "/Images/VisitorRequest.JPG", "/Images/eventitsupport.JPG", "/Images/cafeteriaservices.JPG" };
            for (int i = 0; i < ITtools.Count(); i++)
            {

                var item = new Item();
                item.icon = ApplicationSettings.BaseUrl + ITicons[i];
                item.id = i.ToString();
                item.title = ITtools[i];
                item.subtitle = ITtoolsSub[i];

                item.type = "resultItem";
                if (ITtools[i].Equals("Make visitor request"))
                {
                    item.tap = new Tap()
                    {
                        type = "invoke",
                        title = item.id,
                        value = "{ \"type\": \"task/fetch\", \"data\": \"" + EmployeeConnect.Common.TaskModuleIds.VisitorRegistration + "\"}"
                    };
                }
                else
                {
                    item.tap = new Tap()
                    {
                        type = "messageBack",
                        text = item.title
                    };
                }

                list.Add(item);
            }
            card.content.items = list.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;

        }

        public static Attachment PaymentsAndBenefitsCard()
        {
            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Here are the tools under your PaymentAndBenefits department";
            string[] PBTools = { "Download payslip", "Create finance ticket", "Submit benefit claim", "View benefit policies" };
            string[] PBToolsSub = { "View online payslips and full payment histories.", "Open a support ticket with the Finance ", "Submit a claim from your account to start the process.", "Read common queries about servicing your policy." };
            string[] PBicons = { "/Images/downloadpayslip.JPG", "/Images/financeticket.JPG", "/Images/benefitclaim.JPG", "/Images/viewpolicies.JPG" };
            for (int i = 0; i < PBTools.Count(); i++)
            {

                var item = new Item();
                //item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.icon = ApplicationSettings.BaseUrl + PBicons[i];
                item.id = i.ToString();

                item.title = PBTools[i];
                item.subtitle = PBToolsSub[i];
                item.type = "resultItem";
                item.tap = new Tap()
                {
                    type = "messageBack",
                    text = item.title
                };

                list.Add(item);
            }
            card.content.items = list.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;
        }

        public static Attachment StoreOperationsCard()
        {


            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Here are the tools under your Store Operations department.";

            string[] STools = { "Inventory request", "Timesheet", "Store info" };
            string[] SToolsSub = { "Inventory form to request supplies.", "Weekly timesheet setup in order ", "Your store information." };
            string[] Sicons = { "/Images/inventoryrequest.JPG", "/Images/timesheet.JPG", "/Images/storeinfo.JPG" };

            for (int i = 0; i < STools.Count(); i++)
            {

                var item = new Item();
                //item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.icon = ApplicationSettings.BaseUrl + Sicons[i];
                item.id = i.ToString();


                item.type = "resultItem";

                item.title = STools[i];
                item.subtitle = SToolsSub[i];

                item.tap = new Tap()
                {
                    type = "messageBack",
                    text = item.title
                };

                list.Add(item);
            }
            card.content.items = list.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;

        }

        public static Attachment GetETbyID(string id)
        {
            EandTModel EandTL = Helper.GetDataHelper.GetEandT();
            var SelectedEventsTrainings = getETByIds(EandTL, id);

            if (SelectedEventsTrainings == null)   //could not find the news
                return null;

            string EandT = "";
            string date = "";
            string imagepath = "";
            string mandatoryFlag="";
            if (SelectedEventsTrainings.ETFlag == "E")
                imagepath = "/fonts/Flag.png";
            else
                imagepath = "/fonts/Shape.png";
            if (SelectedEventsTrainings.ETStartDate == SelectedEventsTrainings.ETEndDate)
                date = SelectedEventsTrainings.ETStartDate;
            else
                date = SelectedEventsTrainings.ETStartDate + " to " + SelectedEventsTrainings.ETEndDate;


            if (SelectedEventsTrainings.ETFlag == "T")
                EandT = "Training";
            else EandT = "Event";

            if(SelectedEventsTrainings.ETMandatory == true)
            {
                mandatoryFlag = "*Mandatory";
            }
            List<AdaptiveColumn> list = new List<AdaptiveColumn>();
            List<AdaptiveColumn> Insidelist1 = new List<AdaptiveColumn>();
            List<AdaptiveColumn> Insidelist2 = new List<AdaptiveColumn>();
            List<AdaptiveColumn> Insidelist3 = new List<AdaptiveColumn>();
            List<AdaptiveColumn> list1 = new List<AdaptiveColumn>();
            Insidelist1.Add(new AdaptiveColumn()
            {
                Items =
                {
                    new AdaptiveImage()
                    {
                        Url = new Uri(ApplicationSettings.BaseUrl + "/fonts/Time.png"),
                        Size = AdaptiveImageSize.Small
                    }
                },
                Width = "auto"

            });
            Insidelist1.Add(new AdaptiveColumn()
            {
                Items =
                {
                     new AdaptiveTextBlock()    //NewsBy on Date and Time
                            {
                                Text = date+"\n\n"+SelectedEventsTrainings.ETStartTime+'-'+SelectedEventsTrainings.ETEndTime,
                                Weight = AdaptiveTextWeight.Bolder,    // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Medium,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true

                            }
                },
                Width = "auto"

            });

            Insidelist2.Add(new AdaptiveColumn()
            {
                Items =
                {
                    new AdaptiveImage()
                    {
                        Url = new Uri(ApplicationSettings.BaseUrl + "/fonts/Location.png"),
                        Size = AdaptiveImageSize.Small
                    }
                },
                Width = "auto"

            });
            Insidelist2.Add(new AdaptiveColumn()
            {
                Items =
                {
                     new AdaptiveTextBlock()    //NewsBy on Date and Time
                            {
                                Text = SelectedEventsTrainings.ETType,
                                Weight = AdaptiveTextWeight.Bolder,    // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Medium,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true
                            }
                },
                Width = "auto"

            });

            Insidelist3.Add(new AdaptiveColumn()
            {
                Items =
                {
                    new AdaptiveImage()
                    {
                        Url = new Uri(ApplicationSettings.BaseUrl + "/fonts/Website.png"),
                        Size = AdaptiveImageSize.Small,
                    }
                },
                Width = "auto"

            });
            Insidelist3.Add(new AdaptiveColumn()
            {
                Items =
                {
                     new AdaptiveTextBlock()    //NewsBy on Date and Time
                            {
                                Text = "Website",
                                Weight = AdaptiveTextWeight.Bolder,    // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Medium,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true

                            }
                },
                Width = "auto"

            });


            list1.Add(new AdaptiveColumn()
            {
                Items =
                {           new AdaptiveImage()
                            {
                                Url = new Uri(ApplicationSettings.BaseUrl + imagepath)
                            }

                },
                Width = "auto"

            });
            list1.Add(new AdaptiveColumn()
            {
                Items =
                {
                            new AdaptiveTextBlock()    //NewsBy on Date and Time
                            {
                                Text = EandT,
                                Weight = AdaptiveTextWeight.Bolder,    // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Medium,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true

                            }

                },
                Width = "auto"

            });
            list1.Add(new AdaptiveColumn()
            {
                Items =
                {
                            new AdaptiveTextBlock()    //NewsBy on Date and Time
                            {
                                Text = mandatoryFlag,
                                Weight = AdaptiveTextWeight.Bolder,    // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Medium,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true

                            }

                },
                Width = "auto"

            });


            list.Add(new AdaptiveColumn()
            {
                Items =
                {           new AdaptiveColumnSet
                {
                    Columns=Insidelist1
                }

                }

            });
            list.Add(new AdaptiveColumn()
            {
                Items =
                {           new AdaptiveColumnSet()
                            {
                                Columns = Insidelist2
                            },


                }

            });
            list.Add(new AdaptiveColumn()
            {
                Items =
                {           new AdaptiveColumnSet()
                            {
                                Columns = Insidelist3
                            },


                }

            });
            string status = "";
            if (SelectedEventsTrainings.ETFlag == "E")
            {
                if (SelectedEventsTrainings.UserAdded)
                    status = "Remove from Calendar";
                else status = "Add to Calendar";
            }
            else
            {
                if (SelectedEventsTrainings.UserAdded)
                    status = "Unregister";
                else status = "Register";
            }


            var card = new AdaptiveCard("1.0")
            {
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {
                        Items = new List<AdaptiveElement>()
                        {
                            new AdaptiveImage
                            {
                                HorizontalAlignment = AdaptiveHorizontalAlignment.Center,
                                Url = new Uri(SelectedEventsTrainings.ETThumbnailUrl)
                            },
                            new AdaptiveColumnSet()
                            {
                                Columns=list1,
                                Spacing=AdaptiveSpacing.Medium
                            },
                           new AdaptiveTextBlock()     //Detailed News
                            {
                                Text = SelectedEventsTrainings.ETTitle,
                                Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.ExtraLarge,       // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true
                            },
                           new AdaptiveTextBlock()     //Detailed News
                            {
                                Text = "Agenda: "+SelectedEventsTrainings.ETAgenda,
                                Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Default,       // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true
                            },
                            new AdaptiveColumnSet
                            {
                                Columns=list
                            },
                            new AdaptiveTextBlock()     //Detailed News
                            {
                                Text = SelectedEventsTrainings.ETDetails,
                                Weight = AdaptiveTextWeight.Default, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Default,       // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true
                            }
                        }
                    }
                },
                Actions = new List<AdaptiveAction>()
                {
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
                        new AdaptiveSubmitAction()
                        {
                            Title = "Close",
                            // Data = ,
                            DataJson="{\"action\": \"close\"}"
                        }

                }
            };
            if (SelectedEventsTrainings.ETMandatory == false)
            {
                card.Actions.Add(new AdaptiveSubmitAction()
                {
                    Title = status,
                    Data = new EventTaskData() { action = TaskModuleIds.toggleEventStatus, eventId = id }
                });
            }


            Attachment attachment = new Attachment();

            attachment.ContentType = AdaptiveCard.ContentType;

            attachment.Content = card;

            return attachment;
        }

        public static EventsAndTraining getETByIds(EandTModel EandTL, string id)
        {
            if (EandTL == null)
            {
                return null;
            }
            foreach (var ET in EandTL.EventsAndtraining)
            {
                if (ET.ETID.Equals(id))
                    return ET;
            }
            return null;
        }

        //public static Attachment DefaultCard()
        //{
        //    var card1 = new AdaptiveCard("1.0")
        //    {
        //        BackgroundImage = new AdaptiveBackgroundImage(ApplicationSettings.BaseUrl + "/Images/signin_1.png"),
        //        Body = new List<AdaptiveElement>()
        //        {
        //            new AdaptiveContainer()
        //            {
        //                Items = new List<AdaptiveElement>()
        //                {
        //                    new AdaptiveTextBlock()
        //                    {

        //                        Text = "Welcome to Employee Connect",
        //                        Weight = AdaptiveTextWeight.Bolder,
        //                        Size = AdaptiveTextSize.Large

        //                    },

        //                    new AdaptiveTextBlock()
        //                    {
        //                        Text = "Try these bot commands",
        //                        Wrap = true ,
        //                         Weight = AdaptiveTextWeight.Bolder,
        //                    },
        //                    new AdaptiveTextBlock()
        //                    {
        //                        Text = @"- Set Preferences
        //                        - Trending News
        //                        - Upcoming Events And Trainings
        //                        - Pending Submissions
        //                        - Pending Approvals
        //                        - My Tools
        //                        - Policies",
        //                        Wrap = true 
        //                    }
        //                }
        //            }
        //        }
        //    };            

        //    Attachment attachment = new Attachment();

        //    attachment.ContentType = AdaptiveCard.ContentType;

        //    attachment.Content = card1;

        //    return attachment;
        //}

        public static List<Attachment> DefaultCard()
        {
            //Welcome Card
            //var action = new List<AdaptiveAction>()
            //{
            //    //new AdaptiveSubmitAction()
            //    //{
            //    //    Title = "Let's get started",
            //    //    DataJson = @"{'Action':'" + Constants.ShowPrefCard + "' }"
            //    //}                

            //    //new AdaptiveShowCardAction()
            //    //{
            //    //    Title = "Let's get Started",
            //    //    Card=(AdaptiveCard)CardHelper.SetTimePrefrences().Content
            //    //}
            //};
            var card1 = new AdaptiveCard("1.0")
            {
                BackgroundImage = new AdaptiveBackgroundImage(ApplicationSettings.BaseUrl + "/Images/signin_1.png"),
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {
                        Items = new List<AdaptiveElement>()
                        {
                            new AdaptiveTextBlock()
                            {
                                Text = "Welcome to Employee Connect",
                                Weight = AdaptiveTextWeight.Bolder,
                                Size = AdaptiveTextSize.Large
                            },

                            new AdaptiveTextBlock()
                            {
                                Text = "Keep yourself posted \r\rabout the latest news",
                                Wrap = true ,
                                 Weight = AdaptiveTextWeight.Bolder,
                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "The bot will keep you \r\r updated on the latest \r\r news in your organisation",
                                Wrap = true ,
                            }
                        }
                    }
                },

                //Actions = action
            };
            var card2 = new AdaptiveCard("1.0")
            {
                BackgroundImage = new AdaptiveBackgroundImage(ApplicationSettings.BaseUrl + "/Images/signin_2.png"),
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {

                        Items = new List<AdaptiveElement>()
                        {

                            new AdaptiveTextBlock()
                            {
                                Text = "Welcome to Employee Connect",
                                Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Large// set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                            },
                            /*new AdaptiveTextBlock()
                            {
                                Text = "Please sign in to get started",
                                Wrap = true ,// True if text is allowed to wrap
                            },*/
                                new AdaptiveTextBlock()
                            {
                                Text = "Add events to your calendar",
                                Wrap = true ,// True if text is allowed to wrap
                                    Weight = AdaptiveTextWeight.Bolder

                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "The bot can send \r\r notifications to remind \r\r you about the latest \r\r events and trainings",
                                Wrap = true ,// True if text is allowed to wrap
                                MaxWidth = 2
                            }
                        }
                            // TextBlock Item allows for the inclusion of text, with various font sizes, weight and color
                            
                    }
                },

                //Actions = action
            };
            var card3 = new AdaptiveCard("1.0")
            {
                BackgroundImage = new AdaptiveBackgroundImage(ApplicationSettings.BaseUrl + "/Images/signin_3.png"),
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveContainer()
                    {
                        Items = new List<AdaptiveElement>()
                        {
                            new AdaptiveTextBlock()
                            {
                                Text = "Welcome to Employee Connect",
                                Weight = AdaptiveTextWeight.Bolder,
                                Size = AdaptiveTextSize.Large
                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "Create and manage your tasks",
                                Wrap = true,
                                Weight = AdaptiveTextWeight.Bolder

                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "The app identifies all your \r\r pending tasks and helps \r\r you manage everything at \r\r one place.",
                                Wrap = true,

                            }
                        }
                    }
                },

                //Actions = action
            };
            List<Attachment> res = new List<Attachment>();
            res.Add(new Attachment()
            {
                ContentType = AdaptiveCard.ContentType,
                Content = card1
            });
            res.Add(new Attachment()
            {
                ContentType = AdaptiveCard.ContentType,
                Content = card2
            });
            res.Add(new Attachment()
            {
                ContentType = AdaptiveCard.ContentType,
                Content = card3
            });


            return res;
        }

    }

   
}