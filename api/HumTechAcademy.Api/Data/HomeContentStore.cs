using HumTechAcademy.Api.Models;

namespace HumTechAcademy.Api.Data;

public class HomeContentStore
{
    private HomeContent _content = HomeContentSeed.CreateDefault();

    public HomeContent Get() => _content;

    public void Set(HomeContent content)
    {
        _content = content ?? HomeContentSeed.CreateDefault();
    }
}

internal static class HomeContentSeed
{
    public static HomeContent CreateDefault()
    {
        return new HomeContent
        {
            Hero = new HeroContent
            {
                Badge = "Premium Multinational Technology Partner",
                Title = "Where Technology Meets Excellence",
                Description = "Empowering businesses worldwide with cutting-edge software, marketing, and digital experiences—while transforming careers through expert-led technology education.",
                PrimaryCta = new CtaLink { Label = "Start Your Project", RouterLink = "/contact" },
                SecondaryCta = new CtaLink { Label = "Explore Academy", RouterLink = "/academy" },
                HighlightCard = new HighlightCard
                {
                    Title = "From Bangladesh to the World 🇧🇩",
                    Description = "Trusted by founders, enterprises, and governments across Asia, Europe, North America, the Middle East, and Australia."
                },
                HighlightList =
                [
                    "Tailored enterprise technology for global impact",
                    "Dedicated project teams aligned with your timezone",
                    "Live instructor-led courses with industry experts"
                ],
                Video = new VideoAsset
                {
                    Src = "/video/hero.mp4",
                    Poster = "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80"
                },
                FeaturePanel = new FeaturePanel
                {
                    Eyebrow = "Global Delivery Model",
                    Title = "Fortune 500 quality with local insight",
                    Description = "Dedicated project squads, design strategists, cloud architects, and certified instructors aligned to your timezone with daily progress rituals.",
                    Metrics =
                    [
                        new FeatureMetric { Label = "Timezone aligned", Value = "Asia · EU · NA", Theme = "accent" },
                        new FeatureMetric { Label = "Delivery Velocity", Value = "2x faster GTM", Theme = "emerald" }
                    ],
                    Partner = new PartnerHighlight
                    {
                        Label = "Trusted technology & academy partner",
                        Description = "Align business outcomes with skill transformation—our Academy trains your teams to own and scale the solutions we deliver."
                    }
                }
            },
            Trust = new TrustContent
            {
                Tagline = "Trusted by teams at",
                Companies = ["Anthropic", "Stripe", "Vercel", "Linear"],
                Stats =
                [
                    new StatItem { Label = "Projects Delivered", Value = 500, Suffix = "+" },
                    new StatItem { Label = "Countries Served", Value = 50, Suffix = "+" },
                    new StatItem { Label = "Students Trained", Value = 10000, Suffix = "+" },
                    new StatItem { Label = "Years Combined Experience", Value = 15, Suffix = "+" }
                ]
            },
            Services = new ServicesContent
            {
                Header = new SectionHeaderContent
                {
                    Eyebrow = "Solutions",
                    Title = "Comprehensive Technology Solutions",
                    Subtitle = "Strategy, delivery, and enablement crafted for ambitious brands and fast-scaling ventures.",
                    Align = "center"
                },
                Items =
                [
                    new ServiceCard
                    {
                        Title = "Digital Marketing",
                        Icon = "🎯",
                        Description = "Grow your global visibility with performance-driven campaigns and storytelling that resonates.",
                        Highlights =
                        [
                            "SEO & multi-language content strategy",
                            "Full-funnel paid media management",
                            "Brand development & identity systems"
                        ],
                        Tagline = "Grow Your Digital Presence Globally"
                    },
                    new ServiceCard
                    {
                        Title = "Software Development",
                        Icon = "💻",
                        Description = "Build resilient platforms across web, mobile, and cloud with modern engineering practices.",
                        Highlights =
                        [
                            "Custom enterprise applications",
                            "API integrations & automation",
                            "Cloud architecture, DevOps & observability"
                        ],
                        Tagline = "Building Scalable Solutions"
                    }
                ]
            },
            Differentiators = new DifferentiatorsContent
            {
                Header = new SectionHeaderContent
                {
                    Eyebrow = "Why Hum Tech & Academy",
                    Title = "Why Leading Companies Choose Us",
                    Subtitle = "End-to-end partnership, measurable outcomes, and a commitment to the teams who rely on our solutions every day."
                },
                Items =
                [
                    new BasicContentItem
                    {
                        Title = "Global Standards, Local Expertise",
                        Description = "International delivery quality with a deep understanding of Bangladesh and emerging markets to localize impact."
                    },
                    new BasicContentItem
                    {
                        Title = "End-to-End Solutions",
                        Description = "Strategy, execution, maintenance, and training handled by dedicated cross-functional teams."
                    }
                ],
                PartnershipPanel = new PartnershipPanel
                {
                    Eyebrow = "Partnership DNA",
                    Title = "Strategy, build, enablement and continuous optimization—one integrated team.",
                    Description = "We embed with your teams, align KPIs, and share knowledge through Hum Academy so you stay in control long after launch.",
                    Highlights =
                    [
                        new PartnerHighlightItem { Label = "Dedicated PMO", Value = "Weekly sprints & dashboards" },
                        new PartnerHighlightItem { Label = "Academy Enablement", Value = "Workshops & certifications" }
                    ]
                }
            },
            Methodology = new MethodologyContent
            {
                Header = new SectionHeaderContent
                {
                    Eyebrow = "Our Methodology",
                    Title = "How We Work",
                    Subtitle = "A proven framework that keeps delivery transparent, collaborative, and fast.",
                    Align = "center"
                },
                Steps =
                [
                    new StepItem { Step = "Discover", Detail = "Deep dive workshops to understand objectives, users, and success metrics." },
                    new StepItem { Step = "Develop", Detail = "Agile delivery with continuous integration, QA automation, and security reviews." },
                    new StepItem { Step = "Support", Detail = "24/7 monitoring, optimization sprints, and on-demand training for your teams." }
                ]
            },
            CaseStudies = new CaseStudiesContent
            {
                Header = new SectionHeaderContent
                {
                    Eyebrow = "Success Stories",
                    Title = "Success Stories That Inspire",
                    Subtitle = "Experience the measurable outcomes we deliver for Bangladesh and international brands.",
                    Align = "center"
                },
                Items =
                [
                    new CaseStudyItem
                    {
                        Client = "Aarong Global",
                        Industry = "Retail & E-commerce",
                        Challenge = "Low conversion rates and fragmented customer journeys.",
                        Solution = "Full-stack replatforming, UX revamp, and omnichannel marketing automation.",
                        Result = "250% increase in online revenue within 6 months."
                    },
                    new CaseStudyItem
                    {
                        Client = "Velocity Fintech",
                        Industry = "Financial Services",
                        Challenge = "Needed a scalable API layer to expand into new markets quickly.",
                        Solution = "Microservices architecture with automated compliance checks and observability.",
                        Result = "Launch speed improved by 3x across 5 new countries."
                    }
                ]
            },
            Academy = new AcademyContent
            {
                Header = new SectionHeaderContent
                {
                    Eyebrow = "Hum Academy",
                    Title = "Hum Academy: Learn Technology, Build Careers",
                    Subtitle = "Live online courses taught by industry experts. From beginner to professional."
                },
                Categories = ["Web Development", "Digital Marketing", "Software Engineering"],
                Stats =
                [
                    new StatItem { Label = "Students Enrolled", Value = 10000, Suffix = "+" },
                    new StatItem { Label = "Average Rating", Value = 4.9, Suffix = "/5", Decimals = 1 }
                ],
                FeaturedCourses =
                [
                    new CourseItem
                    {
                        Title = "Full-Stack Web Development with Angular & Node.js",
                        Instructor = "Sadia Rahman (Ex-Google)",
                        Duration = "12 weeks · Live · Capstone Project",
                        Rating = "4.9/5 (320 reviews)",
                        Price = "BDT 18,500 | $165"
                    },
                    new CourseItem
                    {
                        Title = "Performance Marketing Accelerator",
                        Instructor = "Tahmid Hasan (Meta Certified)",
                        Duration = "8 weeks · Live Campaign Clinics",
                        Rating = "4.8/5 (210 reviews)",
                        Price = "BDT 14,000 | $125"
                    }
                ],
                Benefits = ["Live interactive sessions", "Industry expert instructors", "Job placement support"]
            },
            GlobalPresence = new GlobalPresenceContent
            {
                Header = new SectionHeaderContent
                {
                    Eyebrow = "Global Presence",
                    Title = "From Dhaka to the World",
                    Subtitle = "Proudly Bangladeshi, globally connected—delivering excellence across continents with the agility of local teams."
                },
                Headquarters = new Headquarters
                {
                    Title = "Headquarters",
                    Location = "📍 Dhaka, Bangladesh",
                    Address = "Innovation Avenue, Tejgaon, Dhaka 1207"
                },
                MarketsServed = "Asia · Europe · North America · Middle East · Australia",
                Verticals = "Fintech · Retail · Healthcare · SaaS · Public Sector · Education",
                Map = new MapContent
                {
                    Title = "Global Delivery Map",
                    Description = "Animated map placeholder — highlight major hubs in Dhaka, Singapore, Dubai, London, Toronto, Sydney.",
                    Badge = "Cloud-first. Remote-native. 24/7 support."
                }
            },
            Testimonials = new TestimonialsContent
            {
                Header = new SectionHeaderContent
                {
                    Eyebrow = "Testimonials",
                    Title = "What Our Clients & Students Say",
                    Subtitle = "Real outcomes, global voices. Explore how partnerships and learning experiences reshape careers and companies.",
                    Align = "center"
                },
                Items =
                [
                    new Testimonial
                    {
                        Quote = "Hum Tech transformed our digital presence and unified our customer journey across markets. Their strategy and execution rival the best global agencies.",
                        Name = "Arif Khan",
                        Title = "Chief Digital Officer, Aarong Global",
                        Location = "Dhaka & Dubai",
                        Rating = 5,
                        Type = "client"
                    },
                    new Testimonial
                    {
                        Quote = "Hum Academy’s DevOps bootcamp helped me transition from support engineer to cloud engineer in under six months with real mentorship.",
                        Name = "Mahim Islam",
                        Title = "Cloud Engineer, Sydney",
                        Location = "Sydney, Australia",
                        Rating = 5,
                        Type = "student"
                    }
                ]
            },
            Impact = new ImpactContent
            {
                Header = new SectionHeaderContent
                {
                    Eyebrow = "Numbers That Matter",
                    Title = "Impact in Every Engagement",
                    Subtitle = "Metrics that capture our commitment to excellence, support, and continuous learning.",
                    Align = "center"
                },
                Stats =
                [
                    new StatItem { Label = "Projects Delivered", Value = 500, Suffix = "+" },
                    new StatItem { Label = "Countries Served", Value = 50, Suffix = "+" },
                    new StatItem { Label = "Students Trained", Value = 10000, Suffix = "+" }
                ]
            },
            Insights = new InsightsContent
            {
                Header = new SectionHeaderContent
                {
                    Eyebrow = "Latest Insights",
                    Title = "Tech Insights & Learning Resources",
                    Subtitle = "Deep dives, playbooks, and tutorials from our engineering, marketing, and academy teams.",
                    Align = "center"
                },
                Items =
                [
                    new InsightItem
                    {
                        Title = "Designing Omni-Channel Experiences for Emerging Markets",
                        Category = "Case Study",
                        Summary = "How Hum Tech reimagined retail experiences with localized content and automation.",
                        ReadTime = "7 min read"
                    },
                    new InsightItem
                    {
                        Title = "Scaling Engineering Teams with Academy-led Upskilling",
                        Category = "Academy",
                        Summary = "Building engineering excellence through custom training journeys and mentorship.",
                        ReadTime = "5 min read"
                    }
                ]
            },
            ClosingCtas = new ClosingCtasContent
            {
                Business = new ClosingCta
                {
                    Title = "Ready to Transform Your Business?",
                    Description = "Collaborate with our strategists and engineers to design your next breakthrough.",
                    Cta = new CtaLink { Label = "Start Your Project", RouterLink = "/contact" }
                },
                Academy = new ClosingCta
                {
                    Title = "Ready to Advance Your Career?",
                    Description = "Enroll in Hum Academy programs to upgrade your skills with mentorship from industry practitioners.",
                    Cta = new CtaLink { Label = "Browse Courses", RouterLink = "/academy" }
                }
            },
            Contact = new ContactContent
            {
                Header = new SectionHeaderContent
                {
                    Eyebrow = "Contact",
                    Title = "Let's Build Something Amazing Together",
                    Subtitle = "Tell us about your goals and we will curate a dedicated team for you."
                },
                Headquarters = "Hum Tech & Academy, 123 Innovation Avenue, Tejgaon, Dhaka 1207",
                Phones = ["Bangladesh: +880 1234-567890", "International: +1 415-555-0198"],
                Emails =
                [
                    new ContactEmail { Label = "Business", Value = "hello@humtech.academy" },
                    new ContactEmail { Label = "Academy", Value = "courses@humtech.academy" }
                ],
                BusinessHours = ["Sun-Thu: 9:00 AM - 6:00 PM (GMT+6)", "Fri-Sat: Closed"],
                Socials =
                [
                    new SocialLink { Label = "LinkedIn", Url = "https://www.linkedin.com/company/humtechacademy" },
                    new SocialLink { Label = "Facebook", Url = "https://www.facebook.com/humtechacademy" },
                    new SocialLink { Label = "YouTube", Url = "https://www.youtube.com/@humtechacademy" }
                ],
                Consultation = new CtaLink { Label = "Schedule a Free Consultation", RouterLink = "/contact", Fragment = "consultation" },
                ProfileDownload = new DownloadLink { Label = "Download Company Profile (PDF)", Url = "https://www.humtech.academy/assets/company-profile.pdf" }
            }
        };
    }
}
