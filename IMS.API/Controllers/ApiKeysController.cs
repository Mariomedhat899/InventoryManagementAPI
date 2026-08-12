using IMS.API.Attributes;
using IMS.Core.Entities;
using IMS.Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IMS.API.Controllers;

[ApiController]
[Route("api/apikeys")]
public class ApiKeysController : ControllerBase
{
    private readonly ApplicationDbContext _db;
    private readonly ILogger<ApiKeysController> _logger;

    public ApiKeysController(ApplicationDbContext db, ILogger<ApiKeysController> logger)
    {
        _db = db;
        _logger = logger;
    }

    [HttpPost("create")]
    [ApiKeyAuthorize]
    public async Task<IActionResult> Create([FromBody] CreateApiKeyRequest request)
    {
        if (!Request.Headers.TryGetValue("X-API-Key", out var headerKey))
        {
            return Unauthorized();
        }

        var adminKey = await _db.ApiKeys
            .FirstOrDefaultAsync(k => k.Key == headerKey.ToString() && k.IsActive);

        if (adminKey is null || adminKey.ExpiresAt <= DateTime.UtcNow)
        {
            return Unauthorized();
        }

        if (request.ExpiresAt.Kind != DateTimeKind.Utc)
        {
            request.ExpiresAt = request.ExpiresAt.ToUniversalTime();
        }

        var newKey = new ApiKey
        {
            Key = new string(Path.GetRandomFileName().Replace(".", "").Take(32).ToArray()),
            Owner = string.IsNullOrWhiteSpace(request.Owner) ? null : request.Owner.Trim(),
            ExpiresAt = request.ExpiresAt
        };

        _db.ApiKeys.Add(newKey);
        await _db.SaveChangesAsync();

        return Ok(new ApiKeyResponse
        {
            Id = newKey.Id,
            Key = newKey.Key,
            Owner = newKey.Owner,
            ExpiresAt = newKey.ExpiresAt,
            IsActive = newKey.IsActive
        });
    }

    [HttpGet]
    [ApiKeyAuthorize]
    public async Task<IActionResult> GetAll()
    {
        var keys = await _db.ApiKeys
            .OrderByDescending(k => k.CreatedAt)
            .Select(k => new ApiKeyResponse
            {
                Id = k.Id,
                Key = k.Key.Length > 6 ? k.Key.Substring(0, 6) + "..." : k.Key,
                Owner = k.Owner,
                ExpiresAt = k.ExpiresAt,
                IsActive = k.IsActive
            })
            .ToListAsync();

        return Ok(keys);
    }
}

public class CreateApiKeyRequest
{
    public string? Owner { get; set; }
    public DateTime ExpiresAt { get; set; }
}

public class ApiKeyResponse
{
    public int Id { get; set; }
    public string Key { get; set; } = string.Empty;
    public string? Owner { get; set; }
    public DateTime ExpiresAt { get; set; }
    public bool IsActive { get; set; }
}
