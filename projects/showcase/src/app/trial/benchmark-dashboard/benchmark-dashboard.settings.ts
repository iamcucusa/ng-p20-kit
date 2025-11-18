import { InjectionToken } from '@angular/core';

/**
 * Benchmark Dashboard Filter Types
 */
export type BenchmarkDashboardFilter = 'Benchmark Dashboard';

/**
 * Benchmark Dashboard Filter Tokens
 */
export const benchmarkDashboardFilter: BenchmarkDashboardFilter = 'Benchmark Dashboard';

export const benchmarkDashboardFilterToken = new InjectionToken<BenchmarkDashboardFilter>('Benchmark Dashboard Filter');

/**
 * Benchmark Dashboard Tokens Provider
 */
export const benchmarkDashboardTokens = [
  {
    provide: benchmarkDashboardFilterToken,
    useValue: benchmarkDashboardFilter,
  },
];

