using IMS.Core.Contracts;
using Microsoft.Extensions.Options;
using System.Net;
using System.Net.Mail;

namespace IMS.Infrastructure.Services
{
    public class SmtpEmailService : IEmailService
    {
        private readonly SmtpSettings _smtpSettings;

        public SmtpEmailService(IOptions<SmtpSettings> smtpSettings)
        {
            _smtpSettings = smtpSettings.Value;

        }

        public async Task SendEmailAsync(string email, string subject, string body)
        {
            var mailMessage = new MailMessage()
            {
                From = new MailAddress(_smtpSettings.FromEmail, _smtpSettings.FromName),
                Subject = subject,
                Body = body,
                IsBodyHtml = false
            };
            mailMessage.To.Add(new MailAddress(email));
            var smtpClient = new SmtpClient(_smtpSettings.Host, _smtpSettings.Port)
            {
                Credentials = new NetworkCredential(_smtpSettings.Username,
                _smtpSettings.Password),
                EnableSsl = _smtpSettings.EnableSsl
            };

            await smtpClient.SendMailAsync(mailMessage);
        }
    }
}
