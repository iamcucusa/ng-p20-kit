import { Component, Input, inject, TemplateRef } from '@angular/core';
import { StepHeadingComponent } from '../step';
import { TrialStepFacadeService } from '@trial-step/trial-step-facade.service';
import type { TrialStepId } from '@trial-step/trial-step.types';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'kit-step-two-container',
  templateUrl: './step-two-container.component.html',
  styleUrls: ['./step-two-container.component.scss'],
  standalone: true,
  imports: [StepHeadingComponent, ButtonModule, RippleModule]
})
export class StepTwoContainerComponent {
  private trialStepFacade = inject(TrialStepFacadeService);

  @Input()
  set step(step: TrialStepId) {
    // Set the active step based on the route parameter
    this.trialStepFacade.setActiveStepByRoute(step);
  }

  /** Template reference for step actions */
  stepActions!: TemplateRef<unknown>;

  /**
   * Save trials action
   */
  saveTrials(): void {
    // TODO: Implement save trials logic
    console.log('Saving trials...');
  }

}
