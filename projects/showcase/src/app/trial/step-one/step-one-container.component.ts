import { Component, ChangeDetectionStrategy, input, effect } from '@angular/core';
import type { TrialStepId } from '@trial-step/trial-step';
import type { Trial } from '@trial/trial';
import { AssumptionsContainerComponent } from './assumptions/assumptions-container.component';

@Component({
  selector: 'kit-step-one-container',
  standalone: true,
  template: `
    @if (!activeTrial()) {
      <!-- Waiting for active trial → show nothing or a loader if desired -->
    } @else if (activeTrial()?.status === 'Replicating') {
      <!-- TODO: Add Replicating Trial component here -->
    } @else {
      <kit-assumptions-container
        [step]="step()"
        [activeTrial]="activeTrial()">
      </kit-assumptions-container>
    }
  `,
  imports: [AssumptionsContainerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepOneContainerComponent {
  step = input.required<TrialStepId>();
  activeTrial = input<Trial | null>(null);

  logInputs = effect(() => {
    // logs update whenever inputs change
    console.log('[StepOneContainer] step:', this.step());
    console.log('[StepOneContainer] activeTrial:', this.activeTrial());
  });
}
