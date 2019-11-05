using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlogApp.DAL.Entities.Post
{
    [Table("tblPostsTags")]
    public class PostTag
    {
        [ForeignKey("MyPostOf"), Key,Column(Order =0) ]
        public int PostId { get; set; }
        public MyPost MyPostOf { get; set; }

        [ForeignKey("TagOf"), Key, Column(Order = 1)]
        public int TagId { get; set; }
        public Tag TagOf { get; set; }
    }
}
