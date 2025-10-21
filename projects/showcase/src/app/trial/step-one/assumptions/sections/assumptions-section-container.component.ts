import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { Trial } from '@trial/trial.types';

@Component({
  selector: 'kit-assumptions-section-container',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pg-assumptions-section-container">
      <h3 class="text-lg font-semibold mb-4">Assumptions Section</h3>
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
