using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyBlogApp.DAL.Entities.Post;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlogApp.DAL.Entities
{
    public class EFDbContext : IdentityDbContext<DbUser, DbRole, int, IdentityUserClaim<int>,
   DbUserRole, IdentityUserLogin<int>,
   IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public EFDbContext(DbContextOptions<EFDbContext> options)
            : base(options)
        {

        }





        public virtual DbSet<MyPost> MyPosts { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }

        public virtual DbSet<AdminProfile> AdminProfiles { get; set; }
        public virtual DbSet<UserProfile> UserProfiles { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<DbUserRole>(userRole =>
            {
                userRole.HasKey(ur => new { ur.UserId, ur.RoleId });
                userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();
                userRole.HasOne(ur => ur.User)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            });
            
            builder.Entity<PostTag>(PostTag =>
            {
                PostTag.HasKey(f => new { f.PostId, f.TagId });
                PostTag.HasOne(p => p.MyPostOf)
                    .WithMany(r => r.PostTags)
                    .HasForeignKey(p => p.PostId)
                    .IsRequired();
                PostTag.HasOne(ur => ur.TagOf)
                    .WithMany(r => r.PostTags)
                    .HasForeignKey(ur => ur.TagId)
                    .IsRequired();
            });
        }
    }
}
