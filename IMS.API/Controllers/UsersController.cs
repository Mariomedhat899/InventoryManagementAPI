using IMS.Core.Entities;
using IMS.Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace IMS.API.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class UsersController : ControllerBase
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly ApplicationDbContext _db;
    private readonly IConfiguration _configuration;

    public UsersController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, ApplicationDbContext db, IConfiguration configuration)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _db = db;
        _configuration = configuration;
    }

    private string? CurrentUserId => User.FindFirstValue(ClaimTypes.NameIdentifier);
    private async Task<ApplicationUser?> CurrentUserAsync() => CurrentUserId is null ? null : await _userManager.FindByIdAsync(CurrentUserId);
    private async Task<(bool IsSuperAdmin, string AdminId, string? TenantId)> CurrentAdminScopeAsync()
    {
        var requester = await CurrentUserAsync();
        if (requester is null) return (false, string.Empty, null);
        var isSuperAdmin = string.Equals(requester.Email, "MarioMedhat899@gmail.com", StringComparison.OrdinalIgnoreCase);
        return (isSuperAdmin, requester.Id, requester.TenantId);
    }

    private bool CanAccessUser(ApplicationUser requester, string targetUserId, string? targetManagedByAdminId, string? targetTenantId)
    {
        if (requester is null || string.IsNullOrWhiteSpace(targetUserId)) return false;
        if (requester.Id == targetUserId) return true;
        var role = User.FindFirstValue(ClaimTypes.Role);
        if (!string.Equals(role, "Admin", StringComparison.OrdinalIgnoreCase)) return false;
        var isSuperAdmin = string.Equals(requester.Email, "MarioMedhat899@gmail.com", StringComparison.OrdinalIgnoreCase);
        if (isSuperAdmin) return true;
        // Regular admin: only users explicitly shared with this admin
        if (!string.IsNullOrWhiteSpace(targetManagedByAdminId) && targetManagedByAdminId == requester.Id) return true;
        if (!string.IsNullOrWhiteSpace(targetTenantId) && targetTenantId == requester.TenantId) return true;
        return false;
    }

    [HttpGet]
    public async Task<IActionResult> GetUsers([FromQuery] string? search)
    {
        var requester = await CurrentUserAsync();
        if (requester is null) return Unauthorized();

        var scope = await CurrentAdminScopeAsync();
        var isSuperAdmin = scope.IsSuperAdmin;

        var usersQuery = _db.Users.AsQueryable();

        if (!isSuperAdmin)
        {
            // Regular admin: only users shared with this admin's tenant
            usersQuery = usersQuery.Where(u =>
                u.ManagedByAdminId == requester.Id ||
                u.TenantId == requester.TenantId);
        }

        if (!string.IsNullOrWhiteSpace(search))
        {
            var s = search.Trim().ToLower();
            usersQuery = usersQuery.Where(u =>
                (u.UserName != null && u.UserName.ToLower().Contains(s)) ||
                (u.Email != null && u.Email.ToLower().Contains(s)) ||
                (u.PhoneNumber != null && u.PhoneNumber.ToLower().Contains(s)));
        }

        var users = await usersQuery
            .OrderByDescending(u => u.LockoutEnd)
            .ThenBy(u => u.UserName)
            .ToListAsync();

        var result = new List<UserResponse>();
        foreach (var u in users)
        {
            if (!CanAccessUser(requester, u.Id, u.ManagedByAdminId, u.TenantId)) continue;
            var roles = await _userManager.GetRolesAsync(new ApplicationUser { Id = u.Id });
            var apiKey = await _db.ApiKeys
                .Where(k => k.Owner == u.UserName)
                .OrderByDescending(k => k.CreatedAt)
                .Select(k => new UserApiKeyInfo
                {
                    Id = k.Id,
                    Key = k.Key,
                    ExpiresAt = k.ExpiresAt,
                    IsActive = k.IsActive,
                    CreatedAt = k.CreatedAt
                })
                .FirstOrDefaultAsync();

            var role = roles.FirstOrDefault() ?? "Staff";
            result.Add(new UserResponse
            {
                Id = u.Id,
                fullName = u.UserName ?? string.Empty,
                email = u.Email ?? string.Empty,
                phoneNumber = u.PhoneNumber ?? string.Empty,
                roles = new[] { role },
                managedByAdminId = u.ManagedByAdminId,
                tenantId = u.TenantId,
                emailConfirmed = u.EmailConfirmed,
                lockoutEnabled = u.LockoutEnabled,
                accessFailedCount = u.AccessFailedCount,
                apiKey = apiKey
            });
        }

        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetUser(string id)
    {
        var requester = await CurrentUserAsync();
        if (requester is null) return Unauthorized();

        var user = await _userManager.FindByIdAsync(id);
        if (user is null) return NotFound();
        if (!CanAccessUser(requester, id, user.ManagedByAdminId, user.TenantId)) return StatusCode(403, new { message = "You are not allowed to access this user." });

        var roles = await _userManager.GetRolesAsync(user);
        var role = roles.FirstOrDefault() ?? "Staff";

        return Ok(new UserResponse
        {
            Id = user.Id,
            fullName = user.UserName ?? string.Empty,
            email = user.Email ?? string.Empty,
            phoneNumber = user.PhoneNumber ?? string.Empty,
            roles = new[] { role },
            managedByAdminId = user.ManagedByAdminId,
            tenantId = user.TenantId,
            emailConfirmed = user.EmailConfirmed,
            lockoutEnabled = user.LockoutEnabled,
            accessFailedCount = user.AccessFailedCount
        });
    }

    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> CreateUser([FromBody] CreateUserRequest request)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var existing = await _userManager.FindByEmailAsync(request.Email);
        if (existing is not null) return Conflict(new { message = "A user with this email already exists." });

        var user = new ApplicationUser
        {
            UserName = string.IsNullOrWhiteSpace(request.FullName) ? request.Email : request.FullName.Trim(),
            Email = request.Email.Trim(),
            EmailConfirmed = true,
            ManagedByAdminId = request.ShareTenantWithUserId,
            TenantId = request.IsStandalone ? Guid.NewGuid().ToString() : null
        };

        var password = string.IsNullOrWhiteSpace(request.Password) ? Guid.NewGuid().ToString("N")[..10] : request.Password;
        var result = await _userManager.CreateAsync(user, password);
        if (!result.Succeeded) return BadRequest(result.Errors);

        var role = string.IsNullOrWhiteSpace(request.Role) ? "Staff" : request.Role.Trim();
        if (!await _roleManager.RoleExistsAsync(role))
        {
            await _roleManager.CreateAsync(new IdentityRole(role));
        }

        await _userManager.AddToRoleAsync(user, role);

        UserApiKeyInfo? apiKeyInfo = null;
        if (request.ExpiresAtUtc.HasValue)
        {
            var expiresAt = request.ExpiresAtUtc.Value.Kind == DateTimeKind.Utc
                ? request.ExpiresAtUtc.Value
                : request.ExpiresAtUtc.Value.ToUniversalTime();

            var key = new ApiKey
            {
                Key = Convert.ToBase64String(System.Security.Cryptography.RandomNumberGenerator.GetBytes(32)).Replace("/", "").Replace("+", "").Substring(0, 32),
                Owner = user.UserName ?? user.Email,
                ExpiresAt = expiresAt,
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            };

            _db.ApiKeys.Add(key);
            await _db.SaveChangesAsync();

            apiKeyInfo = new UserApiKeyInfo
            {
                Id = key.Id,
                Key = key.Key,
                ExpiresAt = key.ExpiresAt,
                IsActive = key.IsActive,
                CreatedAt = key.CreatedAt
            };
        }

        return Ok(new UserResponse
        {
            Id = user.Id,
            fullName = user.UserName ?? string.Empty,
            email = user.Email ?? string.Empty,
            phoneNumber = user.PhoneNumber ?? string.Empty,
            roles = new[] { role },
            managedByAdminId = user.ManagedByAdminId,
            tenantId = user.TenantId,
            emailConfirmed = user.EmailConfirmed,
            lockoutEnabled = user.LockoutEnabled,
            accessFailedCount = user.AccessFailedCount,
            apiKey = apiKeyInfo
        });
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> UpdateUser(string id, [FromBody] UpdateUserRequest request)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var requester = await CurrentUserAsync();
        if (requester is null) return Unauthorized();

        var user = await _userManager.FindByIdAsync(id);
        if (user is null) return NotFound();
        if (!CanAccessUser(requester, id, user.ManagedByAdminId, user.TenantId)) return StatusCode(403, new { message = "You are not allowed to update this user." });

        var isSuperAdmin = string.Equals(user.Email, "MarioMedhat899@gmail.com", StringComparison.OrdinalIgnoreCase);
        if (isSuperAdmin && requester.Id != user.Id)
        {
            return StatusCode(403, new { message = "The super-admin account cannot be modified by another user." });
        }

        user.UserName = string.IsNullOrWhiteSpace(request.FullName) ? user.UserName : request.FullName.Trim();
        user.Email = string.IsNullOrWhiteSpace(request.Email) ? user.Email : request.Email.Trim();
        user.PhoneNumber = request.PhoneNumber ?? user.PhoneNumber;
        user.ManagedByAdminId = request.ShareTenantWithUserId ?? user.ManagedByAdminId;
        user.TenantId = request.IsStandalone ? user.TenantId ?? Guid.NewGuid().ToString() : user.TenantId;

        var updateResult = await _userManager.UpdateAsync(user);
        if (!updateResult.Succeeded) return BadRequest(updateResult.Errors);

        if (!string.IsNullOrWhiteSpace(request.Role))
        {
            var currentRoles = await _userManager.GetRolesAsync(user);
            var removeResult = await _userManager.RemoveFromRolesAsync(user, currentRoles);
            if (!removeResult.Succeeded) return BadRequest(removeResult.Errors);

            var role = request.Role.Trim();
            if (!await _roleManager.RoleExistsAsync(role))
            {
                await _roleManager.CreateAsync(new IdentityRole(role));
            }

            var addResult = await _userManager.AddToRoleAsync(user, role);
            if (!addResult.Succeeded) return BadRequest(addResult.Errors);
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> DeleteUser(string id)
    {
        var requester = await CurrentUserAsync();
        if (requester is null) return Unauthorized();

        var user = await _userManager.FindByIdAsync(id);
        if (user is null) return NotFound();
        if (!CanAccessUser(requester, id, user.ManagedByAdminId, user.TenantId)) return StatusCode(403, new { message = "You are not allowed to delete this user." });

        var isSuperAdmin = string.Equals(user.Email, "MarioMedhat899@gmail.com", StringComparison.OrdinalIgnoreCase);
        if (isSuperAdmin)
        {
            return StatusCode(403, new { message = "The super-admin account cannot be deleted." });
        }

        if (requester.Id == id)
        {
            return StatusCode(400, new { message = "You cannot delete your own account from this endpoint." });
        }

        var hasTransactions = await _db.Transactions.AnyAsync(t => t.UserId == id);
        if (hasTransactions)
        {
            return BadRequest(new { message = "This user has transaction history and cannot be deleted." });
        }

        using var tx = await _db.Database.BeginTransactionAsync();
        try
        {
            _db.Users.Remove(user);
            await _db.SaveChangesAsync();
            await tx.CommitAsync();
            return NoContent();
        }
        catch
        {
            await tx.RollbackAsync();
            throw;
        }
    }

    [HttpPost("{id}/provision")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> ProvisionUser(string id, [FromBody] ProvisionRequest request)
    {
        var requester = await CurrentUserAsync();
        if (requester is null) return Unauthorized();

        if (string.IsNullOrEmpty(request.ProvisioningSecret) ||
            request.ProvisioningSecret != _configuration["Provisioning:Secret"])
        {
            return StatusCode(403, new { message = "Provisioning rejected: invalid access credentials." });
        }

        var user = await _userManager.FindByIdAsync(id);
        if (user is null) return NotFound();
        if (!CanAccessUser(requester, id, user.ManagedByAdminId, user.TenantId)) return StatusCode(403, new { message = "You are not allowed to provision this user." });

        var isSuperAdmin = string.Equals(user.Email, "MarioMedhat899@gmail.com", StringComparison.OrdinalIgnoreCase);
        if (isSuperAdmin && requester.Id != user.Id)
        {
            return StatusCode(403, new { message = "Only the super-admin can re-provision this account." });
        }

        var key = new ApiKey
        {
            Key = Convert.ToBase64String(System.Security.Cryptography.RandomNumberGenerator.GetBytes(32)).Replace("/", "").Replace("+", "").Substring(0, 32),
            Owner = user.UserName ?? user.Email,
            ExpiresAt = request.ExpiresAtUtc,
            IsActive = true,
            CreatedAt = DateTime.UtcNow
        };

        _db.ApiKeys.Add(key);
        await _db.SaveChangesAsync();

        return Ok(new ProvisionResponse
        {
            ApiKeyId = key.Id,
            Key = key.Key,
            Owner = key.Owner,
            ExpiresAt = key.ExpiresAt,
            IsActive = key.IsActive,
            CreatedAt = key.CreatedAt
        });
    }
}

public class UserDto
{
    public string Id { get; set; } = string.Empty;
    public string UserName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string? ManagedByAdminId { get; set; }
    public string? TenantId { get; set; }
    public bool EmailConfirmed { get; set; }
    public bool LockoutEnabled { get; set; }
    public int AccessFailedCount { get; set; }
}

public class UserResponse
{
    public string Id { get; set; } = string.Empty;
    public string fullName { get; set; } = string.Empty;
    public string email { get; set; } = string.Empty;
    public string phoneNumber { get; set; } = string.Empty;
    public string[] roles { get; set; } = Array.Empty<string>();
    public string? managedByAdminId { get; set; }
    public string? tenantId { get; set; }
    public bool emailConfirmed { get; set; }
    public bool lockoutEnabled { get; set; }
    public int accessFailedCount { get; set; }
    public UserApiKeyInfo? apiKey { get; set; }
}

public class CreateUserRequest
{
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string Role { get; set; } = "Staff";
    public string? ShareTenantWithUserId { get; set; }
    public bool IsStandalone { get; set; }
    public DateTime? ExpiresAtUtc { get; set; }
}

public class UpdateUserRequest
{
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string? ShareTenantWithUserId { get; set; }
    public bool IsStandalone { get; set; }
}

public class ProvisionRequest
{
    public DateTime ExpiresAtUtc { get; set; }
    public string ProvisioningSecret { get; set; } = string.Empty;
}

public class ProvisionResponse
{
    public int ApiKeyId { get; set; }
    public string Key { get; set; } = string.Empty;
    public string? Owner { get; set; }
    public DateTime ExpiresAt { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class UserApiKeyInfo
{
    public int Id { get; set; }
    public string Key { get; set; } = string.Empty;
    public string? Owner { get; set; }
    public DateTime ExpiresAt { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}
