import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import type { BenchmarkTrialsFilter, NonBenchmarkTrialsFilter } from '@benchmark/benchmark';
import { benchmarkTrialsFilterToken, nonBenchmarkTrialsFilterToken } from '@benchmark/benchmark.settings';
import type { TrialsComparisonFilter } from '@filters/filters';

/**
 * Trials Comparisons Filter Component
 * 
 * Allows filtering between benchmark and non-benchmark trials.
 * Displays checkboxes with trial counts for each filter option.
 * 
 * @example
 * ```html
 * <pg-trials-comparisons-filter
 *   [trialsData]="{ benchmarkTrials: 5, nonBenchmarkTrials: 3 }"
 *   (trialComparisonChange)="onFilterChange($event)">
 * </pg-trials-comparisons-filter>
 * ```
 */
@Component({
  selector: 'pg-trials-comparisons-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxModule, BadgeModule],
  template: `
    <div class="flex flex-col gap-2">
      <div class="flex w-full justify-between items-center">
        <div class="flex items-center gap-2"> <!-- TODO: Add tooltip for benchmark trials -->
          <p-checkbox
            [disabled]="benchmarkTrials === 0 || onlyBenchmarkData || benchmarkTrialsOnly"
            value="Benchmark Trials"
            inputId="benchmarkTrialsCount"
            [(ngModel)]="selectedTrials"
            (onChange)="changeTrialComparisonFilters(benchmarkTrialsFilter)">
          </p-checkbox>
          <label for="benchmarkTrialsCount" class="text-base text-text-primary cursor-pointer">{{ benchmarkTrialsFilter }}</label>
        </div>
        <p-badge [value]="benchmarkTrials" severity="secondary"></p-badge>
      </div>
      <div class="flex w-full justify-between items-center">
        <div class="flex items-center gap-2">
          <p-checkbox
            [disabled]="nonBenchmarkTrials === 0 || onlyNonBenchmarkData"
            value="Non Benchmark Trials"
            inputId="nonBenchmarkTrialsCount"
            [(ngModel)]="selectedTrials"
            (onChange)="changeTrialComparisonFilters(nonBenchmarkTrialsFilter)">
          </p-checkbox>
          <label for="nonBenchmarkTrialsCount" class="text-base text-text-primary cursor-pointer">{{ nonBenchmarkTrialsFilter }}</label>
        </div>
        <p-badge [value]="nonBenchmarkTrials" severity="secondary"></p-badge>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrialsComparisonsFilterComponent {
  @Output() trialComparisonChange: EventEmitter<TrialsComparisonFilter> = new EventEmitter<TrialsComparisonFilter>();

  readonly benchmarkTrialsFilter = inject(benchmarkTrialsFilterToken);
  readonly nonBenchmarkTrialsFilter = inject(nonBenchmarkTrialsFilterToken);

  benchmarkTrials = 0;
  nonBenchmarkTrials = 0;
  selectedTrials: TrialsComparisonFilter[] = [
    this.benchmarkTrialsFilter,
    this.nonBenchmarkTrialsFilter
  ];

  @Input() benchmarkTrialsOnly = false;

  @Input() set trialsData(data: { benchmarkTrials: number; nonBenchmarkTrials: number }) {
    this.benchmarkTrials = data.benchmarkTrials;
    this.nonBenchmarkTrials = data.nonBenchmarkTrials;

    if (this.benchmarkTrials > 0 && this.nonBenchmarkTrials > 0) {
      this.selectedTrials = [this.benchmarkTrialsFilter, this.nonBenchmarkTrialsFilter];
    }

    if (this.benchmarkTrials > 0 && this.nonBenchmarkTrials === 0) {
      this.selectedTrials = [this.benchmarkTrialsFilter];
    }

    if (this.nonBenchmarkTrials > 0 && this.benchmarkTrials === 0) {
      this.selectedTrials = [this.nonBenchmarkTrialsFilter];
    }
  }

  get onlyBenchmarkData(): boolean {
    return this.selectedTrials.indexOf(this.nonBenchmarkTrialsFilter) === -1;
  }

  get onlyNonBenchmarkData(): boolean {
    return this.selectedTrials.indexOf(this.benchmarkTrialsFilter) === -1;
  }

  changeTrialComparisonFilters(value: TrialsComparisonFilter) {
    this.trialComparisonChange.emit(value);
  }
}
