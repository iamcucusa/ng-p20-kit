import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DataSourcesFieldComponent } from '@data-sources/data-sources-field.component';
import { DataSourceLegendComponent } from '@data-sources/data-source-legend.component';
import { DataSourceMetadataTitleComponent } from '@data-sources/data-source-metadata-title.component';
import { AssumptionsDataSourcesFieldComponent } from '@data-sources/assumptions-data-sources-field.component';
import { DataSourcesLegendComponent } from '@data-sources/data-sources-legend.component';
import { DemoSectionHeadingComponent } from '@demo/components/shared/demo-section-heading.component';

@Component({
  selector: 'kit-datasources-example',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    DataSourcesFieldComponent,
    DataSourceLegendComponent,
    DataSourceMetadataTitleComponent,
    AssumptionsDataSourcesFieldComponent,
    DataSourcesLegendComponent,
    DemoSectionHeadingComponent
  ],
  template: `
    <kit-demo-section-heading label="DATA SOURCES"></kit-demo-section-heading>
    <div class="pg-card pg-card--padding-lg">
      <header class="pg-card__header">
        <h2 class="pg-card__title">Data Sources Components</h2>
        <p class="pg-card__description">
          Visual indicators that show where assumptions data originates. Built with PrimeNG 20 + Tailwind.
        </p>
      </header>

      <div class="pg-card__content space-y-6">
        <section>
          <h3 class="text-sm font-semibold text-text-secondary uppercase mb-3">Standalone field</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <pg-data-sources-field
              title="Clinical Trial Management System (CTMS)"
              dataSource="CTMS">
            </pg-data-sources-field>

            <pg-data-sources-field
              title="Digital Quality System (DQS)"
              dataSource="DQS">
            </pg-data-sources-field>
          </div>
        </section>

        <section>
          <h3 class="text-sm font-semibold text-text-secondary uppercase mb-3">Metadata title</h3>
          <pg-data-source-metadata-title
            title="Site Recruitment Rate"
            dataSource="CITELINE">
          </pg-data-source-metadata-title>
        </section>

        <section>
          <h3 class="text-sm font-semibold text-text-secondary uppercase mb-3">Legend / map</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <pg-data-source-legend dataSource="CAPTARIO"></pg-data-source-legend>
            <pg-data-sources-legend
              [dataSources]="{
                CTMS: 'bg-cyan-400 border-cyan-400',
                DQS: 'bg-indigo-400 border-indigo-400',
                CAPTARIO: 'bg-purple-400 border-purple-400'
              }">
            </pg-data-sources-legend>
          </div>
        </section>

        <section class="space-y-3">
          <h3 class="text-sm font-semibold text-text-secondary uppercase">Assumptions field usage</h3>
          <pg-assumptions-data-sources-field
            title="Scenario Simulation"
            dataSource="CAPTARIO">
          </pg-assumptions-data-sources-field>
          <pg-assumptions-data-sources-field
            title="Site Initiation Forecast"
            dataSource="CTMS">
          </pg-assumptions-data-sources-field>
        </section>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatasourcesExampleComponent {}

