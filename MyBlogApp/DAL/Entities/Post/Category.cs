using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlogApp.DAL.Entities.Post
{
    [Table("tblCategory")]
    public class Category
    {
        

        public  int Id
        { get; set; }

        public  string Name
        { get; set; }

        public  string UrlSlug
        { get; set; }

        public  string Description
        { get; set; }

        public string Photo { get; set; }

        public  List<MyPost> Posts
        { get; set; }
    }
}
