namespace OctWebsite.Domain.Entities;

public sealed record PageContent(
    Guid Id,
    string PageKey,
    string Content
);
