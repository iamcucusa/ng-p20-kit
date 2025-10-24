import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { TypographyDemoComponent } from './typography-demo.component';
import { SpacingTestComponent } from './spacing-test.component';
import { TrialHeadingExampleComponent } from './components/trial-heading-example.component';
import { StatusDisplayExampleComponent } from './components/status-display-example.component';
import { CardExampleComponent } from './components/card-example.component';
import { CountrySelectExampleComponent } from './components/country-select-example.component';
import { CountryFormExampleComponent } from './components/country-form-example.component';

@Component({
  selector: 'kit-theme-demo-container',
  standalone: true,
  imports: [
    CommonModule,
    DividerModule,
    BadgeModule,
    TypographyDemoComponent,
    SpacingTestComponent,
    TrialHeadingExampleComponent,
    StatusDisplayExampleComponent,
    CardExampleComponent,
    CountrySelectExampleComponent,
    CountryFormExampleComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header Section -->
        <div class="text-center mb-12">
          <div class="flex items-center justify-center mb-4">
            <i class="pi pi-palette text-4xl text-blue-600 mr-3"></i>
            <h1 class="text-4xl font-bold text-gray-900">Theme Demo</h1>
          </div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive showcase of typography and spacing utilities built with PrimeNG 20 and Tailwind CSS
          </p>
          <div class="flex justify-center mt-4 space-x-2">
            <p-badge value="PrimeNG 20" severity="info"></p-badge>
            <p-badge value="Tailwind CSS" severity="success"></p-badge>
            <p-badge value="Angular 20" severity="warn"></p-badge>
          </div>
        </div>

        <!-- Demo Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 w-full">
          <!-- Typography Demo -->
          <div class="space-y-4 w-full">
            <div class="pg-card pg-card--padding-md h-full w-full">
              <div class="pg-card__header">
                <div class="pg-card__title">Typography System</div>
              </div>
              <div class="pg-card__content">
              <div class="space-y-4">
                <p class="text-gray-600 leading-relaxed">
                  Explore the complete typography system with font sizes, weights, and line heights.
                  All typography utilities are generated from design tokens for consistency.
                </p>
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div class="flex items-center mb-2">
                    <i class="pi pi-info-circle text-blue-600 mr-2"></i>
                    <span class="text-sm font-medium text-blue-800">Design Tokens</span>
                  </div>
                  <p class="text-sm text-blue-700">
                    Typography values are generated from centralized design tokens ensuring consistency across the application.
                  </p>
                </div>
                <kit-typography-demo></kit-typography-demo>
              </div>
              </div>
            </div>
          </div>

          <!-- Spacing Demo -->
          <div class="space-y-4 w-full">
            <div class="pg-card pg-card--padding-md h-full w-full">
              <div class="pg-card__header">
                <div class="pg-card__title">Spacing System</div>
              </div>
              <div class="pg-card__content">
              <div class="space-y-4">
                <p class="text-gray-600 leading-relaxed">
                  Test the spacing system with PrimeFlex-compatible values.
                  All spacing utilities use CSS variables for consistent spacing across components.
                </p>
                <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div class="flex items-center mb-2">
                    <i class="pi pi-check-circle text-green-600 mr-2"></i>
                    <span class="text-sm font-medium text-green-800">PrimeFlex Compatible</span>
                  </div>
                  <p class="text-sm text-green-700">
                    Spacing values match PrimeFlex 17 for seamless migration and consistency.
                  </p>
                </div>
                <kit-spacing-test></kit-spacing-test>
              </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Component Examples -->
        <div class="mb-12 w-full">
          <div class="pg-card pg-card--padding-md w-full">
            <div class="pg-card__header">
              <div class="pg-card__title">Component Examples</div>
            </div>
            <div class="pg-card__content">
            <div class="space-y-4">
              <p class="text-gray-600 leading-relaxed">
                Real-world examples of how to use components from the design system.
                These examples demonstrate proper implementation patterns and best practices.
              </p>
              <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div class="flex items-center mb-2">
                  <i class="pi pi-code text-purple-600 mr-2"></i>
                  <span class="text-sm font-medium text-purple-800">Implementation Examples</span>
                </div>
                <p class="text-sm text-purple-700">
                  These examples show how to properly implement and use design system components in your applications.
                </p>
              </div>
              <kit-trial-heading-example></kit-trial-heading-example>
              <kit-status-display-example></kit-status-display-example>
            </div>
            </div>
          </div>
        </div>

        <!-- Card System Examples -->
        <div class="mb-12 w-full bg-transparent">
          <div class="space-y-4">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Card System Migration</h2>
              <p class="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Migration from PrimeFlex 17 card system to modern theme-based card components.
                These examples show how to replace old PrimeFlex classes with new theme tokens.
              </p>
              <div class="bg-orange-50 border border-orange-200 rounded-lg p-4 max-w-2xl mx-auto mt-6">
                <div class="flex items-center justify-center mb-2">
                  <i class="pi pi-refresh text-orange-600 mr-2"></i>
                  <span class="text-sm font-medium text-orange-800">Migration Ready</span>
                </div>
                <p class="text-sm text-orange-700 text-center">
                  Card system replaces old PrimeFlex classes with modern theme tokens for better consistency and maintainability.
                </p>
              </div>
            </div>
            <kit-card-example></kit-card-example>
          </div>
        </div>

        <!-- Country Select Examples -->
        <div class="mb-12">
          <div class="pg-card pg-card--padding-lg w-full">
            <div class="pg-card__header">
              <div class="pg-card__title">Country Select Components</div>
              <div class="pg-card__description">
                Reusable country selection components with PrimeNG 20 integration, custom templates, and full TypeScript support.
              </div>
            </div>
            <div class="pg-card__content">
              <div class="space-y-8">
                <!-- Country Select Example -->
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Basic Country Select</h3>
                  <kit-country-select-example></kit-country-select-example>
                </div>
                
                <p-divider></p-divider>
                
                <!-- Country Form Example -->
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Country Form Integration</h3>
                  <kit-country-form-example></kit-country-form-example>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Design System Information -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <!-- Typography Info -->
          <div class="pg-card pg-card--padding-md h-full w-full">
            <div class="pg-card__header">
              <div class="pg-card__title">Typography Features</div>
            </div>
            <div class="pg-card__content">
            <div class="space-y-6">
              <div class="flex items-start space-x-3">
                <div class="bg-blue-100 rounded-full p-2">
                  <i class="pi pi-font text-blue-600"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Font System</h3>
                  <ul class="space-y-1 text-sm text-gray-600">
                    <li class="flex items-center">
                      <i class="pi pi-check text-green-500 mr-2"></i>
                      13 font sizes (xs to 9xl)
                    </li>
                    <li class="flex items-center">
                      <i class="pi pi-check text-green-500 mr-2"></i>
                      9 font weights (thin to black)
                    </li>
                    <li class="flex items-center">
                      <i class="pi pi-check text-green-500 mr-2"></i>
                      6 line heights (none to loose)
                    </li>
                    <li class="flex items-center">
                      <i class="pi pi-check text-green-500 mr-2"></i>
                      CSS variables for consistency
                    </li>
                    <li class="flex items-center">
                      <i class="pi pi-check text-green-500 mr-2"></i>
                      Responsive typography support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>

          <!-- Spacing Info -->
          <div class="pg-card pg-card--padding-md h-full w-full">
            <div class="pg-card__header">
              <div class="pg-card__title">Spacing Features</div>
            </div>
            <div class="pg-card__content">
            <div class="space-y-6">
              <div class="flex items-start space-x-3">
                <div class="bg-green-100 rounded-full p-2">
                  <i class="pi pi-arrows-alt text-green-600"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Spacing System</h3>
                  <ul class="space-y-1 text-sm text-gray-600">
                    <li class="flex items-center">
                      <i class="pi pi-check text-green-500 mr-2"></i>
                      9 spacing values (0 to 8)
                    </li>
                    <li class="flex items-center">
                      <i class="pi pi-check text-green-500 mr-2"></i>
                      PrimeFlex-compatible scale
                    </li>
                    <li class="flex items-center">
                      <i class="pi pi-check text-green-500 mr-2"></i>
                      CSS variables for reuse
                    </li>
                    <li class="flex items-center">
                      <i class="pi pi-check text-green-500 mr-2"></i>
                      Responsive spacing support
                    </li>
                    <li class="flex items-center">
                      <i class="pi pi-check text-green-500 mr-2"></i>
                      Consistent with design tokens
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <!-- Footer Info -->
        <div class="mt-12 text-center">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div class="flex items-center justify-center mb-4">
              <i class="pi pi-cog text-2xl text-gray-400 mr-3"></i>
              <h3 class="text-lg font-semibold text-gray-900">Automated Generation</h3>
            </div>
            <p class="text-gray-600 mb-4">
              All typography and spacing values are automatically generated from design tokens,
              ensuring consistency and maintainability across the entire application.
            </p>
            <div class="flex justify-center space-x-4 text-sm text-gray-500">
              <span class="flex items-center">
                <i class="pi pi-code mr-1"></i>
                Generated from tokens
              </span>
              <span class="flex items-center">
                <i class="pi pi-refresh mr-1"></i>
                Auto-updated
              </span>
              <span class="flex items-center">
                <i class="pi pi-shield mr-1"></i>
                Type-safe
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ThemeDemoContainerComponent {
  // Component for showcasing theme utilities
}
