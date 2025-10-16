import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { StatusDisplayComponent } from '@core/status/status-display.component';
import { RouteService } from '@core/route.service';
import type { Trial } from './trial.types';
import { formatStudyNumber } from './study-number.utils';

/**
 * Trial Heading Component
 * 
 * Displays trial information including study number and status.
 * Reuses the StatusDisplayComponent for consistent status presentation.
 * 
 * Features:
 * - Study number display with proper formatting
 * - Status display using reusable StatusDisplayComponent
 * - Type-safe trial data handling
 * - Consistent styling with design system
 * 
 * @example
 * ```html
 * <kit-trial-heading 
 *   [trial]="activeTrial"
 *   [permissions]="userPermissions">
 * </kit-trial-heading>
 * ```
 */
@Component({
  selector: 'kit-trial-heading',
  template: `
    <header class="pg-trial-heading" role="banner">
      <div class="pg-trial-heading__container">
        <div class="pg-trial-heading__content">
          <div class="pg-trial-heading__text">
            <div class="pg-trial-heading__title-row">
              <h1 class="pg-trial-heading__title" id="trial-title">
                <span class="sr-only">Trial Study Number: </span>{{ formattedStudyNumber }}
              </h1>
              <div class="pg-trial-heading__status" role="status" aria-label="Trial Status">
                <kit-status-display 
                  [status]="trial.status"
                  [permissions]="permissions">
                </kit-status-display>
              </div>
            </div>
            @if (trial.description) {
              <p class="pg-trial-heading__description" id="trial-description">
                {{ trial.description }}
              </p>
            }
          </div>
          <nav class="pg-trial-heading__actions" aria-label="Trial Actions">
            <p-button 
              label="Back to Trials" 
              icon="pi pi-arrow-left" 
              severity="secondary"
              pRipple
              [routerLink]="backToTrialsPath"
              aria-label="Navigate back to trials dashboard">
            </p-button>
          </nav>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./trial-heading.component.scss'],
  standalone: true,
  imports: [CommonModule, StatusDisplayComponent, ButtonModule, RippleModule, RouterModule]
})
export class TrialHeadingComponent {
  @Input({ required: true }) trial!: Trial;
  @Input() permissions: string[] = [];

  private routeService = inject(RouteService);

  /**
   * Gets the formatted study number
   */
  get formattedStudyNumber(): string {
    return formatStudyNumber(this.trial.studyNumber || '');
  }

  /**
   * Gets the path to return to trials dashboard
   */
  get backToTrialsPath(): string[] {
    return [this.routeService.getDashboardPath()];
  }
}
