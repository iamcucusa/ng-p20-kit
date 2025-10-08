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
          <div class="pg-layout-main-content">
            <router-outlet></router-outlet>
          </div>
          <footer class="pg-layout-footer">
            <pg-footer></pg-footer>
          </footer>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .pg-layout {
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100%;
      overflow: hidden;
    }

    .pg-layout-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background-color: var(--p-surface-section);
      border-bottom: 1px solid var(--p-surface-border);
      flex-shrink: 0;
    }

    .pg-layout-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: var(--p-surface-ground);
      overflow: hidden;
    }

    .pg-layout-content {
      flex: 1;
      padding: var(--spacing-7) var(--spacing-6) 0;
      width: 100%;
      max-width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
    }

    .pg-layout-main-content {
      flex: 1;
      padding-bottom: var(--spacing-7);
    }

    .pg-layout-footer {
      background-color: var(--p-surface-section);
      border-top: 1px solid var(--p-surface-border);
      margin-top: var(--spacing-8);
      margin-left: calc(-1 * var(--spacing-6));
      margin-right: calc(-1 * var(--spacing-6));
      padding: 0;
      flex-shrink: 0;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .pg-layout-content {
        padding: var(--spacing-6) var(--spacing-5) 0;
      }
      
      .pg-layout-main-content {
        padding-bottom: var(--spacing-6);
      }
      
      .pg-layout-footer {
        margin-left: calc(-1 * var(--spacing-5));
        margin-right: calc(-1 * var(--spacing-5));
      }
    }

    @media (max-width: 768px) {
      .pg-layout-content {
        padding: var(--spacing-5) var(--spacing-4) 0;
      }
      
      .pg-layout-main-content {
        padding-bottom: var(--spacing-5);
      }
      
      .pg-layout-footer {
        margin-left: calc(-1 * var(--spacing-4));
        margin-right: calc(-1 * var(--spacing-4));
      }
    }

    @media (max-width: 640px) {
      .pg-layout-content {
        padding: var(--spacing-4) var(--spacing-3) 0;
      }
      
      .pg-layout-main-content {
        padding-bottom: var(--spacing-4);
      }
      
      .pg-layout-footer {
        margin-left: calc(-1 * var(--spacing-3));
        margin-right: calc(-1 * var(--spacing-3));
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
