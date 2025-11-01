import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
  computed,
  signal
} from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SeoService } from '../../core/services/seo.service';
import { AnimationService } from '../../core/services/animation.service';

interface ServiceCard {
  title: string;
  icon: string;
  description: string;
  highlights: string[];
  tagline: string;
  featured?: boolean;
}

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  location: string;
  rating: number;
  type: 'client' | 'student';
}

interface InsightItem {
  title: string;
  category: string;
  summary: string;
  readTime: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {
  private readonly seo = inject(SeoService);
  private readonly animation = inject(AnimationService);

  @ViewChildren('counter', { read: ElementRef })
  private counters?: QueryList<ElementRef<HTMLElement>>;

  protected readonly heroHighlights = [
    'Tailored enterprise technology for global impact',
    'Dedicated project teams aligned with your timezone',
    'Live instructor-led courses with industry experts'
  ];

  protected readonly trustStats: StatItem[] = [
    { label: 'Projects Delivered', value: 500, suffix: '+' },
    { label: 'Countries Served', value: 50, suffix: '+' },
    { label: 'Students Trained', value: 10, suffix: 'K+' },
    { label: 'Years Combined Experience', value: 15, suffix: '+' }
  ];

  protected readonly services: ServiceCard[] = [
    {
      title: 'Digital Marketing',
      icon: '🎯',
      description: 'Grow your global visibility with performance-driven campaigns and storytelling that resonates.',
      highlights: [
        'SEO & multi-language content strategy',
        'Full-funnel paid media management',
        'Brand development & identity systems',
        'Data-driven analytics and conversion optimization'
      ],
      tagline: 'Grow Your Digital Presence Globally'
    },
    {
      title: 'Software Development',
      icon: '💻',
      description: 'Build resilient platforms across web, mobile, and cloud with modern engineering practices.',
      highlights: [
        'Custom enterprise applications',
        'Mobile experiences for iOS and Android',
        'API integrations & automation',
        'Cloud architecture, DevOps & observability'
      ],
      tagline: 'Building Scalable Solutions'
    },
    {
      title: 'Website Building',
      icon: '🌐',
      description: 'Design pixel-perfect digital homes that translate your brand into immersive customer journeys.',
      highlights: [
        'Responsive corporate and e-commerce sites',
        'Conversion-optimized landing pages',
        'WordPress & headless CMS implementations',
        'Continuous support and performance tuning'
      ],
      tagline: 'Your Digital Home, Perfected'
    },
    {
      title: 'Hum Academy',
      icon: '🎓',
      description: 'Future-ready tech education with live cohorts, real-world projects, and mentorship from industry leaders.',
      highlights: [
        'Live interactive bootcamps and micro-courses',
        'Industry-recognized certificates',
        'Career coaching & placement support',
        'Hands-on projects reviewed by senior engineers'
      ],
      tagline: 'Learn From the Best, Become the Best',
      featured: true
    }
  ];

  protected readonly differentiators = [
    {
      title: 'Global Standards, Local Expertise',
      description:
        'International delivery quality with a deep understanding of Bangladesh and emerging markets to localize impact.'
    },
    {
      title: 'Proven Track Record',
      description: '500+ successful projects across fintech, retail, telco, and startups spanning 50+ countries.'
    },
    {
      title: 'End-to-End Solutions',
      description: 'Strategy, execution, maintenance, and training handled by dedicated cross-functional teams.'
    },
    {
      title: 'Transparent Communication',
      description: 'Real-time reporting, dedicated PMs, and communication aligned to your timezone and toolstack.'
    },
    {
      title: 'Certified Professionals',
      description: 'Engineers and marketers certified by AWS, Google, Microsoft, Meta, and HubSpot.'
    },
    {
      title: 'Beyond Delivery',
      description: 'We empower your team with upskilling and internal enablement through Hum Academy programs.'
    }
  ];

  protected readonly process = [
    { step: 'Discover', detail: 'Deep dive workshops to understand objectives, users, and success metrics.' },
    { step: 'Design', detail: 'Collaborative prototyping, technical architecture, and experience design.' },
    { step: 'Develop', detail: 'Agile delivery with continuous integration, QA automation, and security reviews.' },
    { step: 'Deploy', detail: 'Cloud-native deployment, observability setup, and go-live orchestration.' },
    { step: 'Support', detail: '24/7 monitoring, optimization sprints, and on-demand training for your teams.' }
  ];

  protected readonly caseStudies = [
    {
      client: 'Aarong Global',
      industry: 'Retail & E-commerce',
      challenge: 'Low conversion rates and fragmented customer journeys.',
      solution: 'Full-stack replatforming, UX revamp, and omnichannel marketing automation.',
      result: '250% increase in online revenue within 6 months.'
    },
    {
      client: 'NovaCare Health',
      industry: 'Healthcare',
      challenge: 'Legacy systems limiting patient experience across regions.',
      solution: 'HIPAA-compliant patient portal with mobile apps and AI triage assistant.',
      result: 'Customer satisfaction jumped to 4.9/5 and support tickets reduced by 63%.'
    },
    {
      client: 'Velocity Fintech',
      industry: 'Financial Services',
      challenge: 'Needed a scalable API layer to expand into new markets quickly.',
      solution: 'Microservices architecture with automated compliance checks and observability.',
      result: 'Launch speed improved by 3x across 5 new countries.'
    }
  ];

  protected readonly academyCategories = [
    'Web Development',
    'Digital Marketing',
    'Software Engineering',
    'Mobile Development',
    'Data Science & AI',
    'UI/UX Design'
  ];

  protected readonly featuredCourses = [
    {
      title: 'Full-Stack Web Development with Angular & Node.js',
      instructor: 'Sadia Rahman (Ex-Google)',
      duration: '12 weeks · Live · Capstone Project',
      rating: '4.9/5 (320 reviews)',
      price: 'BDT 18,500 | $165'
    },
    {
      title: 'Performance Marketing Accelerator',
      instructor: 'Tahmid Hasan (Meta Certified)',
      duration: '8 weeks · Live Campaign Clinics',
      rating: '4.8/5 (210 reviews)',
      price: 'BDT 14,000 | $125'
    },
    {
      title: 'Cloud & DevOps Engineer Program',
      instructor: 'Farzana Chowdhury (AWS Community Builder)',
      duration: '10 weeks · Labs & Certifications',
      rating: '4.9/5 (185 reviews)',
      price: 'BDT 22,000 | $195'
    }
  ];

  protected readonly academyStats: StatItem[] = [
    { label: 'Students Enrolled', value: 10, suffix: 'K+' },
    { label: 'Course Completion Rate', value: 95, suffix: '%' },
    { label: 'Average Rating', value: 4.9, suffix: '/5', decimals: 1 },
    { label: 'Courses Available', value: 80, suffix: '+' }
  ];

  protected readonly testimonials: Testimonial[] = [
    {
      quote:
        'Hum Tech transformed our digital presence and unified our customer journey across markets. Their strategy and execution rival the best global agencies.',
      name: 'Arif Khan',
      title: 'Chief Digital Officer, Aarong Global',
      location: 'Dhaka & Dubai',
      rating: 5,
      type: 'client'
    },
    {
      quote:
        'The engineering team delivered a robust fintech platform ahead of schedule. Their communication cadence and technical depth were outstanding.',
      name: 'Sophia Patel',
      title: 'VP Product, Velocity Fintech',
      location: 'Singapore',
      rating: 5,
      type: 'client'
    },
    {
      quote:
        'Hum Academy’s DevOps bootcamp helped me transition from support engineer to cloud engineer in under six months with real mentorship.',
      name: 'Mahim Islam',
      title: 'Cloud Engineer, Sydney',
      location: 'Sydney, Australia',
      rating: 5,
      type: 'student'
    },
    {
      quote:
        'Practical, hands-on sessions with industry leaders. The marketing accelerator gave me the confidence and portfolio to land international clients.',
      name: 'Faria Noor',
      title: 'Performance Marketer',
      location: 'Toronto, Canada',
      rating: 5,
      type: 'student'
    }
  ];


  protected readonly testimonialView = signal<'client' | 'student'>('client');
  protected readonly filteredTestimonials = computed(() =>
    this.testimonials.filter((testimonial) => testimonial.type === this.testimonialView())
  );

  protected setTestimonialView(view: 'client' | 'student'): void {
    this.testimonialView.set(view);
  }

  protected readonly insightItems: InsightItem[] = [
    {
      title: 'Designing Omni-Channel Experiences for Emerging Markets',
      category: 'Case Study',
      summary: 'How Hum Tech reimagined retail experiences with localized content and automation.',
      readTime: '7 min read'
    },
    {
      title: 'Scaling Engineering Teams with Academy-led Upskilling',
      category: 'Academy',
      summary: 'Building engineering excellence through custom training journeys and mentorship.',
      readTime: '5 min read'
    },
    {
      title: 'The Playbook for High-Converting SaaS Websites',
      category: 'Insights',
      summary: 'UI/UX strategies and experimentation frameworks that deliver measurable growth.',
      readTime: '8 min read'
    }
  ];

  constructor() {
    this.seo.update({
      title: 'Hum Tech & Academy | Digital Marketing, Software Development & Tech Courses in Bangladesh',
      description:
        'Premium multinational technology company delivering digital marketing, software development, website building, and live tech education for Bangladesh and global markets.',
      keywords:
        'hum tech academy, digital marketing Bangladesh, software development Dhaka, web development, tech courses, lenis gsap',
      canonical: 'https://www.humtech.academy'
    });
  }

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      this.counters?.forEach((counter, index) => {
        const stat = this.statsPool[index];
        if (!stat) {
          return;
        }
        counter.nativeElement.setAttribute('data-suffix', stat.suffix ?? '');
        if (stat.decimals != null) {
          counter.nativeElement.setAttribute('data-decimals', String(stat.decimals));
        }
        this.animation.animateCounter(counter.nativeElement, stat.value);
      });
    });
  }

  protected readonly statsPool: StatItem[] = [...this.trustStats, ...this.academyStats];
}
