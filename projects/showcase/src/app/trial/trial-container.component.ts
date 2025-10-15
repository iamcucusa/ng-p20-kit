import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class TrialContainerComponent implements OnInit {
  trialId: string | null = null;
  stepRoutes: Record<string, string> = {};
  
  // Observable properties for template binding
  steps$!: Observable<TrialStep[]>;
  activeStep$!: Observable<TrialStep | null>;

  private route = inject(ActivatedRoute);
  private stepRoutingService = inject(StepRoutingService);
  private trialStepFacade = inject(TrialStepFacadeService);
  public routeService = inject(RouteService);

  ngOnInit(): void {
    this.trialId = this.route.snapshot.paramMap.get('id');
    if (this.trialId) {
      this.stepRoutes = this.stepRoutingService.getTrialStepRoutes(this.trialId);
    }
    
    // Initialize observables from facade
    this.steps$ = this.trialStepFacade.steps$;
    this.activeStep$ = this.trialStepFacade.activeStep$;
  }

  /**
   * Handle step selection from the steps component
   * @param step - The selected step
   */
  onStepSelected(step: TrialStep): void {
    this.trialStepFacade.goToStep(step, this.route);
  }
}