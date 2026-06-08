using IMS.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace IMS.Infrastructure.Data
{
    public class RoleSeeder
    {
        public static async Task SeedRolesAsync(ApplicationDbContext _context, IServiceProvider serviceProvider)
        {
            if (_context.Database.GetPendingMigrationsAsync().GetAwaiter().GetResult().Any())
                await _context.Database.MigrateAsync();

            using var scope = serviceProvider.CreateScope();
            var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            string[] roles = { "Admin", "Manager", "Staff" };

            foreach (var role in roles)
            {
                if (!await roleManager.RoleExistsAsync(role))
                {
                    await roleManager.CreateAsync(new IdentityRole(role));

                }
            }

            var adminEmail = "MarioMedhat899@gmail.com";

            var adminUser = await userManager.FindByEmailAsync(adminEmail);

            if (adminUser is null)
            {
                adminUser = new ApplicationUser
                {
                    UserName = "admin",
                    Email = adminEmail,
                    EmailConfirmed = true
                };
                var result = await userManager.CreateAsync(adminUser, "Admin@123");


                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(adminUser, "Admin");
                }
            }
            var managerEmail = "Manager@test.com";
            var managerUser = await userManager.FindByEmailAsync(managerEmail);
            if (managerUser is null)
            {
                managerUser = new ApplicationUser
                {
                    UserName = "manager",
                    Email = managerEmail,
                    EmailConfirmed = true
                };

                var managerResult = await userManager.CreateAsync(managerUser, "Manager@123");
                if (managerResult.Succeeded)
                {
                    await userManager.AddToRoleAsync(managerUser, "Manager");
                }
            }


            var staffEmail = "staff@test.com";
            var staffUser = await userManager.FindByEmailAsync(staffEmail);
            if (staffUser is null)
            {
                staffUser = new ApplicationUser
                {
                    UserName = "staff",
                    Email = staffEmail,
                    EmailConfirmed = true
                };
                var staffResult = await userManager.CreateAsync(staffUser, "Staff@123");
                if (staffResult.Succeeded) await userManager.AddToRoleAsync(staffUser, "Staff");
            }





        }

    }
}
