namespace IMS.Core.Contracts
{
    public interface IEmailService
    {
        public Task SendEmailAsync(string email, string subject, string body);
    }
}
