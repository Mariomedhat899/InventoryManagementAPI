namespace IMS.API.Models.PaymentsDtos
{
    public class PaymentDto
    {
        public int Id { get; set; }

        public decimal Amount { get; set; }

        public string PaymentMethod { get; set; } = string.Empty;

        public string TransactionReference { get; set; } = string.Empty;

        public DateTime PaymentDate { get; set; }

        public string Status { get; set; } = string.Empty;
    }
}
