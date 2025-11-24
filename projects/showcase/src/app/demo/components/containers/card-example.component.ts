import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';

/**
 * Card Example Component
 * Demonstrates the new card system migration from PrimeFlex
 */
@Component({
  selector: 'kit-card-example',
  standalone: true,
  imports: [CommonModule, ButtonModule, BadgeModule, DividerModule],
  template: `
    <div class="pg-card-examples">
      <p-divider align="right" class="mb-6">
        <div class="inline-flex items-center">
          <span class="font-semibold text-sm uppercase text-text-secondary">CARD SYSTEM</span>
        </div>
      </p-divider>
      
      <!-- Basic Card (replaces old PrimeFlex implementation) -->
      <div class="pg-card pg-card--padding-md">
        <div class="pg-card__header">
          <div class="pg-card__title">Basic Card</div>
          <p class="pg-card__description">
            Basic card with modern theme tokens.
          </p>
        </div>
        <div class="pg-card__content pg-card__content--fluid">
          <div class="p-4 bg-blue-50 rounded border">
            <h4 class="font-medium text-blue-900 mb-2">Form Field 1</h4>
            <p class="text-blue-700 text-sm">Content goes here</p>
          </div>
          <div class="p-4 bg-green-50 rounded border">
            <h4 class="font-medium text-green-900 mb-2">Form Field 2</h4>
            <p class="text-green-700 text-sm">More content</p>
          </div>
          <div class="p-4 bg-purple-50 rounded border">
            <h4 class="font-medium text-purple-900 mb-2">Form Field 3</h4>
            <p class="text-purple-700 text-sm">Additional content</p>
          </div>
        </div>
      </div>

      <!-- Elevated Card -->
      <div class="pg-card pg-card--padding-lg pg-card--elevated">
        <div class="pg-card__header">
          <div class="pg-card__title">Elevated Card</div>
          <p class="pg-card__description">
            This card has a stronger shadow and larger padding for emphasis.
          </p>
        </div>
        <div class="pg-card__content pg-card__content--single">
          <p class="text-gray-600">Single column content with elevated styling.</p>
        </div>
        <div class="pg-card__actions">
          <p-button label="Action" size="small" [outlined]="true"></p-button>
          <p-button label="Primary" size="small"></p-button>
        </div>
      </div>

      <!-- Small Card -->
      <div class="pg-card pg-card--padding-sm pg-card--small">
        <div class="pg-card__header">
          <div class="pg-card__title">Compact Card</div>
          <p class="pg-card__description">Smaller padding and typography for compact layouts.</p>
        </div>
        <div class="pg-card__content pg-card__content--single">
          <div class="flex items-center gap-2">
            <p-badge value="Status" severity="success"></p-badge>
            <span class="text-sm text-gray-600">Last updated: 2 hours ago</span>
          </div>
        </div>
      </div>

      <!-- Outlined Card -->
      <div class="pg-card pg-card--padding-md pg-card--outlined">
        <div class="pg-card__header">
          <div class="pg-card__title">Outlined Card</div>
          <p class="pg-card__description">
            This card uses a thick border instead of shadow for a different visual style.
          </p>
        </div>
        <div class="pg-card__content pg-card__content--fluid">
          <div class="p-3 bg-gray-50 rounded">
            <h5 class="font-medium mb-1">Feature 1</h5>
            <p class="text-sm text-gray-600">Description of feature</p>
          </div>
          <div class="p-3 bg-gray-50 rounded">
            <h5 class="font-medium mb-1">Feature 2</h5>
            <p class="text-sm text-gray-600">Another feature</p>
          </div>
        </div>
      </div>

    </div>
  `
  ,
  styleUrls: ['./card-example.component.scss']
})
export class CardExampleComponent {
  // Component for demonstrating card system migration
}
