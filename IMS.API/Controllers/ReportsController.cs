using IMS.API.Models.ReportsDtos;
using IMS.Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,Manager")]
    public class ReportsController(ApplicationDbContext _context) : ControllerBase
    {

        [HttpGet]
        public async Task<IActionResult> GetReport()
        {

            var totalStockValue = await _context.Products
                .SumAsync(p => p.Price * p.QuantityInStock);

            var totalProducts = await _context.Products.CountAsync();

            var salesCount = await _context.Transactions
           .CountAsync(t => t.Type == "sale");

            var salesRevenue = await _context.Transactions
                .Where(t => t.Type == "sale")
                .SumAsync(t => t.TotalAmount);

            var PurchaseCount = await _context.Transactions
                .CountAsync(t => t.Type == "purchase");


            var purchesAmount = await _context.Transactions
                .Where(t => t.Type == "purchase")
                .SumAsync(t => t.TotalAmount);

            var topProducts = await _context.Transactions
                .Where(t => t.Type == "sale")
                .GroupBy(t => new { t.ProductId, t.Product!.Name })
                .Select(g => new TopProductDto
                {
                    ProductName = g.Key.Name,
                    QuantitySold = g.Sum(t => t.Quantity),
                    Revenue = g.Sum(t => t.TotalAmount)
                })
                .OrderByDescending(t => t.QuantitySold)
                .Take(5)
                .ToListAsync();


            var report = new InventoryReportDto
            {
                TotalStockValue = totalStockValue,
                TotalProducts = totalProducts,
                Sales = new ReportSummaryDto
                {
                    Count = salesCount,
                    TotalAmount = salesRevenue
                },
                Purchases = new ReportSummaryDto
                {
                    Count = PurchaseCount,
                    TotalAmount = purchesAmount
                },
                TopSellingProducts = topProducts





            };


            return Ok(report);
        }

    }
}
