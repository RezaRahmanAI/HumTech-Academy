using System.Text.Json.Nodes;

namespace OctWebsite.Application.Services;

public interface IPageContentService
{
    Task<JsonNode?> GetAsync(string pageKey, CancellationToken cancellationToken = default);
    Task<JsonNode> SaveAsync(string pageKey, JsonNode content, CancellationToken cancellationToken = default);
}
