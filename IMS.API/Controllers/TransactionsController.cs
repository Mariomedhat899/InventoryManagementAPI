using IMS.API.Models.TransactionsDtos;
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
    public class TransactionsController(ApplicationDbContext _context) : ControllerBase
    {

        [HttpGet]
        [Authorize(Roles = "Admin,Manager")]
        public async Task<IActionResult> GetTransactions()
        {
            var transactions = await _context.Transactions
                 .Include(t => t.Product)
                 .Include(t => t.User)
                 .Select(t => new TransactionDto
                 {

                     Id = t.Id,
                     ProductId = t.ProductId,
                     ProductName = t.Product != null ? t.Product.Name : "Unknown",
                     Quantity = t.Quantity,
                     Type = t.Type,
                     Date = t.Date,
                     TotalAmount = t.TotalAmount,
                     UserId = t.UserId,
                 }).OrderByDescending(t => t.Date)
                 .ToListAsync();

            return Ok(transactions);
        }



        [HttpPost]
        [Authorize(Roles = "Admin,Manager,Staff")]

        public async Task<IActionResult> RecordTransaction([FromBody] CreateTransactionDto model)
        {
            var product = await _context.Products.FindAsync(model.ProductId);
            if (product is null) return NotFound("Product not found!!");

            if (model.Quantity <= 0) return BadRequest("Quantity must be greater than 0!!");

            var type = model.Type.ToLowerInvariant();
            if ((type != "sale" && type != "purchase"))
                return BadRequest("Type must be 'Sale' or 'Purchase'!!");




            if (type == "sale")
            {
                if (product.QuantityInStock < model.Quantity)
                    return BadRequest("Insufficient stock for this sale!!");

                product.QuantityInStock -= model.Quantity;
            }
            else
            {
                product.QuantityInStock += model.Quantity;
            }

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var transaction = new Transaction
            {

                ProductId = model.ProductId,
                Quantity = model.Quantity,
                Type = type,
                Date = DateTime.UtcNow,
                TotalAmount = model.Quantity * product.Price,
                UserId = userId

            };

            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();

            var responseDto = new TransactionDto
            {
                Id = transaction.Id,
                ProductId = transaction.ProductId,
                ProductName = product.Name,
                Quantity = transaction.Quantity,
                Type = transaction.Type,
                Date = transaction.Date,
                TotalAmount = transaction.TotalAmount,
                UserId = transaction.UserId
            };

            return CreatedAtAction(nameof(GetTransactionById), new { id = transaction.Id }, responseDto);
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Admin,Manager")]
        public async Task<IActionResult> GetTransactionById(int id)
        {
            var transaction = await _context.Transactions
                .Include(t => t.Product)
                .Include(t => t.User)
                .Select(t => new TransactionDto
                {
                    Id = t.Id,
                    ProductId = t.ProductId,
                    ProductName = t.Product != null ? t.Product.Name : "Unknown",
                    Quantity = t.Quantity,
                    Type = t.Type,
                    Date = t.Date,
                    TotalAmount = t.TotalAmount,
                    UserId = t.UserId,
                })
                .FirstOrDefaultAsync(t => t.Id == id);

            if (transaction is null) return NotFound();

            return Ok(transaction);
        }
    }
}
