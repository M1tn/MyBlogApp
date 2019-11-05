using MyBlogApp.DAL.Entities.Post;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlogApp.ViewModels
{
    public class MyPostViewModelShortDescription
    {
        public int Id
        { get; set; }

        public string Title
        { get; set; }

        public string ShortDescription
        { get; set; }

        public string Photo { get; set; }
    }


    public class MyPostViewModel
    {
        public int Id
        { get; set; }

        public string Description
        { get; set; }

        public string Title
        { get; set; }        

        public string Photo { get; set; }

        public Category Category
        { get; set; }
    }
}
