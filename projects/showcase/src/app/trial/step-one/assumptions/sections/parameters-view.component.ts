import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import type { Trial } from '@trial/trial.types';

/**
 * Trial parameters interface for parameters view
 * Contains all trial parameter properties
 */
interface TrialParameters {
  name?: string;
  description?: string;
  studyType?: string;
  phase?: string;
  participants?: number;
  duration?: number;
  startDate?: Date | string;
  endDate?: Date | string;
  requiresIRB?: boolean;
  requiresFDA?: boolean;
  requiresEMA?: boolean;
  regulatoryNotes?: string;
  dataCollectionMethod?: string;
  dataRetention?: number;
}

/**
 * Parameters View Component
 * 
 * Displays trial parameters in read-only mode including:
 * - Trial basic information
 * - Study design details
 * - Timeline information
 * - Regulatory requirements
 * - Data collection parameters
 * 
 * @example
 * ```html
 * <kit-parameters-view [activeTrial]="trial">
 * </kit-parameters-view>
 * ```
 */
@Component({
  selector: 'kit-parameters-view',
  standalone: true,
  imports: [
    CommonModule,
    DividerModule,
    BadgeModule,
    TagModule
  ],
  template: `
    <div class="pg-parameters-view-container">
      <!-- Header Section -->
      <div class="pg-parameters-view-header">
        <h4 class="pg-parameters-view-title">Trial Parameters</h4>
        <p class="pg-parameters-view-description">View trial parameters and settings</p>
      </div>

      <!-- Basic Information Card -->
      <div class="pg-card pg-card--padding-md">
        <div class="pg-card__header">
          <div class="pg-card__title">Basic Information</div>
        </div>
        <div class="pg-card__content">
          <div class="pg-info-grid">
            <div class="pg-info-item">
              <label class="pg-info-label">Trial Name</label>
              <span class="pg-info-value">{{ activeTrial?.name || 'Not specified' }}</span>
            </div>
            
            <div class="pg-info-item">
              <label class="pg-info-label">Description</label>
              <span class="pg-info-value">{{ activeTrial?.description || 'No description provided' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Study Design Card -->
      <div class="pg-card pg-card--padding-md">
        <div class="pg-card__header">
          <div class="pg-card__title">Study Design</div>
        </div>
        <div class="pg-card__content">
        <div class="pg-info-grid">
          <div class="pg-info-item">
            <label class="pg-info-label">Study Type</label>
            <p-tag 
              [value]="getStudyTypeLabel(activeTrial?.studyType)"
              [severity]="getStudyTypeSeverity(activeTrial?.studyType)"
              class="pg-info-tag">
            </p-tag>
          </div>
          
          <div class="pg-info-item">
            <label class="pg-info-label">Phase</label>
            <p-tag 
              [value]="getPhaseLabel(activeTrial?.phase)"
              [severity]="getPhaseSeverity(activeTrial?.phase)"
              class="pg-info-tag">
            </p-tag>
          </div>
          
          <div class="pg-info-item">
            <label class="pg-info-label">Expected Participants</label>
            <span class="pg-info-value">{{ activeTrial?.participants || 'Not specified' }}</span>
          </div>
          
          <div class="pg-info-item">
            <label class="pg-info-label">Duration</label>
            <span class="pg-info-value">{{ getDurationText(activeTrial?.duration) }}</span>
          </div>
        </div>
        </div>
      </div>

      <!-- Timeline Card -->
      <div class="pg-card pg-card--padding-md">
        <div class="pg-card__header">
          <div class="pg-card__title">Timeline</div>
        </div>
        <div class="pg-card__content">
        <div class="pg-info-grid">
          <div class="pg-info-item">
            <label class="pg-info-label">Planned Start Date</label>
            <span class="pg-info-value">{{ getFormattedDate(activeTrial?.startDate) }}</span>
          </div>
          
          <div class="pg-info-item">
            <label class="pg-info-label">Planned End Date</label>
            <span class="pg-info-value">{{ getFormattedDate(activeTrial?.endDate) }}</span>
          </div>
        </div>
        </div>
      </div>

      <!-- Regulatory Requirements Card -->
      <div class="pg-card pg-card--padding-md">
        <div class="pg-card__header">
          <div class="pg-card__title">Regulatory Requirements</div>
        </div>
        <div class="pg-card__content">
        <div class="pg-info-grid">
          <div class="pg-info-item">
            <label class="pg-info-label">IRB Approval</label>
            <p-badge 
              [value]="activeTrial?.requiresIRB ? 'Required' : 'Not Required'"
              [severity]="activeTrial?.requiresIRB ? 'success' : 'info'">
            </p-badge>
          </div>
          
          <div class="pg-info-item">
            <label class="pg-info-label">FDA Approval</label>
            <p-badge 
              [value]="activeTrial?.requiresFDA ? 'Required' : 'Not Required'"
              [severity]="activeTrial?.requiresFDA ? 'success' : 'info'">
            </p-badge>
          </div>
          
          <div class="pg-info-item">
            <label class="pg-info-label">EMA Approval</label>
            <p-badge 
              [value]="activeTrial?.requiresEMA ? 'Required' : 'Not Required'"
              [severity]="activeTrial?.requiresEMA ? 'success' : 'info'">
            </p-badge>
          </div>
          
          @if (activeTrial?.regulatoryNotes) {
            <div class="pg-info-item pg-info-item--full">
              <label class="pg-info-label">Regulatory Notes</label>
              <span class="pg-info-value">{{ activeTrial?.regulatoryNotes }}</span>
            </div>
          }
        </div>
        </div>
      </div>

      <!-- Data Collection Card -->
      <div class="pg-card pg-card--padding-md">
        <div class="pg-card__header">
          <div class="pg-card__title">Data Collection</div>
        </div>
        <div class="pg-card__content">
        <div class="pg-info-grid">
          <div class="pg-info-item">
            <label class="pg-info-label">Collection Method</label>
            <span class="pg-info-value">{{ getDataCollectionMethodLabel(activeTrial?.dataCollectionMethod) }}</span>
          </div>
          
          <div class="pg-info-item">
            <label class="pg-info-label">Data Retention</label>
            <span class="pg-info-value">{{ getDataRetentionText(activeTrial?.dataRetention) }}</span>
          </div>
        </div>
        </div>
      </div>

      <!-- Empty State -->
      @if (!activeTrial) {
        <div class="pg-parameters-view-empty">
          <div class="pg-empty-icon">📋</div>
          <h5 class="pg-empty-title">No Trial Data Available</h5>
          <p class="pg-empty-description">
            Trial parameters will be displayed here once a trial is selected.
          </p>
        </div>
      }
    </div>
  `,
  styleUrls: ['./parameters-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParametersViewComponent {
  /**
   * Active trial data to display
   */
  @Input() activeTrial?: TrialParameters;

  /**
   * Gets the display label for study type
   * @param studyType - The study type value
   * @returns Formatted label for display
   */
  getStudyTypeLabel(studyType?: string): string {
    const labels: Record<string, string> = {
      'interventional': 'Interventional',
      'observational': 'Observational',
      'expanded_access': 'Expanded Access',
      'other': 'Other'
    };
    return labels[studyType || ''] || 'Not specified';
  }

  /**
   * Gets the severity color for study type tag
   * @param studyType - The study type value
   * @returns Severity level for PrimeNG tag
   */
  getStudyTypeSeverity(studyType?: string): 'success' | 'info' | 'warn' | 'danger' {
    const severities: Record<string, 'success' | 'info' | 'warn' | 'danger'> = {
      'interventional': 'success',
      'observational': 'info',
      'expanded_access': 'warn',
      'other': 'danger'
    };
    return severities[studyType || ''] || 'info';
  }

  /**
   * Gets the display label for phase
   * @param phase - The phase value
   * @returns Formatted label for display
   */
  getPhaseLabel(phase?: string): string {
    const labels: Record<string, string> = {
      'phase_1': 'Phase I',
      'phase_2': 'Phase II',
      'phase_3': 'Phase III',
      'phase_4': 'Phase IV',
      'not_applicable': 'Not Applicable'
    };
    return labels[phase || ''] || 'Not specified';
  }

  /**
   * Gets the severity color for phase tag
   * @param phase - The phase value
   * @returns Severity level for PrimeNG tag
   */
  getPhaseSeverity(phase?: string): 'success' | 'info' | 'warn' | 'danger' {
    const severities: Record<string, 'success' | 'info' | 'warn' | 'danger'> = {
      'phase_1': 'info',
      'phase_2': 'warn',
      'phase_3': 'success',
      'phase_4': 'info',
      'not_applicable': 'danger'
    };
    return severities[phase || ''] || 'info';
  }

  /**
   * Gets formatted duration text
   * @param duration - Duration in months
   * @returns Formatted duration string
   */
  getDurationText(duration?: number): string {
    if (!duration) return 'Not specified';
    if (duration === 1) return '1 month';
    if (duration < 12) return `${duration} months`;
    const years = Math.floor(duration / 12);
    const months = duration % 12;
    if (months === 0) return `${years} year${years > 1 ? 's' : ''}`;
    return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
  }

  /**
   * Gets formatted date string
   * @param date - Date to format
   * @returns Formatted date string
   */
  getFormattedDate(date?: Date | string): string {
    if (!date) return 'Not specified';
    try {
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Invalid date';
    }
  }

  /**
   * Gets the display label for data collection method
   * @param method - The data collection method
   * @returns Formatted label for display
   */
  getDataCollectionMethodLabel(method?: string): string {
    const labels: Record<string, string> = {
      'edc': 'Electronic Data Capture (EDC)',
      'paper': 'Paper Forms',
      'mobile': 'Mobile App',
      'wearable': 'Wearable Devices',
      'other': 'Other'
    };
    return labels[method || ''] || 'Not specified';
  }

  /**
   * Gets formatted data retention text
   * @param retention - Retention period in years
   * @returns Formatted retention string
   */
  getDataRetentionText(retention?: number): string {
    if (!retention) return 'Not specified';
    if (retention === 1) return '1 year';
    return `${retention} years`;
  }
}
