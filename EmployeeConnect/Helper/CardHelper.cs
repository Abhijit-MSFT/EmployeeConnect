using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EmployeeConnect.Models;
using System.Security.Principal;
using Microsoft.Bot.Connector.Teams.Models;
using AdaptiveCards;

namespace EmployeeConnect.Helper
{
    public class CardHelper
    {
        // [Obsolete]
        public static Attachment getNewsCard()
        {
            var card = new ListCard();
            card.content = new Content();
            var list = new List<Item>();
            card.content.title = "Top stories for you";

            for (int i = 0; i < 5; i++)
            {

                var item = new Item();
                item.icon = "https://fleetinfobot.azurewebsites.net/resources/Airline-Fleet-Bot-02.png";
                item.id = i.ToString();
                item.subtitle = "subtitle";

                item.type = "resultItem";
                item.title = "News" + i;

                item.tap = new Tap()
                {
                    type = "imBack",
                    title = "titleitem",
                    value = "News" + i
                };

                list.Add(item);
            }
            card.content.items = list.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;

        }
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
                item.title = "Policy" + i;

                item.tap = new Tap()
                {
                    type = "imBack",
                    title = "titleitem",
                    value = "policy" + i
                };

                list.Add(item);
            }
            card.content.items = list.ToArray();

            Attachment attachment = new Attachment();

            attachment.ContentType = card.contentType;

            attachment.Content = card.content;

            return attachment;

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
                          Id="SetPreferredTime",
                          Value="2",
                          Style=AdaptiveChoiceInputStyle.Compact,
                           Choices=
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
                          Id="SetPreferredTime",
                          Value="4",
                          Style=AdaptiveChoiceInputStyle.Compact,
                           Choices=
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
                          Id="SetPreferredTime",
                          Value="6",
                          Style=AdaptiveChoiceInputStyle.Compact,
                           Choices=
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
                },
                Actions = new List<AdaptiveAction>()
                {
                    // submit action gathers up input fields, merges with optional data field and generates event to client asking for data to be submitted
                    new AdaptiveSubmitAction()
                    {
                        Title = "Done",
                       // DataJson = "get the data"
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
        public static Attachment SetNewsPreferences()
        {
            var card = new AdaptiveCard("1.0")
            {
                Body = new List<AdaptiveElement>()
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
                            },

                        }
                    },

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
            Attachment attachment = new Attachment()
            {
                ContentType = AdaptiveCard.ContentType,
                Content = card
            };
            return attachment;
        }

        //[Obsolete]
        public static List<Attachment> UpcomingEventsTraining()
        {
            EandTModel ETlist = new EandTModel();
            ETlist = Helper.GetDataHelper.GetEandT();
            List<Attachment> res = new List<Attachment>();

            for (int i = 0; i < ETlist.EventsAndtraining.Count(); i++)
            {
                var card = new AdaptiveCard("1.0")
                {
                    Body = new List<AdaptiveElement>()
                {

                    new AdaptiveTextBlock()
                    {
                        Text = "Upcoming events and training will be displayed here",
                        Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Large, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    }
                }
                };
                res.Add(new Attachment()
                {
                    ContentType = AdaptiveCard.ContentType,
                    Content = card
                });
            }
            return res;
        }

        //[Obsolete]
        public static Attachment PendingTasks()
        {
            var card = new AdaptiveCard("1.0")
            {
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveTextBlock()
                    {
                        Text = "Reminder: You have a pending task to review",
                        Weight = AdaptiveTextWeight.Default, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Default, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text = "Purchase Order",
                        Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Large, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
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
                     new AdaptiveShowCardAction()
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

        //[Obsolete]
        public static Attachment ReviewTasks()
        {
            //how the po info is sent here
            var card = new AdaptiveCard("1.0")
            {
                Body = new List<AdaptiveElement>()
                {
                    new AdaptiveTextBlock()
                    {
                        Text = "Reminder: You have a pending task to review",
                        Weight = AdaptiveTextWeight.Default, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Default, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text = "You have timesheet waiting for" + "X" + "days",
                        Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Large, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
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
            Attachment attachment = new Attachment()
            {
                ContentType = AdaptiveCard.ContentType,
                Content = card
            };
            return attachment;
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

                    new AdaptiveTextBlock()
                    {
                        Text = "You have " + count + "items pending for approval",
                        Weight = AdaptiveTextWeight.Bolder, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Medium, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
                    },
                    new AdaptiveTextBlock()
                    {
                        Text = count1+ "purchase orders",
                        Weight = AdaptiveTextWeight.Lighter, // set the weight of text e.g. Bolder, Light, Normal
                        Size = AdaptiveTextSize.Small, // set the size of text e.g. Extra Large, Large, Medium, Normal, Small
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

    }
}