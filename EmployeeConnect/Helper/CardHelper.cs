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
            if (newsL != null)  //if it got the news
            {
                var TrendingNews = newsL.news.Where(w => w.LatestOrTrendingFlag.Equals("Trending"));
                var LatestNews = newsL.news.Where(w => w.LatestOrTrendingFlag.Equals("Latest"));
                //int ReqDescriptionLength = 85;

                //MaxNewsCount has total number of news to display
                //int MaxNewsCount = 3;
                // if (MaxNewsCount > SuggestedNews.Count())
                int MaxNewsCount = TrendingNews.Count();

                for (int i = 0; i < MaxNewsCount; i++)
                {
                    var news = TrendingNews.ElementAt(i);
                    string subtitle = news.DetailedNews;
                    var item = new Item();
                    item.title = news.NewsTitle;
                    item.icon = news.NewsThumbnailUrl;
                    item.id = news.NewsID;

                    //if (subtitle.Length > ReqDescriptionLength)
                    //    item.subtitle = subtitle.Substring(0, ReqDescriptionLength);
                    //else
                    item.subtitle = subtitle;

                    item.type = "resultItem";

                    //item.NewBy = "Vedant";      //doesn't display in frontend

                    item.tap = new Tap()
                    {
                        type = "messageBack",
                        text = news.NewsID
                    };

                    list.Add(item);
                }
                card.content.items = list.ToArray();

            }   
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

            for (int i = 0; i < 4; i++)
            {

                var item = new Item();
                item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.id = i.ToString();


                item.type = "resultItem";
                if (i == 0)
                    item.title = "Human Resources";
                else if (i == 1)
                    item.title = "Payment and benefits";
                else if (i == 2)
                    item.title = "IT & facilities";
                else
                    item.title = "Store operations";

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

            for (int i = 0; i < 4; i++)
            {

                var item = new Item();
                item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.id = i.ToString();


                item.type = "resultItem";
                if(i==0)
                    item.title = "Human Resources";
                else if (i == 1)
                    item.title = "Payment and benefits";
                else if (i == 2)
                    item.title = "IT & facilities";
                else
                    item.title = "Store operations";

                item.tap = new Tap()
                {
                    type = "messageBack",
                    //title = "title",
                    text = item.title+" tools"
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
            if (newsL == null)
                return null;
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
                                Id = "SetPreferredTime",
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
                                Id = "NewsTime",
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
                                Id = "NewsTime",
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
                                Id = "SetPreferredTime",
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
                       // DataJson = "get the data"
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

        //[Obsolete]
        public static Attachment UpcomingEventsTraining()
        {
            EandTModel ETlist = new EandTModel();
            ETlist = Helper.GetDataHelper.GetEandT();

            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Upcoming events and training for you";


            DateTime CurrDate = new DateTime(2019, 6, 1);


            for (int i = 0; i < ETlist.EventsAndtraining.Count(); i++)
            {

                if (!ETlist.EventsAndtraining[i].UserAdded)
                    continue;
                else
                {
                    DateTime D = DateTime.ParseExact(ETlist.EventsAndtraining[i].ETStartDate, "MM-dd-yyyy",
                                       System.Globalization.CultureInfo.InvariantCulture);

                    if (D <= CurrDate.AddDays(7))
                    {

                        var item = new Item();
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
                                Facts =
                                {
                                    // Describes a fact in a Adaptive FactSet as a key/value pair
                                    new AdaptiveFact
                                    {
                                        Title = "P.O. No.",
                                        Value = POOrder.PoNumber
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
                    new AdaptiveSubmitAction()
                    {
                        Title = "Remind me later",
                       // DataJson = "get the data"
                    },
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
                        Text = "You have timesheet waiting for " + 12 + " day's",
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

        public static Attachment Ticket()
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
                        Text = "Your ticket for employee support category has been created.",
                        Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Large, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text = "Employee Support",
                        Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Default, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text = "Need to understand PTO Assignment",
                        Weight = AdaptiveTextWeight.Default, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Default, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text = "High Priority!",
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
                                Title = "P.O. No.",
                                Value = "PO NUMBER"
                            },
                            new AdaptiveFact
                            {
                                Title = "Description",
                                Value = "Backlog"
                            },
                            new AdaptiveFact
                            {
                                Title = "Vendor Name",
                                Value = "Matt Hidinger"
                            },
                            new AdaptiveFact
                            {
                                Title = "Vendor No.",
                                Value = "Not set"
                            },
                            new AdaptiveFact
                            {
                                Title = "Amount",
                                Value = "Not set"
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
                        Title = "Remind me later",
                       // DataJson = "get the data"
                    },
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

            for (int i = 0; i < 4; i++)
            {

                var item = new Item();
                item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.id = i.ToString();


                item.type = "resultItem";
                if (i == 0)
                {
                    item.title = "Create business letter";
                    item.subtitle = "Create a business letter within a predesigned color and template.";
                }
                else if (i == 1)
                {
                    item.title = "Create ticket";
                    item.subtitle = "For all HR tickets, the ticket type is being set as Employee Support.";
                }
                else if (i == 2)
                {
                    item.title = "Request leave";
                    item.subtitle = "Request leave and check your status in the Leave application.";
                }
                else
                {
                    item.title = "Store operations";
                    item.subtitle = "View human resource policies to stay updated.";
                }

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
        public static Attachment ITFacilitiesCard()
        {


            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Here are the tools under your IT department";

            for (int i = 0; i < 4; i++)
            {

                var item = new Item();
                item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.id = i.ToString();


                item.type = "resultItem";
                if (i == 0)
                {
                    item.title = "Raise IT Support Ticket";
                    item.subtitle = "Create a business letter within a predesigned color and template.";
                }
                else if (i == 1)
                {
                    item.title = "Visitor's wi-fi request";
                    item.subtitle = "For all HR tickets, the ticket type is being set as Employee Support.";
                }
                else if (i == 2)
                {
                    item.title = "Event IT Support request";
                    item.subtitle = "Request leave and check your status in the Leave application.";
                }
                else
                {
                    item.title = "Cafeteria services app";
                    item.subtitle = "View human resource policies to stay updated.";
                }

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
        public static Attachment PaymentsAndBenefitsCard()
        {


            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Here are the tools under your PaymentAndBenefits department";

            for (int i = 0; i < 4; i++)
            {

                var item = new Item();
                item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.id = i.ToString();


                item.type = "resultItem";
                if (i == 0)
                {
                    item.title = "Download payslip";
                    item.subtitle = "Create a business letter within a predesigned color and template.";
                }
                else if (i == 1)
                {
                    item.title = "Create finance ticket";
                    item.subtitle = "For all HR tickets, the ticket type is being set as Employee Support.";
                }
                else if (i == 2)
                {
                    item.title = "Submit benefit claim";
                    item.subtitle = "Request leave and check your status in the Leave application.";
                }
                else
                {
                    item.title = "View benefit policies";
                    item.subtitle = "View human resource policies to stay updated.";
                }

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

            for (int i = 0; i < 3; i++)
            {

                var item = new Item();
                item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.id = i.ToString();


                item.type = "resultItem";
                if (i == 0)
                {
                    item.title = "Inventory request";
                    item.subtitle = "Create a business letter within a predesigned color and template.";
                }
                else if (i == 1)
                {
                    item.title = "Timesheet";
                    item.subtitle = "For all HR tickets, the ticket type is being set as Employee Support.";
                }
                else 
                {
                    item.title = "Store info";
                    item.subtitle = "Request leave and check your status in the Leave application.";
                }

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
    }
}