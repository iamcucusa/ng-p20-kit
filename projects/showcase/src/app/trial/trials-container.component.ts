import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeadingComponent } from '@core/page-heading.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { RouteService } from '@core/route.service';
import { StatusDisplayComponent } from '@core/status/status-display.component';
import type { Trial } from './trial';
import { createDefaultTimeFramework } from './mock-data.utils';

@Component({
  selector: 'kit-trials-container',
  templateUrl: './trials-container.component.html',
  styleUrls: ['./trials-container.component.scss'],
  standalone: true,
  imports: [CommonModule, PageHeadingComponent, ButtonModule, RippleModule, RouterModule, StatusDisplayComponent]
})
export class TrialsContainerComponent {

  // Sample trial data for demonstration
  sampleTrials: Trial[] = [
    {
      id: 'trial-001',
      name: 'Cardiovascular Study Alpha',
      studyNumber: 'CV-2024-001',
      version: 1,
      status: 'Draft',
      phase: 'Phase II',
      participants: 150,
      startDate: new Date('2024-01-15'),
      description: 'A comprehensive study on cardiovascular health outcomes in elderly patients.',
      public: true,
      assumptionsScenarios: [
        {
          metadata: {
            id: 1,
            name: 'Primary Scenario',
            slug: 'scenario-1',
            title: 'Primary Scenario',
            lastUpdate: '2024-01-15',
            timeCreated: '2024-01-15',
            source: 1,
            by: 'System',
            order: 1,
            sections: null
          }
        },
        {
          metadata: {
            id: 2,
            name: 'Alternative Scenario',
            slug: 'scenario-2',
            title: 'Alternative Scenario',
            lastUpdate: '2024-01-15',
            timeCreated: '2024-01-15',
            source: 1,
            by: 'System',
            order: 2,
            sections: null
          }
        }
      ],
      planning: createDefaultTimeFramework()
    },
    {
      id: 'trial-002', 
      name: 'Oncology Research Beta',
      studyNumber: 'ONC-2024-002',
      version: 3,
      status: 'Final',
      phase: 'Phase III',
      participants: 300,
      startDate: new Date('2024-02-01'),
      description: 'Advanced oncology treatment efficacy study with extended follow-up periods.',
      public: false,
      assumptionsScenarios: [
        {
          metadata: {
            id: 1,
            name: 'Standard Treatment',
            slug: 'scenario-1',
            title: 'Standard Treatment',
            lastUpdate: '2024-02-01',
            timeCreated: '2024-02-01',
            source: 1,
            by: 'System',
            order: 1,
            sections: null
          }
        },
        {
          metadata: {
            id: 2,
            name: 'Enhanced Protocol',
            slug: 'scenario-2',
            title: 'Enhanced Protocol',
            lastUpdate: '2024-02-01',
            timeCreated: '2024-02-01',
            source: 1,
            by: 'System',
            order: 2,
            sections: null
          }
        }
      ],
      planning: createDefaultTimeFramework()
    },
    {
      id: 'trial-003',
      name: 'Neurological Study Gamma',
      studyNumber: 'NEU-2024-003',
      version: null,
      status: 'Replicating',
      phase: 'Phase I',
      participants: 50,
      startDate: new Date('2024-03-01'),
      description: 'Early-stage neurological intervention study focusing on cognitive outcomes.',
      public: true,
      assumptionsScenarios: [
        {
          metadata: {
            id: 1,
            name: 'Cognitive Assessment',
            slug: 'scenario-1',
            title: 'Cognitive Assessment',
            lastUpdate: '2024-03-01',
            timeCreated: '2024-03-01',
            source: 1,
            by: 'System',
            order: 1,
            sections: null
          }
        }
      ],
      planning: createDefaultTimeFramework()
    }
  ];

  public routeService = inject(RouteService);

  /**
   * Get the trial path for navigation
   * @param trialId - The trial identifier
   * @returns The full trial path
   */
  getTrialPath(trialId: string): string {
    return this.routeService.getTrialPath(trialId);
  }

  /**
   * Track by function for trial iteration
   * @param index - Array index
   * @param trial - Trial object
   * @returns Trial ID for tracking
   */
  trackByTrialId(index: number, trial: Trial): string {
    return trial.id;
  }
}