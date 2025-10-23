import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Step One Overview Section Component
 * 
 * Provides an overview of all assumptions and scenarios for the trial.
 * This is the main landing page for Step 1 (Assumptions Tracker).
 */
@Component({
  selector: 'kit-step-one-overview-section',
  standalone: true,
  imports: [CommonModule  ],
  styles: [`
    .pg-overview-grid {
      gap: var(--spacing-3);
    }
  `],
  template: `
    <div class="p-6 space-y-6">
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Trial Assumptions Overview</h2>
        <p class="text-gray-600 mb-6">
          This section provides a comprehensive overview of all assumptions and scenarios for your trial.
          Use the navigation on the left to access specific sections and scenarios.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pg-overview-grid">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 class="text-lg font-medium text-blue-900 mb-2">Trial Details</h3>
            <p class="text-blue-700 text-sm">Basic trial information and parameters</p>
          </div>
          
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 class="text-lg font-medium text-green-900 mb-2">Scenarios</h3>
            <p class="text-green-700 text-sm">Different trial scenarios and variations</p>
          </div>
          
          <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 class="text-lg font-medium text-purple-900 mb-2">Parameters</h3>
            <p class="text-purple-700 text-sm">Trial parameters and configuration</p>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div class="flex flex-wrap gap-3">
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Add New Scenario
          </button>
          <button class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            Review Assumptions
          </button>
          <button class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            Export Data
          </button>
        </div>
      </div>
    </div>
  `
})
export class StepOneOverviewSection {}
