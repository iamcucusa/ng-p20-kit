import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AssumptionsSectionHeadingComponent } from './assumptions-section-heading.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import type { Trial } from '@trial/trial.types';

@Component({
  selector: 'kit-assumptions-section-container',
  standalone: true,
  imports: [AssumptionsSectionHeadingComponent, ButtonModule, RippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pg-assumptions-section-container">
      <kit-assumptions-section-heading 
        title="Assumptions Section"
        description="Manage and configure trial assumptions"
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
