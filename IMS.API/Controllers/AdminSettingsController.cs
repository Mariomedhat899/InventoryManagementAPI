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
public class AdminSettingsController : ControllerBase
{
    private readonly ApplicationDbContext _db;
    private readonly UserManager<ApplicationUser> _userManager;

    public AdminSettingsController(ApplicationDbContext db, UserManager<ApplicationUser> userManager)
    {
        _db = db;
        _userManager = userManager;
    }

    private string? CurrentUserId => User.FindFirstValue(ClaimTypes.NameIdentifier);
    private async Task<ApplicationUser?> CurrentUserAsync() => CurrentUserId is null ? null : await _userManager.FindByIdAsync(CurrentUserId);
    private bool IsSuperAdmin(ApplicationUser? user) => user is not null && string.Equals(user.Email, "MarioMedhat899@gmail.com", StringComparison.OrdinalIgnoreCase);

    [HttpGet("profile")]
    public async Task<IActionResult> GetProfile([FromQuery] string? userId)
    {
        var requester = await CurrentUserAsync();
        if (requester is null) return Unauthorized();

        // Allow self-access for any authenticated user; super-admin can access any profile
        if (!string.IsNullOrWhiteSpace(userId) && userId != requester.Id && !IsSuperAdmin(requester))
        {
            return StatusCode(403, new { message = "Only the super-admin can view other users' profiles." });
        }

        ApplicationUser target;
        if (!string.IsNullOrWhiteSpace(userId))
        {
            target = await _userManager.FindByIdAsync(userId);
            if (target is null) return NotFound();
        }
        else
        {
            target = requester;
        }

        var roles = await _userManager.GetRolesAsync(target);
        var role = roles.FirstOrDefault() ?? "Admin";

        return Ok(new AdminProfileResponse
        {
            Id = target.Id,
            fullName = target.UserName ?? string.Empty,
            email = target.Email ?? string.Empty,
            phoneNumber = target.PhoneNumber ?? string.Empty,
            role = role,
            managedByAdminId = target.ManagedByAdminId,
            tenantId = target.TenantId
        });
    }

    [HttpPut("profile")]
    public async Task<IActionResult> UpdateProfile([FromBody] UpdateAdminProfileRequest request)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var requester = await CurrentUserAsync();
        if (requester is null) return Unauthorized();

        ApplicationUser target;
        if (!string.IsNullOrWhiteSpace(request.TargetUserId))
        {
            if (!IsSuperAdmin(requester))
            {
                return StatusCode(403, new { message = "Only the super-admin can modify other users." });
            }

            target = await _userManager.FindByIdAsync(request.TargetUserId);
            if (target is null) return NotFound();
        }
        else
        {
            target = requester;
        }

        if (IsSuperAdmin(target) && requester.Id != target.Id)
        {
            return StatusCode(403, new { message = "The super-admin account cannot be modified by another user." });
        }

        if (requester.Id == target.Id && !string.IsNullOrWhiteSpace(request.NewPassword))
        {
            if (string.IsNullOrWhiteSpace(request.CurrentPassword))
            {
                return BadRequest(new { message = "Current password is required to change password." });
            }
            var passwordCheck = await _userManager.CheckPasswordAsync(target, request.CurrentPassword);
            if (!passwordCheck)
            {
                return BadRequest(new { message = "Current password is incorrect." });
            }
            var passwordResult = await _userManager.ChangePasswordAsync(target, request.CurrentPassword, request.NewPassword);
            if (!passwordResult.Succeeded)
            {
                return BadRequest(passwordResult.Errors);
            }
        }

        if (requester.Id == target.Id && !string.IsNullOrWhiteSpace(request.Email) && request.Email != target.Email)
        {
            var setEmailResult = await _userManager.SetEmailAsync(target, request.Email.Trim());
            if (!setEmailResult.Succeeded)
            {
                return BadRequest(setEmailResult.Errors);
            }
            if (target.UserName == target.Email)
            {
                target.UserName = request.Email.Trim();
            }
        }

        target.UserName = string.IsNullOrWhiteSpace(request.FullName) ? target.UserName : request.FullName.Trim();
        target.PhoneNumber = request.PhoneNumber ?? target.PhoneNumber;

        var updateResult = await _userManager.UpdateAsync(target);
        if (!updateResult.Succeeded) return BadRequest(updateResult.Errors);

        return NoContent();
    }
}

public class AdminProfileResponse
{
    public string Id { get; set; } = string.Empty;
    public string fullName { get; set; } = string.Empty;
    public string email { get; set; } = string.Empty;
    public string phoneNumber { get; set; } = string.Empty;
    public string role { get; set; } = string.Empty;
    public string? managedByAdminId { get; set; }
    public string? tenantId { get; set; }
}

public class UpdateAdminProfileRequest
{
    public string? TargetUserId { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string? CurrentPassword { get; set; }
    public string? NewPassword { get; set; }
}
