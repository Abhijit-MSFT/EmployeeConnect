using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Microsoft.Bot.Builder.Dialogs;
using System.Configuration;
using System.Reflection;
using System.Threading.Tasks;
using Autofac;
using Microsoft.Bot.Builder.Dialogs.Internals;
using Microsoft.Bot.Connector;
using Microsoft.Bot.Builder.Azure;


namespace EmployeeConnect
{
    public class MvcApplication : System.Web.HttpApplication
    {
        // private static readonly Timer timer = new Timer(new TimerCallback(x =>
        //{

        //    CheckScheduleAndExecute(x);

        //})
        // , null, new TimeSpan(0, 0, 10), new TimeSpan(1,0,0));
        //private static System.Timers.Timer aTimer;

        //static MvcApplication()
        //{
        //    aTimer = new System.Timers.Timer( (new TimeSpan(0,0,10)).TotalMilliseconds);

        //    // Hook up the event handler for the Elapsed event.
        //    aTimer.Elapsed += new System.Timers.ElapsedEventHandler(OnTimedEvent);

        //    // Only raise the event the first time Interval elapses.
        //    aTimer.AutoReset = true;
        //    aTimer.Enabled = true;

        //}

        //private static void OnTimedEvent(object source, System.Timers.ElapsedEventArgs e)
        //{
        //    Helper.GetDataHelper.CheckPrefAndSendNewsCard().GetAwaiter().GetResult();
        //    Helper.GetDataHelper.CheckPrefAndSendEandTCard().GetAwaiter().GetResult();
        //}


        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            Conversation.UpdateContainer(
            builder =>
            {
               builder.RegisterModule(new AzureModule(Assembly.GetExecutingAssembly()));

               // Using Azure Table Storage
               //var store = new TableBotDataStore(ConfigurationManager.AppSettings["AzureWebJobsStorage"]); // requires Microsoft.BotBuilder.Azure Nuget package 

               // To use CosmosDb or InMemory storage instead of the default table storage, uncomment the corresponding line below
               // var store = new DocumentDbBotDataStore("cosmos db uri", "cosmos db key"); // requires Microsoft.BotBuilder.Azure Nuget package 
               var store = new InMemoryDataStore(); // volatile in-memory store

               builder.Register(c => store)
              .Keyed<IBotDataStore<BotData>>(AzureModule.Key_DataStore)
              .AsSelf()
              .SingleInstance();

            });
        }

    }
}
