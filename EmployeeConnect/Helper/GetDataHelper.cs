using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using EmployeeConnect.Models;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace EmployeeConnect.Helper
{
    public class GetDataHelper
    {
        public static string userName = "";

        //This method is added as part of spfx changes. This method gets the authentication token
        private static async Task<string> GetAuthenticationToken()
        {
            string clientID = "cbdefffb-376f-401f-a306-c1bbeec3a916@d634c2da-9cba-459a-aad1-81df852f770f";
            string appSec = "S87Hf9yRiMBv6fQeQmmDh1jC6/qzDCFtdIbuzU5FeyI=";
            string url = "https://accounts.accesscontrol.windows.net/tokens/OAuth/2";
            string res = "00000003-0000-0ff1-ce00-000000000000/avadheshftc.sharepoint.com@d634c2da-9cba-459a-aad1-81df852f770f";
            string body = $"grant_type=client_credentials&client_id={clientID}&client_secret={appSec}&resource={res}";

            HttpClient httpclient = new HttpClient();
            var request = new HttpRequestMessage(HttpMethod.Post, url);
            request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            request.Content = (new StringContent(body, Encoding.UTF8, "application/x-www-form-urlencoded"));
            HttpResponseMessage response = await httpclient.SendAsync(request);
            string responseBody = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode)
                throw new Exception(responseBody);

            string accessToken = null;
            accessToken = JsonConvert.DeserializeObject<GetDataHelper.TokenResponse>(responseBody).access_token;
            return accessToken;
        }


        public static async System.Threading.Tasks.Task UploadFileToSP(string fileLocation)
        {
            //using (var clientContext = TokenHelper.GetClientContextWithAccessToken(sharepointUrl.ToString(), appOnlyAccessToken))
            //{
            try
            {
                string token = await GetDataHelper.GetAuthenticationToken();
                byte[] bytefile = System.IO.File.ReadAllBytes(fileLocation);
                //byte[] bytefile = System.Web.Hosting.HostingEnvironment.MapPath(fileLocation);

                //HttpWebRequest endpointRequest = (HttpWebRequest)HttpWebRequest.Create(hostWeb + "/_api/web/GetFolderByServerRelativeUrl('Shared%20Documents')/Files/add(url='filename.txt',overwrite=true)");
                HttpWebRequest endpointRequest = (HttpWebRequest)HttpWebRequest.Create("https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/_api/Web/GetFolderByServerRelativeUrl('Shared%20Documents')/Files/add(url='TestFile.txt',overwrite=true)");

                //https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/_api/Web/GetFolderByServerRelativePath(decodedurl='/sites/EmployeeConnectPrototype/Shared%20Documents')/Files
                //https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/_api/Web/GetFolderByServerRelativeUrl('Shared%20Documents')/Files
                endpointRequest.Method = "POST";
                endpointRequest.Headers.Add("binaryStringRequestBody", "true");
                endpointRequest.Headers.Add("Authorization", "Bearer " + token);
                endpointRequest.GetRequestStream().Write(bytefile, 0, bytefile.Length);

                HttpWebResponse endpointresponse = (HttpWebResponse)endpointRequest.GetResponse();
            }
            catch (Exception ex)
            {

                throw ex;
            }
            
            //}
        }
        
        public static NewsModel GetNews()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/NewsData.json";
            NewsModel news = new NewsModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            news = (new JavaScriptSerializer().Deserialize<NewsModel>(json));
            return news;
        }
        
        public static EandTModel GetEandT()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/EventsAndTraining_June.json";
            EandTModel eventsTrainings = new EandTModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            eventsTrainings = (new JavaScriptSerializer().Deserialize<EandTModel>(json));
            return eventsTrainings;
        }

        //This method is added as part spfx change. this method brings data from sharepoint and writes in testData files 
        
        public static SpfxEandT ReadEandT()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/EandTMock.json";
            SpfxEandT EandT = new SpfxEandT();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            EandT = new JavaScriptSerializer().Deserialize<SpfxEandT>(json);
            return EandT;
        }
               
        //This method is part of spfx changes. This method is to get the sharepoint data and save it to test data location for bot
        public static async System.Threading.Tasks.Task GetNewsFromSPandWriteToFile() // need to decide how many time it will run and update the data file.
        {
            string token = await GetDataHelper.GetAuthenticationToken();
            string endpoint = "https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/_api/web/lists(guid'01830dd5-78f8-4de7-bb0f-298474a907a9')/items";
            SpfxNews news = null;
            using (var client = new HttpClient())
            {
                using (var request = new HttpRequestMessage(HttpMethod.Get, endpoint))
                {
                    string location = System.Web.Hosting.HostingEnvironment.MapPath(@"~\TestData\");
                    request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);

                    using (HttpResponseMessage response = await client.SendAsync(request))
                    {                        
                        if (response.IsSuccessStatusCode)
                        {
                            var json = await response.Content.ReadAsStringAsync();                            
                            try
                            {
                                news = (new JavaScriptSerializer().Deserialize<SpfxNews>(json));
                                File.WriteAllText(location + "newsMock.json", json);
                                
                            }
                            catch (Exception ex)
                            {
                                
                            }

                        }                        
                    }
                }
            }
        }

        public static async System.Threading.Tasks.Task GetEandTFromSPandWriteToFile() // need to decide how many time it will run and update the data file.
        {
            string token = await GetDataHelper.GetAuthenticationToken();
            string endpoint = "https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/_api/Web/Lists(guid'59c3fe4a-12f2-4ece-bcf2-eb850a0c357d')/items";
            SpfxEandT EandT = null;
            using (var client = new HttpClient())
            {
                using (var request = new HttpRequestMessage(HttpMethod.Get, endpoint))
                {
                    string location = System.Web.Hosting.HostingEnvironment.MapPath(@"~\TestData\");
                    request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);

                    using (HttpResponseMessage response = await client.SendAsync(request))
                    {
                        if (response.IsSuccessStatusCode)
                        {
                            var json = await response.Content.ReadAsStringAsync();
                            try
                            {
                                EandT = (new JavaScriptSerializer().Deserialize<SpfxEandT>(json));
                                File.WriteAllText(location + "EandTMock.json", json);

                            }
                            catch (Exception ex)
                            {

                            }

                        }
                    }
                }
            }
        }

        public static async System.Threading.Tasks.Task GetTasksandWriteToFile() // need to decide how many time it will run and update the data file.
        {
            string token = await GetDataHelper.GetAuthenticationToken();
            string endpoint = "https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/_api/web/Lists(guid'51bd5e15-d8ac-4820-aed2-a1e29f2b32dc')/items";
            SpfxPurchaseOrder PO = null;
            using (var client = new HttpClient())
            {
                using (var request = new HttpRequestMessage(HttpMethod.Get, endpoint))
                {
                    string location = System.Web.Hosting.HostingEnvironment.MapPath(@"~\TestData\");
                    request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);

                    using (HttpResponseMessage response = await client.SendAsync(request))
                    {
                        if (response.IsSuccessStatusCode)
                        {
                            var json = await response.Content.ReadAsStringAsync();
                            try
                            {
                                PO = (new JavaScriptSerializer().Deserialize<SpfxPurchaseOrder>(json));
                                File.WriteAllText(location + "purchaseOrderMock.json", json);

                            }
                            catch (Exception ex)
                            {

                            }

                        }
                    }
                }
            }
        }

        //need to make PO changes to get the details of PO to adaptive card
        public static async System.Threading.Tasks.Task GetPODetailsandWriteToFile() // need to decide how many time it will run and update the data file.
        {
            string token = await GetDataHelper.GetAuthenticationToken();
            string endpoint = "https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/_api/web/Lists(guid'74ff3893-3f08-4c67-a835-334cdaf6bfa3')/items";
            SpfxPurchaseOrder news = null;
            using (var client = new HttpClient())
            {
                using (var request = new HttpRequestMessage(HttpMethod.Get, endpoint))
                {
                    string location = System.Web.Hosting.HostingEnvironment.MapPath(@"~\TestData\");
                    request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);

                    using (HttpResponseMessage response = await client.SendAsync(request))
                    {
                        if (response.IsSuccessStatusCode)
                        {
                            var json = await response.Content.ReadAsStringAsync();
                            try
                            {
                                news = (new JavaScriptSerializer().Deserialize<SpfxPurchaseOrder>(json));
                                File.WriteAllText(location + "PODetailsMock.json", json);

                            }
                            catch (Exception ex)
                            {

                            }

                        }
                    }
                }
            }
        }

        public static async System.Threading.Tasks.Task GetPreferencesandWriteToFile() // need to decide how many time it will run and update the data file.
        {
            string token = await GetDataHelper.GetAuthenticationToken();
            string endpoint = "https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/_api/web/Lists(guid'e8937172-f3f3-478e-97bb-d5699f8d8945')/items";
            SPFXPreferences pref = null;
            using (var client = new HttpClient())
            {
                using (var request = new HttpRequestMessage(HttpMethod.Get, endpoint))
                {
                    string location = System.Web.Hosting.HostingEnvironment.MapPath(@"~\TestData\");
                    request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);

                    using (HttpResponseMessage response = await client.SendAsync(request))
                    {
                        if (response.IsSuccessStatusCode)
                        {
                            var json = await response.Content.ReadAsStringAsync();
                            try
                            {
                                pref = (new JavaScriptSerializer().Deserialize<SPFXPreferences>(json));
                                File.WriteAllText(location + "PreferencesMock.json", json);

                            }
                            catch (Exception ex)
                            {

                            }

                        }
                    }
                }
            }
        }

        public static SpfxNews ReadNews()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/newsMock.json";
            SpfxNews news = new SpfxNews();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            news = new JavaScriptSerializer().Deserialize<SpfxNews>(json);
            
            return news;
        }

        public static void DownloadImages()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/newsMock.json";
            string ImageLocation = System.Web.Hosting.HostingEnvironment.MapPath("~/Images_Spfx/");
            SpfxNews newNews = new SpfxNews();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            newNews = (new JavaScriptSerializer().Deserialize<SpfxNews>(json));
            List<string> Imageurls = newNews.value.Select(c => c.BannerImageUrl.Url).ToList();
            for(int i = 1; i < Imageurls.Count; i++)
            {
                using(WebClient webclient = new WebClient())
                {
                    webclient.DownloadFileAsync(new Uri(Imageurls[i]), ImageLocation + i + ".jpg"); // images are not opening
                }
            }
        }

        public static SpfxPurchaseOrder GetPOs()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/purchaseOrderMock.json";
                  SpfxPurchaseOrder POs = new SpfxPurchaseOrder();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            POs = (new JavaScriptSerializer().Deserialize<SpfxPurchaseOrder>(json));
            return POs;

        }

        public static SpfxPODetails GetPODetails()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/PODetailsMock.json";
            SpfxPODetails POs = new SpfxPODetails();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            POs = (new JavaScriptSerializer().Deserialize<SpfxPODetails>(json));
            return POs;

        }

        public static void UpdatePOStatus(string poNo)
        {
            if (poNo == null)
                return;
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/PurchaseOrders.json";
            string json = File.ReadAllText(file);

            Newtonsoft.Json.Linq.JObject poObj = Newtonsoft.Json.Linq.JObject.Parse(json);
            for (int poCount = 0; poCount < poObj["purchaseOrder"].Count(); poCount++)
            {
                if (poObj["purchaseOrder"][poCount]["poNumber"].ToString().Equals(poNo))
                {
                    poObj["purchaseOrder"][poCount]["poStatus"] = poObj["purchaseOrder"][poCount]["poStatus"].Equals("pending") ? "approved" : "declined";
                    string FileOutput = JsonConvert.SerializeObject(poObj, Newtonsoft.Json.Formatting.Indented);
                    File.WriteAllText(file, FileOutput);
                    break;
                }
            }

            return;
        }
        public static TicketsDataModel GetTickets()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/SupportTickets/") + @"/Tickets.json";
            TicketsDataModel ticket = new TicketsDataModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            ticket = (new JavaScriptSerializer().Deserialize<TicketsDataModel>(json));
            return ticket;
        }

        public static TicketModel GetTicket()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Ticket.json";
            TicketModel ticket = new TicketModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            ticket = (new JavaScriptSerializer().Deserialize<TicketModel>(json));
            return ticket;
        }

        public static InventoryModel GetInventoryData()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Inventory.json";
            InventoryModel inventory = new InventoryModel();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            inventory = new JavaScriptSerializer().Deserialize<InventoryModel>(json);
            return inventory;
        }

        //to get the preferences from the card json 
        public static SetPreferences SetPreferencesData(string json)
        {
            SetPreferences pref = new SetPreferences();
            pref = (new JavaScriptSerializer().Deserialize<SetPreferences>(json));
            userName = pref.UserName;
            return pref;
        }

        //Makes a UPrefObject from SetPreferences object
        public static Preference MakeUPrefObject(SetPreferences pref, string uID, string serviceURL, string tenID)
        {
            Preference uPref = new Preference();
            uPref.UserName = pref.UserName;
            UserInfo uInfo = new UserInfo();
            NewsPreference newsPref = new NewsPreference();
            EandtPreference entPref = new EandtPreference();
            TaskPreference taskPref = new TaskPreference();
            uInfo.UniqueID = uID;
            uInfo.ServiceURl = serviceURL;
            uInfo.TenantID = tenID;
            newsPref.NewsNotificationFlag = true;
            newsPref.NewsNotifyMe = "true";
            entPref.EandTNotificationFlag = true;
            entPref.EandTNotifyMe = "true";
            taskPref.TaskNotificationFlag = true;
            taskPref.TaskNotifyMe = "true";
            string[] time = { "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM" };
            string[] category = { "Finance", "Media", "Design", "AI", "Data", "Business", "CS", "Technology", "Animation", "IT" };
            switch (pref.SetNewsChoice)
            {
                case "1":
                    newsPref.NewsNotificationTime = "8:00 AM";
                    break;
                case "2":
                    newsPref.NewsNotificationTime = "5:00 PM";
                    break;
                case "3":
                    newsPref.NewsNotificationTime = time[Int32.Parse(pref.SetNewsPreferredTime) - 1];
                    break;
                default:
                    break;
            }
            switch (pref.SetENTChoice)
            {
                case "1":
                    entPref.EandTNotificationTime = "8:00 AM";
                    break;
                case "2":
                    entPref.EandTNotificationTime = "5:00 PM";
                    break;
                case "3":
                    entPref.EandTNotificationTime = time[Int32.Parse(pref.SetENTPreferredTime) - 1];
                    break;
                default:
                    break;
            }
            switch (pref.SetTaskRemindersChoice)
            {
                case "1":
                    taskPref.TaskNotificationTime = "8:00 AM";
                    break;
                case "2":
                    taskPref.TaskNotificationTime = "5:00 PM";
                    break;
                case "3":
                    taskPref.TaskNotificationTime = time[Int32.Parse(pref.SetTaskReminderPreferredTime) - 1];
                    break;
                default:
                    break;
            }
            string newsCategory;
            if (pref.NewsCategory1 == null && pref.NewsCategory2 == null)
                newsPref.SelectedCategories = category;
            else
            {
                if (pref.NewsCategory1 != null && pref.NewsCategory2 == null)
                    newsCategory = pref.NewsCategory1;
                else if (pref.NewsCategory1 == null && pref.NewsCategory2 != null)
                    newsCategory = pref.NewsCategory2;
                else
                    newsCategory = pref.NewsCategory1 + "," + pref.NewsCategory2;

                var arr = newsCategory.Split(',');
                newsPref.SelectedCategories = new string[arr.Count()];
                for (int i = 0; i < arr.Count(); i++)
                    newsPref.SelectedCategories[i] = category[Int32.Parse(arr[i]) - 1];
            }
            uPref.UserInfo = new UserInfo[1];
            uPref.News = new NewsPreference();
            uPref.EandT = new EandtPreference();
            uPref.Task = new TaskPreference();
            uPref.UserInfo[0] = uInfo;
            uPref.News = newsPref;
            uPref.EandT = entPref;
            uPref.Task = taskPref;

            return uPref;
        }
        
        public static UPreferences ReadPreferences()
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Preferences/Userpreferences.json";
            UPreferences pref = new UPreferences();
            string json = File.ReadAllText(file);
            pref = new JavaScriptSerializer().Deserialize<UPreferences>(json);
            return pref;
        }

        public static Preference UserPreference(string userName)
        {
            UPreferences uPrefs = GetDataHelper.ReadPreferences();
            Preference uPref = uPrefs.Preferences.Where(c => c.UserName == userName).FirstOrDefault(); ;
            return uPref;
        }

        public static void WritePreferences(Preference newPref)
        {
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/Preferences/Userpreferences.json";
            string json = File.ReadAllText(file);
            int i;
            UPreferences uPref = new JavaScriptSerializer().Deserialize<UPreferences>(json);
            if (uPref == null)
            {
                uPref = new UPreferences();
                // Add new record and return;
                uPref.Preferences = new[] { newPref };


            }
            else
            {
                var oldPrefList = uPref.Preferences.ToList();
                var oldPref = oldPrefList.FirstOrDefault(u => u.UserName == newPref.UserName);
                if (oldPref == null)
                {
                    // TODO: update this logic
                    var allPref = uPref.Preferences.ToList();
                    allPref.Add(newPref);
                    uPref.Preferences = allPref.ToArray();
                }
                else
                {
                    //var oldPrefList =  uPref.preferences.ToList();
                    //var oldPrefObj = oldPrefList.FirstOrDefault(  )
                    oldPrefList.Remove(oldPref);
                    oldPrefList.Add(newPref);
                    //uPref.preferences = oldPrefList.ToArray();
                    // oldPref = newPref;
                    uPref.Preferences = oldPrefList.ToArray();
                }
                //var cat = uPref.preferences.Select(c => c.News).FirstOrDefault().Select(d => d.SelectedCategories).FirstOrDefault();

                //List<Preference> list = uPref.preferences.ToList();
                //for (i = 0; i < list.Count(); i++)
                //{
                //    if (list[i].UserName.Equals(pref.UserName))
                //    {
                //        //rewrite
                //        list[i] = pref;
                //        break;
                //    }
                //}
                //if (i == list.Count())
                //    list.Add(pref);
                //uPref.preferences = list.ToArray();
            }
            var convertedJson = JsonConvert.SerializeObject(uPref, Formatting.Indented);
            File.WriteAllText(file, convertedJson);
            return;
        }

        public static async System.Threading.Tasks.Task<bool> WritePrefsToSPList(string body)
        {
            string token = await GetDataHelper.GetAuthenticationToken();
            
            string endpoint = "https://avadheshftc.sharepoint.com/sites/EmployeeConnectPrototype/_api/web/lists/GetByTitle('PreferencesList')/items";
            using (var client = new HttpClient())
            {
                using (var request = new HttpRequestMessage(HttpMethod.Post, endpoint))
                {                    
                    request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
                    request.Content = new StringContent(body, Encoding.UTF8, "application/json");

                    using (HttpResponseMessage response = await client.SendAsync(request))
                    {
                        if (response.IsSuccessStatusCode)
                        {
                            return true;

                        }
                        return false;
                    }
                }
            }
        }
               
        public static void ETStatusUpdate(string ETid)
        {
            if (ETid == null)
                return;
            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/EventsAndTraining_June.json";
            string json = File.ReadAllText(file);

            Newtonsoft.Json.Linq.JObject ETObj = Newtonsoft.Json.Linq.JObject.Parse(json);
            for (int i = 0; i < ETObj["EventsAndTraining"].Count(); i++)
            {
                if (ETObj["EventsAndTraining"][i]["ETID"].ToString().Equals(ETid))
                {
                    ETObj["EventsAndTraining"][i]["UserAdded"] = !(bool)ETObj["EventsAndTraining"][i]["UserAdded"];
                    string FileOutput = Newtonsoft.Json.JsonConvert.SerializeObject(ETObj, Newtonsoft.Json.Formatting.Indented);
                    File.WriteAllText(file, FileOutput);
                    break;
                }
            }
        }

        public static void SaveVisitorInfo(JObject visitorData)
        {
            VisitorDataModel currentVisitor = new VisitorDataModel()
            {
                VhostName = visitorData.GetValue("hostName").ToString(),
                VhostLocation = visitorData.GetValue("hostLocation").ToString(),
                Vdate = visitorData.GetValue("Date").ToString(),
                Vtime = visitorData.GetValue("Time").ToString(),
                Vpurpose = visitorData.GetValue("purpose").ToString(),
                Vorg = visitorData.GetValue("org").ToString(),
                Vcontact = visitorData.GetValue("contactNo").ToString()

            };
            JavaScriptSerializer js = new JavaScriptSerializer();
            string visitorJson = js.Serialize(currentVisitor);
            string filePath = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/VisitorReg") + @"/Visitors.json";
            if (File.Exists(filePath))
            {
                File.AppendAllText(filePath, visitorJson);
            }
        }
             
        public static void SaveTicketsInfo(JObject ticketData)
        {
            TicketsDataModel currentTicket = GetDataHelper.GetTickets();

            int TicketCount = currentTicket.Tickets.Count();
            var tNo = Convert.ToInt32(ticketData.GetValue("TicketNo"));
            var ticDes = ticketData.GetValue("Description").ToString();
            var ticDate = ticketData.GetValue("Date").ToString();
            var ticPriority = ticketData.GetValue("Priority").ToString();
            var ticCat = ticketData.GetValue("Category").ToString();

            JavaScriptSerializer js = new JavaScriptSerializer();
            string TicketJson = js.Serialize(currentTicket);
            string filePath = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/SupportTickets") + @"/Tickets.json";
            if (File.Exists(filePath))
            {
                File.WriteAllText(filePath, TicketJson);
            }
        }
               
        public static List<Values> GetPreferredNews(string username)
        {
            Preference uPref = UserPreference(username);
            SpfxNews news = ReadNews();
            //List<Values> newsValues = newsL.value.Where(c => c.Category != null).Select(d => d).ToList();
            List<Values> newCatNotNull = news.value.Where(a => a.Category != null).ToList();

            //string[] categories = uPref.News.SelectedCategories;
            string[] categories = { "AI", "Technology", "IT", "CD" };

            //if cat count is zero then return all the news cats
            if (categories.Count() <= 1) return newCatNotNull;

            var prefNews = new List<Values>();

            for (int i = 0; i < categories.Count(); i++)
            {
                var newss = newCatNotNull.Where(w => w.Category==categories[i]);
                prefNews = prefNews.Concat(newss).ToList();
            }

            newCatNotNull = prefNews;
            return newCatNotNull;
        }

        public static prefValue ReadPrefernecesfromSPData(string userName)
        {
            List<string> prefs = new List<string>();

            string file = System.Web.Hosting.HostingEnvironment.MapPath("~/TestData/") + @"/PreferencesMock.json";
            SPFXPreferences preferences = new SPFXPreferences();
            string json = File.ReadAllText(file).Replace("##BaseURL##", ApplicationSettings.BaseUrl);
            preferences = new JavaScriptSerializer().Deserialize<SPFXPreferences>(json);

            prefValue prefValue = preferences.value.Where(c => c.UserName == userName).Select(d => d).FirstOrDefault();
            return prefValue;
        }

        public class TokenResponse
        {
            public string access_token { get; set; }
        }


    }
}






