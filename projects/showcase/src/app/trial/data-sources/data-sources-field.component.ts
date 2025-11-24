import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSource, DataSourceMapping } from '@data-sources/data-source';
import { allDataSourcesMappingToken, dataSourceTokens } from '@data-sources/data-source.settings';

@Component({
  selector: 'pg-data-sources-field',
  standalone: true,
  imports: [CommonModule],
  providers: [...dataSourceTokens],
  template: `
    <div class="flex items-center gap-3 overflow-hidden text-sm text-text-secondary">
      <span class="inline-flex items-center justify-center w-[12px]">
        <span
          [ngClass]="dataSourceMapping[dataSource]"
          class="inline-flex h-3 w-3 rounded-full border-2"
          aria-hidden="true"
        ></span>
      </span>
      <span class="font-medium text-text-primary">{{ title }}</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSourcesFieldComponent {
  @Input() title: string = '';
  @Input() dataSource: DataSource = 'DQS';

  readonly dataSourceMapping: DataSourceMapping = inject(allDataSourcesMappingToken);
}
