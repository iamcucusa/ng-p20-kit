import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSource, DataSourceMapping } from '@data-sources/data-source';
import { allDataSourcesMappingToken, dataSourceTokens } from '@data-sources/data-source.settings';

@Component({
  selector: 'pg-data-source-metadata-title',
  standalone: true,
  imports: [CommonModule],
  providers: [...dataSourceTokens],
  template: `
    <div class="flex items-center gap-3 overflow-hidden text-xs font-medium uppercase text-text-secondary">
      <span class="inline-flex items-center justify-center w-[12px]">
        <span [ngClass]="dataSourceMapping[dataSource]" class="inline-flex h-3 w-3 rounded-full border-2"></span>
      </span>
      <span>{{ title }}</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSourceMetadataTitleComponent {
  @Input() title: string | null = null;
  @Input() dataSource: DataSource = 'unknown';

  readonly dataSourceMapping: DataSourceMapping = inject(allDataSourcesMappingToken);
}
