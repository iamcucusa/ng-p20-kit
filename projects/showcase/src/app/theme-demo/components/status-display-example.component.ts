import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusDisplayComponent } from '../../core/status/status-display.component';

/**
 * Status Display Example Component
 * 
 * Demonstrates how to use the StatusDisplayComponent in various scenarios.
 * This component shows different usage patterns and configurations.
 */
@Component({
  selector: 'kit-status-display-example',
  template: `
    <div class="p-4 space-y-4">
      <h2 class="text-xl font-semibold mb-4">Status Display Examples</h2>
      
      <!-- Basic Usage -->
      <div class="space-y-2">
        <h3 class="text-lg font-medium">Basic Usage</h3>
        <div class="flex gap-4">
          <kit-status-display [status]="'Draft'"></kit-status-display>
          <kit-status-display [status]="'Final'"></kit-status-display>
          <kit-status-display [status]="'Replicating'"></kit-status-display>
        </div>
      </div>

      <!-- With Permissions -->
      <div class="space-y-2">
        <h3 class="text-lg font-medium">With Permissions</h3>
        <div class="flex gap-4">
          <kit-status-display 
            [status]="'Final'" 
            [permissions]="['CREATE FINAL VERSION']">
          </kit-status-display>
          <kit-status-display 
            [status]="'Final'" 
            [permissions]="[]">
          </kit-status-display>
        </div>
      </div>

      <!-- Without Help Links -->
      <div class="space-y-2">
        <h3 class="text-lg font-medium">Without Help Links</h3>
        <div class="flex gap-4">
          <kit-status-display 
            [status]="'Draft'" 
            [showHelp]="false">
          </kit-status-display>
          <kit-status-display 
            [status]="'Final'" 
            [showHelp]="false">
          </kit-status-display>
        </div>
      </div>

      <!-- Custom Classes -->
      <div class="space-y-2">
        <h3 class="text-lg font-medium">Custom Classes</h3>
        <div class="flex gap-4">
          <kit-status-display 
            [status]="'Draft'" 
            customClasses="custom-draft-style">
          </kit-status-display>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, StatusDisplayComponent]
})
export class StatusDisplayExampleComponent {
  // This component demonstrates various usage patterns
  // In a real application, you would use this component to show
  // how the StatusDisplayComponent works in different scenarios
}
