namespace IMS.API.Models.PaymentsDtos
{
    public class CreatePaymentDto
    {
        public decimal Amount { get; set; }

        public string PaymentMethod { get; set; } = string.Empty;

        public string TransactionReference { get; set; } = string.Empty;
    }
}
