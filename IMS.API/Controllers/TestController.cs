using IMS.API.Attributes;
using Microsoft.AspNetCore.Mvc;

namespace IMS.API.Controllers;

[ApiController]
[Route("api/test")]
public class TestController : ControllerBase
{
    [HttpGet("protected")]
    [ApiKeyAuthorize]
    public IActionResult Protected()
    {
        return Ok(new { Message = "You accessed a protected endpoint with a valid API key." });
    }
}
