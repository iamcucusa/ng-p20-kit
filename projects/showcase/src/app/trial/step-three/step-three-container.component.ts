import { Component, Input, inject } from '@angular/core';
import { StepHeadingComponent } from '../step';
import { TrialStepFacadeService } from '@trial-step/trial-step-facade.service';
import type { TrialStepId } from '@trial-step/trial-step';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BenchmarkDashboardComponent } from '@benchmark-dashboard/benchmark-dashboard.component';

@Component({
  selector: 'kit-step-three-container',
  templateUrl: './step-three-container.component.html',
  standalone: true,
  imports: [StepHeadingComponent, ButtonModule, RippleModule, BenchmarkDashboardComponent]
})
export class StepThreeContainerComponent {
  private trialStepFacade = inject(TrialStepFacadeService);

  @Input()
  set step(step: TrialStepId) {
    // Set the active step based on the route parameter
    this.trialStepFacade.setActiveStepByRoute(step);
  }


}
