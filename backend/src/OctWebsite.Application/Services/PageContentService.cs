using System.Text.Json;
using System.Text.Json.Nodes;
using OctWebsite.Application.Abstractions;
using OctWebsite.Domain.Entities;

namespace OctWebsite.Application.Services;

internal sealed class PageContentService(IPageContentRepository repository) : IPageContentService
{
    private static readonly JsonSerializerOptions SerializerOptions = new(JsonSerializerDefaults.Web)
    {
        WriteIndented = true
    };

    public async Task<JsonNode?> GetAsync(string pageKey, CancellationToken cancellationToken = default)
    {
        var normalized = NormalizeKey(pageKey);
        if (normalized.Length == 0)
        {
            throw new ArgumentException("Page key is required", nameof(pageKey));
        }

        var existing = await repository.GetByPageKeyAsync(normalized, cancellationToken);
        return existing is null ? null : JsonNode.Parse(existing.Content);
    }

    public async Task<JsonNode> SaveAsync(string pageKey, JsonNode content, CancellationToken cancellationToken = default)
    {
        ArgumentNullException.ThrowIfNull(content);
        var normalized = NormalizeKey(pageKey);
        if (normalized.Length == 0)
        {
            throw new ArgumentException("Page key is required", nameof(pageKey));
        }

        var json = content.ToJsonString(SerializerOptions);
        var existing = await repository.GetByPageKeyAsync(normalized, cancellationToken);
        var entity = existing is null
            ? new PageContent(Guid.NewGuid(), normalized, json)
            : existing with { Content = json };

        var saved = await repository.UpsertAsync(entity, cancellationToken);
        return JsonNode.Parse(saved.Content)!;
    }

    private static string NormalizeKey(string value) => value.Trim().ToLowerInvariant();
}
