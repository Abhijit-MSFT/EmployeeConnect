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
        public static Attachment getNewsCard()
        {

            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            var buttonsList = new List<ListButton>();
            card.content.title = "";
            NewsModel newsL = Helper.GetDataHelper.GetNews();
            Item item;
            item = new Item();
            item.title = "Top stories for you";
            item.type = "section";
            list.Add(item);
            
            if (newsL != null)  //if it got the news
            {
                var TrendingNews = newsL.news.Where(w => w.LatestOrTrendingFlag.Equals("Trending"));
                var SuggestedNews = newsL.news.Where(w => w.LatestOrTrendingFlag.Equals("Latest"));

                int MaxNewsCount = TrendingNews.Count();
                if (MaxNewsCount > 2)   //show 2 trending news
                    MaxNewsCount = 2;

                for (int i = 0; i < MaxNewsCount; i++)
                {
                    var news = TrendingNews.ElementAt(i);
                    string subtitle = news.DetailedNews;
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

                MaxNewsCount = 0;
                if (SuggestedNews.Count() > 0) //show 1 suggested news
                    MaxNewsCount = 1; 
                
                for (int i = 0; i < MaxNewsCount; i++)
                {
                    var news = SuggestedNews.ElementAt(i);
                    string subtitle = news.DetailedNews;
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

                //for View More
                /*item = new Item();
                item.title = "View more";
                item.icon = ApplicationSettings.BaseUrl + "/Images/whiteImage.png";
                item.type = "content";
                item.id = deepLinkTab("currNews", "news");
                item.tap = new Tap()
                {
                    type = "openUrl",
                    value = deepLinkTab("currNews", "news")

                };
                list.Add(item);*/

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
            string[] dept = { "Human Resources", "Payment and benefits", "IT & facilities", "Store Operations" };

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
                    //title = "title",
                    text = item.title + " policy"


                };

                list.Add(item);
            }
            card.content.items = list.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;

        }
        /*
        public static Attachment GetNewsCardTwoTitles() // two titles
        {


            var card = new ListCard();
            //card.content = new Content();
            var list = new List<Item>();
            var contents = new List<Content>();
            var content1 = new Content();
            var content2 = new Content();

            for (int i = 0; i < 5; i++)
            {

                var item = new Item();
                item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.id = i.ToString();


                item.type = "resultItem";
                item.title = "News " + i;

                item.tap = new Tap()
                {
                    type = "messageBack",
                    title = "title",
                    text = "News" + i
                };

                list.Add(item);
            }
            //contents.ElementAt(0).items = list.ToArray();
            var list2 = new List<Item>();
            for (int i = 0; i < 5; i++)
            {

                var item = new Item();
                item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.id = i.ToString();


                item.type = "resultItem";
                item.title = "News " + i;

                item.tap = new Tap()
                {
                    type = "messageBack",
                    title = "title",
                    text = "News" + i
                };

                list2.Add(item);
            }
            content1.title = "Please select a news";
            content2.title = "Please select a news";
            content1.items = list.ToArray();
            content2.items = list2.ToArray();
            contents.Add(content1);
            contents.Add(content2);
            card.content = contents.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;

        }*/
        //Returns the Tools ListCard having Tools for every department.
        public static Attachment GetMyToolsCard()
        {


            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Please select a department to view it's tools";

            string[] dept = { "Human Resources", "Payment and benefits", "IT & facilities", "Store Operations" };

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
                                        Url = new Uri(SelectedNews.NewsThumbnailUrl)
                            },
                            new AdaptiveTextBlock() //Title of News
                            {
                                Text = SelectedNews.NewsTitle,
                                Weight = AdaptiveTextWeight.Bolder,     // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Large,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true
                            },
                                new AdaptiveTextBlock()     //NewsBy on Date and Time
                            {
                                Text = "By " + SelectedNews.NewsBy + " on " + SelectedNews.NewsDateTIme,
                                Weight = AdaptiveTextWeight.Lighter,    // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Small,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true
                            },
                            new AdaptiveTextBlock()     //Detailed News
                            {
                                Text = SelectedNews.DetailedNews,
                                Weight = AdaptiveTextWeight.Default, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Default,       // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true
                            }
                        }
                    }
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

            var card1 = new AdaptiveCard("1.0")
            {
                            BackgroundImage = new AdaptiveBackgroundImage(ApplicationSettings.BaseUrl + "/Images/signin_1.png"),
                Body = new List<AdaptiveElement>()
                {
                    //BackgroundImage = new AdaptiveBackgroundImage(ApplicationSettings.BaseUrl + "/Images/signin_1.png"),
                    new AdaptiveContainer()
                    {
                     //   BackgroundImage = ApplicationSettings.BaseUrl + "/Images/signin_1.png",
                        Items = new List<AdaptiveElement>()
                        {
                            // TextBlock Item allows for the inclusion of text, with various font sizes, weight and color
                            new AdaptiveTextBlock()
                            {
                                
                                Text = "Welcome to Employee Connect",
                                Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Large// set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                
                            },
                            // Adaptive FactSet item makes it simple to display a series of facts (e.g. name/value pairs) in a tabular form
                           
                            // ImageSet allows for the inclusion of a collection images like a photogallery
                            new AdaptiveTextBlock()
                            {
                                Text = "Please sign in to get started",
                                Wrap = true ,// True if text is allowed to wrap
                                
                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "Keep yourself posted \r\rabout the latest news",
                                Wrap = true ,// True if text is allowed to wrap
                                 Weight = AdaptiveTextWeight.Bolder,
                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "The bot will keep you \r\r updated on the latest \r\r news in your organisation.",
                                Wrap = true ,// True if text is allowed to wrap
                                
                            }
                            //new AdaptiveImage
                            //{
                            //           // Url = new Uri("https://cdncontribute.geeksforgeeks.org/wp-content/uploads/apple.jpeg") //url to image
                            //            Url = new Uri(ApplicationSettings.BaseUrl + "/Images/signin_1.png")

                            //}
                        }
                    }
                },

                Actions = new List<AdaptiveAction>()
                {
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
                    new AdaptiveSubmitAction()
                    {
                        Title = "Sign in",
                       // DataJson = "get the data"
                    }
               }
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
                        // Adaptive FactSet item makes it simple to display a series of facts (e.g. name/value pairs) in a tabular form
                           
                        // ImageSet allows for the inclusion of a collection images like a photogallery
                        new AdaptiveTextBlock()
                        {
                            Text = "Please sign in to get started",
                            Wrap = true ,// True if text is allowed to wrap
                        },
                            new AdaptiveTextBlock()
                        {
                            Text = "Add events to your calender",
                            Wrap = true ,// True if text is allowed to wrap
                                Weight = AdaptiveTextWeight.Bolder

                        },
                        new AdaptiveTextBlock()
                        {
                            Text = "The bot can send \r\r notifications to remind \r\r you about the latest \r\r events and trainings.",
                            Wrap = true ,// True if text is allowed to wrap
                            MaxWidth = 2
                        }
                                    
                                   
                                }
                            // TextBlock Item allows for the inclusion of text, with various font sizes, weight and color
                            
                    }
                },

                Actions = new List<AdaptiveAction>()
                {
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
                    new AdaptiveSubmitAction()
                    {
                        Title = "Sign in",
                       // DataJson = "get the data"
                    }
               }
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
                            // TextBlock Item allows for the inclusion of text, with various font sizes, weight and color
                            new AdaptiveTextBlock()
                            {
                                Text = "Welcome to Employee Connect",
                                Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Large// set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                            },
                            // Adaptive FactSet item makes it simple to display a series of facts (e.g. name/value pairs) in a tabular form
                           
                            // ImageSet allows for the inclusion of a collection images like a photogallery
                            new AdaptiveTextBlock()
                            {
                                Text = "Please sign in",
                                Wrap = true ,// True if text is allowed to wrap
                            },
                             new AdaptiveTextBlock()
                            {
                                Text = "Create and manage your tasks",
                                Wrap = true ,// True if text is allowed to wrap
                                Weight = AdaptiveTextWeight.Bolder

                            },
                            new AdaptiveTextBlock()
                            {
                                Text = "The apps identifies all your \r\r pending tasks and help \r\r you manage everything at \r\rone place.",
                                Wrap = true ,// True if text is allowed to wrap
                                
                            }
                            //new AdaptiveImage
                            // {
                            //            //Url = new Uri("https://cdncontribute.geeksforgeeks.org/wp-content/uploads/apple.jpeg") //url to image
                            //            Url = new Uri(ApplicationSettings.BaseUrl + "/Images/signin_3.png")
                            //}
                        }
                    }
                },

                Actions = new List<AdaptiveAction>()
                {
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
                    new AdaptiveSubmitAction()
                    {
                        Title = "Sign in",
                       // DataJson = "get the data"
                    }
               }
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

        //[Obsolete]
        public static Attachment SetTimePrefrences()
        {
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
                                //Value = "1",
                                Style = AdaptiveChoiceInputStyle.Compact,
                                Choices =
                                {
                                    new AdaptiveChoice
                                    {
                                        Title = "11:00 AM",
                                        Value = "1" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "12:00 PM",
                                        Value = "2"
                                    }
                                }
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
                                //Value = "1",
                                Style = AdaptiveChoiceInputStyle.Compact,
                                Choices =
                                {
                                    new AdaptiveChoice
                                    {
                                        Title = "11:00 AM",
                                        Value = "1" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "12:00 PM",
                                        Value = "2"
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
                                //Value = "1",
                                Style = AdaptiveChoiceInputStyle.Compact,
                                Choices =
                                {
                                    new AdaptiveChoice
                                    {
                                        Title = "11:00 AM",
                                        Value = "1" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                                    },
                                    new AdaptiveChoice
                                    {
                                        Title = "12:00 PM",
                                        Value = "2"
                                    },
                                }
                            }
                        }
                    }
                },
                Actions = new List<AdaptiveAction>()
                {
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
                    new AdaptiveShowCardAction()
                    {
                        Title = "Done",
                       Card=CardHelper.SetNewsPreferences()
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

        //[Obsolete]
        public static AdaptiveCard SetNewsPreferences()
        {
            List<AdaptiveColumn> list = new List<AdaptiveColumn>();
            list.Add(new AdaptiveColumn()
            {
                Items =
                {
                     new AdaptiveChoiceSetInput()
                    {
                        Id = "NewsCategory",
                        //Value = "1", // please set default value here
                        Style = AdaptiveChoiceInputStyle.Expanded,
                        IsMultiSelect=true,// set the style of Choice set to compact
                        Wrap=true,
                        Choices =
                        {
                            // describes a choice input. the value should be a simple string without a ","
                            new AdaptiveChoice
                            {
                                Title ="Finance",
                                Value = "1",
                                //IsSelected=false//set a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                            },
                            new AdaptiveChoice
                            {
                                Title = "Media",
                                Value = "2",
                               // IsSelected=false
                            },
                            new AdaptiveChoice
                            {
                                Title = "Art",
                                Value = "3",
                               // IsSelected=false
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
                        //Value = "2", // please set default value here
                        Style = AdaptiveChoiceInputStyle.Expanded,
                        IsMultiSelect=true,// set the style of Choice set to compact
                        Wrap=true,
                        Choices =
                        {
                            // describes a choice input. the value should be a simple string without a ","
                            
                            new AdaptiveChoice
                            {
                                Title = "Business",
                                Value = "4",
                                //IsSelected=false
                            },
                            new AdaptiveChoice
                            {
                                Title = "Culture",
                                Value = "5",
                              //  IsSelected=false
                            },
                            new AdaptiveChoice
                            {
                                Title = "Media",
                                Value = "6",
                              //  IsSelected=false
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
                   /*
                    new AdaptiveChoiceSetInput()
                    {
                        Id = "NewsCategory",
                        Value = "1", // please set default value here
                        Style = AdaptiveChoiceInputStyle.Expanded,
                        IsMultiSelect=true,// set the style of Choice set to compact
                        Wrap=true,
                        Choices =
                        {
                            // describes a choice input. the value should be a simple string without a ","
                            new AdaptiveChoice
                            {
                                Title ="Finance",
                                Value = "1",
                                IsSelected=false//set a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                            },
                            new AdaptiveChoice
                            {
                                Title = "Media",
                                Value = "2",
                               // IsSelected=false
                            },
                            new AdaptiveChoice
                            {
                                Title = "Art",
                                Value = "3",
                               // IsSelected=false
                            },
                            new AdaptiveChoice
                            {
                                Title = "Business",
                                Value = "4",
                                //IsSelected=false
                            },
                            new AdaptiveChoice
                            {
                                Title = "Culture",
                                Value = "5",
                              //  IsSelected=false
                            },
                            new AdaptiveChoice
                            {
                                Title = "Media",
                                Value = "6",
                              //  IsSelected=false
                            }

                        }

                    }*/
                }
                }
                },
                Actions = new List<AdaptiveAction>()
                {
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
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

            /* Attachment attachment = new Attachment()
             {
                 ContentType = AdaptiveCard.ContentType,
                 Content = card
             };*/
            return card;
        }

        //public static Attachment getETCard()
        //{
        //    var card = new ListCard();
        //    card.content = new Content();
        //    var list = new List<Item>();
        //    card.content.title = "Upcoming events and Trainings";
        //    EandTModel EandTL = Helper.GetDataHelper.GetEandT();
        //    if (EandTL != null)  //if it got the news
        //    {
        //        var Events = EandTL.EventsAndtraining.Where(w => w.ETID.StartsWith("e"));
        //        //var Trainings = EandTL.EventsAndtraining.Where(w => w.ETFlag.Equals("T"));
        //        //int ReqDescriptionLength = 85;

        //        //MaxNewsCount has total number of news to display
        //        //int MaxNewsCount = 3;
        //        // if (MaxNewsCount > SuggestedNews.Count())
        //        int MaxEventsCount = Events.Count();
        //        //int MaxTrainingsCount = Trainings.Count();

        //        for (int i = 0; i < MaxEventsCount; i++)
        //        {
        //            var EandT = Events.ElementAt(i);
        //            string subtitle = EandT.ETDetails;
        //            string title = EandT.ETTitle + ' ' + EandT.ETStartDate + ' ' + '-' + ' ' + EandT.ETEndDate;
        //            var item = new Item();
        //            //item.title = EandT.ETTitle;
        //            item.title = title;
        //            item.icon = EandT.ETThumbnailUrl;
        //            item.id = EandT.ETID;

        //            //if (subtitle.Length > ReqDescriptionLength)
        //            //    item.subtitle = subtitle.Substring(0, ReqDescriptionLength);
        //            //else
        //            item.subtitle = subtitle;

        //            item.type = "resultItem";

        //            //item.NewBy = "Vedant";      //doesn't display in frontend

        //            item.tap = new Tap()
        //            {
        //                type = "messageBack",
        //                text = EandT.ETID
        //            };

        //            list.Add(item);
        //        }
        //        card.content.items = list.ToArray();

        //    }
        //    Attachment attachment = new Attachment();

        //    attachment.ContentType = card.contentType;

        //    attachment.Content = card.content;

        //    return attachment;

        //}


        //[Obsolete]

        public static Attachment getETCard()
        {
            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            var buttonsList = new List<ListButton>();
            card.content.title = "Upcoming events and Trainings";
            EandTModel EandTL = Helper.GetDataHelper.GetEandT();
            Item item;
            if (EandTL != null)  //if it got the news
            {
                var Events = EandTL.EventsAndtraining.Where(w => w.ETID.StartsWith("e"));
                int MaxEventsCount = Events.Count();
                int count = 0;
                for (int i = 0; i < MaxEventsCount; i++)
                {
                    var EandT = Events.ElementAt(i);
                    DateTime D = DateTime.ParseExact(EandT.ETStartDate, "MM-dd-yyyy", System.Globalization.CultureInfo.InvariantCulture);
                    if (count == 3)
                        break;
                    if (D <= DateTime.Today.AddDays(7))
                    {
                        string subtitle = EandT.ETDetails;
                        string title = EandT.ETTitle + ' ' + EandT.ETStartDate + ' ' + '-' + ' ' + EandT.ETEndDate;
                        item = new Item();
                        item.title = title;
                        item.icon = EandT.ETThumbnailUrl;
                        item.id = EandT.ETID;
                        item.subtitle = subtitle;
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
                //item = new Item();
                //item.type = "resultItem";
                //item.title = "View more";
                //item.icon = ApplicationSettings.BaseUrl + "/Images/purpleImage.JPG";
                //item.tap = new Tap()
                //{
                //    type = "openUrl",
                //    value = deepLinkTab("EandT", "Events and Trainings")
                //};
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
        public static Attachment UpcomingEventsTraining()
        {
            EandTModel ETlist = new EandTModel();
            ETlist = Helper.GetDataHelper.GetEandT();

            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            var buttonsList = new List<ListButton>();
            card.content.title = "Upcoming events and training for you";


            DateTime CurrDate = new DateTime(2019, 6, 1);
            Item item;
            int count = 0;
            for (int i = 0; i < ETlist.EventsAndtraining.Count(); i++)
            {
                if (count == 3)
                    break;
                if (!ETlist.EventsAndtraining[i].UserAdded)
                    continue;
                else
                {
                    DateTime D = DateTime.ParseExact(ETlist.EventsAndtraining[i].ETStartDate, "MM-dd-yyyy",
                                       System.Globalization.CultureInfo.InvariantCulture);

                    if (D <= CurrDate.AddDays(7))
                    {

                        item = new Item();
                        item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                        item.id = i.ToString();
                        item.subtitle = ETlist.EventsAndtraining[i].ETStartDate + " to " + ETlist.EventsAndtraining[i].ETEndDate;

                        item.type = "resultItem";
                        item.title = ETlist.EventsAndtraining[i].ETTitle;

                        item.tap = new Tap()
                        {
                            type = "imBack",
                            title = "titleitem",
                            value = "Event and training item" + i
                        };

                        list.Add(item);
                        count++;
                    }
                }
            }
            //adding all events tab

            item = new Item();
            //item.icon = "##BaseURL##/Images/whiteimage.JPG";

            //item.type = "resultItem";
            //item.title = "View more";
            ////item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
            //item.icon = ApplicationSettings.BaseUrl + "/Images/purpleImage.JPG";
            //item.tap = new Tap()
            //{
            //    type = "openUrl",
            //    value = deepLinkTab("EandT", "Events and Trainings")
            //};
            
            ListButton viewButton = new ListButton();
            viewButton.type = "openUrl";
            viewButton.title = "View all events";
            viewButton.value = deepLinkTab("EandT", "Events and Trainings");
            buttonsList.Add(viewButton);

            card.content.buttons = buttonsList.ToArray();
            list.Add(item);

            card.content.items = list.ToArray();
            Attachment attachment = new Attachment();
            attachment.ContentType = card.contentType;
            attachment.Content = card.content;
            return attachment;
        }
        //Y.G
        //public static Attachment GetETbyID(string id)
        //{
        //    EandTModel EandTL = Helper.GetDataHelper.GetEandT();
        //    var SelectedEventsTrainings = getETByIds(EandTL, id);

        //    if (SelectedEventsTrainings == null)   //could not find the news
        //        return null;
        //    var card = new AdaptiveCard("1.0")
        //    {
        //        Body = new List<AdaptiveElement>()
        //        {
        //            new AdaptiveContainer()
        //            {
        //                Items = new List<AdaptiveElement>()
        //                {
        //                    new AdaptiveImage
        //                    {
        //                                Url = new Uri(SelectedEventsTrainings.ETThumbnailUrl)
        //                    },
        //                    new AdaptiveTextBlock() //Title of News
        //                    {
        //                        Text = SelectedEventsTrainings.ETTitle,
        //                        Weight = AdaptiveTextWeight.Bolder,     // set the weight of text e.g. Bolder, Light, Normal
        //                        Size = AdaptiveTextSize.Large,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
        //                        Wrap = true
        //                    },
        //                        new AdaptiveTextBlock()     //NewsBy on Date and Time
        //                    {
        //                        Text = "By " + SelectedEventsTrainings.ETType + " on " + SelectedEventsTrainings.ETStartDate,
        //                        Weight = AdaptiveTextWeight.Lighter,    // set the weight of text e.g. Bolder, Light, Normal
        //                        Size = AdaptiveTextSize.Small,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
        //                        Wrap = true
        //                    },
        //                    new AdaptiveTextBlock()     //Detailed News
        //                    {
        //                        Text = SelectedEventsTrainings.ETDetails,
        //                        Weight = AdaptiveTextWeight.Default, // set the weight of text e.g. Bolder, Light, Normal
        //                        Size = AdaptiveTextSize.Default,       // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
        //                        Wrap = true
        //                    }
        //                }
        //            }
        //        }
        //    };
        //    Attachment attachment = new Attachment();

        //    attachment.ContentType = AdaptiveCard.ContentType;

        //    attachment.Content = card;

        //    return attachment;
        //}

        ////Returns the News with specific NewsID
        //public static EventsAndTraining getETById(EandTModel EandTL, string id)
        //{
        //    if (EandTL == null)
        //        return null;
        //    foreach (var ET in EandTL.EventsAndtraining)
        //    {
        //        if (ET.ETID.Equals(id))
        //            return ET;
        //    }
        //    return null;    // id doesn't exist
        //}


        //[Obsolete]

        public static Attachment PendingTasks()
        {
            PO POlist = new PO();
            POlist = Helper.GetDataHelper.GetPOs();
            PurchaseOrders POOrder = POlist.PurchaseOrder.FirstOrDefault<PurchaseOrders>();

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
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
                     new AdaptiveShowCardAction
                     {
                        Title ="Review",
                        Card = CardHelper.ReviewTasks()

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

        //[Obsolete]
        public static AdaptiveCard ReviewTasks()
        {
            //how the po info is sent here
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
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
                    new AdaptiveSubmitAction()
                    {
                        Title = "Fill timesheet",
                       // DataJson = "get the data"
                    },
                     new AdaptiveSubmitAction()
                    {
                        Title = "Remind me later",
                       // DataJson = "get the data"
                    }
                 }

            };
            return card;
        }

        // [Obsolete]
        public static Attachment PendingApprovals()
        {
            //how to get data from json
            PO POList = Helper.GetDataHelper.GetPOs();
            InventoryModel InvList = Helper.GetDataHelper.getInventoryData();

            int POcount = 0, Icount = 0, Invcount = InvList.Inventory.Count();
            for (int i = 0; i < POList.PurchaseOrder.Count(); i++)
            {
                if (POList.PurchaseOrder[i].PoStatus == "pending")
                    POcount++;
                else if (POList.PurchaseOrder[i].PoStatus == "approved")
                    Icount++;
            }


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
                            Text = "You have " + (POcount+Icount+Invcount) + " items pending for approval",
                            Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                            Size = AdaptiveTextSize.Medium, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                        },
                        new AdaptiveTextBlock()
                        {
                            Text = POcount+ " purchase orders",
                            Weight = AdaptiveTextWeight.Lighter, // set the weight of text e.g. Bolder, Light, Normal
                            Size = AdaptiveTextSize.Small, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                        },
                         new AdaptiveTextBlock()
                        {
                            Text = Icount+ " invoices",
                            Weight = AdaptiveTextWeight.Lighter, // set the weight of text e.g. Bolder, Light, Normal
                            Size = AdaptiveTextSize.Small, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                        },
                          new AdaptiveTextBlock()
                        {
                            Text = Invcount+ " inventory",
                            Weight = AdaptiveTextWeight.Lighter, // set the weight of text e.g. Bolder, Light, Normal
                            Size = AdaptiveTextSize.Small, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                        }
                        }
                    }
                },
                Actions = new List<AdaptiveAction>()
                {
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
                    new AdaptiveOpenUrlAction()
                    {
                        Title="Review",
                        Url= new Uri(deepLinkTab("tasks","Tasks"))
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

        public static Attachment Ticket()
        {
            TicketModel tickets = GetDataHelper.getTicket();
            Ticket firstTicket = tickets.ticket.FirstOrDefault();
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
                            // Describes a fact in a Adaptive FactSet as a key/value pair
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
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
                   
                     new  AdaptiveSubmitAction()
                    {
                        Title = "Review",
                       // Card= ReviewTasks
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
            string[] HRtoolsSub = { "Create a business letter within a predesigned color and template.", "For all HR tickets, the ticket type is being set as Employee Support.", "Request leave and check your status in the Leave application.", "Identify the purpose and objectives of Human Resources department." };
            string[] HRicons = {"/Images/createbusinessletter.JPG","/Images/createticket.JPG","/Images/requestleave.JPG","/Images/viewpolicies.JPG" };
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
            string[] ITtools = { "Raise IT Support Ticket", "Make visitor request", "Event IT Support request", "Cafeteria services app" };
            string[] ITtoolsSub = { "Submit your support case to review and respond.", "Fill a request form for short-term visitors.", "Fill out this form to request any equipment for events.", "Employees can order and pay here without waiting in long queues." };
            string[] ITicons = {"/Images/itsupportticket.JPG","/Images/makewifirequest.JPG", "/Images/eventitsupport.JPG","/Images/cafeteriaservices.JPG"};
            for (int i = 0; i < ITtools.Count(); i++)
            {

                var item = new Item();
                //item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
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
            string[] PBicons = {"/Images/downloadpayslip.JPG","/Images/financeticket.JPG","/Images/benefitclaim.JPG","/Images/viewpolicies.JPG" };
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
            string[] Sicons = {"/Images/inventoryrequest.JPG","/Images/timesheet.JPG","/Images/storeinfo.JPG" };

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

        //public static Attachment getETCard()
        //{
        //    var card = new ListCard();
        //    card.content = new Content();
        //    var list = new List<Item>();
        //    card.content.title = "Upcoming events and Trainings";
        //    EandTModel EandTL = Helper.GetDataHelper.GetEandT();
        //    Item item;
        //    if (EandTL != null)  //if it got the news
        //    {
        //        var Events = EandTL.EventsAndtraining.Where(w => w.ETID.StartsWith("e"));
        //        //var Trainings = EandTL.EventsAndtraining.Where(w => w.ETFlag.Equals("T"));
        //        //int ReqDescriptionLength = 85;

        //        //MaxNewsCount has total number of news to display
        //        //int MaxNewsCount = 3;
        //        // if (MaxNewsCount > SuggestedNews.Count())
        //        int MaxEventsCount = Events.Count();
        //        //int MaxTrainingsCount = Trainings.Count();
        //        int count = 0;
        //        for (int i = 0; i < MaxEventsCount; i++)
        //        {
        //            var EandT = Events.ElementAt(i);
        //            DateTime D = DateTime.ParseExact(EandT.ETStartDate, "MM-dd-yyyy",
        //                               System.Globalization.CultureInfo.InvariantCulture);
        //            if (count == 3)
        //                break;
        //            if (D <= DateTime.Today.AddDays(7))
        //            {
        //                string subtitle = EandT.ETDetails;
        //                string title = EandT.ETTitle + ' ' + EandT.ETStartDate + ' ' + '-' + ' ' + EandT.ETEndDate;
        //                item = new Item();
        //                //item.title = EandT.ETTitle;
        //                item.title = title;
        //                item.icon = EandT.ETThumbnailUrl;
        //                item.id = EandT.ETID;

        //                //if (subtitle.Length > ReqDescriptionLength)
        //                //    item.subtitle = subtitle.Substring(0, ReqDescriptionLength);
        //                //else
        //                item.subtitle = subtitle;

        //                item.type = "resultItem";

        //                //item.NewBy = "Vedant";      //doesn't display in frontend

        //                item.tap = new Tap()
        //                {
        //                    type = "invoke",
        //                    title = item.id,
        //                    value = "{ \"type\": \"task/fetch\", \"data\": \"events:" + item.id.ToString() + "\"}"
        //                };
        //                count++;
        //                list.Add(item);
        //            }
        //        }
        //        item = new Item();
        //        //item.icon = "##BaseURL##/Images/whiteimage.JPG";

        //        item.type = "resultItem";
        //        item.title = "View more";
        //        //item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
        //        item.icon = ApplicationSettings.BaseUrl + "/Images/purpleImage.JPG";
        //        item.tap = new Tap()
        //        {
        //            type = "openUrl",
        //            value = deepLinkTab("EandT", "Events and Trainings")
        //        };

        //        list.Add(item);
        //        card.content.items = list.ToArray();

        //    }
        //    Attachment attachment = new Attachment();

        //    attachment.ContentType = card.contentType;

        //    attachment.Content = card.content;

        //    return attachment;

        //}

        public static Attachment GetETbyID(string id)
        {
            EandTModel EandTL = Helper.GetDataHelper.GetEandT();
            var SelectedEventsTrainings = getETByIds(EandTL, id);

            if (SelectedEventsTrainings == null)   //could not find the news
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
                                        Url = new Uri(SelectedEventsTrainings.ETThumbnailUrl)
                            },
                            new AdaptiveTextBlock() //Title of News
                            {
                                Text = SelectedEventsTrainings.ETTitle,
                                Weight = AdaptiveTextWeight.Bolder,     // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Large,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true
                            },
                                new AdaptiveTextBlock()     //NewsBy on Date and Time
                            {
                                Text = "By " + SelectedEventsTrainings.ETType + " on " + SelectedEventsTrainings.ETStartDate,
                                Weight = AdaptiveTextWeight.Lighter,    // set the weight of text e.g. Bolder, Light, Normal
                                Size = AdaptiveTextSize.Small,          // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                                Wrap = true
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
                }
            };
            Attachment attachment = new Attachment();

            attachment.ContentType = AdaptiveCard.ContentType;

            attachment.Content = card;

            return attachment;
        }

        public static EventsAndTraining getETByIds(EandTModel EandTL, string id)
        {
            if (EandTL == null)
                return null;
            foreach (var ET in EandTL.EventsAndtraining)
            {
                if (ET.ETID.Equals(id))
                    return ET;
            }
            return null;    // id doesn't exist
        }
    }
}