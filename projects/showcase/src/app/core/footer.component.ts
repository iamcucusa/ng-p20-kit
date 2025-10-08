import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'pg-footer',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  template: `
    <footer class="pg-footer">
      <div class="pg-footer-container">
        <div class="pg-footer-content">
          <!-- Logo and Title Section -->
          <div class="pg-footer-brand">
            <div class="pg-footer-logo">
              <i class="pi pi-prime pg-footer-icon"></i>
              <span class="pg-footer-title">Pegasus Showcase</span>
            </div>
            <div class="pg-footer-copyright">
              &copy; {{ year }} Pegasus Migration Project. All rights reserved.
            </div>
          </div>

          <!-- Contact Section -->
          <div class="pg-footer-contact">
            <a
              pTooltip="Send us an email"
              tooltipPosition="top"
              href="mailto:support@pegasus-migration.com"
              target="_blank"
              class="pg-footer-link"
            >
              <i class="pi pi-envelope"></i>
              <span>Contact Support</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .pg-footer {
      background-color: var(--p-surface-section);
      border-top: 1px solid var(--p-surface-border);
      width: 100%;
    }

    .pg-footer-container {
      padding-left: var(--spacing-3);
      padding-right: var(--spacing-3);
      padding-top: var(--spacing-5);
      padding-bottom: var(--spacing-5);
    }

    .pg-footer-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      gap: var(--spacing-3);
    }

    .pg-footer-brand {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
    }

    .pg-footer-logo {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
    }

    .pg-footer-icon {
      font-size: var(--font-size-2xl);
      color: var(--p-primary-color);
    }

    .pg-footer-title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--p-text-color);
      line-height: var(--line-height-tight);
    }

    .pg-footer-copyright {
      font-size: var(--font-size-sm);
      color: var(--p-text-color-secondary);
      line-height: var(--line-height-normal);
    }

    .pg-footer-contact {
      display: flex;
      align-items: center;
    }

    .pg-footer-link {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      padding: var(--spacing-2) var(--spacing-3);
      background-color: var(--p-surface-card);
      border: 1px solid var(--p-surface-border);
      border-radius: 0.375rem; // 6px converted to rem
      color: var(--p-text-color);
      text-decoration: none;
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      line-height: var(--line-height-normal);
      transition: all 0.2s ease;
      cursor: pointer;
    }

    .pg-footer-link:hover {
      background-color: var(--p-surface-hover);
      border-color: var(--p-primary-color);
      color: var(--p-primary-color);
      transform: translateY(-0.0625rem); // -1px converted to rem
    }

    .pg-footer-link i {
      font-size: var(--font-size-lg);
    }

    /* Responsive Design */
    @media (min-width: 640px) {
      .pg-footer-content {
        flex-direction: row;
        align-items: center;
      }

      .pg-footer-brand {
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-4);
      }

      .pg-footer-logo {
        margin-bottom: 0;
      }

      .pg-footer-copyright {
        margin-top: 0;
      }
    }

    @media (min-width: 1024px) {
      .pg-footer-container {
        padding-left: var(--spacing-6);
        padding-right: var(--spacing-6);
      }
    }
  `]
})
export class FooterComponent implements OnInit {
  today = new Date();
  year: string | null = null;
  pipe = new DatePipe('en-US');

  constructor() {}

  ngOnInit() {
    this.year = this.pipe.transform(this.today, 'YYYY');
  }
}
