import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import type { TrialStep, TrialStepId } from './trial-step';

/**
 * Steps Navigation Component
 * 
 * Displays a horizontal/vertical navigation bar for trial steps with visual state indicators.
 * Supports responsive design and integrates with the trial step NgRx feature.
 * 
 * @example
 * ```html
 * <kit-steps
 *   [steps]="steps$ | async"
 *   [activeStep]="activeStep$ | async"
 *   (stepSelected)="onStepSelected($event)">
 * </kit-steps>
 * ```
 */
@Component({
  selector: 'kit-steps',
  template: `
    <div class="pg-steps">
      <ng-container *ngFor="let step of steps; trackBy: trackByStepId">
        <div
          pRipple
          class="pg-steps__item"
          [ngClass]="{
            'pg-steps__item--active': step.active,
            'pg-steps__item--visited': step.visited,
            'pg-steps__item--disabled': step.disabled,
            'pg-steps__item--clickable': !step.disabled
          }"
          (click)="goToStep(step)"
        >
          <div class="pg-steps__content">
            <div class="pg-steps__title">{{ step.title }}</div>
            <div class="pg-steps__description" *ngIf="step.description">
              {{ step.description }}
            </div>
          </div>
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: ['./steps.component.scss'],
  standalone: true,
  imports: [CommonModule, RippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent {
  @Output() moveToStep: EventEmitter<TrialStep> = new EventEmitter<TrialStep>();

  steps: TrialStep[] = [];
  activeStepValue: TrialStep | undefined = undefined;

  constructor() {}

  @Input() set loadSteps(steps: TrialStep[]) {
    this.steps = [...steps];
  }

  @Input() set activeStep(activeStep: TrialStep | undefined) {
    this.activeStepValue = activeStep;
  }

  goToStep(step: TrialStep): void {
    if (!step.disabled) {
      this.moveToStep.emit(step);
    }
  }

  trackByStepId(index: number, step: TrialStep): TrialStepId {
    return step.stepId;
  }
}
