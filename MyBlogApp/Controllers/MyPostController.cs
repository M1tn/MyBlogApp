using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyBlogApp.Controllers
{
    public class MyPostController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}