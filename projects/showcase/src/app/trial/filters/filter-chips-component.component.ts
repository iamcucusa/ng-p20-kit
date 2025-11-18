import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { CommonModule } from '@angular/common';

/**
 * Filter Chips Component
 * 
 * Displays filter chips that can be removed individually.
 * Used to show active filters in the benchmark dashboard.
 * 
 * @example
 * ```html
 * <pg-filter-chips
 *   [filters]="activeFilters"
 *   (remove)="onFilterRemove($event)">
 * </pg-filter-chips>
 * ```
 */
@Component({
  selector: 'pg-filter-chips',
  standalone: true,
  imports: [ChipModule, CommonModule],
  template: `
    <div class="flex items-center flex-wrap gap-2 justify-start">
      @for (filter of filters; track filter.filter) {
        <p-chip
          [label]="filter.filter"
          [removable]="filters.length > 1 && filter.closable"
          removeIcon="pi pi-times"
          (onRemove)="onRemove(filter.filter)"
          class="h-auto px-4 rounded-full">
        </p-chip>
      }
    </div>
  `,
  styleUrls: ['./filter-chips-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterChipsComponentComponent {
  @Input() filters: { filter: string; closable: boolean }[] = [];
  @Output() remove: EventEmitter<string> = new EventEmitter();

  onRemove(filter: string): void {
    this.remove.emit(filter);
  }
}
