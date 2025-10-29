import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import type { TrialStep, TrialStepId } from './trial-step';
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

/**
 * Facade service for TrialStep NgRx feature
 * Provides a clean API for components to interact with the trial step state
 */
@Injectable({
  providedIn: 'root'
})
export class TrialStepFacadeService {
  private store = inject(Store<TrialStepState>);

  readonly activeStep$: Observable<TrialStep | null> = this.store.select(selectActiveStep);
  readonly activeStepId$: Observable<TrialStepId | undefined> = this.store.select(selectActiveStepId);
  readonly isFirstStep$: Observable<boolean> = this.store.select(selectIsFirstStep);
  readonly isLastStep$: Observable<boolean> = this.store.select(selectIsLastStep);
  readonly isStepDisabled$: Observable<boolean> = this.store.select(selectIsStepDisabled);
  readonly steps$: Observable<TrialStep[]> = this.store.select(selectSteps);

  /**
   * Navigates to a specific step and updates the state
   * Dispatches the Go To Step action - navigation is handled by effects
   * @param step The step to navigate to
   * @param trialId Required trial ID for navigation
   */
  goToStep(step: TrialStep, trialId: string): void {
    this.store.dispatch(TrialStepActions.goToStep({ step, trialId }));
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
