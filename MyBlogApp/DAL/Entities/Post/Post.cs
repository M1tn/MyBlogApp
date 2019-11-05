using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlogApp.DAL.Entities.Post
{
    [Table("tblPosts")]
    public class MyPost
    {

        public int Id
        { get; set; }

        public string Title
        { get; set; }

        public string ShortDescription
        { get; set; }

        public string Description
        { get; set; }

        public string Meta
        { get; set; }

        public  string UrlSlug
        { get; set; }

        public  bool Published
        { get; set; }

        public  DateTime PostedOn
        { get; set; }

        public  DateTime? Modified
        { get; set; }

        public  Category Category
        { get; set; }

        public string Photo { get; set; }

        public  List<PostTag> PostTags
        { get; set; }

        [ForeignKey("AdminProfile")]
        public int AdminProfileId { get; set; }
        public virtual AdminProfile AdminProfile { get; set; }
    }
}
