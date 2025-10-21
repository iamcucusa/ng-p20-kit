import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import type { Trial } from '@trial/trial.types';
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

/**
 * Assumptions Tab Content Component
 * 
 * Dynamic content component that renders the appropriate section based on the current tab.
 * Handles both edit and view modes for each assumptions section.
 * 
 * @example
 * ```html
 * <kit-assumptions-tab-content
 *   [tab]="'parameters'"
 *   [activeIndex]="0"
 *   [canEdit]="true"
 *   [canView]="false"
 *   [level]="'Trial'"
 *   [isLoading]="false"
 *   (registerUpdater)="onRegisterUpdater($event)"
 *   (formStateChange)="onFormStateChange($event)">
 * </kit-assumptions-tab-content>
 * ```
 */
@Component({
  selector: 'kit-assumptions-tab-content',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Trial Parameters Section -->
    @if (tab === trialParameters) {
      @if (canEdit) {
        <div class="p-4">
          <h4 class="text-lg font-medium mb-3">Trial Parameters</h4>
          <p class="text-gray-600 mb-4">Configure trial parameters and settings</p>
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="text-sm text-blue-800">
              <strong>Edit Mode:</strong> Trial Parameters form will be implemented here.
            </p>
          </div>
        </div>
      } @else {
        <div class="p-4">
          <h4 class="text-lg font-medium mb-3">Trial Parameters</h4>
          <p class="text-gray-600 mb-4">View trial parameters and settings</p>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-sm text-gray-600">
              <strong>View Mode:</strong> Trial Parameters display will be implemented here.
            </p>
          </div>
        </div>
      }
    }

    <!-- Contacts Section -->
    @if (tab === contacts) {
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
    @if (tab === timeFramework) {
      @if (canEdit) {
        <div class="p-4">
          <h4 class="text-lg font-medium mb-3">Time Framework</h4>
          <p class="text-gray-600 mb-4">Define trial timeline and milestones</p>
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="text-sm text-blue-800">
              <strong>Edit Mode:</strong> Planning form will be implemented here.
            </p>
          </div>
        </div>
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
    @if (tab === evidence) {
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
    @if (tab === reference) {
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
    @if (tab === complexity) {
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
    @if (tab === scientific) {
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
    @if (tab === operational) {
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
    @if (tab === cohorts) {
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
    @if (tab === impact) {
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

    <!-- Default fallback -->
    @if (!isValidTab(tab)) {
      <div class="p-4">
        <div class="bg-yellow-50 p-4 rounded-lg">
          <p class="text-sm text-yellow-800">
            <strong>Unknown Section:</strong> The section "{{ tab }}" is not recognized.
          </p>
        </div>
      </div>
    }
  `
})
export class AssumptionsTabContentComponent implements AfterViewInit {
  /** Current tab identifier */
  @Input({ required: true }) tab!: string;
  
  /** Active tab index */
  @Input({ required: true }) activeIndex!: number;
  
  /** Assumption level (Trial, Scenario, etc.) */
  @Input({ required: true }) level!: string;
  
  /** Loading state */
  @Input() isLoading = false;
  
  /** Can view content */
  @Input() canView = false;
  
  /** Can edit content */
  @Input() canEdit = false;

  /** Active trial data */
  @Input() activeTrial?: Trial | null;

  /** Event emitted when updater is registered */
  @Output() registerUpdater = new EventEmitter<(tab: string) => void>();
  
  /** Event emitted when form state changes */
  @Output() formStateChange = new EventEmitter<{ tab: string; formValidChanged: boolean }>();

  /** Destroy reference for cleanup */
  private destroyRef = inject(DestroyRef);

  /** Injected base assumptions items for validation */
  private baseAssumptionsItems = inject(baseAssumptionsItemsToken);

  /** Injected trial sections for validation */
  private assumptionsTrialSections = inject(assumptionsTrialSectionsToken);

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

  ngAfterViewInit(): void {
    // Register updater function
    this.registerUpdater.emit((tab: string) => {
      if (tab === this.tab) {
        this.updateTrial();
      }
    });

    // Simulate form state changes (in real implementation, this would connect to actual form state)
    this.simulateFormStateChanges();
  }

  /**
   * Updates the trial data for the current tab
   */
  private updateTrial(): void {
    console.log(`Updating trial for tab: ${this.tab}`);
    // In real implementation, this would trigger the actual update logic
  }

  /**
   * Simulates form state changes for demonstration
   * In real implementation, this would connect to actual form state observables
   */
  private simulateFormStateChanges(): void {
    // Simulate form state change after a short delay
    setTimeout(() => {
      this.formStateChange.emit({
        tab: this.tab,
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
  isValidTab(tab: string): boolean {
    return this.assumptionsTrialSections.includes(tab as any);
  }
}
