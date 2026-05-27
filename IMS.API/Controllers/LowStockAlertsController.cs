using IMS.API.Models.AlertsDtos;
using IMS.Core.Entities;
using IMS.Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,Manager")]
    public class LowStockAlertsController(ApplicationDbContext _context) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> SetAlert([FromBody] SetAlertDto model)
        {
            var product = await _context.Products.FindAsync(model.ProductId);
            if (product is null) return NotFound($"Product with ID {model.ProductId} not found.");

            var existingAlert = await _context.LowStockAlerts
                .FirstOrDefaultAsync(a => a.ProductId == model.ProductId && !a.IsResolved);

            if (existingAlert != null)
            {
                existingAlert.Threshold = model.Threshold;
            }
            else
            {
                var alert = new LowStockAlert
                {
                    ProductId = model.ProductId,
                    Threshold = model.Threshold,
                    IsResolved = product.QuantityInStock > model.Threshold,
                    AlertDate = DateTime.UtcNow
                };

                _context.LowStockAlerts.Add(alert);
            }

            await _context.SaveChangesAsync();

            return Ok(new { message = "Low Stock Alert Configured Successfully." });
        }

        [HttpGet]
        public async Task<IActionResult> GetActiveAlerts()
        {
            var alerts = await _context.LowStockAlerts
                .Include(a => a.Product)
                .Where(a => !a.IsResolved && a.Product != null && a.Product.QuantityInStock <= a.Threshold)
                .Select(a => new
                {
                    a.Id,
                    ProductName = a.Product!.Name,
                    CurrentStock = a.Product.QuantityInStock,
                    Threshold = a.Threshold,
                    a.AlertDate

                })
                .ToListAsync();
            return Ok(alerts);
        }
    }
}
