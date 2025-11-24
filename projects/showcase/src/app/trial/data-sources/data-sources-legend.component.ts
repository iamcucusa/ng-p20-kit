import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataSourceMapping } from '@data-sources/data-source';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'pg-data-sources-legend',
  standalone: true,
  imports: [CommonModule, RouterModule, TooltipModule],
  template: `
    <div
      class="bg-surface-card"
      [class.p-4]="dataSourceEntries.length > 1"
      [class.p-3]="dataSourceEntries.length <= 1"
    >
      <div class="flex flex-wrap items-center gap-2 pb-3" [class.justify-between]="dataSourceEntries.length > 1">
        <span class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-text-primary">
          <i class="pi pi-database text-base" aria-hidden="true"></i>
          <span>Data Sources</span>
        </span>
        <a
          pTooltip="More info about data sources"
          tooltipPosition="top"
          [routerLink]="['/help', 'system-overview', 'data-sources']"
          target="_blank"
          class="inline-flex items-center gap-2 text-primary-500 text-sm font-medium hover:underline"
        >
          <i class="pi pi-question-circle text-lg" aria-hidden="true"></i>
        </a>
      </div>

      <div class="flex flex-wrap gap-4">
        @for (entry of dataSourceEntries; track trackByLabel($index, entry)) {
          <div class="flex items-center gap-3 text-sm font-medium text-text-secondary">
            <span class="inline-flex items-center justify-center w-4">
              <span class="inline-flex h-4 w-4 rounded-full border-2" [ngClass]="entry.className" aria-hidden="true"></span>
            </span>
            <span class="text-text-primary">{{ entry.label }}</span>
          </div>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSourcesLegendComponent {
  dataSourceEntries: { label: string; className: string }[] = [];

  @Input() set dataSources(dataSourceMapping: Partial<DataSourceMapping> | null | undefined) {
    if (!dataSourceMapping) {
      this.dataSourceEntries = [];
      return;
    }

    this.dataSourceEntries = Object.entries(dataSourceMapping).map(([label, className]) => ({
      label,
      className: className ?? '',
    }));
  }

  trackByLabel(_: number, entry: { label: string }): string {
    return entry.label;
  }
}
