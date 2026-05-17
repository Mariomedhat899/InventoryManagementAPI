namespace IMS.Core.Entities
{
    public class LowStockAlert : BaseEntity
    {
        public int ProductId { get; set; }

        public Product? Product { get; set; }

        public int Threshold { get; set; }
        public bool IsResolved { get; set; } = false;

        public DateTime AlertDate { get; set; } = DateTime.UtcNow;

        public DateTime? ResolvedDate { get; set; }
    }
}