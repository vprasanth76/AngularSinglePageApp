using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentSinglePageApp.Controllers
{
    public class StudentsController : Controller
    {
        // GET: Students
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ShowStudents()
        {
            return PartialView("_ShowStudents");
        }

        public ActionResult AddStudent()
        {
            return PartialView("_AddStudent");
        }

        public ActionResult EditStudent()
        {
            return PartialView("_EditStudent");
        }
    }
}