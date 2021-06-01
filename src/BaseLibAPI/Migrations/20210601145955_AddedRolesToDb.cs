using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseLibAPI.Migrations
{
    public partial class AddedRolesToDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "e7fb68f0-57c2-4de1-b936-c114cb70057d", "6b2008af-99a5-4e8b-827f-61001f78563d", "Administrator", "ADMINISTRATOR" },
                    { "c767fb5b-f2f2-4fbf-bb40-b48fd5bf78d3", "9a5e234c-58a7-4642-b4b4-b60f26783c35", "User", "USER" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c767fb5b-f2f2-4fbf-bb40-b48fd5bf78d3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e7fb68f0-57c2-4de1-b936-c114cb70057d");
        }
    }
}
