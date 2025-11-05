using Microsoft.AspNetCore.Mvc;
using OctWebsite.Application.Services;
using System.Text.Json.Nodes;

namespace OctWebsite.WebApi.Controllers;

[ApiController]
[Route("api/content")]
public sealed class PageContentController(IPageContentService pageContentService) : ControllerBase
{
    [HttpGet("{page}")]
    public async Task<ActionResult<JsonNode>> GetAsync(string page, CancellationToken cancellationToken)
    {
        var content = await pageContentService.GetAsync(page, cancellationToken);
        return content is null ? NotFound() : Ok(content);
    }

    [HttpPut("{page}")]
    public async Task<ActionResult<JsonNode>> SaveAsync(string page, [FromBody] JsonNode content, CancellationToken cancellationToken)
    {
        var saved = await pageContentService.SaveAsync(page, content, cancellationToken);
        return Ok(saved);
    }
}
