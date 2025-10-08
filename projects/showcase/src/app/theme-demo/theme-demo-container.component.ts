import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { TypographyDemoComponent } from './typography-demo.component';
import { SpacingTestComponent } from './spacing-test.component';

@Component({
  selector: 'app-theme-demo-container',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    DividerModule,
    BadgeModule,
    TypographyDemoComponent,
    SpacingTestComponent
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
            <p-card header="Typography System" class="h-full w-full">
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
                <app-typography-demo></app-typography-demo>
              </div>
            </p-card>
          </div>

          <!-- Spacing Demo -->
          <div class="space-y-4 w-full">
            <p-card header="Spacing System" class="h-full w-full">
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
                <app-spacing-test></app-spacing-test>
              </div>
            </p-card>
          </div>
        </div>

        <!-- Design System Information -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <!-- Typography Info -->
          <p-card header="Typography Features" class="h-full w-full">
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
          </p-card>

          <!-- Spacing Info -->
          <p-card header="Spacing Features" class="h-full w-full">
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
          </p-card>
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
