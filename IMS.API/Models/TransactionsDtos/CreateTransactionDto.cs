namespace IMS.API.Models.TransactionsDtos
{
    public class CreateTransactionDto
    {
        public int ProductId { get; set; }

        public int Quantity { get; set; }

        public string Type { get; set; } = string.Empty;
    }
}
