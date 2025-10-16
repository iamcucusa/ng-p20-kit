import { Component, Input, inject } from '@angular/core';
import { StepHeadingComponent } from '../step';
import { TrialStepFacadeService } from '@trial-step/trial-step-facade.service';
import type { TrialStepId } from '@trial-step/trial-step.types';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'kit-step-three-container',
  templateUrl: './step-three-container.component.html',
  styleUrls: ['./step-three-container.component.scss'],
  standalone: true,
  imports: [StepHeadingComponent, ButtonModule, RippleModule]
})
export class StepThreeContainerComponent {
  private trialStepFacade = inject(TrialStepFacadeService);

  @Input()
  set step(step: TrialStepId) {
    // Set the active step based on the route parameter
    this.trialStepFacade.setActiveStepByRoute(step);
  }


}
