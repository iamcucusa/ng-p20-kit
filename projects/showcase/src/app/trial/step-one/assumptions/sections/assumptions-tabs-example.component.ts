import { Component, inject, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { baseAssumptionsItemsToken, assumptionsTrialSectionsToken } from '@assumptions/navigation/assumptions-navigation.settings';
import { AssumptionsTabContentComponent } from './assumptions-tab-content.component';
import type { Trial } from '@trial/trial.types';

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
  imports: [TabsModule, CommonModule, AssumptionsTabContentComponent],
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
              <kit-assumptions-tab-content
                [tab]="section"
                [activeIndex]="activeTabIndex"
                [canEdit]="canEdit"
                [canView]="canView"
                [level]="level"
                [isLoading]="isLoading"
                [activeTrial]="activeTrial"
                (registerUpdater)="onRegisterUpdater($event)"
                (formStateChange)="onFormStateChange($event)">
              </kit-assumptions-tab-content>
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

  /** Active trial data */
  @Input() activeTrial?: Trial | null;

  /** Assumption level */
  @Input() level: string = 'Trial';

  /** Loading state */
  @Input() isLoading: boolean = false;

  /** Can edit content */
  @Input() canEdit: boolean = true;

  /** Can view content */
  @Input() canView: boolean = false;

  /** Output event emitter for tab changes */
  @Output() tabChange = new EventEmitter<number>();

  /** Form state management */
  canSaveForm = false;
  private currentActiveTab = '';
  private sectionUpdaters: { [tab: string]: () => void } = {};


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
  onTabChange(event: number | string | { value: number } | undefined): void {
    // Handle undefined or invalid events
    if (event === undefined || event === null) {
      return;
    }
    
    // The event might be the index directly (number or string), not an object with .value
    if (typeof event === 'number') {
      this.activeTabIndex = event;
    } else if (typeof event === 'string') {
      const numericValue = parseInt(event, 10);
      if (!isNaN(numericValue)) {
        this.activeTabIndex = numericValue;
      } else {
        return;
      }
    } else if (event && typeof event === 'object' && 'value' in event) {
      this.activeTabIndex = event.value;
    } else {
      return;
    }
    
    // Handle tab change logic
    this.onTabChangeInternal();
    this.tabChange.emit(this.activeTabIndex);
  }

  /**
   * Handles internal tab change logic
   */
  private onTabChangeInternal(): void {
    const newActiveTab = this.assumptionsTrialSections[this.activeTabIndex];
    if (this.currentActiveTab !== newActiveTab) {
      this.canSaveForm = false;
      this.currentActiveTab = newActiveTab;
    }
  }

  /**
   * Registers an updater function for a specific tab
   * 
   * @param updater - The updater function to register
   */
  onRegisterUpdater(updater: (tab: string) => void): void {
    const currentTab = this.assumptionsTrialSections[this.activeTabIndex];
    this.sectionUpdaters[currentTab] = () => updater(currentTab);
  }

  /**
   * Handles form state changes from tab content components
   * 
   * @param event - The form state change event
   */
  onFormStateChange(event: { tab: string; formValidChanged: boolean }): void {
    const activeTab = this.assumptionsTrialSections[this.activeTabIndex];
    if (event.tab === activeTab) {
      this.canSaveForm = event.formValidChanged;
    }
  }

  /**
   * Triggers update for a specific tab
   * 
   * @param tab - The tab to update
   */
  onUpdateTriggered(tab: string): void {
    const updater = this.sectionUpdaters[tab];
    if (updater) {
      updater();
    } else {
      console.warn(`No update method registered for section: ${tab}`);
    }
  }
}
