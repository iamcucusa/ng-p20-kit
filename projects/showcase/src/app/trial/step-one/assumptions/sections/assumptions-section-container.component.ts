import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { AssumptionsSectionHeadingComponent } from './assumptions-section-heading.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import type { Trial } from '@trial/trial.types';
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
  imports: [AssumptionsSectionHeadingComponent, ButtonModule, RippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pg-assumptions-section-container">
      <kit-assumptions-section-heading 
        [title]="getSectionTitle()"
        [description]="getSectionDescription()"
        [actions]="actionsTemplate">
      </kit-assumptions-section-heading>
      <br>
      <br>
      <p class="text-sm text-500 mb-2">Slug: {{ slug }}</p>
      <p class="text-sm text-500 mb-4">Active Trial: {{ activeTrial?.name || 'Loading...' }}</p>
      <p class="text-sm text-500">Assumptions content will be implemented here</p>
    </div>
    
    <ng-template #actionsTemplate>
      <p-button
        label="Save"
        severity="primary"
        pRipple
        (onClick)="onSave()"
        [loading]="isSaving"
        aria-label="Save assumptions">
      </p-button>
    </ng-template>
  `
})
export class AssumptionsSectionContainerComponent {
  /** Injected base assumptions items for consistent titles */
  private baseAssumptionsItems = inject(baseAssumptionsItemsToken);
  
  /** Injected trial sections array for index-based slug resolution */
  private assumptionsTrialSections = inject(assumptionsTrialSectionsToken);

  /** 
   * Active tab index (0-based) that determines which section is currently displayed
   * 
   * The index maps to the assumptionsTrialSections array:
   * - activeIndex = 0 → assumptionsTrialSections[0] → 'contacts' → 'Contacts'
   * - activeIndex = 1 → assumptionsTrialSections[1] → 'planning' → 'Time Framework'
   * - activeIndex = 2 → assumptionsTrialSections[2] → 'evidence' → 'Country Requirements'
   * 
   * @default 0
   */
  activeIndex: number = 0;

  /** Route slug data */
  @Input() set slug(value: string) {
    this.#slug = value;
  }
  get slug(): string {
    return this.#slug;
  }
  #slug: string = '';

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

  /**
   * Gets the dynamic section title using activeIndex and baseAssumptionsItems token
   * 
   * The title is determined by the following dependency chain:
   * 1. activeIndex (0-based) → assumptionsTrialSections[activeIndex] → currentSlug
   * 2. currentSlug → baseAssumptionsItems[currentSlug] → sectionTitle
   * 
   * @example
   * // activeIndex = 0 → assumptionsTrialSections[0] = 'contacts' → baseAssumptionsItems.contacts = 'Contacts'
   * // activeIndex = 1 → assumptionsTrialSections[1] = 'planning' → baseAssumptionsItems.planning = 'Time Framework'
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
   * // activeIndex = 0 → assumptionsTrialSections[0] = 'contacts' → 'Manage trial contacts and stakeholders'
   * // activeIndex = 1 → assumptionsTrialSections[1] = 'planning' → 'Define trial timeline and milestones'
   * 
   * @returns The section description based on the current activeIndex, or fallback description
   */
  getSectionDescription(): string {
    // Get the current slug from the activeIndex
    const currentSlug = this.assumptionsTrialSections[this.activeIndex];
    
    const sectionDescriptions: Record<keyof typeof this.baseAssumptionsItems, string> = {
      'details': 'Configure basic trial information and parameters',
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
}
