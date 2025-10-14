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

  // Observable selectors
  readonly activeStep$: Observable<TrialStep | null> = this.store.select(selectActiveStep);
  readonly activeStepId$: Observable<TrialStepId | undefined> = this.store.select(selectActiveStepId);
  readonly isFirstStep$: Observable<boolean> = this.store.select(selectIsFirstStep);
  readonly isLastStep$: Observable<boolean> = this.store.select(selectIsLastStep);
  readonly isStepDisabled$: Observable<boolean> = this.store.select(selectIsStepDisabled);
  readonly steps$: Observable<TrialStep[]> = this.store.select(selectSteps);

  /**
   * Navigate to a specific step and update the state
   */
  goToStep(step: TrialStep, route: ActivatedRoute): void {
    this.store.dispatch(TrialStepActions.goToStep({ step }));
    // Navigate to the step using the step ID directly
    this.router.navigate([step.stepId], { relativeTo: route });
  }

  /**
   * Update step state without navigation
   */
  updateStep(step: TrialStep): void {
    this.store.dispatch(TrialStepActions.updateStep({ step }));
  }

  /**
   * Set active step by route parameter
   */
  setActiveStepByRoute(stepId: TrialStepId): void {
    this.store.dispatch(TrialStepActions.setActiveStepByRoute({ stepId }));
  }

  /**
   * Reset step navigation to initial state
   */
  resetStepState(): void {
    this.store.dispatch(TrialStepActions.resetStepsNavigation());
  }

  /**
   * Set new step state (only first step enabled)
   */
  setNewStepState(): void {
    this.store.dispatch(TrialStepActions.setNewSteps());
  }

  /**
   * Set created trial steps state (all steps enabled)
   */
  setCreatedTrialSteps(): void {
    this.store.dispatch(TrialStepActions.createdTrialSteps());
  }

  /**
   * Mark step navigation as successful
   */
  goToStepSuccess(data?: unknown): void {
    this.store.dispatch(TrialStepActions.goToStepSuccess({ data }));
  }

  /**
   * Mark step navigation as failed
   */
  goToStepFailure(error: unknown): void {
    this.store.dispatch(TrialStepActions.goToStepFailure({ error }));
  }
}
