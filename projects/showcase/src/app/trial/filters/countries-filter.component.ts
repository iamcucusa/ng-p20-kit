import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { benchmarkDashboardTokens } from '@benchmark-dashboard/benchmark-dashboard.settings';
import { benchmarkDataTypeTokens } from '@benchmark/benchmark.settings';
import type { AllCountriesFilter, CountriesFilter, SelectedCountriesFilter } from '@filters/filters';

type CountriesFilterOption = {
  icon: string;
  label: string;
  value: CountriesFilter;
  count: number;
};
import {
  allCountriesFilterToken,
  dataFiltersTokens,
  selectedCountriesFilterToken,
} from '@filters/filters.settings';

@Component({
  selector: 'pg-countries-filter',
  providers: [...benchmarkDashboardTokens, ...benchmarkDataTypeTokens, ...dataFiltersTokens],
  standalone: true,
  imports: [CommonModule, SelectButtonModule, FormsModule, BadgeModule],
  template: `
    <div class="flex justify-center items-center">
      <p-selectButton
        [options]="filterOptions"
        [(ngModel)]="filter"
        optionLabel="label"
        optionValue="value"
        [allowEmpty]="false"
        (onOptionClick)="filterCountries()"
        [disabled]="disabled">
        <ng-template let-item pTemplate="item">
          <div class="flex items-center justify-center gap-2">
            <span>{{ item.label }}</span>
            <span class="inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
              {{ item.count ?? 0 }}
            </span>
          </div>
        </ng-template>
      </p-selectButton>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesFilterComponent {
  @Output() filterEventEmitter: EventEmitter<CountriesFilter> = new EventEmitter();

  @Input() filter!: CountriesFilter;
  @Input() disabled = false;
  @Input() loading = false;

  readonly allCountriesFilter: AllCountriesFilter = inject(allCountriesFilterToken);
  readonly selectedCountriesFilter: SelectedCountriesFilter = inject(selectedCountriesFilterToken);

  filterOptions: CountriesFilterOption[] = [
    { icon: 'pi pi-globe', label: this.allCountriesFilter, value: this.allCountriesFilter, count: 0 },
    { icon: 'pi pi-list-check', label: this.selectedCountriesFilter, value: this.selectedCountriesFilter, count: 0 },
  ];

  constructor() {
    this.filter = this.allCountriesFilter;
  }

  @Input() set allCountriesTotal(total: number) {
    this.filterOptions = [
      { icon: 'pi pi-globe', label: this.allCountriesFilter, value: this.allCountriesFilter, count: total },
      { icon: 'pi pi-list-check', label: this.selectedCountriesFilter, value: this.selectedCountriesFilter, count: this.filterOptions[1].count },
    ];
  }

  @Input() set selectedCountriesTotal(total: number) {
    this.filterOptions = [
      { icon: 'pi pi-globe', label: this.allCountriesFilter, value: this.allCountriesFilter, count: this.filterOptions[0].count },
      { icon: 'pi pi-list-check', label: this.selectedCountriesFilter, value: this.selectedCountriesFilter, count: total },
    ];
  }
  filterCountries(): void {
    this.filterEventEmitter.emit(this.filter);
  }
}
