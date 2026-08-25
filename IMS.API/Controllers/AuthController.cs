using IMS.API.Models.AuthDtos;
using IMS.Core.Entities;
using IMS.Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace IMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController(
        UserManager<ApplicationUser> userManager,
        RoleManager<IdentityRole> roleManager,
        IConfiguration configuration,
        ApplicationDbContext dbContext
        ) : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext = dbContext;

        [HttpPost("Login")]

        public async Task<IActionResult> Login([FromBody] LoginDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = await userManager.FindByEmailAsync(model.Email);

            if (user is null || !await userManager.CheckPasswordAsync(user, model.Password))
            {
                return Unauthorized(new { Message = "Invalid email or password" });
            }

            // Block login if the user's newest API key is expired
            var newestKey = await _dbContext.ApiKeys
                .Where(k => k.Owner == user.UserName)
                .OrderByDescending(k => k.CreatedAt)
                .FirstOrDefaultAsync();

            if (newestKey is not null && newestKey.ExpiresAt <= DateTime.UtcNow)
            {
                return Unauthorized(new { Message = "Your API key has expired. Contact an administrator." });
            }
            var token = await GenerateJwtToken(user);
            var roles = await userManager.GetRolesAsync(user);

            return Ok(new AuthResponseDto
            {
                Token = token,
                Email = user.Email ?? string.Empty,
                Roles = roles.ToList(),
                Expiration = DateTime.UtcNow.AddMinutes
                (int.Parse(configuration["JwtOptions:ExpirationInMinutes"] ?? "60"))
            });








        }


        private async Task<string> GenerateJwtToken(ApplicationUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Email, user.Email ?? string.Empty),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())


            };
            var roles = await userManager.GetRolesAsync(user);

            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            var jwtSettings = configuration.GetSection("JwtOptions");
            var secretKey = jwtSettings["SecretKey"] ?? throw new InvalidOperationException("JwtOptions:SecretKey is not configured.");
            var issuer = jwtSettings["Issuer"] ?? "IMS";
            var audience = jwtSettings["Audience"] ?? "IMS";
            var Key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
            var creds = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(int.Parse(jwtSettings["ExpiryMinutes"] ?? "60")),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }



    }
}
