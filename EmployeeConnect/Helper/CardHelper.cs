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
using System.Net.NetworkInformation;
using System.Windows.Forms;
using Chronic;

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
            card.content.title = "Top stories for you";
            NewsModel newsL = Helper.GetDataHelper.GetNews();
            var SuggestedNews = newsL.news.Where(w => w.LatestOrTrendingFlag.Equals("Trending"));
            var LatestNews = newsL.news.Where(w => w.LatestOrTrendingFlag.Equals("Latest"));
            //int ReqDescriptionLength = 85;

            //MaxNewsCount has total number of news to display
            int MaxNewsCount = 3;
           // if (MaxNewsCount > SuggestedNews.Count())
                MaxNewsCount = SuggestedNews.Count();

            for (int i=0;i<MaxNewsCount;i++)
            {
                var news = SuggestedNews.ElementAt(i);
                string subtitle = news.DetailedNews;
                var item = new Item();
                item.title = news.NewsTitle;
                item.icon = news.NewsThumbnailUrl;
                item.id = news.NewsID;

                //if (subtitle.Length > ReqDescriptionLength)
                //    item.subtitle = subtitle.Substring(0, ReqDescriptionLength);
                //else
                    item.subtitle = subtitle;
                
                item.type ="resultItem";

                //item.NewBy = "Vedant";      //doesn't display in frontend

                item.tap = new Tap()
                {
                    type = "messageBack",
                    title = "title",
                    text = news.NewsID
                };
                
                list.Add(item);
            }
            card.content.items = list.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;

        }

        //Returns the policies ListCard having Policies for every department.
        public static Attachment GetPoliciesCard()
        {


            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Please select a department to view policies";

            for (int i = 0; i < 5; i++)
            {

                var item = new Item();
                item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.id = i.ToString();


                item.type = "resultItem";
                item.title = "Department " + i;

                item.tap = new Tap()
                {
                    type = "messageBack",
                    title = "title",
                    text = "department" + i
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
            card.content.title = "Here are the tools under HR department";

            for (int i = 0; i < 5; i++)
            {

                var item = new Item();
                item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.id = i.ToString();


                item.type = "resultItem";
                item.title = "create Ticket " + i;

                item.tap = new Tap()
                {
                    type = "messageBack",
                    title = "title",
                    text = "department" + i
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
        public static News getNewsById(NewsModel newsL,string id)
        {
            foreach(var news in newsL.news)
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
                            new AdaptiveImage
                            {
                                        Url = new Uri("https://cdncontribute.geeksforgeeks.org/wp-content/uploads/apple.jpeg") //url to image
                            }
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
                            new AdaptiveImage
                             {
                                        Url = new Uri("https://cdncontribute.geeksforgeeks.org/wp-content/uploads/apple.jpeg") //url to image
                            }
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
            var card3 = new AdaptiveCard("1.0")
            {
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
                            new AdaptiveImage
                             {
                                        Url = new Uri("https://cdncontribute.geeksforgeeks.org/wp-content/uploads/apple.jpeg") //url to image
                            }
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
                                Id = "NewsTime",
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
                                Value = "2",
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
                                Id = "EventandTrainingtime",
                                Value = "3", // please set default value here
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
                                Id = "SetPreferredTime",
                                Value = "4",
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
                                Id = "TaskRemindersTime",
                                Value = "5", // please set default value here
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
                                Id = "SetTaskRemidersPreferredTime",
                                Value = "6",
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
                       Card=CardHelper.SetNewsPreferences(),
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
                    new AdaptiveChoiceSetInput()
                    {
                        Id = "NewsCategory",
                        Value = "1", // please set default value here
                        Style = AdaptiveChoiceInputStyle.Expanded,
                        IsMultiSelect=true,// set the style of Choice set to compact

                        Choices =
                        {
                            // describes a choice input. the value should be a simple string without a ","
                            new AdaptiveChoice
                            {
                                Title ="Finance",
                                Value = "1" // do not use a “,” in the value, since MultiSelect ChoiceSet returns a comma-delimited string of choice values
                            },
                            new AdaptiveChoice
                            {
                                Title = "Media",
                                Value = "2"
                            },
                            new AdaptiveChoice
                            {
                                Title = "Art",
                                Value = "3"
                            },
                            new AdaptiveChoice
                            {
                                Title = "Business",
                                Value = "4"
                            },
                            new AdaptiveChoice
                            {
                                Title = "Culture",
                                Value = "5"
                            },
                            new AdaptiveChoice
                            {
                                Title = "Media",
                                Value = "6"
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
                        Title = "Skip",
                       // DataJson = "get the data"
                    },
                     new AdaptiveSubmitAction()
                     {
                        Title = "Done",
                     //  DataJson= @"{'ActionType':'" + "NEWS TIME ["+"'] }"
                     }
               }
            };
            
          
           
            return card;
        }

        //[Obsolete]
        public static Attachment UpcomingEventsTraining()
        {
            EandTModel ETlist = new EandTModel();
            ETlist = Helper.GetDataHelper.GetEandT();

            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Upcoming events and training for you";


            DateTime CurrDate = DateTime.Today;


            for (int i = 0; i < ETlist.EventsAndtraining.Count(); i++)
            {

                if (!ETlist.EventsAndtraining[i].UserAdded)
                    continue;
                else
                {
                    DateTime D = DateTime.ParseExact(ETlist.EventsAndtraining[i].ETStartDate, "MM-dd-yyyy",
                                       System.Globalization.CultureInfo.InvariantCulture);
                    DateTime E = DateTime.ParseExact(ETlist.EventsAndtraining[i].ETEndDate, "MM-dd-yyyy",
                                       System.Globalization.CultureInfo.InvariantCulture);

                    if (D <= CurrDate.AddDays(7) && E>CurrDate)
                    {

                        var item = new Item();
                        item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                        item.id = i.ToString();
                        item.subtitle = ETlist.EventsAndtraining[i].ETStartTime+" - "+ETlist.EventsAndtraining[i].ETEndTime+", "+ ETlist.EventsAndtraining[i].ETStartDate + " to " + ETlist.EventsAndtraining[i].ETEndDate;

                        item.type = "resultItem";
                        item.title = ETlist.EventsAndtraining[i].ETTitle;

                        item.tap = new Tap()
                        {
                            type = "imBack",
                            title = "titleitem",
                            value = "Event and training item" + i
                        };

                        list.Add(item);
                    }
                }
            }
            card.content.items = list.ToArray();
            Attachment attachment = new Attachment();
            attachment.ContentType = card.contentType;
            attachment.Content = card.content;
            return attachment;
        }

        //[Obsolete]
       
        public static Attachment PendingTasks()
        {
            
            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Pending tasks";
            PO pO = new PO();
            pO = Helper.GetDataHelper.GetPOs();  
           
            int MaxPOCount = pO.PurchaseOrder.Count();

            for (int i = 0; i < MaxPOCount; i++)
            {
                
                
                var po_ = pO.PurchaseOrder[i];
                if (po_.POCreationDate > DateTime.Today)
                    continue;
                if (po_.PoStatus == "pending")
                {
                    string subtitle = po_.POCreationDate.ToString("MMMM dd, yyyy")+" - "+po_.PODueDate.ToString("MMMM dd, yyyy");
                    var item = new Item();
                    item.title = po_.PoNumber+" " +po_.Description;
                    item.id = po_.PoNumber;

                    item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                    item.subtitle = subtitle;

                    item.type = "resultItem";

                   
                    item.tap = new Tap()
                    {
                        type = "messageBack",
                       // title = "title",
                        text = "po:"+po_.PoNumber
                    };

                    list.Add(item);
                }
            }
            card.content.items = list.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;

        }

        //[Obsolete]
        public static AdaptiveCard ReviewTasks(PurchaseOrders po_card)
        {
            //how the po info is sent here
            DateTime today = DateTime.Today;
            string duetext;
            if ((po_card.PODueDate - today).Days > 0)
            {
                duetext = "You have timesheet waiting for " + (today-po_card.POCreationDate).Days + " days";
            }
            else
                duetext = (today-po_card.PODueDate).Days + " have passed since due date";
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
                        Text = duetext,
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
            int count1 = POList.PurchaseOrder.Count();
            int count = count1;
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
                            Text = "You have " + count + " items pending for approval",
                            Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                            Size = AdaptiveTextSize.Medium, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                        },
                        new AdaptiveTextBlock()
                        {
                            Text = count1+ " purchase orders",
                            Weight = AdaptiveTextWeight.Lighter, // set the weight of text e.g. Bolder, Light, Normal
                            Size = AdaptiveTextSize.Small, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                        }
                        }
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

        public static Attachment GetPOCard(string id)
        {
            //NewsModel newsL = Helper.GetDataHelper.GetNews();
            PO po_ = Helper.GetDataHelper.GetPOs();
            var po_card = GetPObyID(po_, id);

            if (po_card == null)   //could not find the news
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
                                 Facts =
                                 {
                                     // Describes a fact in a Adaptive FactSet as a key/value pair
                                     new AdaptiveFact
                                     {
                                         Title = "P.O. No.",
                                         Value = po_card.PoNumber
                                     },
                                     new AdaptiveFact
                                     {
                                         Title = "Description",
                                         Value = po_card.Description
                                     },
                                     new AdaptiveFact
                                     {
                                         Title = "Vendor Name",
                                         Value =  po_card.VendorName
                                     },
                                     new AdaptiveFact
                                     {
                                         Title = "Vendor No.",
                                         Value = po_card.vendorNo
                                     },
                                     new AdaptiveFact
                                     {
                                         Title = "Amount",
                                         Value = po_card.TotalAmount
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
                         Title = "Remind me later",
                        // DataJson = "get the data"
                     },
                      new AdaptiveShowCardAction
                      {
                         Title ="Review",
                         Card = CardHelper.ReviewTasks(po_card)

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
        public static PurchaseOrders GetPObyID(PO p,string index)
        {
            foreach (var po in p.PurchaseOrder)
            {
                if (po.PoNumber.Equals(index))
                    return po;
            }
            return null;
        }

        public static Attachment GetTicket()
        {
           
            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Ticket Status";
            TicketDetails ticketdetail = Helper.GetDataHelper.GetTicketData();

            int MaxTicketCount = ticketdetail.Tickets.Count();

            for (int i = 0; i < MaxTicketCount; i++)
            {

                
                    string subtitle = ticketdetail.Tickets[i].description;
                    var item = new Item();
                    item.title = ticketdetail.Tickets[i].ticketNo +" " + ticketdetail.Tickets[i].ticketDept;
                    item.id = ticketdetail.Tickets[i].ticketNo;

                    item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                    item.subtitle = subtitle;

                    item.type = "resultItem";


                    item.tap = new Tap()
                    {
                        type = "messageBack",
                        // title = "title",
                        text = "td:" + ticketdetail.Tickets[i].ticketNo
                    };

                    list.Add(item);
                
            }
            card.content.items = list.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;
        }

        public static Attachment GetTicketCard(string id)
        {
            //NewsModel newsL = Helper.GetDataHelper.GetNews();
            //PO po_ = Helper.GetDataHelper.GetPOs();
            TicketDetails td_ = Helper.GetDataHelper.GetTicketData();

            var td_card = GetTDbyID(td_.Tickets, id);

            if (td_card == null)   //could not find the news
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
                        Text = "Your ticket for "+  td_card.ticketDept +" employee support category has been created.",
                        Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Large, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text = td_card.ticketDept,
                        Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Default, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text = td_card.description,
                        Weight = AdaptiveTextWeight.Default, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Default, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text = td_card.ticketPriority,
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
                                Value = td_card.ticketNo
                            },
                            new AdaptiveFact
                            {
                                Title = "Date Created",
                                Value = td_card.ticketCreateDate
                            },
                            new AdaptiveFact
                            {
                                Title = "Assigned to",
                                Value = td_card.ticketAssignedTo
                            },
                            new AdaptiveFact
                            {
                                Title = "ETA date",
                                Value = td_card.ticketETADate
                            },
                            new AdaptiveFact
                            {
                                Title = "Status",
                                Value = td_card.ticketStatus
                            },

                        }
                    }
                        }
                    },
                },
                Actions = new List<AdaptiveAction>()
                {
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
                    new AdaptiveSubmitAction()
                    {
                        Title = "Cancel Ticket",
                       // DataJson = "get the data"
                    },
                     new  AdaptiveSubmitAction()
                    {
                        Title = "Edit",
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
        public static Ticket GetTDbyID(Ticket[] td, string index)
        {
            foreach (var td_ in td)
            {
                if (td_.ticketNo.Equals(index))
                    return td_;
            }
            return null;
        }
    }
}