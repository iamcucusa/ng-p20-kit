import { Component, Input, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { StepRoutingService } from '@trial-step/step-routing.service';
import { RouteService } from '@core/route.service';
import { StepsComponent } from '@trial-step/steps.component';
import { TrialStepFacadeService } from '@trial-step/trial-step-facade.service';
import { TrialHeadingComponent } from './trial-heading.component';
import { TrialDataService } from './trial-data.service';
import { Observable } from 'rxjs';
import type { TrialStep } from '@trial-step/trial-step.types';
import type { Trial } from './trial.types';

@Component({
  selector: 'kit-trial-container',
  templateUrl: './trial-container.component.html',
  styleUrls: ['./trial-container.component.scss'],
  standalone: true,
  imports: [CommonModule, TrialHeadingComponent, ButtonModule, RippleModule, RouterModule, StepsComponent]
})
export class TrialContainerComponent implements OnInit {
  stepRoutes: Record<string, string> = {};
  trialId: string | null = null;
  trial: Trial | null = null;
  userPermissions: string[] = ['CREATE FINAL VERSION']; // Mock permissions

  private stepRoutingService = inject(StepRoutingService);
  private trialStepFacade = inject(TrialStepFacadeService);
  private trialDataService = inject(TrialDataService);
  private activatedRoute = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  public routeService = inject(RouteService);

  // Observable properties for template binding
  steps$!: Observable<TrialStep[]>;
  activeStep$!: Observable<TrialStep | null>;

  constructor() {
    // Initialize observables from facade
    this.steps$ = this.trialStepFacade.steps$;
    this.activeStep$ = this.trialStepFacade.activeStep$;
  }

  ngOnInit(): void {
    // Get trial ID from route parameters and set as input
    this.activatedRoute.params.subscribe(params => {
      const trialId = params['id'];
      if (trialId) {
        this.id = trialId; // This will trigger the @Input() setter
      }
    });
  }

  @Input()
  set id(trialId: string) {
    this.trialId = trialId;
    if (trialId) {
      this.stepRoutes = this.stepRoutingService.getTrialStepRoutes(trialId);
      this.loadTrialData(trialId);
    }
  }

  /**
   * Loads trial data by ID
   * @param trialId The trial ID
   */
  private loadTrialData(trialId: string): void {
    this.trialDataService.getTrialById(trialId).subscribe(trial => {
      this.trial = trial;
      // Manually trigger change detection for async data
      this.cdr.detectChanges();
    });
  }

  /**
   * Handle step selection from the steps component
   * @param step - The selected step
   */
  onStepSelected(step: TrialStep): void {
    this.trialStepFacade.goToStep(step);
  }

  /**
   * Handles select version action from trial heading
   */
  onSelectVersion(): void {
    console.log('Select version action triggered');
    // TODO: Implement select version logic
  }

  /**
   * Handles save as final action from trial heading
   */
  onSaveAsFinal(): void {
    console.log('Save as final action triggered');
    // TODO: Implement save as final logic
  }

  /**
   * Handles create new version action from trial heading
   */
  onCreateNewVersion(): void {
    console.log('Create new version action triggered');
    // TODO: Implement create new version logic
  }

  /**
   * Handles toggle public action from trial heading
   */
  onTogglePublic(): void {
    console.log('Toggle public action triggered');
    // TODO: Implement toggle public logic
  }

}
