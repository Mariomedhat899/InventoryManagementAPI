using IMS.Core.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace IMS.Infrastructure.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Product> Products => Set<Product>();
        public DbSet<Category> categories => Set<Category>();
        public DbSet<Transaction> Transactions => Set<Transaction>();
        public DbSet<Payment> Payments => Set<Payment>();
        public DbSet<LowStockAlert> LowStockAlerts => Set<LowStockAlert>();


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<LowStockAlert>()
                   .HasOne(a => a.Product)
                   .WithMany()
                   .HasForeignKey(a => a.ProductId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Transaction>()
                   .HasOne(t => t.Product)
                   .WithMany(p => p.Transactions)
                   .HasForeignKey(t => t.ProductId)
                   .OnDelete(DeleteBehavior.Restrict);
            builder.Entity<Transaction>()
                   .HasOne(t => t.User)
                   .WithMany()
                   .HasForeignKey(t => t.UserId)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Product>()
                   .HasOne(p => p.Category)
                   .WithMany(c => c.Products)
                   .HasForeignKey(p => p.CategoryId)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<LowStockAlert>()
                   .HasOne(a => a.Product)
                   .WithMany(p => p.Alerts)
                   .HasForeignKey(a => a.ProductId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Payment>()
                   .HasOne<Transaction>()
                   .WithMany()
                   .HasForeignKey("TransactionId")
                   .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Product>(entity =>
            {
                entity.Property(p => p.Price).HasPrecision(18, 2);
            });

            builder.Entity<Payment>(entity =>
                {
                    entity.Property(p => p.Amount).HasPrecision(18, 2);
                });
            builder.Entity<Transaction>(entity =>
            {
                entity.Property(t => t.TotalAmount).HasPrecision(18, 2);
            });





        }
    }
}
