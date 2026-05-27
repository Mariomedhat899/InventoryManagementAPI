namespace IMS.API.Models.PaymentsDtos
{
    public class UpdatePaymentDto
    {
        public string Status { get; set; } = string.Empty;
        public string PaymentMethod { get; set; } = string.Empty;
    }
}
