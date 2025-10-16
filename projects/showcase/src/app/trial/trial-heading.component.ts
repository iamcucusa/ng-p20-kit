import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
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
    <header class="pg-trial-heading" role="banner" aria-labelledby="trial-title">
      <div class="pg-trial-heading__content">
        <div class="pg-trial-heading__text" role="region" aria-labelledby="trial-title">
          <div class="pg-trial-heading__title-row">
            <h1 class="pg-trial-heading__title" id="trial-title">
              <span class="sr-only">Trial Study Number: </span>{{ formattedStudyNumber }}
            </h1>
            @if (trial.version) {
              <div class="pg-trial-heading__divider" aria-hidden="true"></div>
              <span class="pg-trial-heading__version" aria-label="Version {{ trial.version }}">V{{ trial.version }}</span>
            }
            <div class="pg-trial-heading__divider" aria-hidden="true"></div>
            <div class="pg-trial-heading__status" role="status" aria-live="polite" aria-label="Trial Status">
              <kit-status-display 
                [status]="trial.status"
                [permissions]="permissions">
              </kit-status-display>
            </div>
          </div>
          @if (trial.description) {
            <p class="pg-trial-heading__description" id="trial-description" aria-describedby="trial-title">
              {{ trial.description }}
            </p>
          }
        </div>
        <nav class="pg-trial-heading__actions" aria-label="Trial Actions">
          <div class="pg-trial-heading__trial-actions">
            <p-button
              pRipple
              icon="pi pi-clone"
              variant="outlined"
              [pTooltip]="'Select Version'"
              tooltipPosition="bottom"
              (onClick)="onSelectVersion()"
              [loading]="false"
              [disabled]="false"
              aria-label="Select Version">
            </p-button>

            @if (trial.status !== 'Final') {
              <p-button
                pRipple
                icon="pi pi-check"
                variant="outlined"
                [pTooltip]="'Save as Final Version'"
                tooltipPosition="bottom"
                (onClick)="onSaveAsFinal()"
                [loading]="false"
                [disabled]="false"
                aria-label="Save as Final Version">
              </p-button>
            }

            @if (trial.status === 'Final') {
              <p-button
                pRipple
                icon="pi pi-plus"
                variant="outlined"
                [pTooltip]="'Create New Version'"
                tooltipPosition="bottom"
                (onClick)="onCreateNewVersion()"
                [loading]="false"
                [disabled]="false"
                aria-label="Create New Version">
              </p-button>
            }

            <p-button
              pRipple
              [icon]="trial.public ? 'pi pi-eye' : 'pi pi-eye-slash'"
              variant="outlined"
              [pTooltip]="trial.public ? 'Hide trial' : 'Make trial public'"
              tooltipPosition="bottom"
              (onClick)="onTogglePublic()"
              [loading]="false"
              [disabled]="false"
              [aria-label]="trial.public ? 'Hide trial' : 'Make trial public'">
            </p-button>
          </div>

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
    </header>
  `,
  styleUrls: ['./trial-heading.component.scss'],
  standalone: true,
  imports: [CommonModule, StatusDisplayComponent, ButtonModule, RippleModule, RouterModule, TooltipModule]
})
export class TrialHeadingComponent {
  @Input({ required: true }) trial!: Trial;
  @Input() permissions: string[] = [];

  @Output() selectVersion = new EventEmitter<void>();
  @Output() saveAsFinal = new EventEmitter<void>();
  @Output() createNewVersion = new EventEmitter<void>();
  @Output() togglePublic = new EventEmitter<void>();

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

  /**
   * Handles select version action
   */
  onSelectVersion(): void {
    this.selectVersion.emit();
  }

  /**
   * Handles save as final action
   */
  onSaveAsFinal(): void {
    this.saveAsFinal.emit();
  }

  /**
   * Handles create new version action
   */
  onCreateNewVersion(): void {
    this.createNewVersion.emit();
  }

  /**
   * Handles toggle public action
   */
  onTogglePublic(): void {
    this.togglePublic.emit();
  }
}
