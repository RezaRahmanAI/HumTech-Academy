import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Hum Tech & Academy | Digital Marketing, Software Development & Tech Courses'
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services | Hum Tech & Academy'
  },
  {
    path: 'academy',
    loadComponent: () => import('./features/academy/academy.component').then((m) => m.AcademyComponent),
    title: 'Hum Academy | Live Technology Courses'
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./features/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
    title: 'Portfolio | Hum Tech & Academy'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | Hum Tech & Academy'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact | Hum Tech & Academy'
  },
  {
    path: 'insights',
    loadComponent: () => import('./features/insights/insights.component').then((m) => m.InsightsComponent),
    title: 'Insights | Hum Tech & Academy'
  },
  {
    path: 'legal/:page',
    loadComponent: () => import('./features/legal/legal.component').then((m) => m.LegalComponent),
    title: 'Legal | Hum Tech & Academy'
  },
  {
    path: 'sitemap',
    loadComponent: () => import('./features/sitemap/sitemap.component').then((m) => m.SitemapComponent),
    title: 'Sitemap | Hum Tech & Academy'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
