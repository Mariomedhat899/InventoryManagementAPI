namespace IMS.API.Models.PaymentsDtos
{
    public class UpdatePaymentDto
    {
        public decimal Amount { get; set; }
        public string Status { get; set; } = string.Empty;
        public string PaymentMethod { get; set; } = string.Empty;
        public string TransactionReference { get; set; } = string.Empty;
    }
}
