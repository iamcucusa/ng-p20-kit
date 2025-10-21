import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AssumptionsSectionHeadingComponent } from './assumptions-section-heading.component';
import type { Trial } from '@trial/trial.types';

@Component({
  selector: 'kit-assumptions-section-container',
  standalone: true,
  imports: [AssumptionsSectionHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pg-assumptions-section-container">
      <kit-assumptions-section-heading 
        title="Assumptions Section"
        description="Manage and configure trial assumptions">
      </kit-assumptions-section-heading>
      <br>
      <br>
      <p class="text-sm text-500 mb-2">Slug: {{ slug }}</p>
      <p class="text-sm text-500 mb-4">Active Trial: {{ activeTrial?.name || 'Loading...' }}</p>
      <p class="text-sm text-500">Assumptions content will be implemented here</p>
    </div>
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
}
