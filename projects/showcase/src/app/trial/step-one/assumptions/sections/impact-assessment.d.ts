import { FormControl } from '@angular/forms';
import {
  AssumptionsFieldBody,
  AssumptionsFieldsNames,
  AssumptionsSectionsFields,
} from '@assumptions/assumptions';

export interface TrialImpactAssessment {
  sourceSimulationPercentile: number | null;
  sourceScenarioSimulation: string | null;
  sourceSystem: string | null;

  ctaTo75PercentSitesWeeks: number | null;
  ctaTo75PercentSitesWeeksValue: number | null;
  ctaTo75PercentSitesWeeksNote: string | null;

  ctaToFsiWeeks: number | null;
  ctaToFsiWeeksValue: number | null;
  ctaToFsiWeeksNote: string | null;

  finalCtaPackage: string | null;
  finalCtaPackageValue: string | null;
  finalCtaPackageNote: string | null;

  firstSiteInitiated: string | null;
  firstSiteInitiatedValue: string | null;
  firstSiteInitiatedNote: string | null;

  firstSubjectRandomized: string | null;
  firstSubjectRandomizedValue: string | null;
  firstSubjectRandomizedNote: string | null;

  lastSiteInitiated: string | null;
  lastSiteInitiatedValue: string | null;
  lastSiteInitiatedNote: string | null;

  fsiToLsrWeeks: number | null;
  fsiToLsrWeeksValue: number | null;
  fsiToLsrWeeksNote: string | null;

  fsrToLsrWeeks: number | null;
  fsrToLsrWeeksValue: number | null;
  fsrToLsrWeeksNote: string | null;

  lastSubjectRandomized: string | null;
  lastSubjectRandomizedValue: string | null;
  lastSubjectRandomizedNote: string | null;

  sites25PercentInitiated: string | null;
  sites25PercentInitiatedNote: string | null;
  sites25PercentInitiatedValue: string | null;

  sites75PercentInitiated: string | null;
  sites75PercentInitiatedValue: string | null;
  sites75PercentInitiatedNote: string | null;

  /**
   * Trial Recruitment Rate
   * Site Recruitment Rate
   */
  siteRecruitmentRate: number | null;
  siteRecruitmentRateValue: number | null;
  siteRecruitmentRateNote: string | null;

  trialRecruitmentRate: number | null;
  trialRecruitmentRateValue: number | null;
  trialRecruitmentRateNote: string | null;

  /**
   * by default empty array [] the backend should send
   */
  selectedCountries: string[];
  /**
   * this field is types CountriesBreakdownMap[] cause of tecnhical debt
   */
  selectedCountriesMap: CountriesBreakdownMap[] | null;
}

export interface CountryBreakdownField {
  country: string | null;
  /**
   * the unique code we use for each country
   */
  countryCode: string | null;
  sitesSource: number | null;
  subjectsSource: number | null;
  sitesValue: number | null;
  subjectsValue: number | null;
  rationale: string | null;
  countryRecruitmentRate: number | null;
  sitesInitiatedTo75Percent: string | null;
}

export interface CountriesBreakdownMap {
  [key: string]: CountryBreakdownField;
}

interface TrialImpactAssessmentReporting extends TrialImpactAssessment {
  [key: string]: string | number | null | string[] | CountryBreakdownFieldReporting[] | CountriesBreakdownMap[] | null;
}

interface CountryBreakdownFieldReporting extends CountryBreakdownField {
  [key: string]: string | number | null;
}

export type TrialKeyMilestonesFields = Pick<
  TrialImpactAssessment,
  | 'ctaTo75PercentSitesWeeks'
  | 'ctaTo75PercentSitesWeeksValue'
  | 'ctaTo75PercentSitesWeeksNote'
  | 'sites25PercentInitiated'
  | 'sites25PercentInitiatedValue'
  | 'sites25PercentInitiatedNote'
  | 'sites75PercentInitiated'
  | 'sites75PercentInitiatedValue'
  | 'sites75PercentInitiatedNote'
  | 'fsrToLsrWeeks'
  | 'fsrToLsrWeeksValue'
  | 'fsrToLsrWeeksNote'
  | 'ctaToFsiWeeks'
  | 'ctaToFsiWeeksValue'
  | 'ctaToFsiWeeksNote'
  | 'finalCtaPackage'
  | 'finalCtaPackageValue'
  | 'finalCtaPackageNote'
  | 'firstSiteInitiated'
  | 'firstSiteInitiatedValue'
  | 'firstSiteInitiatedNote'
  | 'firstSubjectRandomized'
  | 'firstSubjectRandomizedValue'
  | 'firstSubjectRandomizedNote'
  | 'lastSiteInitiated'
  | 'lastSiteInitiatedValue'
  | 'lastSiteInitiatedNote'
  | 'fsiToLsrWeeks'
  | 'fsiToLsrWeeksValue'
  | 'fsiToLsrWeeksNote'
  | 'lastSubjectRandomized'
  | 'lastSubjectRandomizedValue'
  | 'lastSubjectRandomizedNote'
  | 'siteRecruitmentRate'
  | 'siteRecruitmentRateValue'
  | 'siteRecruitmentRateNote'
  | 'trialRecruitmentRate'
  | 'trialRecruitmentRateValue'
  | 'trialRecruitmentRateNote'
>;
export type KeyMilestonesValues = Pick<
  TrialKeyMilestonesFields,
  | 'ctaTo75PercentSitesWeeks'
  | 'ctaToFsiWeeks'
  | 'finalCtaPackage'
  | 'firstSiteInitiated'
  | 'firstSubjectRandomized'
  | 'lastSiteInitiated'
  | 'fsiToLsrWeeks'
  | 'fsrToLsrWeeks'
  | 'lastSubjectRandomized'
  | 'sites25PercentInitiated'
  | 'sites75PercentInitiated'
  | 'siteRecruitmentRate'
  | 'trialRecruitmentRate'
>;
export type TrialCountriesBreakdownFields = Pick<TrialImpactAssessment, 'selectedCountries' | 'selectedCountriesMap'>;
export type ImpactAssessmentSourceFields = Pick<
  TrialImpactAssessment,
  'sourceSimulationPercentile' | 'sourceScenarioSimulation' | 'sourceSystem'
>;
export type TrialImpactAssessmentMinimalProperties = Pick<
  TrialImpactAssessment,
  | 'sourceSimulationPercentile'
  | 'sourceScenarioSimulation'
  | 'sourceSystem'
  | 'ctaTo75PercentSitesWeeks'
  | 'ctaToFsiWeeks'
  | 'finalCtaPackage'
  | 'firstSiteInitiated'
  | 'firstSubjectRandomized'
  | 'lastSiteInitiated'
  | 'fsiToLsrWeeks'
  | 'fsrToLsrWeeks'
  | 'lastSubjectRandomized'
  | 'sites75PercentInitiated'
  | 'siteRecruitmentRate'
  | 'trialRecruitmentRate'
  | 'selectedCountries'
  | 'selectedCountriesMap'
>;
export type ImpactAssessmentFieldSuffixNote = 'Note';
export type ImpactAssessmentFieldSuffixValue = 'Value';

export interface ImpactAssessmentFieldConfig {
  title: string;
  control: AssumptionsFieldBody;
  sourceFormControl: FormControl<string | number> | null;
  valueFormControl: FormControl<string | number> | null;
  noteFormControl: FormControl<string> | null;
}

export interface ImpactAssessmentViewConfig {
  title: string;
  control: AssumptionsFieldBody;
  sourceFormControl: string | number | null;
  valueFormControl: string | number | null;
  noteFormControl: string | number | null;
}

export interface KeyMilestonesFieldReadConfig {
  title: string;
  control: AssumptionsFieldBody;
  source: string | number | null;
  value: string | number | null;
  note: string | null;
}

export interface CountryBreakDownFieldReadConfig {
  control: AssumptionsFieldBody;
  sitesSourceFormControl: FormControl<number> | null;
  subjectsSourceFormControl: FormControl<number> | null;
  sitesValueFormControl: FormControl<number> | null;
  subjectsValueFormControl: FormControl<number> | null;
  rationaleFormControl: FormControl<string | null> | null;
}

export type ColDefTrialImpactAssessment = Record<keyof TrialImpactAssessment, undefined>;
export type ImpactAssessmentSourceFieldsTitles = AssumptionsFieldsNames<ImpactAssessmentSourceFields>;
export type ImpactAssessmentSourceControls = AssumptionsSectionsFields<ImpactAssessmentSourceFieldsTitles>;
export type AssumptionsKeyMilestonesFieldsTitles = AssumptionsFieldsNames<TrialKeyMilestonesFields>;
export type AssumptionsKeyMilestonesControls = AssumptionsSectionsFields<AssumptionsKeyMilestonesFieldsTitles>;
export type AssumptionsCountriesBreakdownFieldsTitles = AssumptionsFieldsNames<TrialCountriesBreakdownFields>;
export type AssumptionsCountriesBreakdownControls =
  AssumptionsSectionsFields<AssumptionsCountriesBreakdownFieldsTitles>;
export type AssumptionsCountryBreakdownFieldsTitles = AssumptionsFieldsNames<CountryBreakdownField>;
export type AssumptionsCountryBreakdownControls = AssumptionsSectionsFields<AssumptionsCountryBreakdownFieldsTitles>;
export type AssumptionsImpactFieldsTitles = AssumptionsFieldsNames<TrialImpactAssessment>;
export type AssumptionsImpactControls = AssumptionsSectionsFields<AssumptionsImpactFieldsTitles>;
