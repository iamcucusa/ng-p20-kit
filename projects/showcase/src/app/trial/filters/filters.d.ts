import type { BenchmarkTrialsFilter, NonBenchmarkTrialsFilter } from '@benchmark/benchmark';

export type AllCountriesFilter = 'All Countries';
export type SelectedCountriesFilter = 'Selected Countries';
export type CountriesDataSourceFilter = 'all' | 'selected';
export type CountriesFilter = AllCountriesFilter | SelectedCountriesFilter;
export type TrialsComparisonFilter = BenchmarkTrialsFilter | NonBenchmarkTrialsFilter;
export type TrialsSourceDataType = 'All Trials' | TrialsComparisonFilter;
