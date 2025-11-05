import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly socialLinks = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/humtechacademy' },
    { label: 'Facebook', url: 'https://www.facebook.com/humtechacademy' },
    { label: 'Twitter', url: 'https://twitter.com/humtechacademy' },
    { label: 'Instagram', url: 'https://www.instagram.com/humtechacademy' },
    { label: 'YouTube', url: 'https://www.youtube.com/@humtechacademy' },
    { label: 'GitHub', url: 'https://github.com/humtechacademy' }
  ];
}
