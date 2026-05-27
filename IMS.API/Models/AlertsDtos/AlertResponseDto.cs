namespace IMS.API.Models.AlertsDtos
{
    public class AlertResponseDto
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; } = string.Empty;

        public int CurrentStock { get; set; }

        public int Threshold { get; set; }

        public bool AlertSent { get; set; }

        public DateTime Date { get; set; }

    }
}
