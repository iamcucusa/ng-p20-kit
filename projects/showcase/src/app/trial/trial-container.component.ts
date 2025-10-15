import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeadingComponent } from '@core/page-heading.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { StepRoutingService } from '@trial-step/step-routing.service';
import { RouteService } from '@core/route.service';
import { StepsComponent } from '@trial-step/steps.component';
import { TrialStepFacadeService } from '@trial-step/trial-step-facade.service';
import { Observable } from 'rxjs';
import type { TrialStep } from '@trial-step/trial-step.d';

@Component({
  selector: 'kit-trial-container',
  templateUrl: './trial-container.component.html',
  styleUrls: ['./trial-container.component.scss'],
  standalone: true,
  imports: [CommonModule, PageHeadingComponent, ButtonModule, RippleModule, RouterModule, StepsComponent]
})
export class TrialContainerComponent {
  stepRoutes: Record<string, string> = {};
  trialId: string | null = null;
  

  private stepRoutingService = inject(StepRoutingService);
  private trialStepFacade = inject(TrialStepFacadeService);
  public routeService = inject(RouteService);

  // Observable properties for template binding
  steps$!: Observable<TrialStep[]>;
  activeStep$!: Observable<TrialStep | null>;

  constructor() {
    // Initialize observables from facade
    this.steps$ = this.trialStepFacade.steps$;
    this.activeStep$ = this.trialStepFacade.activeStep$;
  }

  @Input()
  set id(trialId: string) {
    this.trialId = trialId;
    if (trialId) {
      this.stepRoutes = this.stepRoutingService.getTrialStepRoutes(trialId);
    }
  }

  /**
   * Handle step selection from the steps component
   * @param step - The selected step
   */
  onStepSelected(step: TrialStep): void {
    this.trialStepFacade.goToStep(step);
  }
}
