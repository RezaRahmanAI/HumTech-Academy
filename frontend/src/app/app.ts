import { ChangeDetectionStrategy, Component, AfterViewInit, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router'; // Inject Router
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ActivatedRoute } from '@angular/router'; // Inject ActivatedRoute

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements AfterViewInit {
  showHeader: boolean = true;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.router.events.subscribe(() => {
      this.showHeader = this.router.url !== '/dashboard';
    });
  }
}
