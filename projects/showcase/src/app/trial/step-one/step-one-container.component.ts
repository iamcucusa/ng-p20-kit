import { Component, Input, inject } from '@angular/core';
import { PageHeadingComponent } from '@core/page-heading.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TrialStepFacadeService } from '@trial-step/trial-step-facade.service';
import type { TrialStepId } from '@trial-step/trial-step.d';

@Component({
  selector: 'kit-step-one-container',
  templateUrl: './step-one-container.component.html',
  styleUrls: ['./step-one-container.component.scss'],
  standalone: true,
  imports: [PageHeadingComponent, ButtonModule, RippleModule]
})
export class StepOneContainerComponent {
  private trialStepFacade = inject(TrialStepFacadeService);

  @Input()
  set step(step: TrialStepId) {
    // Set the active step based on the route parameter
    this.trialStepFacade.setActiveStepByRoute(step);
  }
}
