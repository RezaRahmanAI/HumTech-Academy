using Microsoft.EntityFrameworkCore;
using OctWebsite.Domain.Entities;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.IO;

namespace OctWebsite.Infrastructure.Data;

public sealed class ApplicationDbInitializer(ApplicationDbContext context)
{
    public async Task InitializeAsync(CancellationToken cancellationToken = default)
    {
        await context.Database.MigrateAsync(cancellationToken);

        await SeedCollectionAsync(context.TeamMembers, SeedData.TeamMembers, cancellationToken);
        await SeedCollectionAsync(context.CompanyAboutEntries, SeedData.About, cancellationToken);
        await SeedCollectionAsync(context.ServiceItems, SeedData.Services, cancellationToken);
        await SeedCollectionAsync(context.ProductItems, SeedData.Products, cancellationToken);
        await SeedCollectionAsync(context.AcademyTracks, SeedData.AcademyTracks, cancellationToken);
        await SeedCollectionAsync(context.BlogPosts, SeedData.BlogPosts, cancellationToken);
        await SeedPageContentAsync(context, cancellationToken);

        if (!await context.SiteSettings.AnyAsync(cancellationToken))
        {
            await context.SiteSettings.AddAsync(SeedData.SiteSettings, cancellationToken);
        }

        await context.SaveChangesAsync(cancellationToken);
    }

    private static async Task SeedCollectionAsync<TEntity>(DbSet<TEntity> set, IEnumerable<TEntity> data, CancellationToken cancellationToken)
        where TEntity : class
    {
        if (await set.AnyAsync(cancellationToken))
        {
            return;
        }

        await set.AddRangeAsync(data, cancellationToken);
    }

    private static async Task SeedPageContentAsync(ApplicationDbContext context, CancellationToken cancellationToken)
    {
        if (await context.PageContents.AnyAsync(cancellationToken))
        {
            return;
        }

        var basePath = Path.Combine(AppContext.BaseDirectory, "Data", "PageContentDefaults");
        if (!Directory.Exists(basePath))
        {
            return;
        }

        var files = Directory.EnumerateFiles(basePath, "*.json");
        foreach (var file in files)
        {
            try
            {
                var json = await File.ReadAllTextAsync(file, cancellationToken);
                JsonNode.Parse(json); // validate json
                var key = Path.GetFileNameWithoutExtension(file);
                var content = new PageContent(Guid.NewGuid(), key, json);
                await context.PageContents.AddAsync(content, cancellationToken);
            }
            catch (Exception)
            {
                // Ignore invalid JSON files to avoid seeding errors.
            }
        }
    }
}
