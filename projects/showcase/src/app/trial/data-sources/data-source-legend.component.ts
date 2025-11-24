import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataSource, DataSourceMapping } from '@data-sources/data-source';
import { allDataSourcesMappingToken, dataSourceTokens } from '@data-sources/data-source.settings';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'pg-data-source-legend',
  standalone: true,
  imports: [CommonModule, RouterModule, TooltipModule],
  providers: [...dataSourceTokens],
  template: `
    <div class="flex flex-wrap items-center justify-start gap-2 bg-surface-card p-2">
      <div class="flex items-center gap-3 text-sm text-text-secondary">
        <span class="inline-flex items-center justify-center w-4">
          <span
            class="inline-flex h-4 w-4 rounded-full border-2"
            [ngClass]="dataSourceMapping[dataSource]"
            aria-hidden="true"
          ></span>
        </span>
        <span class="font-semibold uppercase tracking-wide text-text-primary">{{ dataSource }}</span>
      </div>
      <a
        pTooltip="More info about data sources"
        tooltipPosition="top"
        [routerLink]="['/help', 'system-overview', 'data-sources']"
        target="_blank"
        class="inline-flex items-center gap-2 font-medium text-text-secondary transition-colors hover:text-primary-500 hover:no-underline"
      >
        <i class="pi pi-question-circle text-lg" aria-hidden="true"></i>
      </a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSourceLegendComponent {
  @Input() dataSource: DataSource = 'unknown';

  readonly dataSourceMapping: DataSourceMapping = inject(allDataSourcesMappingToken);
}
