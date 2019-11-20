using MyBlogApp.DAL.Entities.Post;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlogApp.DAL.Entities
{
    [Table("tblAdminProfiles")]
    public class AdminProfile
    {
        [Key, ForeignKey("User")]
        public int Id { get; set; }


        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Photo { get; set; }

        public ICollection<MyPost> MyPosts { get; set; }

        public virtual DbUser User { get; set; }
    }
}
