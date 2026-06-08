using IMS.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Text.Json;

namespace IMS.Infrastructure.Data
{
    public class DataSeeder
    {

        public static async Task SeedDataAsync(IServiceProvider service)
        {
            using var scope = service.CreateScope();
            var context =
                scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            var userManager =
                scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            var roleManager =
                scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            if (context.Database.GetPendingMigrationsAsync().GetAwaiter().GetResult().Any())
                await context.Database.MigrateAsync();

            if (await context.categories.AnyAsync()) return;

            var categorypath = Path.Combine(AppContext.BaseDirectory, "Data", "SeedData", "categories.json");

            var categoriesData = await File.ReadAllTextAsync(categorypath);

            var categories = JsonSerializer.Deserialize<List<Category>>(categoriesData);

            if (categories is null) return;


            await context.categories.AddRangeAsync(categories);

            await context.SaveChangesAsync();

            var categoryMap = await context.categories
                .ToDictionaryAsync(c => c.Name!, c => c.Id);

            var productPath = Path.Combine(AppContext.BaseDirectory, "Data", "SeedData", "Products.json");

            var productsData = await File.ReadAllTextAsync(productPath);
            var productOptions = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            var products = JsonSerializer.Deserialize<List<ProductSeedDto>>(productsData, productOptions);

            if (products is null) return;
            foreach (var product in products)
            {
                if (!categoryMap.TryGetValue(product.CategoryName, out int categoryID))
                    continue;

                context.Products.Add(new Product
                {
                    Name = product.Name,
                    Description = product.Description,
                    Price = product.Price,
                    QuantityInStock = product.QuantityInStock,
                    Supplier = product.Supplier,
                    CategoryId = categoryID,
                });

            }
            ;


            await context.SaveChangesAsync();



        }
        private class ProductSeedDto
        {

            public string Name { get; set; } = string.Empty;
            public string Description { get; set; } = string.Empty;
            public decimal Price { get; set; }
            public int QuantityInStock { get; set; }
            public string Supplier { get; set; } = string.Empty;
            public string CategoryName { get; set; } = string.Empty;

        }
    }
}

