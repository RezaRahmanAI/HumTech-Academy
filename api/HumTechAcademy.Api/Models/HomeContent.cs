using System.Collections.Generic;

namespace HumTechAcademy.Api.Models;

public class HomeContent
{
    public HeroContent Hero { get; set; } = new();
    public TrustContent Trust { get; set; } = new();
    public ServicesContent Services { get; set; } = new();
    public DifferentiatorsContent Differentiators { get; set; } = new();
    public MethodologyContent Methodology { get; set; } = new();
    public CaseStudiesContent CaseStudies { get; set; } = new();
    public AcademyContent Academy { get; set; } = new();
    public GlobalPresenceContent GlobalPresence { get; set; } = new();
    public TestimonialsContent Testimonials { get; set; } = new();
    public ImpactContent Impact { get; set; } = new();
    public InsightsContent Insights { get; set; } = new();
    public ClosingCtasContent ClosingCtas { get; set; } = new();
    public ContactContent Contact { get; set; } = new();
}

public class HeroContent
{
    public string Badge { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public CtaLink PrimaryCta { get; set; } = new();
    public CtaLink SecondaryCta { get; set; } = new();
    public HighlightCard HighlightCard { get; set; } = new();
    public List<string> HighlightList { get; set; } = new();
    public VideoAsset Video { get; set; } = new();
    public FeaturePanel FeaturePanel { get; set; } = new();
}

public class HighlightCard
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public class VideoAsset
{
    public string Src { get; set; } = string.Empty;
    public string Poster { get; set; } = string.Empty;
}

public class FeaturePanel
{
    public string Eyebrow { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<FeatureMetric> Metrics { get; set; } = new();
    public PartnerHighlight Partner { get; set; } = new();
}

public class FeatureMetric
{
    public string Label { get; set; } = string.Empty;
    public string Value { get; set; } = string.Empty;
    public string Theme { get; set; } = "accent";
}

public class PartnerHighlight
{
    public string Label { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public class TrustContent
{
    public string Tagline { get; set; } = string.Empty;
    public List<string> Companies { get; set; } = new();
    public List<StatItem> Stats { get; set; } = new();
}

public class ServicesContent
{
    public SectionHeaderContent Header { get; set; } = new();
    public List<ServiceCard> Items { get; set; } = new();
}

public class DifferentiatorsContent
{
    public SectionHeaderContent Header { get; set; } = new();
    public List<BasicContentItem> Items { get; set; } = new();
    public PartnershipPanel PartnershipPanel { get; set; } = new();
}

public class PartnershipPanel
{
    public string Eyebrow { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<PartnerHighlightItem> Highlights { get; set; } = new();
}

public class PartnerHighlightItem
{
    public string Label { get; set; } = string.Empty;
    public string Value { get; set; } = string.Empty;
}

public class MethodologyContent
{
    public SectionHeaderContent Header { get; set; } = new();
    public List<StepItem> Steps { get; set; } = new();
}

public class CaseStudiesContent
{
    public SectionHeaderContent Header { get; set; } = new();
    public List<CaseStudyItem> Items { get; set; } = new();
}

public class AcademyContent
{
    public SectionHeaderContent Header { get; set; } = new();
    public List<string> Categories { get; set; } = new();
    public List<StatItem> Stats { get; set; } = new();
    public List<CourseItem> FeaturedCourses { get; set; } = new();
    public List<string> Benefits { get; set; } = new();
}

public class GlobalPresenceContent
{
    public SectionHeaderContent Header { get; set; } = new();
    public Headquarters Headquarters { get; set; } = new();
    public string MarketsServed { get; set; } = string.Empty;
    public string Verticals { get; set; } = string.Empty;
    public MapContent Map { get; set; } = new();
}

public class TestimonialsContent
{
    public SectionHeaderContent Header { get; set; } = new();
    public List<Testimonial> Items { get; set; } = new();
}

public class ImpactContent
{
    public SectionHeaderContent Header { get; set; } = new();
    public List<StatItem> Stats { get; set; } = new();
}

public class InsightsContent
{
    public SectionHeaderContent Header { get; set; } = new();
    public List<InsightItem> Items { get; set; } = new();
}

public class ClosingCtasContent
{
    public ClosingCta Business { get; set; } = new();
    public ClosingCta Academy { get; set; } = new();
}

public class ClosingCta
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public CtaLink Cta { get; set; } = new();
}

public class ContactContent
{
    public SectionHeaderContent Header { get; set; } = new();
    public string Headquarters { get; set; } = string.Empty;
    public List<string> Phones { get; set; } = new();
    public List<ContactEmail> Emails { get; set; } = new();
    public List<string> BusinessHours { get; set; } = new();
    public List<SocialLink> Socials { get; set; } = new();
    public CtaLink Consultation { get; set; } = new();
    public DownloadLink ProfileDownload { get; set; } = new();
}

public class CtaLink
{
    public string Label { get; set; } = string.Empty;
    public string? RouterLink { get; set; }
    public string? Fragment { get; set; }
    public string? ExternalUrl { get; set; }
    public string? Style { get; set; }
}

public class SectionHeaderContent
{
    public string? Eyebrow { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Subtitle { get; set; }
    public string? Align { get; set; }
}

public class ServiceCard
{
    public string Title { get; set; } = string.Empty;
    public string Icon { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<string> Highlights { get; set; } = new();
    public string Tagline { get; set; } = string.Empty;
    public bool Featured { get; set; }
}

public class BasicContentItem
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public class StepItem
{
    public string Step { get; set; } = string.Empty;
    public string Detail { get; set; } = string.Empty;
}

public class CaseStudyItem
{
    public string Client { get; set; } = string.Empty;
    public string Industry { get; set; } = string.Empty;
    public string Challenge { get; set; } = string.Empty;
    public string Solution { get; set; } = string.Empty;
    public string Result { get; set; } = string.Empty;
}

public class CourseItem
{
    public string Title { get; set; } = string.Empty;
    public string Instructor { get; set; } = string.Empty;
    public string Duration { get; set; } = string.Empty;
    public string Rating { get; set; } = string.Empty;
    public string Price { get; set; } = string.Empty;
}

public class Headquarters
{
    public string Title { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
}

public class MapContent
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Badge { get; set; } = string.Empty;
}

public class Testimonial
{
    public string Quote { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public int Rating { get; set; } = 5;
    public string Type { get; set; } = "client";
}

public class StatItem
{
    public string Label { get; set; } = string.Empty;
    public double Value { get; set; }
    public string? Suffix { get; set; }
    public int? Decimals { get; set; }
}

public class InsightItem
{
    public string Title { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Summary { get; set; } = string.Empty;
    public string ReadTime { get; set; } = string.Empty;
}

public class ContactEmail
{
    public string Label { get; set; } = string.Empty;
    public string Value { get; set; } = string.Empty;
}

public class SocialLink
{
    public string Label { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
}

public class DownloadLink
{
    public string Label { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
}
