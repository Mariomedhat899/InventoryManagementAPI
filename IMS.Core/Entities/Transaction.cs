namespace IMS.Core.Entities
{
    public class Transaction : BaseEntity
    {

        public int Quantity { get; set; }

        public string Type { get; set; } = string.Empty;

        public DateTime Date { get; set; } = DateTime.UtcNow;

        public decimal TotalAmount { get; set; }

        public int ProductId { get; set; }

        public Product? Product { get; set; }

        public string? UserId { get; set; }

        public ApplicationUser? User { get; set; }
    }
}
