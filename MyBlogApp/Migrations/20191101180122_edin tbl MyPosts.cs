using Microsoft.EntityFrameworkCore.Migrations;

namespace MyBlogApp.Migrations
{
    public partial class edintblMyPosts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Photo",
                table: "tblPosts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Photo",
                table: "tblPosts");
        }
    }
}
