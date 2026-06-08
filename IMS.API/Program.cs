using IMS.API.Services;
using IMS.Core.Contracts;
using IMS.Core.Entities;
using IMS.Infrastructure.Data;
using IMS.Infrastructure.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;








var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<CsvService>();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
{
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireUppercase = true;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequiredLength = 8;
    options.User.RequireUniqueEmail = true;
}).AddEntityFrameworkStores<ApplicationDbContext>()
.AddDefaultTokenProviders();


var jwtOptions = builder.Configuration.GetSection("JwtOptions");

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtOptions["Issuer"],
        ValidAudience = jwtOptions["Audience"],
        IssuerSigningKey = new SymmetricSecurityKey
        (Encoding.UTF8.GetBytes(jwtOptions["SecretKey"] ?? throw new InvalidOperationException("JwtOptions.SecretKey is missing")))
    };
});

builder.Services.AddAuthorization();
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options
        .JsonSerializerOptions
        .ReferenceHandler = System
        .Text
        .Json
        .Serialization
        .ReferenceHandler
        .IgnoreCycles;

    }
    );
// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowALl", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});



builder.Services.Configure<SmtpSettings>(builder.Configuration.GetSection("SmtpSettings"));
builder.Services.AddScoped<IEmailService, SmtpEmailService>();
builder.Services.Configure<NotificationSettings>(builder.Configuration.GetSection("NotificationSettings"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();




using (var seedScope = app.Services.CreateScope())
{

    var dbContext = seedScope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    await RoleSeeder.SeedRolesAsync(dbContext, seedScope.ServiceProvider);

    await DataSeeder.SeedDataAsync(seedScope.ServiceProvider);
}


app.Run();
