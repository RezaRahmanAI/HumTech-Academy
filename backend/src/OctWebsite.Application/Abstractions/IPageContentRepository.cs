using OctWebsite.Domain.Entities;

namespace OctWebsite.Application.Abstractions;

public interface IPageContentRepository
{
    Task<PageContent?> GetByPageKeyAsync(string pageKey, CancellationToken cancellationToken = default);
    Task<PageContent> UpsertAsync(PageContent content, CancellationToken cancellationToken = default);
}
