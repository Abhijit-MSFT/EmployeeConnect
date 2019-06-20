using AdaptiveCards;
using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
namespace EmployeeConnect.Helper
{
    public static class AdaptiveCardHelper
    {
        public static Attachment GetNewsCardbyId(string actionid)
        {
            // Parse the JSON
            //Attachment card = Helper.CardHelper.GetNewsCardbyId("12345");
            AdaptiveCardParseResult result = AdaptiveCard.FromJson(GetNewsCardJson());
            //string json = new JavaScriptSerializer().Serialize(result);
            //AdaptiveCardParseResult result = AdaptiveCard.FromJson(json);
            return new Attachment()
            {
                ContentType = AdaptiveCard.ContentType,
                Content = result.Card
            };
        }
        public static String GetNewsCardJson()
        {
            /*Attachment card = Helper.CardHelper.GetNewsCardbyId("12345");
            string json = new JavaScriptSerializer().Serialize(card);
            return json;*/
             var path = System.Web.Hosting.HostingEnvironment.MapPath(@"~\TestData\ad.json");
             return File.ReadAllText(path);
        }

    }

}