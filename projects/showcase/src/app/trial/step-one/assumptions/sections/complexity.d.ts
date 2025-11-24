import { AssumptionsFieldsNames, AssumptionsSectionsFields } from '@assumptions/assumptions';

export type ComplexityLow = 'Low';
export type ComplexityHigh = 'High';
export type ComplexityExceptionallyLow = 'Exceptionally Low';
export type ComplexityExceptionallyHigh = 'Exceptionally High';
export type ComplexityAverage = 'Average';
export type Complexities =
  | ComplexityLow
  | ComplexityHigh
  | ComplexityExceptionallyLow
  | ComplexityExceptionallyHigh
  | ComplexityAverage;
export type OptionRequirements = Record<Complexities, keyof ComplexityLevelsMap>;

export interface ComplexityLevels {
  complexityLow: string;
  complexityHigh: string;
  complexityExceptionallyLow: string;
  complexityExceptionallyHigh: string;
  complexityAverage: string;
}

export interface ComplexityMap {
  biExpertise: ComplexityLevels;
  internationality: ComplexityLevels;
  difficulty: ComplexityLevels;
  safetyDifficulty: ComplexityLevels;
  degreeInnovation: ComplexityLevels;
}

export interface ComplexityLevelsMap {
  complexityLow: ComplexityLow;
  complexityHigh: ComplexityHigh;
  complexityExceptionallyLow: ComplexityExceptionallyLow;
  complexityExceptionallyHigh: ComplexityExceptionallyHigh;
  complexityAverage: ComplexityAverage;
}

export type Complexity =
  | ComplexityLow
  | ComplexityHigh
  | ComplexityExceptionallyLow
  | ComplexityExceptionallyHigh
  | ComplexityAverage;

export interface TrialComplexity {
  biExpertise: Complexity | null;
  degreeInnovation: Complexity | null;
  safetyDifficulty: Complexity | null;
  internationality: Complexity | null;
  difficulty: Complexity | null;
  patientBurden: number | null;
  industryAverage: number | null;
}

export type AssumptionsComplexityFieldsTitles = AssumptionsFieldsNames<TrialComplexity>;
export type AssumptionsComplexityControls = AssumptionsSectionsFields<AssumptionsComplexityFieldsTitles>;
export type ColDefTrialComplexity = Record<keyof TrialComplexity, undefined>;
