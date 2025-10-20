import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrialHeadingComponent } from '../../trial/trial-heading.component';
import type { Trial } from '../../trial/trial.types';

/**
 * Trial Heading Example Component
 * 
 * Demonstrates how to use the TrialHeadingComponent with different trial data.
 * Shows various study number formats and status combinations.
 */
@Component({
  selector: 'kit-trial-heading-example',
  template: `
    <div class="p-4 space-y-6">
      <h2 class="text-xl font-semibold mb-4">Trial Heading Examples</h2>
      
      <!-- Example 1: Draft Trial -->
      <div class="space-y-2">
        <h3 class="text-lg font-medium">Draft Trial</h3>
        <kit-trial-heading 
          [trial]="draftTrial"
          [permissions]="[]">
        </kit-trial-heading>
      </div>

      <!-- Example 2: Final Trial with Permissions -->
      <div class="space-y-2">
        <h3 class="text-lg font-medium">Final Trial (with permissions)</h3>
        <kit-trial-heading 
          [trial]="finalTrial"
          [permissions]="['CREATE FINAL VERSION']">
        </kit-trial-heading>
      </div>

      <!-- Example 3: Final Trial without Permissions -->
      <div class="space-y-2">
        <h3 class="text-lg font-medium">Final Trial (without permissions)</h3>
        <kit-trial-heading 
          [trial]="finalTrial"
          [permissions]="[]">
        </kit-trial-heading>
      </div>

      <!-- Example 4: Replicating Trial -->
      <div class="space-y-2">
        <h3 class="text-lg font-medium">Replicating Trial</h3>
        <kit-trial-heading 
          [trial]="replicatingTrial"
          [permissions]="[]">
        </kit-trial-heading>
      </div>

      <!-- Example 5: Different Study Number Formats -->
      <div class="space-y-2">
        <h3 class="text-lg font-medium">Study Number Formatting</h3>
        <div class="space-y-2">
          <kit-trial-heading 
            [trial]="trialWithLongStudyNumber"
            [permissions]="[]">
          </kit-trial-heading>
          <kit-trial-heading 
            [trial]="trialWithShortStudyNumber"
            [permissions]="[]">
          </kit-trial-heading>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, TrialHeadingComponent]
})
export class TrialHeadingExampleComponent {
  draftTrial: Trial = {
    id: 'trial-001',
    name: 'Cardiovascular Study Alpha',
    studyNumber: 'CV2024001',
    version: 1,
    status: 'Draft',
    phase: 'Phase II',
    participants: 150,
    startDate: new Date('2024-01-15'),
    description: 'A comprehensive study on cardiovascular health outcomes.',
    public: true,
    assumptionsScenarios: []
  };

  finalTrial: Trial = {
    id: 'trial-002',
    name: 'Oncology Research Beta',
    studyNumber: 'ONC2024002',
    version: 3,
    status: 'Final',
    phase: 'Phase III',
    participants: 300,
    startDate: new Date('2024-02-01'),
    description: 'Advanced oncology treatment efficacy study.',
    public: false,
    assumptionsScenarios: []
  };

  replicatingTrial: Trial = {
    id: 'trial-003',
    name: 'Neurological Study Gamma',
    studyNumber: 'NEU2024003',
    version: null,
    status: 'Replicating',
    phase: 'Phase I',
    participants: 50,
    startDate: new Date('2024-03-01'),
    description: 'Early-stage neurological intervention study.',
    public: true,
    assumptionsScenarios: []
  };

  trialWithLongStudyNumber: Trial = {
    id: 'trial-004',
    name: 'Long Study Number Test',
    studyNumber: 'ABCD1234EFGH5678',
    version: 2,
    status: 'Draft',
    phase: 'Phase I',
    participants: 25,
    startDate: new Date('2024-04-01'),
    description: 'Test with long study number.',
    public: true,
    assumptionsScenarios: []
  };

  trialWithShortStudyNumber: Trial = {
    id: 'trial-005',
    name: 'Short Study Number Test',
    studyNumber: 'AB12',
    version: 1,
    status: 'Final',
    phase: 'Phase II',
    participants: 100,
    startDate: new Date('2024-05-01'),
    description: 'Test with short study number.',
    public: false,
    assumptionsScenarios: []
  };
}
