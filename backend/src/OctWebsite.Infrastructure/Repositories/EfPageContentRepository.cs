using Microsoft.EntityFrameworkCore;
using OctWebsite.Application.Abstractions;
using OctWebsite.Domain.Entities;
using OctWebsite.Infrastructure.Data;

namespace OctWebsite.Infrastructure.Repositories;

internal sealed class EfPageContentRepository(ApplicationDbContext dbContext) : IPageContentRepository
{
    public async Task<PageContent?> GetByPageKeyAsync(string pageKey, CancellationToken cancellationToken = default)
        => await dbContext.PageContents.AsNoTracking()
            .FirstOrDefaultAsync(content => content.PageKey == pageKey, cancellationToken);

    public async Task<PageContent> UpsertAsync(PageContent content, CancellationToken cancellationToken = default)
    {
        var existing = await dbContext.PageContents
            .FirstOrDefaultAsync(entry => entry.PageKey == content.PageKey, cancellationToken);

        if (existing is null)
        {
            await dbContext.PageContents.AddAsync(content, cancellationToken);
        }
        else
        {
            dbContext.Entry(existing).CurrentValues.SetValues(content);
        }

        await dbContext.SaveChangesAsync(cancellationToken);
        return content;
    }
}
