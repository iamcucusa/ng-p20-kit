import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import type { Trial } from './trial';
import { createDefaultTimeFramework } from './mock-data.utils';

/**
 * Trial Data Service
 * 
 * Provides trial data for the application.
 * In a real application, this would fetch data from an API.
 */
@Injectable({
  providedIn: 'root'
})
export class TrialDataService {
  /**
   * Mock trial data for demonstration
   */
  private mockTrials: Record<string, Trial> = {
    'trial-001': {
      id: 'trial-001',
      name: 'Cardiovascular Study Alpha',
      studyNumber: 'CV2024001',
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
    'trial-002': {
      id: 'trial-002',
      name: 'Oncology Research Beta',
      studyNumber: 'ONC2024002',
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
    'trial-003': {
      id: 'trial-003',
      name: 'Neurological Study Gamma',
      studyNumber: 'NEU2024003',
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
  };

  /**
   * Gets trial data by ID
   * @param trialId The trial ID
   * @returns Observable of trial data
   */
  getTrialById(trialId: string): Observable<Trial | null> {
    const trial = this.mockTrials[trialId];
    return of(trial || null).pipe(delay(100)); // Simulate API delay
  }

  /**
   * Gets all trials
   * @returns Observable of all trials
   */
  getAllTrials(): Observable<Trial[]> {
    return of(Object.values(this.mockTrials)).pipe(delay(100));
  }

}
