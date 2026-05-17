using IMS.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController(
        UserManager<ApplicationUser> userManager,
        SignInManager<ApplicationUser> signInManager,
        IConfiguration configuration
        ) : ControllerBase
    {
        //[HttpPost("Login")]

        //public async Task<IActionResult> Login([FromBody] LogInDto)



    }
}
