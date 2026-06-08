namespace IMS.API.Models.ReportsDtos
{
    public class InventoryReportDto
    {
        public decimal TotalStockValue { get; set; }

        public int TotalProducts { get; set; }

        public ReportSummaryDto Sales { get; set; } = new ReportSummaryDto();

        public ReportSummaryDto Purchases { get; set; } = new ReportSummaryDto();

        public List<TopProductDto> TopSellingProducts { get; set; } = new List<TopProductDto>();
    }
}
