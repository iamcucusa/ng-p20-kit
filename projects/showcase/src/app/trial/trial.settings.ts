import {Trial, TrialVersionValidator} from '@trial/trial';
import {InjectionToken} from '@angular/core';

export const isVersion = (trial: Trial | Partial<Trial> | null): boolean => {
  return (trial &&
    trial?.versionNumber !== null &&
    trial?.versionNumber !== undefined &&
    trial?.versionNumber > 1) as boolean;
};

export const isBase = (trial: Trial | Partial<Trial> | null): boolean => {
  return (trial && trial.versionNumber === 1) as boolean;
};

export const isVersionToken = new InjectionToken<TrialVersionValidator>('Is version', {
  providedIn: 'root',
  factory: () => isVersion,
});
export const isBaseTrialToken = new InjectionToken<TrialVersionValidator>('Is Base', {
  providedIn: 'root',
  factory: () => isBase,
});
