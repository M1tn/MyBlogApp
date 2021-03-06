﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlogApp.DAL.Entities
{
    public class DbUser : IdentityUser<int>
    {
        public ICollection<DbUserRole> UserRoles { get; set; }
        public virtual UserProfile UserProfile { get; set; }
        public virtual AdminProfile AdminProfile { get; set; }
    }
}
