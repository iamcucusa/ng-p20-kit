import { InjectionToken } from '@angular/core';

/**
 * Benchmark Filter Types
 */
export type BenchmarkTrialsFilter = 'Benchmark Trials';
export type NonBenchmarkTrialsFilter = 'Non Benchmark Trials';

/**
 * Benchmark Filter Tokens
 */
export const benchmarkTrialsFilter: BenchmarkTrialsFilter = 'Benchmark Trials';
export const nonBenchmarkTrialsFilter: NonBenchmarkTrialsFilter = 'Non Benchmark Trials';

export const benchmarkTrialsFilterToken = new InjectionToken<BenchmarkTrialsFilter>('Benchmark Trials Filter');
export const nonBenchmarkTrialsFilterToken = new InjectionToken<NonBenchmarkTrialsFilter>('Non Benchmark Trials Filter');

/**
 * Benchmark Data Type Tokens Provider
 */
export const benchmarkDataTypeTokens = [
  {
    provide: benchmarkTrialsFilterToken,
    useValue: benchmarkTrialsFilter,
  },
  {
    provide: nonBenchmarkTrialsFilterToken,
    useValue: nonBenchmarkTrialsFilter,
  },
];

