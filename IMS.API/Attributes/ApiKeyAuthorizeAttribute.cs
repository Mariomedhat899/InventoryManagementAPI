using IMS.Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;

namespace IMS.API.Attributes;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class ApiKeyAuthorizeAttribute : Attribute, IAsyncActionFilter
{
    private const string HeaderName = "X-API-Key";

    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        var dbContext = context.HttpContext.RequestServices.GetService<ApplicationDbContext>();
        if (dbContext == null)
        {
            context.Result = new StatusCodeResult(StatusCodes.Status500InternalServerError);
            return;
        }

        if (!context.HttpContext.Request.Headers.TryGetValue(HeaderName, out var keyValue) ||
            string.IsNullOrWhiteSpace(keyValue))
        {
            context.Result = new UnauthorizedResult();
            return;
        }

        var apiKey = await dbContext.ApiKeys
            .FirstOrDefaultAsync(k => k.Key == keyValue.ToString() && k.IsActive);

        if (apiKey is null || apiKey.ExpiresAt <= DateTime.UtcNow)
        {
            context.Result = new UnauthorizedResult();
            return;
        }

        await next();
    }
}
