import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Assumptions Section Heading Component
 * 
 * Provides a consistent heading layout for assumptions sections with title and actions.
 * Uses the same pattern as other heading components in the application.
 */
@Component({
  selector: 'kit-assumptions-section-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="pg-assumptions-section-heading" role="banner" aria-labelledby="assumptions-title">
      <div class="pg-assumptions-section-heading__container">
        <div class="pg-assumptions-section-heading__content">
          <div class="pg-assumptions-section-heading__text">
            <h3 id="assumptions-title" class="pg-assumptions-section-heading__title">
              {{ title }}
            </h3>
            @if (description) {
              <p id="assumptions-description" class="pg-assumptions-section-heading__description">
                {{ description }}
              </p>
            }
          </div>
          
          @if (actions) {
            <nav aria-label="Assumptions Actions" class="pg-assumptions-section-heading__actions">
              <ng-container [ngTemplateOutlet]="actions"></ng-container>
            </nav>
          }
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./assumptions-section-heading.component.scss']
})
export class AssumptionsSectionHeadingComponent {
  /** Assumptions section title (required) */
  @Input({ required: true }) title!: string;
  
  /** Optional assumptions section description */
  @Input() description?: string;
  
  /** Optional template for assumptions actions */
  @Input() actions?: TemplateRef<unknown> | null;
}
