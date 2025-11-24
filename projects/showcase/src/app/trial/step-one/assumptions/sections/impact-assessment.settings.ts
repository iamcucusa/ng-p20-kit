import {
  AssumptionsCountriesBreakdownControls,
  AssumptionsCountriesBreakdownFieldsTitles,
  AssumptionsCountryBreakdownControls,
  AssumptionsCountryBreakdownFieldsTitles,
  AssumptionsImpactControls,
  AssumptionsImpactFieldsTitles,
  AssumptionsKeyMilestonesControls,
  AssumptionsKeyMilestonesFieldsTitles,
  ColDefTrialImpactAssessment,
  ImpactAssessmentFieldSuffixNote,
  ImpactAssessmentFieldSuffixValue,
  ImpactAssessmentSourceControls,
  ImpactAssessmentSourceFields,
  ImpactAssessmentSourceFieldsTitles,
  KeyMilestonesValues,
} from '@assumptions/sections/impact-assessment';
import { InjectionToken } from '@angular/core';
import { AssumptionsFieldFormArray, AssumptionsFieldFormControl } from '@assumptions/assumptions';
import { CaptarioSource } from '@data-sources/data-source';

export const impactAssessmentSourceFields: ImpactAssessmentSourceFieldsTitles = {
  sourceScenarioSimulation: 'sourceScenarioSimulation',
  sourceSimulationPercentile: 'sourceSimulationPercentile',
  sourceSystem: 'sourceSystem',
};
export const keyMilestonesFields: AssumptionsKeyMilestonesFieldsTitles = {
  ctaTo75PercentSitesWeeks: 'ctaTo75PercentSitesWeeks',
  ctaTo75PercentSitesWeeksNote: 'ctaTo75PercentSitesWeeksNote',
  ctaTo75PercentSitesWeeksValue: 'ctaTo75PercentSitesWeeksValue',
  ctaToFsiWeeks: 'ctaToFsiWeeks',
  ctaToFsiWeeksNote: 'ctaToFsiWeeksNote',
  ctaToFsiWeeksValue: 'ctaToFsiWeeksValue',
  finalCtaPackage: 'finalCtaPackage',
  finalCtaPackageNote: 'finalCtaPackageNote',
  finalCtaPackageValue: 'finalCtaPackageValue',
  firstSiteInitiated: 'firstSiteInitiated',
  firstSiteInitiatedNote: 'firstSiteInitiatedNote',
  firstSiteInitiatedValue: 'firstSiteInitiatedValue',
  firstSubjectRandomized: 'firstSubjectRandomized',
  firstSubjectRandomizedNote: 'firstSubjectRandomizedNote',
  firstSubjectRandomizedValue: 'firstSubjectRandomizedValue',
  lastSiteInitiated: 'lastSiteInitiated',
  lastSiteInitiatedNote: 'lastSiteInitiatedNote',
  lastSiteInitiatedValue: 'lastSiteInitiatedValue',
  fsiToLsrWeeks: 'fsiToLsrWeeks',
  fsiToLsrWeeksNote: 'fsiToLsrWeeksNote',
  fsiToLsrWeeksValue: 'fsiToLsrWeeksValue',
  fsrToLsrWeeks: 'fsrToLsrWeeks',
  fsrToLsrWeeksNote: 'fsrToLsrWeeksNote',
  fsrToLsrWeeksValue: 'fsrToLsrWeeksValue',
  lastSubjectRandomized: 'lastSubjectRandomized',
  lastSubjectRandomizedNote: 'lastSubjectRandomizedNote',
  lastSubjectRandomizedValue: 'lastSubjectRandomizedValue',
  sites25PercentInitiated: 'sites25PercentInitiated',
  sites25PercentInitiatedNote: 'sites25PercentInitiatedNote',
  sites25PercentInitiatedValue: 'sites25PercentInitiatedValue',
  sites75PercentInitiated: 'sites75PercentInitiated',
  sites75PercentInitiatedNote: 'sites75PercentInitiatedNote',
  sites75PercentInitiatedValue: 'sites75PercentInitiatedValue',
  siteRecruitmentRate: 'siteRecruitmentRate',
  siteRecruitmentRateNote: 'siteRecruitmentRateNote',
  siteRecruitmentRateValue: 'siteRecruitmentRateValue',
  trialRecruitmentRate: 'trialRecruitmentRate',
  trialRecruitmentRateNote: 'trialRecruitmentRateNote',
  trialRecruitmentRateValue: 'trialRecruitmentRateValue',
};
export const countriesBreakdownFields: AssumptionsCountriesBreakdownFieldsTitles = {
  selectedCountries: 'selectedCountries',
  selectedCountriesMap: 'selectedCountriesMap',
};
export const countryBreakdownFields: AssumptionsCountryBreakdownFieldsTitles = {
  country: 'country',
  rationale: 'rationale',
  sitesSource: 'sitesSource',
  sitesValue: 'sitesValue',
  subjectsSource: 'subjectsSource',
  subjectsValue: 'subjectsValue',
  countryCode: 'countryCode',
  countryRecruitmentRate: 'countryRecruitmentRate',
  sitesInitiatedTo75Percent: 'sitesInitiatedTo75Percent',
};
export const countryBreakdownControls: AssumptionsCountryBreakdownControls = {
  countryCode: {
    name: countryBreakdownFields.countryCode,
    title: 'Country Code',
    export: false,
  },
  rationale: {
    name: countryBreakdownFields.rationale,
    title: 'Rationale',
    export: false,
  },
  sitesSource: {
    name: countryBreakdownFields.sitesSource,
    title: 'Sites',
    export: false,
    type: 'number',
  },
  sitesValue: {
    name: countryBreakdownFields.sitesValue,
    title: 'Sites',
    export: false,
  },
  subjectsSource: {
    name: countryBreakdownFields.subjectsSource,
    title: 'Subjects',
    export: false,
    type: 'number',
  },
  subjectsValue: {
    name: countryBreakdownFields.subjectsValue,
    title: 'Subjects',
    export: false,
  },
  country: {
    name: countryBreakdownFields.country,
    title: 'Name',
    export: false,
  },
  countryRecruitmentRate: {
    name: countryBreakdownFields.countryRecruitmentRate,
    title: 'Recruitment Rate',
    export: false,
    unit: 'P/S/M',
    type: 'number',
  },
  sitesInitiatedTo75Percent: {
    name: countryBreakdownFields.sitesInitiatedTo75Percent,
    title: '75% Sites Initiated',
    export: false,
    type: 'date',
  },
};
export const countryBreakdownControlsToken = new InjectionToken<AssumptionsCountryBreakdownControls>(
  'Country Breakdown Form Fields',
);
export const impactFields: AssumptionsImpactFieldsTitles = {
  ...impactAssessmentSourceFields,
  ...keyMilestonesFields,
  ...countriesBreakdownFields,
};
export const captarioSource: CaptarioSource = 'CAPTARIO';
export const captarioSourceToken = new InjectionToken<CaptarioSource>('Source Value for Captario');
export const impactAssessmentSourceControls: ImpactAssessmentSourceControls = {
  sourceSystem: {
    export: true,
    name: impactAssessmentSourceFields.sourceSystem,
    title: 'Data Source',
  },
  sourceSimulationPercentile: {
    export: true,
    name: impactAssessmentSourceFields.sourceSimulationPercentile,
    title: 'Simulation Percentile',
    unit: '%',
    type: 'number',
  },
  sourceScenarioSimulation: {
    export: true,
    name: impactAssessmentSourceFields.sourceScenarioSimulation,
    title: 'Scenario Simulation',
  },
};
export const impactAssessmentSourceControlsToken = new InjectionToken<ImpactAssessmentSourceControls>(
  'Impact Assessment Source Controls',
);
export const keyMilestonesControls: AssumptionsKeyMilestonesControls = {
  ctaTo75PercentSitesWeeks: {
    export: true,
    name: keyMilestonesFields.ctaTo75PercentSitesWeeks,
    title: 'CTA to 75% Sites',
    unit: 'Weeks',
    info: 'Projected number of weeks from the final CTA package to 75% of sites initiated.',
    type: 'number',
    decimals: 1,
  },
  ctaTo75PercentSitesWeeksNote: {
    export: false,
    name: keyMilestonesFields.ctaTo75PercentSitesWeeksNote,
    title: 'CTA to 75% Sites Note',
    decimals: 1,
  },
  ctaTo75PercentSitesWeeksValue: {
    export: false,
    name: keyMilestonesFields.ctaTo75PercentSitesWeeksValue,
    title: 'CTA to 75% Sites Value',
    decimals: 1,
  },
  ctaToFsiWeeks: {
    export: true,
    name: keyMilestonesFields.ctaToFsiWeeks,
    title: 'CTA to FSI',
    info: 'Projected number of weeks from the final CTA package to the first site initiation.',
    type: 'number',
    unit: 'Weeks',
    decimals: 1,
  },
  ctaToFsiWeeksNote: {
    export: false,
    name: keyMilestonesFields.ctaToFsiWeeksNote,
    title: 'CTA to FSI Note',
    decimals: 1,
  },
  ctaToFsiWeeksValue: {
    export: false,
    name: keyMilestonesFields.ctaToFsiWeeksValue,
    title: 'CTA to FSI Value',
    decimals: 1,
  },
  finalCtaPackage: {
    export: true,
    name: keyMilestonesFields.finalCtaPackage,
    title: 'Final CTA Package',
    info: 'Projected date for the final CTA package completion.',
    type: 'date',
  },
  finalCtaPackageNote: {
    export: false,
    name: impactFields.finalCtaPackageNote,
    title: 'Final CTA Package Note',
  },
  finalCtaPackageValue: {
    export: false,
    name: keyMilestonesFields.finalCtaPackageValue,
    title: 'Final CTA Package Value',
  },
  firstSiteInitiated: {
    export: true,
    name: keyMilestonesFields.firstSiteInitiated,
    title: 'First Site Initiated',
    info: 'Projected date for the initiation of the first trial site.',
    type: 'date',
  },
  firstSiteInitiatedNote: {
    export: false,
    name: keyMilestonesFields.firstSiteInitiatedNote,
    title: 'First Site Initiated Note',
  },
  firstSiteInitiatedValue: {
    export: false,
    name: keyMilestonesFields.firstSiteInitiatedValue,
    title: 'First Site Initiated Value',
  },
  firstSubjectRandomized: {
    export: true,
    name: keyMilestonesFields.firstSubjectRandomized,
    title: 'First Subject Randomized',
    info: 'Projected date for the first subject to be randomized.',
    type: 'date',
  },
  firstSubjectRandomizedNote: {
    export: false,
    name: keyMilestonesFields.firstSubjectRandomizedNote,
    title: 'First Subject Randomized Note',
  },
  firstSubjectRandomizedValue: {
    export: false,
    name: keyMilestonesFields.firstSubjectRandomizedValue,
    title: 'First Subject Randomized Value',
  },
  lastSiteInitiated: {
    export: true,
    name: keyMilestonesFields.lastSiteInitiated,
    title: 'Last Site Initiated',
    info: 'Projected date for the last site initiated.',
    type: 'date',
  },
  lastSiteInitiatedNote: {
    export: false,
    name: keyMilestonesFields.lastSiteInitiatedNote,
    title: 'Last Site Initiated Note',
  },
  lastSiteInitiatedValue: {
    export: false,
    name: keyMilestonesFields.lastSiteInitiatedValue,
    title: 'Last Site Initiated Value',
  },
  fsiToLsrWeeks: {
    export: true,
    name: keyMilestonesFields.fsiToLsrWeeks,
    title: 'FSI to LSR',
    unit: 'Weeks',
    info: 'Projected number of weeks from the first site initiation to the last subject randomization.',
    type: 'number',
    decimals: 1,
  },
  fsiToLsrWeeksNote: {
    export: false,
    name: keyMilestonesFields.fsiToLsrWeeksNote,
    title: 'FSI to LSR Note',
    decimals: 1,
  },
  fsiToLsrWeeksValue: {
    export: false,
    name: keyMilestonesFields.fsiToLsrWeeksValue,
    title: 'FSI to LSR Value',
    decimals: 1,
  },
  fsrToLsrWeeks: {
    export: true,
    name: keyMilestonesFields.fsrToLsrWeeks,
    title: 'FSR to LSR',
    type: 'number',
    info: 'Projected number of weeks from the first subject randomization to the last subject randomization.',
    unit: 'Weeks',
    decimals: 1,
  },
  fsrToLsrWeeksNote: {
    export: false,
    name: keyMilestonesFields.fsrToLsrWeeksNote,
    title: 'FSR to LSR Note',
    decimals: 1,
  },
  fsrToLsrWeeksValue: {
    export: false,
    name: keyMilestonesFields.fsrToLsrWeeksValue,
    title: 'FSR to LSR Value',
    decimals: 1,
  },
  lastSubjectRandomized: {
    export: true,
    name: keyMilestonesFields.lastSubjectRandomized,
    title: 'Last Subject Randomized',
    info: 'Projected date for the last subject randomization in the trial.',
    type: 'date',
  },
  lastSubjectRandomizedNote: {
    export: false,
    name: keyMilestonesFields.lastSubjectRandomizedNote,
    title: 'Last Subject Randomized Note',
  },
  lastSubjectRandomizedValue: {
    export: false,
    name: keyMilestonesFields.lastSubjectRandomizedValue,
    title: 'Last Subject Randomized Value',
  },
  sites25PercentInitiated: {
    export: true,
    name: keyMilestonesFields.sites25PercentInitiated,
    title: '25% of Sites Initiated',
    info: 'Projected date when 25% of trial sites will be initiated.',
    type: 'date',
  },
  sites25PercentInitiatedNote: {
    export: false,
    name: keyMilestonesFields.sites25PercentInitiatedNote,
    title: '25% of Sites Initiated Note',
  },
  sites25PercentInitiatedValue: {
    export: false,
    name: keyMilestonesFields.sites25PercentInitiatedValue,
    title: '25% of Sites Initiated Value',
    type: 'number',
  },
  sites75PercentInitiated: {
    export: true,
    name: keyMilestonesFields.sites75PercentInitiated,
    title: '75% of Sites Initiated',
    info: 'Projected date when 75% of trial sites will be initiated.',
    type: 'date',
  },
  sites75PercentInitiatedNote: {
    export: false,
    name: keyMilestonesFields.sites75PercentInitiatedNote,
    title: '75% of Sites Initiated Note',
  },
  sites75PercentInitiatedValue: {
    export: false,
    name: keyMilestonesFields.sites75PercentInitiatedValue,
    title: '75% of Sites Initiated Value',
    type: 'number',
  },
  siteRecruitmentRate: {
    name: impactFields.siteRecruitmentRate,
    title: 'Site Recruitment Rate',
    info: 'Site level recruitment rate is based on individual site initiation per site (net rate).',
    export: true,
    unit: 'P/S/M',
    type: 'number',
    decimals: 2,
  },
  siteRecruitmentRateNote: {
    name: impactFields.siteRecruitmentRateNote,
    title: 'Site Recruitment Rate Note',
    export: false,
    decimals: 2,
  },
  siteRecruitmentRateValue: {
    name: impactFields.siteRecruitmentRateValue,
    title: 'Site Recruitment Rate Value',
    export: false,
    unit: 'P/S/M',
    type: 'number',
    decimals: 2,
  },
  trialRecruitmentRate: {
    name: impactFields.trialRecruitmentRate,
    title: 'Trial Recruitment Rate',
    info: 'Trial level recruitment rate is based on all sites initiated simultaneously (crude rate).',
    export: true,
    unit: 'P/S/M',
    type: 'number',
    decimals: 2,
  },
  trialRecruitmentRateNote: {
    name: impactFields.trialRecruitmentRateNote,
    title: 'Trial Recruitment Rate Note',
    export: false,
    decimals: 2,
  },
  trialRecruitmentRateValue: {
    name: impactFields.trialRecruitmentRateValue,
    title: 'Trial Recruitment Rate Value',
    export: false,
    unit: 'P/S/M',
    type: 'number',
    decimals: 2,
  },
};
export const keyMilestonesControlsToken = new InjectionToken<AssumptionsKeyMilestonesControls>(
  'key Milestones Form Fields',
);
export const assumptionsFieldFormControl: AssumptionsFieldFormControl = 'control';
export const assumptionsFieldFormArray: AssumptionsFieldFormArray = 'array';
export const countriesBreakdownControls: AssumptionsCountriesBreakdownControls = {
  selectedCountries: {
    name: impactFields.selectedCountries,
    title: 'Add or Remove Countries',
    export: false,
    formType: assumptionsFieldFormControl,
  },
  selectedCountriesMap: {
    name: impactFields.selectedCountriesMap,
    title: 'Select Countries Map',
    export: true,
    formType: assumptionsFieldFormArray,
  },
};
export const countriesBreakdownControlsToken = new InjectionToken<AssumptionsCountriesBreakdownControls>(
  'Countries Breakdown Form Fields',
);
export const impactControls: AssumptionsImpactControls = {
  ...impactAssessmentSourceControls,
  ...keyMilestonesControls,
  ...countriesBreakdownControls,
};
export const impactControlsToken = new InjectionToken<AssumptionsImpactControls>('Impact Assessment Form Fields');
export const keyMilestonesValuesConfig: KeyMilestonesValues = {
  finalCtaPackage: null,
  firstSiteInitiated: null,
  sites25PercentInitiated: null,
  sites75PercentInitiated: null,
  lastSiteInitiated: null,
  firstSubjectRandomized: null,
  lastSubjectRandomized: null,
  ctaToFsiWeeks: null,
  ctaTo75PercentSitesWeeks: null,
  fsiToLsrWeeks: null,
  fsrToLsrWeeks: null,
  trialRecruitmentRate: null,
  siteRecruitmentRate: null,
};
export const keyMilestonesValuesConfigToken = new InjectionToken<KeyMilestonesValues>(
  'Key Milestones Control Unique Fields',
);
export const impactAssessmentSourceFieldsToken = new InjectionToken<ImpactAssessmentSourceFields>(
  'Impact Assessment Source Fields',
);
export const impactFieldsToken = new InjectionToken<AssumptionsImpactControls>('Impact Assessment All Fields');
export const suffixNote: ImpactAssessmentFieldSuffixNote = 'Note';
export const suffixValue: ImpactAssessmentFieldSuffixValue = 'Value';
export const suffixNoteToken = new InjectionToken<ImpactAssessmentFieldSuffixNote>('suffixNote');
export const suffixValueToken = new InjectionToken<ImpactAssessmentFieldSuffixValue>('suffixValue');
export const defTrialImpactAssessment: ColDefTrialImpactAssessment = {
  sourceSystem: undefined,
  sourceScenarioSimulation: undefined,
  sourceSimulationPercentile: undefined,
  finalCtaPackage: undefined,
  finalCtaPackageNote: undefined,
  finalCtaPackageValue: undefined,
  firstSiteInitiated: undefined,
  firstSiteInitiatedNote: undefined,
  firstSiteInitiatedValue: undefined,
  sites25PercentInitiated: undefined,
  sites25PercentInitiatedNote: undefined,
  sites25PercentInitiatedValue: undefined,
  sites75PercentInitiated: undefined,
  sites75PercentInitiatedNote: undefined,
  sites75PercentInitiatedValue: undefined,
  lastSiteInitiated: undefined,
  lastSiteInitiatedNote: undefined,
  lastSiteInitiatedValue: undefined,
  firstSubjectRandomized: undefined,
  firstSubjectRandomizedNote: undefined,
  firstSubjectRandomizedValue: undefined,
  lastSubjectRandomized: undefined,
  lastSubjectRandomizedNote: undefined,
  lastSubjectRandomizedValue: undefined,
  ctaToFsiWeeks: undefined,
  ctaToFsiWeeksNote: undefined,
  ctaToFsiWeeksValue: undefined,
  ctaTo75PercentSitesWeeks: undefined,
  ctaTo75PercentSitesWeeksNote: undefined,
  ctaTo75PercentSitesWeeksValue: undefined,
  fsiToLsrWeeks: undefined,
  fsiToLsrWeeksNote: undefined,
  fsiToLsrWeeksValue: undefined,
  fsrToLsrWeeks: undefined,
  fsrToLsrWeeksNote: undefined,
  fsrToLsrWeeksValue: undefined,
  trialRecruitmentRate: undefined,
  trialRecruitmentRateNote: undefined,
  trialRecruitmentRateValue: undefined,
  siteRecruitmentRate: undefined,
  siteRecruitmentRateNote: undefined,
  siteRecruitmentRateValue: undefined,
  selectedCountries: undefined,
  selectedCountriesMap: undefined,
};

export const impactAssessmentFormProviders = [
  {
    provide: keyMilestonesControlsToken,
    useValue: keyMilestonesControls,
  },
  {
    provide: captarioSourceToken,
    useValue: captarioSource,
  },
  {
    provide: impactAssessmentSourceControlsToken,
    useValue: impactAssessmentSourceControls,
  },
  {
    provide: countriesBreakdownControlsToken,
    useValue: countriesBreakdownControls,
  },
  {
    provide: countryBreakdownControlsToken,
    useValue: countryBreakdownControls,
  },
  {
    provide: impactControlsToken,
    useValue: impactControls,
  },
  {
    provide: keyMilestonesValuesConfigToken,
    useValue: keyMilestonesValuesConfig,
  },
  { provide: impactAssessmentSourceFieldsToken, useValue: impactAssessmentSourceFields },
  { provide: impactFieldsToken, useValue: impactFields },
  {
    provide: suffixNoteToken,
    useValue: suffixNote,
  },
  {
    provide: suffixValueToken,
    useValue: suffixValue,
  }
];

export const VALUE_SUFFIX = /Value$/;
