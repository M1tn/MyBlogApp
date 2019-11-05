using MyBlogApp.DAL.Entities.Post;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlogApp.DAL.Entities
{
    public class AdminProfile : DbUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Photo { get; set; }

        public ICollection<MyPost> MyPosts { get; set; }
    }
}
