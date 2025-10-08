import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@core/header.component';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, TooltipModule],
  template: `
    <header>
      <pg-header
        [userRole]="'ADMIN'"
        [userEmail]="'john.doe@pegasus.com'"
        [givenName]="'John'"
        [userLastName]="'Doe'">
      </pg-header>
    </header>

    <main>
      <div class="main-content" role="main">
        <router-outlet></router-outlet>
      </div>
    </main>

    <footer>
      <div class="bg-surface-section px-4 md:px-6 lg:px-6">
        <div class="py-5 flex flex-col sm:flex-row sm:items-center justify-between">
          <div>
            <div class="layout-footer-logo">
              <i class="pi pi-prime" style="font-size: 2rem; color: var(--p-primary-color);"></i>
              <span class="layout-footer-title">Pegasus Showcase</span>
            </div>
            <div class="leading-3">&copy; {{ year }} Pegasus Migration Project. All rights reserved.</div>
          </div>
          <div class="mt-3 sm:mt-0">
            <a
              pTooltip="Send us an email"
              tooltipPosition="top"
              placeholder="Top"
              href="mailto:support@pegasus-migration.com"
              target="_blank"
              class="cursor-pointer text-gray-500 ml-3 transition-colors duration-150 hover:text-gray-700"
            >
              <i class="pi pi-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`

    .main-content {
      min-height: calc(100vh - 200px);
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    .layout-footer-logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .layout-footer-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--p-text-color);
    }

    @media (max-width: 768px) {
      .pg-content {
        padding: 1rem;
      }
    }
  `]
})
export class LayoutComponent implements OnInit {
  today = new Date();
  year: string | null = null;
  pipe = new DatePipe('en-US');


  constructor() {}

  ngOnInit() {
    this.year = this.pipe.transform(this.today, 'YYYY');
  }
}
