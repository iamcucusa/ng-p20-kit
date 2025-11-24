import {
  ColDefCountryRequirements,
  CountryRequirementsControls,
  CountryRequirementsFieldsTitles,
  TrialCountryPreview,
} from '@assumptions/sections/country-requirements';
import { InjectionToken } from '@angular/core';
import { AutofillState } from '@assumptions/sections/autofill';

export const countryRequirementsFields: CountryRequirementsFieldsTitles = {
  focusCountries: 'focusCountries',
  coreCountries: 'coreCountries',
  excludedCountries: 'excludedCountries',
  additionalCountries: 'additionalCountries',
  executionCountries: 'executionCountries',
  studyCountries: 'studyCountries',
  countryCTL: 'countryCTL',
  countrySML: 'countrySML',
  regionsMap: 'regionsMap',
  regions: 'regions',
};
export const countryRequirementsControls: CountryRequirementsControls = {
  focusCountries: {
    name: countryRequirementsFields.focusCountries,
    export: true,
    title: 'Focus Countries',
  },
  coreCountries: {
    name: countryRequirementsFields.coreCountries,
    export: true,
    title: 'Core Countries',
  },
  excludedCountries: {
    name: countryRequirementsFields.excludedCountries,
    export: true,
    title: 'Excluded Countries',
  },
  additionalCountries: {
    name: countryRequirementsFields.additionalCountries,
    export: true,
    title: 'Additional Countries',
  },
  executionCountries: {
    name: countryRequirementsFields.executionCountries,
    export: true,
    title: 'Execution Countries',
  },
  studyCountries: {
    name: countryRequirementsFields.studyCountries,
    export: true,
    title: 'Study Countries',
    unit: '#',
  },
  countryCTL: {
    name: countryRequirementsFields.countryCTL,
    export: true,
    title: 'Country of CTL',
  },
  countrySML: {
    name: countryRequirementsFields.countrySML,
    export: true,
    title: 'Country of SML',
  },
  regions: { name: countryRequirementsFields.regions, export: true, title: 'Regions' },
  regionsMap: {
    name: countryRequirementsFields.regionsMap,
    export: false,
    title: 'Percentages',
  },
};
export const countryRequirementsControlsToken = new InjectionToken<CountryRequirementsControls>('countryRequirements Page Form Fields');
export const countryRequirementsAutoFillState: AutofillState = {
  [countryRequirementsControls.studyCountries.name]: true,
};
export const countryRequirementsAutoFillStateToken = new InjectionToken<AutofillState>('countryRequirements Autofill Fields');
export const defCountryRequirements: ColDefCountryRequirements = {
  studyCountries: undefined,
  focusCountries: undefined,
  coreCountries: undefined,
  excludedCountries: undefined,
  additionalCountries: undefined,
  executionCountries: undefined,
  countryCTL: undefined,
  countrySML: undefined,
  regions: undefined,
  regionsMap: undefined,
};
export const defaultFocusCountries: TrialCountryPreview[] = [
  {
    focus: {
      code: 'US',
      name: 'United States',
      code3: 'USA',
    },
    additional: null,
    excluded: null,
    execution: null,
    core: null,
  },
  {
    focus: { name: 'China', code3: 'CHN', code: 'CN' },
    additional: null,
    excluded: null,
    execution: null,
    core: null,
  },
  {
    focus: { name: 'Japan', code3: 'JPN', code: 'JP' },
    additional: null,
    excluded: null,
    execution: null,
    core: null,
  },
  {
    focus: { name: 'Germany', code3: 'DEU', code: 'DE' },
    additional: null,
    excluded: null,
    execution: null,
    core: null,
  },
];

export const countryRequirementsFormProviders = [
  {
    provide: countryRequirementsControlsToken,
    useValue: countryRequirementsControls,
  },
  {
    provide: countryRequirementsAutoFillStateToken,
    useValue: countryRequirementsAutoFillState,
  }
];
