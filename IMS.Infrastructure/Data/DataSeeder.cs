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



            var productPath = Path.Combine(AppContext.BaseDirectory, "Data", "SeedData", "Products.json");

            var productsData = await File.ReadAllTextAsync(productPath);

            var products = JsonSerializer.Deserialize<List<Product>>(productsData);

            if (products is null) return;

            await context.Products.AddRangeAsync(products);

            await context.SaveChangesAsync();



        }
    }
}
