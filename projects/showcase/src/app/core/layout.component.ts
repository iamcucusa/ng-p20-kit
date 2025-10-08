import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@core/header.component';
import { FooterComponent } from '@core/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="pg-layout">
      <header class="pg-layout-header">
        <pg-header
          [userRole]="'ADMIN'"
          [userEmail]="'john.doe@pegasus.com'"
          [givenName]="'John'"
          [userLastName]="'Doe'">
        </pg-header>
      </header>

      <main class="pg-layout-main">
        <div class="pg-layout-content" role="main">
          <router-outlet></router-outlet>
        </div>
      </main>

      <footer class="pg-layout-footer">
        <pg-footer></pg-footer>
      </footer>
    </div>
  `,
  styles: [`
    .pg-layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 100%;
    }

    .pg-layout-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background-color: var(--p-surface-section);
      border-bottom: 1px solid var(--p-surface-border);
    }

    .pg-layout-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: var(--p-surface-ground);
    }

    .pg-layout-content {
      flex: 1;
      padding: var(--spacing-7) var(--spacing-6) var(--spacing-7);
      width: 100%;
      max-width: 100%;
      min-height: calc(100vh - 12.5rem); // 200px converted to rem
    }

    .pg-layout-footer {
      background-color: var(--p-surface-section);
      border-top: 1px solid var(--p-surface-border);
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .pg-layout-content {
        padding: var(--spacing-6) var(--spacing-5) var(--spacing-6);
        min-height: calc(100vh - 11.25rem); // 180px converted to rem
      }
    }

    @media (max-width: 768px) {
      .pg-layout-content {
        padding: var(--spacing-5) var(--spacing-4) var(--spacing-5);
        min-height: calc(100vh - 10rem); // 160px converted to rem
      }
    }

    @media (max-width: 640px) {
      .pg-layout-content {
        padding: var(--spacing-4) var(--spacing-3) var(--spacing-4);
        min-height: calc(100vh - 8.75rem); // 140px converted to rem
      }
    }

    /* Print Styles */
    @media print {
      .pg-layout-header,
      .pg-layout-footer {
        display: none;
      }
      
      .pg-layout-main {
        background-color: transparent;
      }
      
      .pg-layout-content {
        padding: 0;
        min-height: auto;
      }
    }
  `]
})
export class LayoutComponent {
  constructor() {}
}
