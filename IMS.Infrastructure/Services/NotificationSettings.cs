namespace IMS.Infrastructure.Services
{
    public class NotificationSettings
    {
        public string AdminEmail { get; set; } = string.Empty;
        public int LowStockThreshold { get; set; } = 10;
    }
}
