import { Component, Input, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RouteService } from '@core/route.service';
import { routeParams } from '@core/route.constants';
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

  private trialStepFacade = inject(TrialStepFacadeService);
  private trialDataService = inject(TrialDataService);
  private activatedRoute = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  public routeService = inject(RouteService);

  /**
   * Observable properties for template binding
   * These provide reactive data streams for the component template
   */
  steps$!: Observable<TrialStep[]>;
  activeStep$!: Observable<TrialStep | null>;

  constructor() {
    /**
     * Initialize observables from facade
     * This connects the component to the NgRx state management
     */
    this.steps$ = this.trialStepFacade.steps$;
    this.activeStep$ = this.trialStepFacade.activeStep$;
  }

  ngOnInit(): void {
    /**
     * Get trial ID from route parameters and set as input
     * This ensures the component receives the correct trial context
     */
    this.activatedRoute.params.subscribe(params => {
      const trialId = params[routeParams.id];
      if (trialId) {
        this.id = trialId; // This will trigger the @Input() setter
      }
    });
  }

  @Input()
  set id(trialId: string) {
    this.trialId = trialId;
    if (trialId) {
      this.stepRoutes = this.routeService.getTrialStepRoutes(trialId);
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
      /**
       * Manually trigger change detection for async data
       * This ensures the UI updates when trial data is loaded
       */
      this.cdr.detectChanges();
    });
  }

  /**
   * Handle step selection from the steps component
   * @param step - The selected step
   */
  onStepSelected(step: TrialStep): void {
    if (!this.trialId) {
      console.error('Trial ID is required for step navigation');
      return;
    }
    this.trialStepFacade.goToStep(step, this.trialId);
  }

  /**
   * Handles select version action from trial heading
   */
  onSelectVersion(): void {
    console.log('Select version action triggered');
    /**
     * TODO: Implement select version logic
     * This should open a version selection dialog or navigate to version management
     */
  }

  /**
   * Handles save as final action from trial heading
   */
  onSaveAsFinal(): void {
    console.log('Save as final action triggered');
    /**
     * TODO: Implement save as final logic
     * This should save the trial as the final version and update the status
     */
  }

  /**
   * Handles create new version action from trial heading
   */
  onCreateNewVersion(): void {
    console.log('Create new version action triggered');
    /**
     * TODO: Implement create new version logic
     * This should create a new version of the trial and navigate to it
     */
  }

  /**
   * Handles toggle public action from trial heading
   */
  onTogglePublic(): void {
    console.log('Toggle public action triggered');
    /**
     * TODO: Implement toggle public logic
     * This should toggle the public visibility of the trial
     */
  }

}
