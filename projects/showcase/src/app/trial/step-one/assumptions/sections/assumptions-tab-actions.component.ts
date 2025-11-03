import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {
  overviewSectionToken,
  trialSectionToken,
  trialParametersSectionToken,
  contactsSectionToken,
  timeFrameworkSectionToken,
  evidenceSectionToken,
  referenceSectionToken,
  complexitySectionToken,
  scientificSectionToken,
  operationalSectionToken,
  cohortsSectionToken,
  impactSectionToken,
  assumptionsEditableSectionsToken
} from '@assumptions/navigation/navigation.settings';
import type { 
  TrialAssumptionsPage, 
  AssumptionsScenarioPage,
  ScenariosOverviewSection,
  TrialSection,
  TrialParameters,
  ContactsSection,
  TimeFrameworkSection,
  EvidenceSection,
  ReferenceSection,
  ComplexitySection,
  ScientificSection,
  OperationalSection,
  CohortsSection,
  ImpactAssessmentSection
} from '@assumptions/navigation/navigation';

/**
 * Assumptions Tab Actions Component
 * 
 * Wrapper component for save button actions in assumption tabs.
 * Handles visibility, enablement, and update triggers for tab-specific actions.
 * 
 * @example
 * ```html
 * <kit-assumptions-tab-actions
 *   [activeTab]="'parameters'"
 *   [isLoading]="false"
 *   [canEdit]="true"
 *   [canSaveForm]="true"
 *   (triggerUpdate)="onUpdate($event)">
 * </kit-assumptions-tab-actions>
 * ```
 */
@Component({
  selector: 'kit-assumptions-tab-actions',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="canEdit">
      <button
        type="submit"
        pButton
        pRipple
        [label]="'Save'"
        [disabled]="!isActionEnabled()"
        (click)="onUpdate()"
        [loading]="isLoading"
        data-cy="Assumptions_Save_Button"
      ></button>
    </ng-container>
  `
})
export class AssumptionsTabActionsComponent {
  /** Active tab identifier */
  @Input() activeTab!: TrialAssumptionsPage | AssumptionsScenarioPage;
  
  /** Loading state for the save button */
  @Input() isLoading = false;
  
  /** Whether the user can edit the current tab */
  @Input() canEdit = false;
  
  /** Whether the form can be saved (validation state) */
  @Input() canSaveForm = false;
  
  /** Event emitted when update is triggered */
  @Output() triggerUpdate = new EventEmitter<TrialAssumptionsPage | AssumptionsScenarioPage>();

  /** Injected section tokens for validation */
  public overview = inject(overviewSectionToken);
  public details = inject(trialSectionToken);
  public trialParameters = inject(trialParametersSectionToken);
  public contacts = inject(contactsSectionToken);
  public planning = inject(timeFrameworkSectionToken);
  public evidence = inject(evidenceSectionToken);
  public reference = inject(referenceSectionToken);
  public complexity = inject(complexitySectionToken);
  public scientific = inject(scientificSectionToken);
  public operational = inject(operationalSectionToken);
  public cohorts = inject(cohortsSectionToken);
  public impact = inject(impactSectionToken);

  /** Injected editable sections for validation */
  private assumptionsEditableSections = inject(assumptionsEditableSectionsToken);

  /**
   * Determines if the action button should be visible
   * 
   * @returns True if the action should be visible, false otherwise
   */
  isActionVisible(): boolean {
    if (!this.canEdit) return false;
    return this.assumptionsEditableSections.includes(this.activeTab);
  }

  /**
   * Determines if the action button should be enabled
   * 
   * @returns True if the action should be enabled, false otherwise
   */
  isActionEnabled(): boolean {
    return this.isActionVisible() && this.canSaveForm;
  }

  /**
   * Handles the update action
   * Emits the triggerUpdate event with the current active tab
   */
  onUpdate(): void {
    this.triggerUpdate.emit(this.activeTab);
  }
}
