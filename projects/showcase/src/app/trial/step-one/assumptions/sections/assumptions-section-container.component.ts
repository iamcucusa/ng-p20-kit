import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { AssumptionsSectionHeadingComponent } from './assumptions-section-heading.component';
import { AssumptionsTabContentComponent } from './assumptions-tab-content.component';
import { AssumptionsTabActionsComponent } from './assumptions-tab-actions.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import type { Trial } from '@trial/trial.types';
import type { TrialAssumptionsPage, AssumptionsScenarioPage } from '@assumptions/assumptions';
import { baseAssumptionsItemsToken, assumptionsTrialSectionsToken } from '@assumptions/navigation/assumptions-navigation.settings';

/**
 * Assumptions Section Container Component
 * 
 * Dynamic container component that displays section-specific content based on the active tab index.
 * Uses dependency injection to resolve section titles and descriptions dynamically.
 * 
 * @example
 * ```html
 * <kit-assumptions-section-container 
 *   [activeIndex]="currentTabIndex"
 *   [activeTrial]="trialData">
 * </kit-assumptions-section-container>
 * ```
 */
@Component({
  selector: 'kit-assumptions-section-container',
  standalone: true,
  imports: [AssumptionsSectionHeadingComponent, AssumptionsTabContentComponent, AssumptionsTabActionsComponent, ButtonModule, RippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './assumptions-section-container.component.scss',
  template: `
    <div class="pg-assumptions-section-container">
      <kit-assumptions-section-heading 
        [title]="sectionTitle"
        [description]="sectionDescription"
        [actions]="actionsTemplate">
      </kit-assumptions-section-heading>
        
      <!-- Tab Content Component -->
      <kit-assumptions-tab-content 
        [activeTrial]="activeTrial"
        [level]="'Trial'"
        [isLoading]="isSaving"
        [canEdit]="true"
        [canView]="false"
        (tabChange)="onTabChange($event)"
        (canSaveFormChange)="onCanSaveFormChange($event)">
      </kit-assumptions-tab-content>
    </div>
    
    <ng-template #actionsTemplate>
      <kit-assumptions-tab-actions
        [activeTab]="getCurrentActiveTab()"
        [isLoading]="isSaving"
        [canEdit]="true"
        [canSaveForm]="canSaveForm"
        (triggerUpdate)="onUpdate($event)">
      </kit-assumptions-tab-actions>
    </ng-template>
  `
})
export class AssumptionsSectionContainerComponent {
  /** Injected base assumptions items for consistent titles */
  private baseAssumptionsItems = inject(baseAssumptionsItemsToken);
  
  /** Injected trial sections array for index-based slug resolution */
  public assumptionsTrialSections = inject(assumptionsTrialSectionsToken);

  /** 
   * Active tab index (0-based) that determines which section is currently displayed
   * 
   * The index maps to the assumptionsTrialSections array:
   * - activeIndex = 0 → assumptionsTrialSections[0] → 'parameters' → 'Trial Parameters'
   * - activeIndex = 1 → assumptionsTrialSections[1] → 'contacts' → 'Contacts'
   * - activeIndex = 2 → assumptionsTrialSections[2] → 'planning' → 'Time Framework'
   * 
   * @default 0
   */
  activeIndex: number = 0;

  /** Active trial data from resolver */
  @Input() set activeTrial(value: Trial | null) {
    this.#activeTrial = value;
  }
  get activeTrial(): Trial | null {
    return this.#activeTrial;
  }
  #activeTrial: Trial | null = null;

  /** Save loading state */
  isSaving: boolean = false;

  /** Whether the form can be saved (validation state) */
  canSaveForm: boolean = true;

  /** Current section title - updated when activeIndex changes */
  sectionTitle: string = this.getSectionTitle();

  /** Current section description - updated when activeIndex changes */
  sectionDescription: string = this.getSectionDescription();

  constructor() {
    // Initialize with default values
    this.updateSectionContent();
  }

  /**
   * Updates section title and description based on current activeIndex
   */
  private updateSectionContent(): void {
    this.sectionTitle = this.getSectionTitle();
    this.sectionDescription = this.getSectionDescription();
  }

  /**
   * Gets the dynamic section title using activeIndex and baseAssumptionsItems token
   * 
   * The title is determined by the following dependency chain:
   * 1. activeIndex (0-based) → assumptionsTrialSections[activeIndex] → currentSlug
   * 2. currentSlug → baseAssumptionsItems[currentSlug] → sectionTitle
   * 
   * @example
   * // activeIndex = 0 → assumptionsTrialSections[0] = 'parameters' → baseAssumptionsItems.parameters = 'Trial Parameters'
   * // activeIndex = 1 → assumptionsTrialSections[1] = 'contacts' → baseAssumptionsItems.contacts = 'Contacts'
   * 
   * @returns The section title based on the current activeIndex, or fallback title
   */
  getSectionTitle(): string {
    // Get the current slug from the activeIndex
    const currentSlug = this.assumptionsTrialSections[this.activeIndex];
    
    // Check if the slug exists as a key in baseAssumptionsItems
    if (currentSlug in this.baseAssumptionsItems) {
      return this.baseAssumptionsItems[currentSlug as keyof typeof this.baseAssumptionsItems];
    }
    
    return 'Assumptions Section';
  }
  
  /**
   * Gets the dynamic section description based on the activeIndex
   * 
   * The description follows the same dependency chain as getSectionTitle():
   * 1. activeIndex (0-based) → assumptionsTrialSections[activeIndex] → currentSlug
   * 2. currentSlug → sectionDescriptions[currentSlug] → sectionDescription
   * 
   * @example
   * // activeIndex = 0 → assumptionsTrialSections[0] = 'parameters' → 'Configure trial parameters and settings'
   * // activeIndex = 1 → assumptionsTrialSections[1] = 'contacts' → 'Manage trial contacts and stakeholders'
   * 
   * @returns The section description based on the current activeIndex, or fallback description
   */
  getSectionDescription(): string {
    // Get the current slug from the activeIndex
    const currentSlug = this.assumptionsTrialSections[this.activeIndex];
    
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
    
    return sectionDescriptions[currentSlug as keyof typeof this.baseAssumptionsItems] || 'Manage and configure trial assumptions';
  }

  /**
   * Handles save action
   */
  onSave(): void {
    this.isSaving = true;
    
    // Simulate save operation
    setTimeout(() => {
      this.isSaving = false;
      console.log('Assumptions saved successfully');
    }, 1000);
  }

  /**
   * Gets the current active tab with proper typing
   * 
   * @returns The current active tab properly typed
   */
  getCurrentActiveTab(): TrialAssumptionsPage | AssumptionsScenarioPage {
    return this.assumptionsTrialSections[this.activeIndex] as TrialAssumptionsPage | AssumptionsScenarioPage;
  }

  /**
   * Handles update trigger from the tab actions component
   * 
   * @param tab - The tab that triggered the update
   */
  onUpdate(tab: TrialAssumptionsPage | AssumptionsScenarioPage): void {
    console.log(`Update triggered for tab: ${tab}`);
    this.onSave();
  }

  /**
   * Handles tab change event from the tabs example component
   * 
   * @param activeIndex - The new active tab index
   */
  onTabChange(activeIndex: number): void {
    this.activeIndex = activeIndex;
    this.updateSectionContent();
  }

  /**
   * Handles canSaveForm change event from the tabs example component
   * 
   * @param canSaveForm - The new canSaveForm state
   */
  onCanSaveFormChange(canSaveForm: boolean): void {
    this.canSaveForm = canSaveForm;
  }
}
