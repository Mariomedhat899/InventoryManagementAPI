namespace IMS.API.Models.TransactionsDtos
{
    public class TransactionDto
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string? ProductName { get; set; }
        public int Quantity { get; set; }
        public string Type { get; set; } = string.Empty;

        public DateTime Date { get; set; }
        public decimal TotalAmount { get; set; }

        public string? UserId { get; set; }
    }
}
