using Microsoft.AspNetCore.Identity;

namespace IMS.Core.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public string? ManagedByAdminId { get; set; }
        public string? TenantId { get; set; }
    }
}
