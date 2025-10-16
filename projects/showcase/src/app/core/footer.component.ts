import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'kit-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TooltipModule],
  styleUrls: ['./footer.component.scss'],
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
  `
})
export class FooterComponent implements OnInit {
  today = new Date();
  year: string | null = null;
  pipe = new DatePipe('en-US');

  constructor() {}

  ngOnInit() {
    this.year = this.pipe.transform(this.today, 'y');
  }
}
