using IMS.API.Models.ReportsDtos;
using IMS.Core.Entities;
using IMS.Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace IMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,Manager")]
    public class ReportsController(ApplicationDbContext _context) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetReport([FromQuery] string? tenantId)
        {
            var requesterId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (requesterId is null) return Unauthorized();

            var requester = await _context.Users.FirstOrDefaultAsync(u => u.Id == requesterId);
            if (requester is null) return Unauthorized();

            var isSuperAdmin = string.Equals(requester.Email, "MarioMedhat899@gmail.com", StringComparison.OrdinalIgnoreCase);
            var effectiveTenantId = !string.IsNullOrWhiteSpace(tenantId) ? tenantId : requester.TenantId;

            if (!isSuperAdmin && string.IsNullOrWhiteSpace(effectiveTenantId))
            {
                return BadRequest(new { message = "Tenant context is required for reporting." });
            }

            IQueryable<Product> productsQuery = _context.Products;
            IQueryable<Transaction> transactionsQuery = _context.Transactions;

            if (!isSuperAdmin && !string.IsNullOrWhiteSpace(effectiveTenantId))
            {
                transactionsQuery = transactionsQuery
                    .Where(t => t.User != null && t.User.TenantId == effectiveTenantId);
            }

            var totalStockValue = await productsQuery
                .SumAsync(p => p.Price * p.QuantityInStock);

            var totalProducts = await productsQuery.CountAsync();

            var paymentsCount = await transactionsQuery
                .CountAsync(t => t.Type == "payment");
            var paymentsRevenue = await transactionsQuery
                .Where(t => t.Type == "payment")
                .SumAsync(t => t.TotalAmount);

            var receiptsCount = await transactionsQuery
                .CountAsync(t => t.Type == "receipt");
            var receiptsAmount = await transactionsQuery
                .Where(t => t.Type == "receipt")
                .SumAsync(t => t.TotalAmount);

            var topProducts = await transactionsQuery
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
