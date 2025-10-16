import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

/**
 * Step Heading Component
 * Reusable component for step page headings with optional actions
 * Uses h2 semantic heading and matches PageHeadingComponent design
 */
@Component({
  selector: 'kit-step-heading',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule],
  template: `
    <header role="banner" class="pg-step-heading">
      <div class="pg-step-heading__container">
        <div class="pg-step-heading__content">
          <div class="pg-step-heading__text">
            <h2 id="step-title" class="pg-step-heading__title">
              {{ title }}
            </h2>
            @if (description) {
              <p id="step-description" class="pg-step-heading__description">
                {{ description }}
              </p>
            }
          </div>
          
          @if (stepActions) {
            <nav aria-label="Step Actions" class="pg-step-heading__actions">
              <ng-container [ngTemplateOutlet]="stepActions"></ng-container>
            </nav>
          }
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./step-heading.component.scss']
})
export class StepHeadingComponent {
  /** Step title (required) */
  @Input({ required: true }) title!: string;
  
  /** Optional step description */
  @Input() description?: string;
  
  /** Optional template for step actions */
  @Input() stepActions?: TemplateRef<unknown> | null;
}
