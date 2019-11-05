using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlogApp.DAL.Entities.Post
{
    [Table("tblTags")]
    public class Tag
    {
        public  int Id
        { get; set; }

        public  string Name
        { get; set; }

        public  string UrlSlug
        { get; set; }

        public  string Description
        { get; set; }

        public  List<PostTag> PostTags
        { get; set; }
    }
}
