namespace IMS.Core.Entities
{
    public class Payment : BaseEntity
    {
        public string TransactionReference { get; set; } = string.Empty;

        public decimal Amount { get; set; }

        public string PaymentMethod { get; set; } = string.Empty;

        public DateTime PaymentDate { get; set; } = DateTime.UtcNow;

        public string Status { get; set; } = "Pending";
    }
}
