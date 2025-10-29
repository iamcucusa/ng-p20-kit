import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { TabsModule } from 'primeng/tabs';
import { PageHeadingComponent } from '@core/page-heading.component';
import { TypographyDemoExampleComponent } from '@demo/theme/typography-demo-example.component';
import { SpacingTestExampleComponent } from '@demo/theme/spacing-test-example.component';
import { TrialHeadingExampleComponent } from '@demo/components/layout/trial-heading-example.component';
import { StatusDisplayExampleComponent } from '@demo/components/layout/status-display-example.component';
import { CardExampleComponent } from '@demo/components/containers/card-example.component';
import { CountrySelectExampleComponent } from '@demo/components/input-data-elements/country-select-example.component';
import { CountryFormExampleComponent } from '@demo/components/input-data-elements/country-form-example.component';
import { AssumptionsFieldExampleComponent } from '@demo/components/input-data-elements/assumptions-field-example.component';
import { StepHeadingComponent } from '@trial-step/step-heading.component';
import { DemoNavigationComponent } from '@demo/navigation/demo-navigation.component';

@Component({
  selector: 'kit-demo-container',
  standalone: true,
  imports: [
    CommonModule,
    DividerModule,
    BadgeModule,
    TabsModule,
    PageHeadingComponent,
    TypographyDemoExampleComponent,
    SpacingTestExampleComponent,
    TrialHeadingExampleComponent,
    StatusDisplayExampleComponent,
    CardExampleComponent,
    CountrySelectExampleComponent,
    CountryFormExampleComponent,
    AssumptionsFieldExampleComponent,
    StepHeadingComponent,
    DemoNavigationComponent
  ],
  template: `
    <main class="pg-demo-container" role="main" aria-labelledby="demo-page-title">
      <kit-page-heading>
        <ng-template #pageTitle id="demo-page-title">Demo System</ng-template>
        <ng-template #pageDescription>
          Theme system and component examples built with PrimeNG 20 and Tailwind CSS
        </ng-template>
        <ng-template #pageActions>
          <div class="flex items-center gap-2">
            <p-badge value="PrimeNG 20" severity="info"></p-badge>
            <p-badge value="Tailwind CSS" severity="success"></p-badge>
            <p-badge value="Angular 20" severity="warn"></p-badge>
          </div>
        </ng-template>
      </kit-page-heading>
      
      <section class="pg-demo-container__content" aria-labelledby="demo-page-title">

        <!-- Tab Navigation -->
        <p-tabs [value]="activeTabIndex">
          <p-tablist>
            <p-tab [value]="0">Components</p-tab>
            <p-tab [value]="1">Theme</p-tab>
          </p-tablist>
          
          <!-- Components Tab -->
          <p-tabpanel [value]="0">
            <div class="pg-step-container pg-step-container--two-column">
              <div class="pg-step-container__content">
                <!-- Sidebar Navigation -->
                <div class="pg-step-container__sidebar">
                  <kit-demo-navigation></kit-demo-navigation>
                </div>

                <!-- Main Content -->
                <div class="pg-step-container__main">
                  <div class="py-8">
                    <!-- Layout Section -->
                    <div id="layout" class="pg-demo-container__section">
                      <kit-step-heading 
                        title="Layout Components"
                        description="Reusable layout components for consistent page structure">
                      </kit-step-heading>
                      
                      <div class="pg-demo-container__section-items">
                      <!-- Trial Heading -->
                      <div id="trial-heading">
                        <kit-trial-heading-example></kit-trial-heading-example>
                      </div>

                      <!-- Status Display -->
                      <div id="status-display">
                        <kit-status-display-example></kit-status-display-example>
                      </div>
                      </div>
                    
                    </div>

                    <!-- Containers Section -->
                    <div id="containers" class="pg-demo-container__section">
                      <kit-step-heading 
                        title="Container Components"
                        description="Card system and container components for content organization">
                      </kit-step-heading>
                      
                      <div class="pg-demo-container__section-items">
                        <!-- Card System -->
                        <div id="card-system" class="pg-demo-container__section-item">
                          <kit-card-example></kit-card-example>
                        </div>
                      </div>
                      
                    </div>

                    <!-- Input Data Elements Section -->
                    <div id="input-data-elements" class="pg-demo-container__section">
                      <kit-step-heading 
                        title="Input Data Elements"
                        description="Form controls and input components for data collection">
                      </kit-step-heading>
                      
                      <div class="pg-demo-container__section-items">
                      <div id="country-select">
                      <p-divider align="right">
                        <div class="inline-flex items-center">
                          <span class="font-semibold">COUNTRY SELECT</span>
                        </div>
                      </p-divider>
                      </div>
                      <!-- Country Select -->
                      <kit-country-select-example></kit-country-select-example>
                      <kit-country-form-example></kit-country-form-example>

                      <!-- Assumptions Field -->
                      <div id="assumptions-field">
                        <p-divider align="right">
                          <div class="inline-flex items-center">
                            <span class="font-semibold">ASSUMPTIONS FIELD</span>
                          </div>
                        </p-divider>
                        <kit-assumptions-field-example></kit-assumptions-field-example>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </p-tabpanel>

          <!-- Theme Tab -->
          <p-tabpanel [value]="1">
            <div class="space-y-8">
              <!-- Typography System -->
              <div class="pg-card pg-card--padding-lg">
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">Typography System</h2>
                    <p class="text-sm text-blue-700">
                      Typography values are generated from centralized design tokens ensuring consistency across the application.
                    </p>
                  </div>
                </div>
                <kit-typography-demo-example></kit-typography-demo-example>
              </div>

              <!-- Spacing System -->
              <div class="pg-card pg-card--padding-lg">
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">Spacing System</h2>
                    <p class="text-sm text-green-700">
                      Spacing values match PrimeFlex 17 for seamless migration and consistency.
                    </p>
                  </div>
                </div>
                <kit-spacing-test-example></kit-spacing-test-example>
              </div>
            </div>
          </p-tabpanel>
        </p-tabs>
      </section>
    </main>
  `,
  styleUrls: ['./demo-container.component.scss', '../../styles/step-container.scss']
})
export class DemoContainerComponent {
  // Component for organizing demo examples
  
  /** Active tab index - Components tab (0) is active by default */
  activeTabIndex = 0;
}