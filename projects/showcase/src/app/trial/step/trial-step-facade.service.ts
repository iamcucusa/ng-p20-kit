import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import type { TrialStep, TrialStepId } from './trial-step.d';
import { TrialStepActions } from './trial-step.actions';
import {
  selectActiveStep,
  selectActiveStepId,
  selectIsFirstStep,
  selectIsLastStep,
  selectIsStepDisabled,
  selectSteps
} from './trial-step.selectors';
import { TrialStepState } from './trial-step.reducer';
import { StepRoutingService } from './step-routing.service';

/**
 * Facade service for TrialStep NgRx feature
 * Provides a clean API for components to interact with the trial step state
 */
@Injectable({
  providedIn: 'root'
})
export class TrialStepFacadeService {
  private store = inject(Store<TrialStepState>);
  private router = inject(Router);
  private stepRoutingService = inject(StepRoutingService);

  readonly activeStep$: Observable<TrialStep | null> = this.store.select(selectActiveStep);
  readonly activeStepId$: Observable<TrialStepId | undefined> = this.store.select(selectActiveStepId);
  readonly isFirstStep$: Observable<boolean> = this.store.select(selectIsFirstStep);
  readonly isLastStep$: Observable<boolean> = this.store.select(selectIsLastStep);
  readonly isStepDisabled$: Observable<boolean> = this.store.select(selectIsStepDisabled);
  readonly steps$: Observable<TrialStep[]> = this.store.select(selectSteps);

  /**
   * Navigates to a specific step and updates the state
   * @param step The step to navigate to
   */
  goToStep(step: TrialStep): void {
    this.store.dispatch(TrialStepActions.goToStep({ step }));
    const trialId = this.stepRoutingService.getCurrentTrialId();
    if (trialId) {
      const stepPath = this.stepRoutingService.getStepRoutePath(trialId, step.stepId);
      this.router.navigateByUrl(stepPath);
    } else {
      this.router.navigate([step.stepId]);
    }
  }

  /**
   * Updates step state without navigation
   * @param step The step to update
   */
  updateStep(step: TrialStep): void {
    this.store.dispatch(TrialStepActions.updateStep({ step }));
  }

  /**
   * Updates step state by step ID
   * @param stepId The step ID to update
   */
  updateStepById(stepId: TrialStepId): void {
    this.store.dispatch(TrialStepActions.setActiveStepByRoute({ stepId }));
  }

  /**
   * Sets active step by route parameter
   * @param stepId The step ID from route
   */
  setActiveStepByRoute(stepId: TrialStepId): void {
    this.store.dispatch(TrialStepActions.setActiveStepByRoute({ stepId }));
  }

  /**
   * Resets all steps navigation to initial state
   */
  resetStepState(): void {
    this.store.dispatch(TrialStepActions.resetStepsNavigation());
  }

  /**
   * Sets new steps state with only first step enabled
   */
  setNewStepState(): void {
    this.store.dispatch(TrialStepActions.setNewSteps());
  }

  /**
   * Sets created trial steps state with all steps enabled
   */
  setCreatedTrialSteps(): void {
    this.store.dispatch(TrialStepActions.createdTrialSteps());
  }

  /**
   * Marks step navigation as successful
   * @param data Optional success data
   */
  goToStepSuccess(data?: unknown): void {
    this.store.dispatch(TrialStepActions.goToStepSuccess({ data }));
  }

  /**
   * Marks step navigation as failed
   * @param error The error that occurred
   */
  goToStepFailure(error: unknown): void {
    this.store.dispatch(TrialStepActions.goToStepFailure({ error }));
  }
}
