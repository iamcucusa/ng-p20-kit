import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrialStepFacadeService } from './trial-step-facade.service';
import type { TrialStepId } from './trial-step';

/**
 * Base component for all step containers
 * Handles step state updates when route data changes
 */
@Component({
  template: ''
})
export abstract class BaseStepContainerComponent implements OnInit {
  @Input() step!: TrialStepId;
  
  protected trialStepFacade = inject(TrialStepFacadeService);
  protected route = inject(ActivatedRoute);

  ngOnInit(): void {
    // Update step state when component initializes
    if (this.step) {
      this.trialStepFacade.setActiveStepByRoute(this.step);
    }
  }
}
