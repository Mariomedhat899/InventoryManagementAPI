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

            var paymentsCount = await _context.Transactions
           .CountAsync(t => t.Type == "payment");

            var paymentsRevenue = await _context.Transactions
                .Where(t => t.Type == "payment")
                .SumAsync(t => t.TotalAmount);

            var receiptsCount = await _context.Transactions
                .CountAsync(t => t.Type == "receipt");


            var receiptsAmount = await _context.Transactions
                .Where(t => t.Type == "receipt")
                .SumAsync(t => t.TotalAmount);

            var topProducts = await _context.Transactions
                .Where(t => t.Type == "payment")
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
                Payments = new ReportSummaryDto
                {
                    Count = paymentsCount,
                    TotalAmount = paymentsRevenue
                },
                Receipts = new ReportSummaryDto
                {
                    Count = receiptsCount,
                    TotalAmount = receiptsAmount
                },
                TopSellingProducts = topProducts





            };


            return Ok(report);
        }

    }
}
