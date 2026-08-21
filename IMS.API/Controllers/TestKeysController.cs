using IMS.Core.Entities;
using IMS.Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;

namespace IMS.API.Controllers;

[ApiController]
[Route("api/testkeys")]
[Authorize]
public class TestKeysController : ControllerBase
{
    private readonly ApplicationDbContext _db;
    private readonly IConfiguration _config;
    private const string DevTestModeKey = "DevTestMode";

    public TestKeysController(ApplicationDbContext db, IConfiguration config)
    {
        _db = db;
        _config = config;
    }

    private bool IsDevTestModeEnabled()
    {
        var value = _config[DevTestModeKey];
        return string.Equals(value, "true", StringComparison.OrdinalIgnoreCase);
    }

    private bool IsSuperAdmin(ClaimsPrincipal user)
    {
        var email = user.FindFirstValue(ClaimTypes.Email) ?? user.FindFirstValue("email");
        return string.Equals(email, "MarioMedhat899@gmail.com", StringComparison.OrdinalIgnoreCase);
    }

    [HttpGet("ping")]
    public IActionResult Ping()
    {
        if (!IsSuperAdmin(User))
        {
            return StatusCode(403, new { message = "Only the super-admin can access test key management." });
        }

        if (!IsDevTestModeEnabled())
        {
            return StatusCode(403, new { message = "Dev test mode is disabled." });
        }
        return Ok(new { mode = "dev-test", enabled = true });
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        if (!IsSuperAdmin(User))
        {
            return StatusCode(403, new { message = "Only the super-admin can access test key management." });
        }

        if (!IsDevTestModeEnabled())
        {
            return StatusCode(403, new { message = "Dev test mode is disabled." });
        }

        var keys = await _db.ApiKeys
            .OrderByDescending(k => k.CreatedAt)
            .Select(k => new
            {
                k.Id,
                k.Key,
                k.Owner,
                k.ExpiresAt,
                k.IsActive,
                k.CreatedAt,
                Status = k.IsActive && k.ExpiresAt > DateTime.UtcNow ? "active" : "inactive"
            })
            .ToListAsync();

        return Ok(keys);
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create([FromBody] CreateTestKeyRequest request)
    {
        if (!IsSuperAdmin(User))
        {
            return StatusCode(403, new { message = "Only the super-admin can access test key management." });
        }

        if (!IsDevTestModeEnabled())
        {
            return StatusCode(403, new { message = "Dev test mode is disabled." });
        }

        if (string.IsNullOrWhiteSpace(request.Key) || request.Key.Length < 8)
        {
            return BadRequest(new { message = "Key must be at least 8 characters." });
        }

        if (request.ExpiresAt.Kind != DateTimeKind.Utc)
        {
            request.ExpiresAt = request.ExpiresAt.ToUniversalTime();
        }

        var key = new ApiKey
        {
            Key = request.Key.Trim(),
            Owner = string.IsNullOrWhiteSpace(request.Owner) ? null : request.Owner.Trim(),
            ExpiresAt = request.ExpiresAt
        };

        _db.ApiKeys.Add(key);
        await _db.SaveChangesAsync();

        return Ok(new ApiKeyResponse
        {
            Id = key.Id,
            Key = key.Key,
            Owner = key.Owner,
            ExpiresAt = key.ExpiresAt,
            IsActive = key.IsActive
        });
    }

    [HttpPost("expire/{id}")]
    public async Task<IActionResult> Expire(int id)
    {
        if (!IsSuperAdmin(User))
        {
            return StatusCode(403, new { message = "Only the super-admin can access test key management." });
        }

        if (!IsDevTestModeEnabled())
        {
            return StatusCode(403, new { message = "Dev test mode is disabled." });
        }

        var key = await _db.ApiKeys.FirstOrDefaultAsync(k => k.Id == id);
        if (key is null)
        {
            return NotFound(new { message = "Key not found." });
        }

        key.ExpiresAt = DateTime.UtcNow.AddMinutes(-1);
        key.IsActive = false;
        await _db.SaveChangesAsync();

        return Ok(new { message = "Key expired.", key.Id, key.Key, key.ExpiresAt, key.IsActive });
    }

    [HttpPost("activate/{id}")]
    public async Task<IActionResult> Activate(int id, [FromBody] ActivateTestKeyRequest request)
    {
        if (!IsSuperAdmin(User))
        {
            return StatusCode(403, new { message = "Only the super-admin can access test key management." });
        }

        if (!IsDevTestModeEnabled())
        {
            return StatusCode(403, new { message = "Dev test mode is disabled." });
        }

        var key = await _db.ApiKeys.FirstOrDefaultAsync(k => k.Id == id);
        if (key is null)
        {
            return NotFound(new { message = "Key not found." });
        }

        if (request.ExpiresAt.Kind != DateTimeKind.Utc)
        {
            request.ExpiresAt = request.ExpiresAt.ToUniversalTime();
        }

        key.ExpiresAt = request.ExpiresAt;
        key.IsActive = true;
        await _db.SaveChangesAsync();

        return Ok(new { message = "Key activated.", key.Id, key.Key, key.ExpiresAt, key.IsActive });
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        if (!IsSuperAdmin(User))
        {
            return StatusCode(403, new { message = "Only the super-admin can access test key management." });
        }

        if (!IsDevTestModeEnabled())
        {
            return StatusCode(403, new { message = "Dev test mode is disabled." });
        }

        var key = await _db.ApiKeys.FirstOrDefaultAsync(k => k.Id == id);
        if (key is null)
        {
            return NotFound(new { message = "Key not found." });
        }

        _db.ApiKeys.Remove(key);
        await _db.SaveChangesAsync();

        return NoContent();
    }
}

public class CreateTestKeyRequest
{
    public string Key { get; set; } = string.Empty;
    public string? Owner { get; set; }
    public DateTime ExpiresAt { get; set; }
    public bool IsActive { get; set; } = true;
}

public class ActivateTestKeyRequest
{
    public DateTime ExpiresAt { get; set; }
}
