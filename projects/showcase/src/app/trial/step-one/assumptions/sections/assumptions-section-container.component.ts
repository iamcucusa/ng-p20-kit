import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { AssumptionsSectionHeadingComponent } from './assumptions-section-heading.component';
import { AssumptionsTabContentComponent } from './assumptions-tab-content.component';
import { AssumptionsTabActionsComponent } from './assumptions-tab-actions.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import type { Trial } from '@trial/trial';
import type { TrialAssumptionsPage, AssumptionsScenarioPage } from '@assumptions/navigation/navigation';
import { baseAssumptionsItemsToken, assumptionsTrialSectionsToken, trialLevelToken, assumptionsNavigationLevelProvides } from '@assumptions/navigation/navigation.settings';

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
  providers: [
    /**
     * Local providers for assumptions navigation level tokens
     * Provides trial and scenario level tokens for this component and its children
     */
    ...assumptionsNavigationLevelProvides
  ],
  template: `
    <div class="pg-assumptions-section-container">
      <kit-assumptions-section-heading 
        [description]="sectionDescription"
        [titleTemplate]="titleTemplate"
        [actions]="actionsTemplate">
      </kit-assumptions-section-heading>
        
      <!-- Tab Content Component -->
      <kit-assumptions-tab-content 
        [activeTrial]="activeTrial"
        [level]="trialLevel"
        [isLoading]="isSaving"
        [canEdit]="true"
        [canView]="false"
        (tabChange)="onTabChange($event)"
        (canSaveFormChange)="onCanSaveFormChange($event)">
      </kit-assumptions-tab-content>
    </div>
    
    <ng-template #titleTemplate>
      <div class="pg-assumptions-section-title">
        <span class="pg-assumptions-section-title__context">{{ contextName }}</span>
        <div class="pg-assumptions-section-title__divider" aria-hidden="true"></div>
        <span class="pg-assumptions-section-title__section">{{ sectionName }}</span>
      </div>
    </ng-template>
    
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

  /** Injected trial level token */
  public trialLevel = inject(trialLevelToken);

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


  /** Current section description - updated when activeIndex changes */
  sectionDescription: string = this.getSectionDescription();

  /** Current context name (Trial, Scenario, etc.) - updated when activeIndex changes */
  contextName: string = this.getContextName();

  /** Current section name - updated when activeIndex changes */
  sectionName: string = this.getSectionName();

  constructor() {
    /**
     * Initialize with default values
     * This ensures the component starts with proper content
     */
    this.updateSectionContent();
  }

  /**
   * Updates section content based on current activeIndex
   */
  private updateSectionContent(): void {
    this.sectionDescription = this.getSectionDescription();
    this.contextName = this.getContextName();
    this.sectionName = this.getSectionName();
  }


  /**
   * Gets the context name (Trial, Scenario, etc.)
   * 
   * @returns The context name for the current section
   */
  getContextName(): string {
    /**
     * For trials: use level token (shorter, consistent)
     * For scenarios: use actual name (has length limits)
     * TODO: Add scenario detection logic when scenarios are implemented
     */
    return this.trialLevel; // Always use level for now (trials)
  }

  /**
   * Gets the section name based on the activeIndex
   * 
   * @returns The section name for the current activeIndex
   */
  getSectionName(): string {
    const currentSlug = this.assumptionsTrialSections[this.activeIndex];
    
    if (currentSlug in this.baseAssumptionsItems) {
      return this.baseAssumptionsItems[currentSlug as keyof typeof this.baseAssumptionsItems];
    }
    
    return 'Assumptions';
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
    /**
     * Get the current slug from the activeIndex
     * This maps the active tab to its corresponding description
     */
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
    
    /**
     * Simulate save operation
     * In a real application, this would call an API service
     */
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
