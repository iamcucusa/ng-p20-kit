import { 
  Component, 
  inject, 
  Output, 
  EventEmitter, 
  Input, 
  AfterViewInit,
  ChangeDetectionStrategy,
  DestroyRef,
  ViewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { ParametersViewComponent } from './parameters-view.component';
import { ParametersEditComponent } from './parameters-edit.component';
import { TimeFrameworkEditComponent } from './time-framework-edit.component';
import { 
  baseAssumptionsItemsToken, 
  assumptionsTrialSectionsToken,
  trialParametersSectionToken,
  contactsSectionToken,
  timeFrameworkSectionToken,
  evidenceSectionToken,
  referenceSectionToken,
  complexitySectionToken,
  scientificSectionToken,
  operationalSectionToken,
  cohortsSectionToken,
  impactSectionToken
} from '@assumptions/navigation/assumptions-navigation.settings';
import type { Trial } from '@trial/trial.types';
import type { TrialAssumptionsPage } from '@assumptions/assumptions';

/**
 * Assumptions Tab Content Component
 * 
 * Main content component with PrimeNG 20 Tabs for assumptions sections.
 * Uses dependency injection for data consistency and provides dynamic tab content.
 * 
 * @example
 * ```html
 * <kit-assumptions-tab-content></kit-assumptions-tab-content>
 * ```
 */
@Component({
  selector: 'kit-assumptions-tab-content',
  standalone: true,
  imports: [TabsModule, CommonModule, ParametersViewComponent, ParametersEditComponent, TimeFrameworkEditComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
              <!-- Trial Parameters Section -->
              @if (section === trialParameters) {
                @if (canEdit) {
                  <kit-parameters-edit 
                    [activeTrial]="activeTrial || undefined">
                  </kit-parameters-edit>
                } @else {
                   <kit-parameters-view [activeTrial]="activeTrial || undefined">
                   </kit-parameters-view>
                 }
              }

              <!-- Contacts Section -->
              @if (section === contacts) {
                @if (canEdit) {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Contacts</h4>
                    <p class="text-gray-600 mb-4">Manage trial contacts and stakeholders</p>
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <p class="text-sm text-blue-800">
                        <strong>Edit Mode:</strong> Contacts form will be implemented here.
                      </p>
                    </div>
                  </div>
                } @else {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Contacts</h4>
                    <p class="text-gray-600 mb-4">View trial contacts and stakeholders</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <p class="text-sm text-gray-600">
                        <strong>View Mode:</strong> Contacts display will be implemented here.
                      </p>
                    </div>
                  </div>
                }
              }

              <!-- Planning Section -->
              @if (section === timeFramework) {
                @if (canEdit) {
                  <kit-time-framework-edit 
                    [activeTrial]="activeTrial || null">
                  </kit-time-framework-edit>
                } @else {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Time Framework</h4>
                    <p class="text-gray-600 mb-4">View trial timeline and milestones</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <p class="text-sm text-gray-600">
                        <strong>View Mode:</strong> Planning display will be implemented here.
                      </p>
                    </div>
                  </div>
                }
              }

              <!-- Evidence Section -->
              @if (section === evidence) {
                @if (canEdit) {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Evidence</h4>
                    <p class="text-gray-600 mb-4">Set country-specific requirements and regulations</p>
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <p class="text-sm text-blue-800">
                        <strong>Edit Mode:</strong> Evidence form will be implemented here.
                      </p>
                    </div>
                  </div>
                } @else {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Evidence</h4>
                    <p class="text-gray-600 mb-4">View country-specific requirements and regulations</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <p class="text-sm text-gray-600">
                        <strong>View Mode:</strong> Evidence display will be implemented here.
                      </p>
                    </div>
                  </div>
                }
              }

              <!-- Reference Section -->
              @if (section === reference) {
                @if (canEdit) {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Reference</h4>
                    <p class="text-gray-600 mb-4">Configure trial reference information</p>
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <p class="text-sm text-blue-800">
                        <strong>Edit Mode:</strong> Reference form will be implemented here.
                      </p>
                    </div>
                  </div>
                } @else {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Reference</h4>
                    <p class="text-gray-600 mb-4">View trial reference information</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <p class="text-sm text-gray-600">
                        <strong>View Mode:</strong> Reference display will be implemented here.
                      </p>
                    </div>
                  </div>
                }
              }

              <!-- Complexity Section -->
              @if (section === complexity) {
                @if (canEdit) {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Complexity</h4>
                    <p class="text-gray-600 mb-4">Assess and document trial complexity factors</p>
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <p class="text-sm text-blue-800">
                        <strong>Edit Mode:</strong> Complexity form will be implemented here.
                      </p>
                    </div>
                  </div>
                } @else {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Complexity</h4>
                    <p class="text-gray-600 mb-4">View trial complexity factors</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <p class="text-sm text-gray-600">
                        <strong>View Mode:</strong> Complexity display will be implemented here.
                      </p>
                    </div>
                  </div>
                }
              }

              <!-- Scientific Section -->
              @if (section === scientific) {
                @if (canEdit) {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Scientific</h4>
                    <p class="text-gray-600 mb-4">Define scientific parameters and methodology</p>
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <p class="text-sm text-blue-800">
                        <strong>Edit Mode:</strong> Scientific form will be implemented here.
                      </p>
                    </div>
                  </div>
                } @else {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Scientific</h4>
                    <p class="text-gray-600 mb-4">View scientific parameters and methodology</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <p class="text-sm text-gray-600">
                        <strong>View Mode:</strong> Scientific display will be implemented here.
                      </p>
                    </div>
                  </div>
                }
              }

              <!-- Operational Section -->
              @if (section === operational) {
                @if (canEdit) {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Operational</h4>
                    <p class="text-gray-600 mb-4">Configure operational requirements and logistics</p>
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <p class="text-sm text-blue-800">
                        <strong>Edit Mode:</strong> Operational form will be implemented here.
                      </p>
                    </div>
                  </div>
                } @else {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Operational</h4>
                    <p class="text-gray-600 mb-4">View operational requirements and logistics</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <p class="text-sm text-gray-600">
                        <strong>View Mode:</strong> Operational display will be implemented here.
                      </p>
                    </div>
                  </div>
                }
              }

              <!-- Cohorts Section -->
              @if (section === cohorts) {
                @if (canEdit) {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Cohorts</h4>
                    <p class="text-gray-600 mb-4">Manage patient cohorts and recruitment criteria</p>
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <p class="text-sm text-blue-800">
                        <strong>Edit Mode:</strong> Cohorts form will be implemented here.
                      </p>
                    </div>
                  </div>
                } @else {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Cohorts</h4>
                    <p class="text-gray-600 mb-4">View patient cohorts and recruitment criteria</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <p class="text-sm text-gray-600">
                        <strong>View Mode:</strong> Cohorts display will be implemented here.
                      </p>
                    </div>
                  </div>
                }
              }

              <!-- Impact Section -->
              @if (section === impact) {
                @if (canEdit) {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Impact Assessment</h4>
                    <p class="text-gray-600 mb-4">Assess trial impact and outcomes</p>
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <p class="text-sm text-blue-800">
                        <strong>Edit Mode:</strong> Impact Assessment form will be implemented here.
                      </p>
                    </div>
                  </div>
                } @else {
                  <div class="p-4">
                    <h4 class="text-lg font-medium mb-3">Impact Assessment</h4>
                    <p class="text-gray-600 mb-4">View trial impact and outcomes</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <p class="text-sm text-gray-600">
                        <strong>View Mode:</strong> Impact Assessment display will be implemented here.
                      </p>
                    </div>
                  </div>
                }
              }
            </p-tabpanel>
          }
        </p-tabpanels>
      </p-tabs>
  `
})
export class AssumptionsTabContentComponent implements AfterViewInit {
  /** Injected base assumptions items for consistent titles */
  private baseAssumptionsItems = inject(baseAssumptionsItemsToken);
  
  /** Injected trial sections array for dynamic tab generation */
  public assumptionsTrialSections = inject(assumptionsTrialSectionsToken);

  /** Injected section tokens */
  public trialParameters = inject(trialParametersSectionToken);
  public contacts = inject(contactsSectionToken);
  public timeFramework = inject(timeFrameworkSectionToken);
  public evidence = inject(evidenceSectionToken);
  public reference = inject(referenceSectionToken);
  public complexity = inject(complexitySectionToken);
  public scientific = inject(scientificSectionToken);
  public operational = inject(operationalSectionToken);
  public cohorts = inject(cohortsSectionToken);
  public impact = inject(impactSectionToken);

  /** Destroy reference for cleanup */
  private destroyRef = inject(DestroyRef);

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

  /** Output event emitter for canSaveForm changes */
  @Output() canSaveFormChange = new EventEmitter<boolean>();

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
    /**
     * Handle undefined or invalid events
     * Early return to prevent processing invalid data
     */
    if (event === undefined || event === null) {
      return;
    }
    
    /**
     * The event might be the index directly (number or string), not an object with .value
     * This handles different PrimeNG event formats
     */
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
    
    /**
     * Handle tab change logic
     * Updates internal state and notifies parent component
     */
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
      this.canSaveFormChange.emit(this.canSaveForm);
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
      this.canSaveFormChange.emit(this.canSaveForm);
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

  /**
   * Angular lifecycle hook called after view initialization
   * Sets up component lifecycle and form state management
   */
  ngAfterViewInit(): void {
    /**
     * Registers the updater function with the parent component
     * This allows the parent to trigger updates for the current tab
     */
    this.onRegisterUpdater((tab: string) => {
      if (tab === this.assumptionsTrialSections[this.activeTabIndex]) {
        this.updateTrial();
      }
    });

    /**
     * Simulates form state changes for demonstration purposes
     * In real implementation, this would connect to actual form state observables
     */
    this.simulateFormStateChanges();
  }

  /**
   * Updates the trial data for the current tab
   */
  private updateTrial(): void {
    const currentTab = this.assumptionsTrialSections[this.activeTabIndex];
    console.log(`Updating trial for tab: ${currentTab}`);
    /**
     * In real implementation, this would trigger the actual update logic
     * such as calling a service method to save the form data
     */
  }

  /**
   * Simulates form state changes for demonstration
   * In real implementation, this would connect to actual form state observables
   */
  private simulateFormStateChanges(): void {
    /**
     * Simulates form state change after a short delay
     * In real implementation, this would be triggered by actual form validation
     */
    setTimeout(() => {
      const currentTab = this.assumptionsTrialSections[this.activeTabIndex];
      this.onFormStateChange({
        tab: currentTab,
        formValidChanged: true
      });
    }, 1000);
  }

  /**
   * Validates if the tab is a valid assumptions section
   *
   * @param tab - The tab identifier to validate
   * @returns True if the tab is valid, false otherwise
   */
  public isValidTab(tab: string): boolean {
    return this.assumptionsTrialSections.includes(tab as TrialAssumptionsPage);
  }

}
