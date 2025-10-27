import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import type { Trial } from '@trial/trial.types';
import { CommentsComponent } from '@core/comments/comments.component';

/**
 * Time Framework Edit Component
 * 
 * Handles trial time framework editing including:
 * - Planning phase details
 * - Timeline milestones
 * - Duration estimates
 * - Risk assessment
 * - Dependencies management
 * 
 * @example
 * ```html
 * <kit-time-framework-edit 
 *   [activeTrial]="trial">
 * </kit-time-framework-edit>
 * ```
 * 
 * @since 1.0.0
 * @author Angular Team
 */
@Component({
  selector: 'kit-time-framework-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    InputNumberModule,
    CheckboxModule,
    SelectModule,
    MessageModule,
    RippleModule,
    TooltipModule,
    CommentsComponent
  ],
  styleUrls: ['./time-framework-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pg-time-framework-edit-container">
      <!-- Main Content -->
      <main class="pg-time-framework-edit-main">
        <form [formGroup]="timeFrameworkForm" (ngSubmit)="onSubmit()" class="pg-time-framework-edit-form">
        
        <!-- Planning Card -->
        <div class="pg-card pg-card--padding-md">
          <div class="pg-card__header">
            <div class="pg-card__title">Planning</div>
            <div class="pg-card__description">
              Define the timeline and milestones for your trial planning phase
            </div>
          </div>
          <div class="pg-card__content">
            <!-- Form Layout with Tailwind Grid -->
            <div class="pg-time-framework-edit-grid">

              <!-- First Row: Two columns (half width each) -->
              <div class="pg-time-framework-edit-grid--two-col">
                <div class="flex flex-col pg-time-framework-edit-flex-col">
                  <label for="planningPhase" class="pg-form-label" required>Planning Phase</label>
                  <p-select
                    id="planningPhase"
                    formControlName="planningPhase"
                    [options]="planningPhaseOptions"
                    placeholder="Select planning phase"
                    [invalid]="isFieldInvalid('planningPhase')"
                    pTooltip="Choose the current planning phase">
                  </p-select>
                  @if (isFieldInvalid('planningPhase')) {
                    <p-message severity="error" size="small" variant="simple">Planning phase is required</p-message>
                  }
                </div>

                <div class="flex flex-col pg-time-framework-edit-flex-col">
                  <label for="preparationTime" class="pg-form-label">Preparation Time (weeks)</label>
                  <p-inputNumber
                    id="preparationTime"
                    formControlName="preparationTime"
                    placeholder="Preparation time"
                    [min]="1"
                    [max]="52"
                    pTooltip="Estimated preparation time in weeks">
                  </p-inputNumber>
                </div>
              </div>

              <!-- Second Row: Two columns (half width each) -->
              <div class="pg-time-framework-edit-grid--two-col">
                <div class="flex flex-col pg-time-framework-edit-flex-col">
                  <label for="recruitmentPeriod" class="pg-form-label">Recruitment Period (weeks)</label>
                  <p-inputNumber
                    id="recruitmentPeriod"
                    formControlName="recruitmentPeriod"
                    placeholder="Recruitment period"
                    [min]="1"
                    [max]="104"
                    pTooltip="Estimated recruitment period in weeks">
                  </p-inputNumber>
                </div>

                <div class="flex flex-col pg-time-framework-edit-flex-col">
                  <label for="dataCollectionPeriod" class="pg-form-label">Data Collection Period (weeks)</label>
                  <p-inputNumber
                    id="dataCollectionPeriod"
                    formControlName="dataCollectionPeriod"
                    placeholder="Data collection period"
                    [min]="1"
                    [max]="208"
                    pTooltip="Estimated data collection period in weeks">
                  </p-inputNumber>
                </div>
              </div>

              <!-- Third Row: Two columns (half width each) -->
              <div class="pg-time-framework-edit-grid--two-col">
                <div class="flex flex-col pg-time-framework-edit-flex-col">
                  <label for="analysisPeriod" class="pg-form-label">Analysis Period (weeks)</label>
                  <p-inputNumber
                    id="analysisPeriod"
                    formControlName="analysisPeriod"
                    placeholder="Analysis period"
                    [min]="1"
                    [max]="52"
                    pTooltip="Estimated analysis period in weeks">
                  </p-inputNumber>
                </div>

                <div class="flex flex-col pg-time-framework-edit-flex-col">
                  <label for="reportingPeriod" class="pg-form-label">Reporting Period (weeks)</label>
                  <p-inputNumber
                    id="reportingPeriod"
                    formControlName="reportingPeriod"
                    placeholder="Reporting period"
                    [min]="1"
                    [max]="26"
                    pTooltip="Estimated reporting period in weeks">
                  </p-inputNumber>
                </div>
              </div>

              <!-- Form Divider -->
              <div class="pg-form-divider"></div>

              <!-- Fourth Row: One column (full width) -->
              <div class="flex flex-col pg-time-framework-edit-flex-col">
                <label for="milestones" class="pg-form-label">Key Milestones</label>
                <textarea
                  id="milestones"
                  pTextarea
                  formControlName="milestones"
                  placeholder="Describe key milestones and deliverables"
                  rows="3">
                </textarea>
              </div>

              <!-- Fifth Row: Two columns (half width each) -->
              <div class="pg-time-framework-edit-grid--two-col">
                <div class="flex flex-col pg-time-framework-edit-flex-col">
                  <label for="dependencies" class="pg-form-label">Dependencies</label>
                  <textarea
                    id="dependencies"
                    pTextarea
                    formControlName="dependencies"
                    placeholder="List external dependencies"
                    rows="2">
                  </textarea>
                </div>

                <div class="flex flex-col pg-time-framework-edit-flex-col">
                  <label for="risks" class="pg-form-label">Risk Factors</label>
                  <textarea
                    id="risks"
                    pTextarea
                    formControlName="risks"
                    placeholder="Identify potential risks"
                    rows="2">
                  </textarea>
                </div>
              </div>

            </div>
          </div>
        </div>

        </form>
      </main>

      <!-- Aside Content -->
      <aside class="pg-time-framework-edit-aside">
        <!-- Planning Guidelines Card -->
        <div class="pg-card pg-card--padding-md">
          <div class="pg-card__header">
            <div class="pg-card__title">Planning Guidelines</div>
            <div class="pg-card__description">
              Best practices for trial timeline planning
            </div>
          </div>
          <div class="pg-card__content">
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Timeline Best Practices</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Allow buffer time for unexpected delays</li>
                  <li>• Consider seasonal factors in recruitment</li>
                  <li>• Plan for regulatory review periods</li>
                  <li>• Account for data quality checks</li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Risk Mitigation</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Identify critical path dependencies</li>
                  <li>• Plan alternative recruitment strategies</li>
                  <li>• Consider backup analysis methods</li>
                  <li>• Document contingency plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Comments Component -->
        <kit-comments 
          [comments]="comments"
          [tags]="tags"
          (commentsChange)="onCommentsChange($event)"
          (tagsChange)="onTagsChange($event)"
          (actionClick)="onActionClick($event)">
        </kit-comments>
      </aside>

    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class TimeFrameworkEditComponent {
  @Input() activeTrial: Trial | null = null;

  timeFrameworkForm: FormGroup;

  /** Comments text */
  comments: string = '';

  /** Tags text */
  tags: string = '';

  /** Planning phase options */
  planningPhaseOptions = [
    { label: 'Initial Planning', value: 'initial' },
    { label: 'Protocol Development', value: 'protocol' },
    { label: 'Regulatory Submission', value: 'regulatory' },
    { label: 'Site Selection', value: 'site-selection' },
    { label: 'Recruitment Planning', value: 'recruitment' },
    { label: 'Final Preparation', value: 'final' }
  ];

  constructor(private fb: FormBuilder) {
    this.timeFrameworkForm = this.createForm();
  }

  /**
   * Create the reactive form
   */
  private createForm(): FormGroup {
    return this.fb.group({
      planningPhase: ['', Validators.required],
      preparationTime: [null],
      recruitmentPeriod: [null],
      dataCollectionPeriod: [null],
      analysisPeriod: [null],
      reportingPeriod: [null],
      totalDuration: [null],
      milestones: [''],
      dependencies: [''],
      risks: ['']
    });
  }

  /**
   * Check if a form field is invalid
   */
  isFieldInvalid(fieldName: string): boolean {
    const field = this.timeFrameworkForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  /**
   * Handle form submission
   */
  onSubmit(): void {
    if (this.timeFrameworkForm.valid) {
      const formValue = this.timeFrameworkForm.value;
      console.log('Time framework updated:', formValue);
    } else {
      console.log('Form is invalid');
    }
  }

  /**
   * Reset the form
   */
  onReset(): void {
    this.timeFrameworkForm.reset();
  }

  /**
   * Handle comments change from CommentsComponent
   * @param comments - The new comments value
   */
  onCommentsChange(comments: string): void {
    this.comments = comments;
    console.log('Comments changed:', comments);
  }

  /**
   * Handle tags change from CommentsComponent
   * @param tags - The new tags value
   */
  onTagsChange(tags: string): void {
    this.tags = tags;
    console.log('Tags changed:', tags);
  }

  /**
   * Handle action click from CommentsComponent
   * @param action - The action that was clicked
   */
  onActionClick(action: string): void {
    console.log('Action clicked:', action);
    // TODO: Implement action handling based on action type
  }
}
