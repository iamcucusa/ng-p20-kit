import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSource, DataSourceMapping } from '@data-sources/data-source';
import { allDataSourcesMappingToken, dataSourceTokens } from '@data-sources/data-source.settings';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'pg-assumptions-data-sources-field',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  providers: [...dataSourceTokens],
  template: `
    <div class="flex items-center gap-2 overflow-hidden text-text-secondary">
      <span class="inline-flex items-center justify-center w-[12px]">
        <span
          pTooltip="{{ dataSource }}"
          tooltipPosition="bottom"
          [ngClass]="dataSourceMapping[dataSource]"
          class="inline-flex h-3 w-3 rounded-full border-2"
          aria-hidden="true"
        ></span>
      </span>
      <span class="text-sm text-text-primary">{{ title }}</span>
    </div>
  `,
  styleUrls: ['./assumptions-data-sources-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssumptionsDataSourcesFieldComponent {
  @Input() title: string = '';
  @Input() dataSource: DataSource = 'CAPTARIO';

  readonly dataSourceMapping: DataSourceMapping = inject(allDataSourcesMappingToken);
}
