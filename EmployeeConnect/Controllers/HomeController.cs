using EmployeeConnect.Helper;
using EmployeeConnect.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace EmployeeConnect.Controllers
{
    public class EmployeeConnectController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("hello")]
        public ActionResult Hello()
        {
            return View("Index");
        }

        [Route("first")]
        public ActionResult First()
        {
            return View();
        }

        [Route("second")]
        public ActionResult Second()
        {
            return View();
        }

        [Route("configure")]
        public ActionResult Configure()
        {
            return View();
        }

        [Route("Tasks")]
        public ActionResult Tasks()
        {
            PO taskList = new PO();
            taskList = GetDataHelper.GetPOs();
            var count = 0;
            foreach(var item in taskList.PurchaseOrder)
            {
                if(taskList.PurchaseOrder[count].PoStatus != "Declined")
                {
                    PO filterPOStatus = new PO();
                    count++;

                }
                count = 0;
            }
            return View(taskList);
        }

        [Route("news")]
        public ActionResult News()
        {
            NewsModel newsListData = new NewsModel();
            newsListData = GetDataHelper.GetNews();
            return View(newsListData);
        }

        [Route("EventandTrainingTab")]
        public ActionResult EventandTrainingTab()
        {
            EandT eventsListData = new EandT();
            eventsListData = GetDataHelper.GetEandT();
            return View(eventsListData);
        }

    }
}
