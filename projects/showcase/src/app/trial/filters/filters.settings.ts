import {
  AllCountriesFilter,
  SelectedCountriesFilter,
  TrialsComparisonFilter,
} from '@filters/filters';
import { InjectionToken } from '@angular/core';
import type { BenchmarkTrialsFilter, NonBenchmarkTrialsFilter } from '@benchmark/benchmark';
import type { BenchmarkDashboardFilter } from '@benchmark-dashboard/benchmark-dashboard';

export const allCountriesFilter: AllCountriesFilter = 'All Countries';
export const selectedCountriesFilter: SelectedCountriesFilter = 'Selected Countries';
export const allCountriesFilterToken = new InjectionToken<AllCountriesFilter>(allCountriesFilter);
export const selectedCountriesFilterToken = new InjectionToken<SelectedCountriesFilter>(selectedCountriesFilter);

export const dataFiltersTokens = [
  {
    provide: allCountriesFilterToken,
    useValue: allCountriesFilter,
  },
  {
    provide: selectedCountriesFilterToken,
    useValue: selectedCountriesFilter,
  },
];

export const trialComparisonFilterSet = (
  benchmarkTrials: number,
  nonBenchmarkTrials: number,
  benchmarkTrialsFilter: BenchmarkTrialsFilter,
  nonBenchmarkTrialsFilter: NonBenchmarkTrialsFilter
): TrialsComparisonFilter[] => {
  if (benchmarkTrials > 0 && nonBenchmarkTrials > 0) {
    return [benchmarkTrialsFilter, nonBenchmarkTrialsFilter];
  }

  if (benchmarkTrials > 0 && nonBenchmarkTrials === 0) {
    return [benchmarkTrialsFilter];
  }

  if (nonBenchmarkTrials > 0 && benchmarkTrials === 0) {
    return [nonBenchmarkTrialsFilter];
  }

  return [];
};

export const updateSelectedFilters = (
  selectedFilters: TrialsComparisonFilter[],
  filter: TrialsComparisonFilter
): TrialsComparisonFilter[] => {
  selectedFilters.indexOf(filter) === -1
    ? selectedFilters.push(filter)
    : selectedFilters.splice(selectedFilters.indexOf(filter), 1);

  return selectedFilters;
};
