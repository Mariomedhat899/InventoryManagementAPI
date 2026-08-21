using IMS.API.Models.ProductsDtos;
using IMS.API.Services;
using IMS.Core.Entities;
using IMS.Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System.Text;

namespace IMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController(ApplicationDbContext _context,
        CsvService _csv) : ControllerBase
    {

        [HttpGet("export")]
        [Authorize(Roles = "Admin,Manager")]
        public async Task<IActionResult> ExportProducts()
        {
            var products = await _context.Products.ToListAsync();
            var csv = _csv.ExportProductsToCsv(products);

            return File(Encoding.UTF8.GetBytes(csv), "Text/csv", "products_export.csv");
        }

        [HttpPost("import")]
        [Authorize(Roles = "Admin,Manager")]
        public async Task<IActionResult> ImportProducts(IFormFile file)
        {
            if (file is null || file.Length == 0) return BadRequest("No File Uploaded!");

            using var reader = new StreamReader(file.OpenReadStream());
            var csvContent = await reader.ReadToEndAsync();

            var products = _csv.ImportProductsFromCsv(csvContent);
            int addedCount = 0;
            int updatedCount = 0;

            foreach (var product in products)
            {
                if (string.IsNullOrWhiteSpace(product.Name)) continue;

                var existingProduct = await _context.Products
                    .FirstOrDefaultAsync(p => p.Name == product.Name);

                if (existingProduct != null)
                {
                    existingProduct.Description = product.Description;
                    existingProduct.Price = product.Price;
                    existingProduct.QuantityInStock += product.QuantityInStock;
                    existingProduct.Supplier = product.Supplier;
                    existingProduct.CategoryId = product.CategoryId;
                    existingProduct.LastUpdatedAt = DateTime.UtcNow;
                    updatedCount++;
                }
                else
                {
                    product.Id = 0;
                    _context.Products.Add(product);
                    addedCount++;
                }
            }

            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Import Completed",
                added = addedCount,
                updated = updatedCount
            });
        }

        [HttpGet]
        [Authorize(Roles = "Admin,Manager,Staff")]

        public async Task<IActionResult> getProducts()
        {
            var products = await _context.Products
                .Select(P => new ProductDto
                {
                    Id = P.Id,
                    Name = P.Name,
                    Description = P.Description,
                    Price = P.Price,
                    QuantityInStock = P.QuantityInStock,
                    Supplier = P.Supplier,
                    CategoryId = P.CategoryId,
                    CreatedAt = P.CreatedAt,
                    UpdatedAt = P.LastUpdatedAt
                }).ToListAsync();

            return Ok(products);
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Admin,Manager,Staff")]

        public async Task<IActionResult> GetProductById(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product is null) return NotFound();

            var productDto = new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                QuantityInStock = product.QuantityInStock,
                Supplier = product.Supplier,
                CategoryId = product.CategoryId,
                CreatedAt = product.CreatedAt,
                UpdatedAt = product.LastUpdatedAt
            };

            return Ok(productDto);
        }

        [HttpPost]
        [Authorize(Roles = "Admin,Manager")]
        public async Task<IActionResult> CreateProductAsync([FromBody] CreateProductDto model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var product = new Product
            {
                Name = model.Name,
                Description = model.Description,
                Price = model.Price,
                QuantityInStock = model.QuantityInStock,
                Supplier = model.Supplier,
                CategoryId = model.CategoryId,

            };

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProductById), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin,Manager")]
        public async Task<IActionResult> UpdateProdductAsync(int id, [FromBody] UpdateProductDto model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var product = await _context.Products.FindAsync(id);
            if (product is null) return NotFound();


            product.Name = model.Name;
            product.Description = model.Description;
            product.Price = model.Price;
            product.QuantityInStock = model.QuantityInStock;
            product.Supplier = model.Supplier;
            product.CategoryId = model.CategoryId;
            product.LastUpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteProductAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product is null) return NotFound();

            var hasTransactions = await _context.Transactions.AnyAsync(t => t.ProductId == id);
            if (hasTransactions)
            {
                var blocking = await _context.Transactions
                    .Where(t => t.ProductId == id)
                    .OrderByDescending(t => t.Date)
                    .Select(t => new { t.Id, t.Type, t.TotalAmount, t.Date })
                    .Take(5)
                    .ToListAsync();

                var details = string.Join("; ", blocking.Select(t =>
                    $"#{t.Id} {t.Type} ${t.TotalAmount} {t.Date:yyyy-MM-dd}"));

                return BadRequest(new { message = $"Cannot delete this product because it has linked transactions. Blocking: {details}" });
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
