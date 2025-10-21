import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { baseAssumptionsItemsToken, assumptionsTrialSectionsToken } from '@assumptions/navigation/assumptions-navigation.settings';

/**
 * Assumptions Tabs Example Component
 * 
 * Demonstrates PrimeNG 20 Tabs component with dynamic tabs based on assumptionsTrialSections.
 * Uses dependency injection for data consistency and Tailwind utilities for styling.
 * 
 * @example
 * ```html
 * <kit-assumptions-tabs-example></kit-assumptions-tabs-example>
 * ```
 */
@Component({
  selector: 'kit-assumptions-tabs-example',
  standalone: true,
  imports: [TabsModule, CommonModule],
  template: `
    <p-tabs [value]="activeTabIndex" (valueChange)="onTabChange($event)">
        <p-tablist>
          @for (section of assumptionsTrialSections; track section; let i = $index) {
            <p-tab [value]="i">{{ getTabHeader(section) }}</p-tab>
          }
        </p-tablist>
        <p-tabpanels>
          @for (section of assumptionsTrialSections; track section; let i = $index) {
            <p-tabpanel [value]="i">
              <div class="p-4">
                <h4 class="text-lg font-medium mb-3">{{ getSectionTitle(section) }}</h4>
                <p class="text-gray-600 mb-4">{{ getSectionDescription(section) }}</p>
                
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h5 class="font-medium mb-2">Tab Information:</h5>
                  <ul class="text-sm space-y-1">
                    <li><strong>Index:</strong> {{ i }}</li>
                    <li><strong>Section:</strong> {{ section }}</li>
                    <li><strong>Title:</strong> {{ getSectionTitle(section) }}</li>
                  </ul>
                </div>
                
                <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                  <p class="text-sm text-blue-800">
                    <strong>Note:</strong> This is tab {{ i + 1 }} of {{ assumptionsTrialSections.length }} tabs.
                    Content for {{ getSectionTitle(section) }} will be implemented here.
                  </p>
                </div>
              </div>
            </p-tabpanel>
          }
        </p-tabpanels>
      </p-tabs>
  `
})
export class AssumptionsTabsExampleComponent {
  /** Injected base assumptions items for consistent titles */
  private baseAssumptionsItems = inject(baseAssumptionsItemsToken);
  
  /** Injected trial sections array for dynamic tab generation */
  public assumptionsTrialSections = inject(assumptionsTrialSectionsToken);

  /** Active tab index (0-based) */
  activeTabIndex: number = 0;

  /** Output event emitter for tab changes */
  @Output() tabChange = new EventEmitter<number>();


  /**
   * Gets the tab header text for a given section
   * 
   * @param section - The section slug
   * @returns The formatted tab header
   */
  getTabHeader(section: string): string {
    return this.getSectionTitle(section);
  }

  /**
   * Gets the section title using the baseAssumptionsItems token
   * 
   * @param section - The section slug
   * @returns The section title or fallback
   */
  getSectionTitle(section: string): string {
    if (section in this.baseAssumptionsItems) {
      return this.baseAssumptionsItems[section as keyof typeof this.baseAssumptionsItems];
    }
    return 'Unknown Section';
  }

  /**
   * Gets the section description based on the section slug
   * 
   * @param section - The section slug
   * @returns The section description
   */
  getSectionDescription(section: string): string {
    const sectionDescriptions: Record<keyof typeof this.baseAssumptionsItems, string> = {
      'trial-section': 'Configure basic trial information and parameters',
      'contacts': 'Manage trial contacts and stakeholders',
      'planning': 'Define trial timeline and milestones',
      'evidence': 'Set country-specific requirements and regulations',
      'reference': 'Configure trial reference information',
      'complexity': 'Assess and document trial complexity factors',
      'scientific': 'Define scientific parameters and methodology',
      'operational': 'Configure operational requirements and logistics',
      'cohorts': 'Manage patient cohorts and recruitment criteria',
      'impact': 'Assess trial impact and outcomes',
      'parameters': 'Configure trial parameters and settings',
      'scenario': 'Manage scenario parameters and configurations'
    };
    
    return sectionDescriptions[section as keyof typeof this.baseAssumptionsItems] || 'Manage and configure trial assumptions';
  }

  /**
   * Handles tab change event from PrimeNG Tabs component
   * 
   * @param event - The tab change event containing the new active index
   */
  onTabChange(event: any): void {
    // The event might be the index directly, not an object with .value
    if (typeof event === 'number') {
      this.activeTabIndex = event;
    } else if (event && typeof event === 'object' && 'value' in event) {
      this.activeTabIndex = event.value;
    } else {
      return;
    }
    
    this.tabChange.emit(this.activeTabIndex);
  }
}
