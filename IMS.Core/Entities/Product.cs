namespace IMS.Core.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; } = string.Empty;

        public string? Description { get; set; }

        public decimal Price { get; set; }

        public int QuantityInStock { get; set; }

        public string? Supplier { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime LastUpdatedAt { get; set; } = DateTime.UtcNow;

        public int CategoryId { get; set; }

        public Category? Category { get; set; }

        public ICollection<Transaction>? Transactions { get; set; }
        public ICollection<LowStockAlert>? Alerts { get; set; }
    }
}