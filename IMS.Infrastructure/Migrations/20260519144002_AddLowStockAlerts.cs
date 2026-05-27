using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IMS.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddLowStockAlerts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LowStockAlert_Products_ProductId",
                table: "LowStockAlert");

            migrationBuilder.DropPrimaryKey(
                name: "PK_LowStockAlert",
                table: "LowStockAlert");

            migrationBuilder.RenameTable(
                name: "LowStockAlert",
                newName: "LowStockAlerts");

            migrationBuilder.RenameIndex(
                name: "IX_LowStockAlert_ProductId",
                table: "LowStockAlerts",
                newName: "IX_LowStockAlerts_ProductId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_LowStockAlerts",
                table: "LowStockAlerts",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_LowStockAlerts_Products_ProductId",
                table: "LowStockAlerts",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LowStockAlerts_Products_ProductId",
                table: "LowStockAlerts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_LowStockAlerts",
                table: "LowStockAlerts");

            migrationBuilder.RenameTable(
                name: "LowStockAlerts",
                newName: "LowStockAlert");

            migrationBuilder.RenameIndex(
                name: "IX_LowStockAlerts_ProductId",
                table: "LowStockAlert",
                newName: "IX_LowStockAlert_ProductId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_LowStockAlert",
                table: "LowStockAlert",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_LowStockAlert_Products_ProductId",
                table: "LowStockAlert",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
