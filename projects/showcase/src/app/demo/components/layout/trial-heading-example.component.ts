import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrialHeadingComponent } from '@trial/trial-heading.component';
import type { Trial } from '@trial/trial';
import { createDefaultTimeFramework, createDefaultTrialParameters } from '@trial/mock-data.utils';

/**
 * Trial Heading Example Component
 *
 * Demonstrates how to use the TrialHeadingComponent with different trial data.
 * Shows various study number formats and status combinations.
 */
@Component({
  selector: 'kit-trial-heading-example',
  template: `
    <div class="pg-card pg-card--padding-lg">
      <header class="pg-card__header">
        <h2 class="pg-card__title">Trial Heading Examples</h2>
        <p class="pg-card__description">
          Demonstrates the TrialHeadingComponent with different trial states, permissions, and study number formats.
        </p>
      </header>

      <div class="pg-card__content pg-trial-heading-examples">
        <!-- Example 1: Draft Trial -->
        <div class="pg-trial-heading-example">
          <h3 class="text-lg font-medium">Draft Trial</h3>
          <kit-trial-heading
            [trial]="draftTrial"
            [permissions]="[]">
          </kit-trial-heading>
        </div>

        <!-- Example 2: Final Trial with Permissions -->
        <div class="pg-trial-heading-example">
          <h3 class="text-lg font-medium">Final Trial (with permissions)</h3>
          <kit-trial-heading
            [trial]="finalTrial"
            [permissions]="['CREATE FINAL VERSION']">
          </kit-trial-heading>
        </div>

        <!-- Example 3: Final Trial without Permissions -->
        <div class="pg-trial-heading-example">
          <h3 class="text-lg font-medium">Final Trial (without permissions)</h3>
          <kit-trial-heading
            [trial]="finalTrial"
            [permissions]="[]">
          </kit-trial-heading>
        </div>

        <!-- Example 4: Replicating Trial -->
        <div class="pg-trial-heading-example">
          <h3 class="text-lg font-medium">Replicating Trial</h3>
          <kit-trial-heading
            [trial]="replicatingTrial"
            [permissions]="[]">
          </kit-trial-heading>
        </div>

        <!-- Example 5: Different Study Number Formats -->
        <div class="pg-trial-heading-example">
          <h3 class="text-lg font-medium">Study Number Formatting</h3>
          <div class="pg-trial-heading-example__nested">
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
    </div>
  `,
  standalone: true,
  imports: [CommonModule, TrialHeadingComponent],
  styleUrls: ['./trial-heading-example.component.scss']
})
export class TrialHeadingExampleComponent {
  draftTrial: Trial = {
    id: 'trial-001',
    name: 'Cardiovascular Study Alpha',
    versionNumber: 1,
    status: 'Draft',
    phase: 'Phase II',
    participants: 150,
    startDate: new Date('2024-01-15'),
    description: 'A comprehensive study on cardiovascular health outcomes.',
    public: true,
    assumptionsScenarios: [],
    planning: createDefaultTimeFramework(),
    finalATScenario: null,
    finalATObservations: null,
    finalisedAt: null,
    finalisedBy: null,
    details: {
      ...createDefaultTrialParameters(),
      studyNumber: 'CV2024001',
      studyName: 'Cardiovascular Study Alpha',
      versionNumber: 1,
      studyPhase: 'II',
      therapeuticArea: 'CRM',
      indication: 'A comprehensive study on cardiovascular health outcomes'
    }
  };

  finalTrial: Trial = {
    id: 'trial-002',
    name: 'Oncology Research Beta',
    versionNumber: 3,
    status: 'Final',
    phase: 'Phase III',
    participants: 300,
    startDate: new Date('2024-02-01'),
    description: 'Advanced oncology treatment efficacy study.',
    public: false,
    assumptionsScenarios: [],
    planning: createDefaultTimeFramework(),
    finalATScenario: 1,
    finalATObservations: 'Locked after review',
    finalisedAt: '2024-02-15',
    finalisedBy: 'Reviewer A',
    details: {
      ...createDefaultTrialParameters(),
      studyNumber: 'ONC2024002',
      studyName: 'Oncology Research Beta',
      versionNumber: 3,
      studyPhase: 'III',
      therapeuticArea: 'Oncology',
      indication: 'Advanced oncology treatment efficacy study',
      versionDescription: 'Final version after review',
      keyChanges: 'Locked after review'
    }
  };

  replicatingTrial: Trial = {
    id: 'trial-003',
    name: 'Neurological Study Gamma',
    versionNumber: null,
    status: 'Replicating',
    phase: 'Phase I',
    participants: 50,
    startDate: new Date('2024-03-01'),
    description: 'Early-stage neurological intervention study.',
    public: true,
    assumptionsScenarios: [],
    planning: createDefaultTimeFramework(),
    finalATScenario: null,
    finalATObservations: null,
    finalisedAt: null,
    finalisedBy: null,
    details: {
      ...createDefaultTrialParameters(),
      studyNumber: 'NEU2024003',
      studyName: 'Neurological Study Gamma',
      versionNumber: null,
      studyPhase: 'I',
      therapeuticArea: 'CNS',
      indication: 'Early-stage neurological intervention study'
    }
  };

  trialWithLongStudyNumber: Trial = {
    id: 'trial-004',
    name: 'Long Study Number Test',
    versionNumber: 2,
    status: 'Draft',
    phase: 'Phase I',
    participants: 25,
    startDate: new Date('2024-04-01'),
    description: 'Test with long study number.',
    public: true,
    assumptionsScenarios: [],
    planning: createDefaultTimeFramework(),
    finalATScenario: null,
    finalATObservations: null,
    finalisedAt: null,
    finalisedBy: null,
    details: {
      ...createDefaultTrialParameters(),
      studyNumber: 'ABCD1234EFGH5678',
      studyName: 'Long Study Number Test',
      versionNumber: 2,
      studyPhase: 'I',
      therapeuticArea: 'Others',
      indication: 'Test with long study number'
    }
  };

  trialWithShortStudyNumber: Trial = {
    id: 'trial-005',
    name: 'Short Study Number Test',
    versionNumber: 1,
    status: 'Final',
    phase: 'Phase II',
    participants: 100,
    startDate: new Date('2024-05-01'),
    description: 'Test with short study number.',
    public: false,
    assumptionsScenarios: [],
    planning: createDefaultTimeFramework(),
    finalATScenario: 2,
    finalATObservations: 'Approved',
    finalisedAt: '2024-05-10',
    finalisedBy: 'PM',
    details: {
      ...createDefaultTrialParameters(),
      studyNumber: 'AB12',
      studyName: 'Short Study Number Test',
      versionNumber: 1,
      studyPhase: 'II',
      therapeuticArea: 'Others',
      indication: 'Test with short study number',
      versionDescription: 'Approved version',
      keyChanges: 'Approved'
    }
  };
}
