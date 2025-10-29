import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TrialDataService } from '@trial/trial-data.service';
import { routeParams } from '@core/route.constants';
import type { Trial } from '@trial/trial';

/**
 * Active Trial Resolver
 * Resolves the active trial data for assumption sections
 */
export const activeTrialResolver: ResolveFn<Trial | null> = (route) => {
  const trialDataService = inject(TrialDataService);
  
  // Get trial ID from route params or use default
  // The trial ID is in the parent route as 'id' parameter
  const trialId = route.params[routeParams.id] || '1';
  
  // Return the Observable directly - Angular will handle the subscription
  return trialDataService.getTrialById(trialId);
};
