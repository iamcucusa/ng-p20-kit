import { TrialCountry } from '@country/country';
import { AssumptionsFieldsNames, AssumptionsSectionsFields } from '@assumptions/assumptions';

export interface TrialCountryRequirements {
  focusCountries: string | null;
  coreCountries: string | null;
  excludedCountries: string | null;
  additionalCountries: string | null;
  executionCountries: string | null;
  studyCountries: number | null;
  countryCTL: string | null;
  countrySML: string | null;
  regions: string | null;
  regionsMap: string | null;
}

export type CountryRequirementsFieldsTitles = AssumptionsFieldsNames<TrialCountryRequirements>;
export type CountryRequirementsControls = AssumptionsSectionsFields<CountryRequirementsFieldsTitles>;

export type CountryRequirementsAutofill = Pick<TrialCountryRequirements, 'studyCountries'>;
export type ColDefCountryRequirements = Record<keyof TrialCountryRequirements, undefined>;

export interface CountryRequirementsValues {
  focusCountries: string[];
  excludedCountries: string[];
  additionalCountries: string[];
  executionCountries: string[];
  coreCountries: string[];
  studyCountries: number | null;
}

export type TrialCountryPreview = {
  focus: Pick<TrialCountry, 'code' | 'code3' | 'name'> | null;
  excluded: Pick<TrialCountry, 'code' | 'code3' | 'name'> | null;
  additional: Pick<TrialCountry, 'code' | 'code3' | 'name'> | null;
  execution: Pick<TrialCountry, 'code' | 'code3' | 'name'> | null;
  core: Pick<TrialCountry, 'code' | 'code3' | 'name'> | null;
};
