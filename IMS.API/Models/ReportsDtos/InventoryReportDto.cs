namespace IMS.API.Models.ReportsDtos
{
    public class InventoryReportDto
    {
        public decimal TotalStockValue { get; set; }

        public int TotalProducts { get; set; }

        public ReportSummaryDto Payments { get; set; } = new ReportSummaryDto();

        public ReportSummaryDto Receipts { get; set; } = new ReportSummaryDto();

        public List<TopProductDto> TopSellingProducts { get; set; } = new List<TopProductDto>();
    }
}
