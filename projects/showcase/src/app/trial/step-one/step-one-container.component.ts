import { Component, Input, inject, TemplateRef } from '@angular/core';
import { StepHeadingComponent } from '../step';
import { TrialStepFacadeService } from '@trial-step/trial-step-facade.service';
import type { TrialStepId } from '@trial-step/trial-step.types';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'kit-step-one-container',
  templateUrl: './step-one-container.component.html',
  styleUrls: ['./step-one-container.component.scss'],
  standalone: true,
  imports: [StepHeadingComponent, ButtonModule, RippleModule]
})
export class StepOneContainerComponent {
  private trialStepFacade = inject(TrialStepFacadeService);

  @Input()
  set step(step: TrialStepId) {
    // Set the active step based on the route parameter
    this.trialStepFacade.setActiveStepByRoute(step);
  }

  /** Template reference for step actions */
  stepActions!: TemplateRef<unknown>;

  /**
   * Save assumptions action
   */
  saveAssumptions(): void {
    // TODO: Implement save logic
    console.log('Saving assumptions...');
  }

}
