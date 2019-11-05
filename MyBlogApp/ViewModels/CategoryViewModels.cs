using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlogApp.ViewModels
{
    public class CategoryAddViewModel
    {
        public string Name
        { get; set; }

        public string Description
        { get; set; }

        //public string Photo { get; set; }

        public string UrlSlug
        { get; set; }
    }

    public class CategoryViewModel
    {
        public int Id
        { get; set; }

        public string Name
        { get; set; }

        public string Description
        { get; set; }

        public string Photo { get; set; }

        public string UrlSlug
        { get; set; }
    }
}
