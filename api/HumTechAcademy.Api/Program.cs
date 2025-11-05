using System.Text.Json;
using HumTechAcademy.Api.Data;
using HumTechAcademy.Api.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<HomeContentStore>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});
builder.Services.ConfigureHttpJsonOptions(options =>
{
    options.SerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
    options.SerializerOptions.WriteIndented = true;
});

var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/api/home-content", (HomeContentStore store) => Results.Ok(store.Get()))
    .WithName("GetHomeContent")
    .WithOpenApi();

app.MapPut("/api/home-content", (HomeContent content, HomeContentStore store) =>
    {
        store.Set(content);
        return Results.NoContent();
    })
    .WithName("UpdateHomeContent")
    .WithOpenApi();

app.Run();
