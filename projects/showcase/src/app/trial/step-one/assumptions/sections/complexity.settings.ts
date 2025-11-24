import {
  AssumptionsComplexityControls,
  AssumptionsComplexityFieldsTitles,
  ColDefTrialComplexity,
  ComplexityAverage,
  ComplexityExceptionallyHigh,
  ComplexityExceptionallyLow,
  ComplexityHigh,
  ComplexityLevels,
  ComplexityLevelsMap,
  ComplexityLow,
  ComplexityMap,
  OptionRequirements,
} from '@assumptions/sections/complexity';
import { InjectionToken } from '@angular/core';

export const defTrialComplexity: ColDefTrialComplexity = {
  biExpertise: undefined,
  degreeInnovation: undefined,
  difficulty: undefined,
  safetyDifficulty: undefined,
  internationality: undefined,
  patientBurden: undefined,
  industryAverage: undefined,
};
export const complexityFields: AssumptionsComplexityFieldsTitles = {
  biExpertise: 'biExpertise',
  degreeInnovation: 'degreeInnovation',
  safetyDifficulty: 'safetyDifficulty',
  internationality: 'internationality',
  difficulty: 'difficulty',
  patientBurden: 'patientBurden',
  industryAverage: 'industryAverage',
};
export const complexityControls: AssumptionsComplexityControls = {
  biExpertise: {
    name: complexityFields.biExpertise,
    export: true,
    title: 'BI Expertise',
  },
  degreeInnovation: {
    name: complexityFields.degreeInnovation,
    export: true,
    title: 'Degree of Innovation',
  },
  safetyDifficulty: {
    name: complexityFields.safetyDifficulty,
    export: true,
    title: 'Safety Difficulty',
  },
  internationality: {
    name: complexityFields.internationality,
    export: true,
    title: 'Internationality & Size',
  },
  difficulty: {
    name: complexityFields.difficulty,
    export: true,
    title: 'Inherent Difficulty',
  },
  patientBurden: {
    name: complexityFields.patientBurden,
    export: true,
    title: 'Subject Burden',
  },
  industryAverage: {
    name: complexityFields.industryAverage,
    export: true,
    title: 'DIPA Industry Average',
  },
};
export const complexityControlsToken = new InjectionToken<AssumptionsComplexityControls>('Complexity Page Form Fields');
export const complexityLow: ComplexityLow = 'Low';
export const complexityHigh: ComplexityHigh = 'High';
export const complexityExceptionallyLow: ComplexityExceptionallyLow = 'Exceptionally Low';
export const complexityExceptionallyHigh: ComplexityExceptionallyHigh = 'Exceptionally High';
export const complexityAverage: ComplexityAverage = 'Average';
export const complexityLevelsMap: ComplexityLevelsMap = {
  complexityLow: 'Low',
  complexityHigh: 'High',
  complexityAverage: 'Average',
  complexityExceptionallyLow: 'Exceptionally Low',
  complexityExceptionallyHigh: 'Exceptionally High',
};
export const complexityLevelsSettings: OptionRequirements = {
  Low: 'complexityLow',
  High: 'complexityHigh',
  'Exceptionally High': 'complexityAverage',
  'Exceptionally Low': 'complexityExceptionallyLow',
  Average: 'complexityExceptionallyHigh',
};
export const complexityLevelsSettingsToken = new InjectionToken<OptionRequirements>('Complexity Settings');
export const complexityLevelsMapToken = new InjectionToken<ComplexityLevelsMap>('Complexity Levels Map');
const safetyDifficulty: ComplexityLevels = {
  complexityLow: 'Establish: Clean safety profile.',
  complexityHigh: 'Complicated: Lab and other safety parameters; or involvement of safety board.',
  complexityExceptionallyLow: 'Easy: Standard safety profile with no interim data presentations.',
  complexityExceptionallyHigh: 'Highly Complicated: Lab and other safety parameters and involvement of safety board.',
  complexityAverage: 'Few Issues: Mainly standard safety analyses.',
};
const biExpertise: ComplexityLevels = {
  complexityLow: 'Limited standards exist; first trial in indication or with unfamiliar endpoints.',
  complexityHigh: 'Standards available with few trial-specific aspects.',
  complexityExceptionallyLow: 'New indication without established standards; trial involves unfamiliar endpoints.',
  complexityExceptionallyHigh: 'Twin trial available for reference. (Copy & Paste)',
  complexityAverage: 'Standards available, but trial requires additional new aspects.',
};
const degreeInnovation: ComplexityLevels = {
  complexityLow: 'Replication of a well-documented study with a few new features.',
  complexityHigh: 'Compared to exceptionally high but to a lesser degree.',
  complexityExceptionallyLow: 'Replication of a well-documented study with no new features.',
  complexityExceptionallyHigh: 'No parallel study available; new mechanisms or endpoints; no regulatory guidance.',
  complexityAverage: 'Similar study available in literature with several new features.',
};
const internationality: ComplexityLevels = {
  complexityLow: 'Limited OPUs and subjects, short CRF.',
  complexityHigh: 'Comparable to High but slightly lower.',
  complexityExceptionallyLow: 'Single OPU, few subjects, short duration.',
  complexityExceptionallyHigh:
    'Multiple OPUs and diverse regions, extensive CRF, varied data sources, long duration, numerous visits or subjects.',
  complexityAverage: 'Moderate OPUs, 50 - 100 CFR pages, 500 subjects; standard case.',
};
const difficulty: ComplexityLevels = {
  complexityLow: 'Moderate number and complexity of efficacy endpoints or analyses (or vice versa)',
  complexityHigh:
    'High number or complexity of efficacy endpoints or analyses; or interim analyses for efficacy; or average trial with PK data.',
  complexityExceptionallyLow: 'Low number and low complexity of efficacy endpoints or analyses.',
  complexityExceptionallyHigh: 'No parallel study available; new mechanisms or endpoints; no regulatory guidance.',
  complexityAverage:
    'Average number and complexity of efficacy endpoints or analyses; or less complex trial with PK data.',
};
export const complexityMap: ComplexityMap = {
  biExpertise,
  degreeInnovation,
  safetyDifficulty,
  internationality,
  difficulty,
};
export const complexityMapToken = new InjectionToken<ComplexityMap>('Trial Complexity Map');

export const complexityFormProviders = [
  {
    provide: complexityMapToken,
    useValue: complexityMap,
  },
  {
    provide: complexityLevelsMapToken,
    useValue: complexityLevelsMap,
  },
  {
    provide: complexityLevelsSettingsToken,
    useValue: complexityLevelsSettings,
  },
  {
    provide: complexityControlsToken,
    useValue: complexityControls,
  }
];
