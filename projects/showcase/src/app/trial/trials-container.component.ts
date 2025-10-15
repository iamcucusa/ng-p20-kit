import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeadingComponent } from '@core/page-heading.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { RouteService } from '@core/route.service';

@Component({
  selector: 'kit-trials-container',
  templateUrl: './trials-container.component.html',
  styleUrls: ['./trials-container.component.scss'],
  standalone: true,
  imports: [CommonModule, PageHeadingComponent, ButtonModule, RippleModule, RouterModule]
})
export class TrialsContainerComponent {
  // Sample trial data for demonstration
  sampleTrials = [
    {
      id: 'trial-001',
      title: 'Cardiovascular Study Alpha',
      status: 'Active',
      phase: 'Phase II',
      participants: 150,
      startDate: '2024-01-15',
      description: 'A comprehensive study on cardiovascular health outcomes in elderly patients.'
    },
    {
      id: 'trial-002', 
      title: 'Oncology Research Beta',
      status: 'Active',
      phase: 'Phase III',
      participants: 300,
      startDate: '2024-02-01',
      description: 'Advanced oncology treatment efficacy study with extended follow-up periods.'
    },
    {
      id: 'trial-003',
      title: 'Neurological Study Gamma',
      status: 'Planning',
      phase: 'Phase I',
      participants: 50,
      startDate: '2024-03-01',
      description: 'Early-stage neurological intervention study focusing on cognitive outcomes.'
    }
  ];

  constructor(public routeService: RouteService) { }

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
  trackByTrialId(index: number, trial: any): string {
    return trial.id;
  }
}