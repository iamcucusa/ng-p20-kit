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
 * Parameters Edit Component
 * 
 * Handles trial parameters editing including:
 * - Trial basic information
 * - Study design parameters
 * - Timeline settings
 * - Regulatory requirements
 * - Data collection parameters
 * 
 * @example
 * ```html
 * <kit-parameters-edit 
 *   [activeTrial]="trial">
 * </kit-parameters-edit>
 * ```
 */
@Component({
  selector: 'kit-parameters-edit',
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
  template: `
    <div class="pg-parameters-edit-container">
      <main class="pg-parameters-edit-main">
        <form [formGroup]="parametersForm" (ngSubmit)="onSubmit()" class="pg-parameters-edit-form">
          
          <!-- Basic Information Card -->
          <div class="pg-card pg-card--padding-md">
            <div class="pg-card__header">
              <div class="pg-card__title">Basic Parameters</div>
              <div class="pg-card__description">Ensure trial details are accurate and complete to proceed with the next steps.</div>
            </div>
            <div class="pg-card__content">
              <!-- Form Layout with Tailwind Grid -->
              <div class="pg-parameters-edit-grid">
                
                <!-- First Row: Two columns (half width each) -->
                <div class="pg-parameters-edit-grid--two-col">
                  <div class="flex flex-col gap-1">
                    <label for="trialName" class="pg-form-label" required>Trial Name</label>
                    <input 
                      id="trialName"
                      type="text" 
                      pInputText 
                      formControlName="trialName"
                      placeholder="Enter trial name"
                      [invalid]="isFieldInvalid('trialName')"
                      pTooltip="Enter a descriptive name for your trial"
                      tooltipPosition="top">
                    @if (isFieldInvalid('trialName')) {
                      <p-message severity="error" size="small" variant="simple">Trial name is required</p-message>
                    }
                  </div>
                  
                  <div class="flex flex-col gap-1">
                    <label for="studyType" class="pg-form-label" required>Study Type</label>
                    <p-select 
                      id="studyType"
                      formControlName="studyType"
                      [options]="studyTypeOptions"
                      placeholder="Select study type"
                      [invalid]="isFieldInvalid('studyType')"
                      pTooltip="Choose the type of clinical study">
                    </p-select>
                    @if (isFieldInvalid('studyType')) {
                      <p-message severity="error" size="small" variant="simple">Study type is required</p-message>
                    }
                  </div>
                </div>

                <!-- Second Row: One column (full width) -->
                <div class="flex flex-col gap-1">
                  <label for="trialDescription" class="pg-form-label">Description</label>
                  <textarea 
                    id="trialDescription"
                    pTextarea 
                    formControlName="trialDescription"
                    placeholder="Describe the trial objectives and scope"
                    rows="3">
                  </textarea>
                </div>

                <!-- Third Row: One column (full width) -->
                <div class="flex flex-col gap-1">
                  <label for="phase" class="pg-form-label">Phase</label>
                  <p-select 
                    id="phase"
                    formControlName="phase"
                    [options]="phaseOptions"
                    placeholder="Select phase"
                    pTooltip="Clinical trial phase">
                  </p-select>
                </div>

                <!-- Form Divider -->
                <div class="pg-form-divider"></div>

                <!-- Fourth Row: Two columns (4/12 and 8/12) -->
                <div class="pg-parameters-edit-grid--twelve-col">
                  <div class="md:col-span-4 flex flex-col gap-1">
                    <label for="participants" class="pg-form-label">Expected Participants</label>
                    <p-inputNumber 
                      id="participants"
                      formControlName="participants"
                      placeholder="Number of participants"
                      [min]="1"
                      [max]="10000"
                      pTooltip="Estimated number of participants">
                    </p-inputNumber>
                  </div>
                  
                  <div class="md:col-span-8 flex flex-col gap-1">
                    <label for="duration" class="pg-form-label">Duration (months)</label>
                    <p-inputNumber 
                      id="duration"
                      formControlName="duration"
                      placeholder="Trial duration"
                      [min]="1"
                      [max]="120"
                      pTooltip="Expected trial duration in months">
                    </p-inputNumber>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <!-- Study Design Card -->
          <div class="pg-card pg-card--padding-md">
            <div class="pg-card__header">
              <div class="pg-card__title">Trial Version</div>
              <div class="pg-card__description">Track version changes and add detailed descriptions to manage changes over time.</div>

            </div>
            <div class="pg-card__content">
              <div class="pg-parameters-edit-grid--three-col">
                <div class="flex flex-col gap-1">
                  <label for="studyType" class="pg-form-label" required>Study Type</label>
                  <p-select 
                    id="studyType"
                    formControlName="studyType"
                    [options]="studyTypeOptions"
                    placeholder="Select study type"
                    [invalid]="isFieldInvalid('studyType')"
                    pTooltip="Choose the type of clinical study">
                  </p-select>
                  @if (isFieldInvalid('studyType')) {
                    <p-message severity="error" size="small" variant="simple">Study type is required</p-message>
                  }
                </div>

                <div class="flex flex-col gap-1">
                  <label for="phase" class="pg-form-label">Phase</label>
                  <p-select 
                    id="phase"
                    formControlName="phase"
                    [options]="phaseOptions"
                    placeholder="Select phase"
                    pTooltip="Clinical trial phase">
                  </p-select>
                </div>

                <div class="flex flex-col gap-1">
                  <label for="participants" class="pg-form-label">Expected Participants</label>
                  <p-inputNumber 
                    id="participants"
                    formControlName="participants"
                    placeholder="Number of participants"
                    [min]="1"
                    [max]="10000"
                    pTooltip="Estimated number of participants">
                  </p-inputNumber>
                </div>

                <div class="flex flex-col gap-1">
                  <label for="duration" class="pg-form-label">Duration (months)</label>
                  <p-inputNumber 
                    id="duration"
                    formControlName="duration"
                    placeholder="Trial duration"
                    [min]="1"
                    [max]="120"
                    pTooltip="Expected trial duration in months">
                  </p-inputNumber>
                </div>
              </div>
            </div>
          </div>
          

          <!-- Status Messages -->
          @if (saveMessage) {
            <p-message 
              [severity]="saveMessage.severity" 
              [closable]="true"
              (onClose)="clearMessage()">
              {{ saveMessage.text }}
            </p-message>
          }
        </form>
      </main>

      <aside class="pg-parameters-edit-aside">
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
  styleUrls: ['./parameters-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParametersEditComponent {
  private fb = new FormBuilder();

  /**
   * Active trial data
   * Used to populate form with existing trial parameters
   */
  @Input() activeTrial?: Trial | null;

  /**
   * Loading state for save operation
   */
  isSaving = false;

  /**
   * Status message for user feedback
   */
  saveMessage?: { severity: 'success' | 'error' | 'info' | 'warn'; text: string };

  /** Comments text */
  comments: string = '';

  /** Tags text */
  tags: string = '';

  /**
   * Form group for trial parameters
   * Contains all form controls and validation rules
   */
  parametersForm: FormGroup;

  /**
   * Study type options for dropdown
   */
  studyTypeOptions = [
    { label: 'Interventional', value: 'interventional' },
    { label: 'Observational', value: 'observational' },
    { label: 'Expanded Access', value: 'expanded_access' },
    { label: 'Other', value: 'other' }
  ];

  /**
   * Phase options for dropdown
   */
  phaseOptions = [
    { label: 'Phase I', value: 'phase_1' },
    { label: 'Phase II', value: 'phase_2' },
    { label: 'Phase III', value: 'phase_3' },
    { label: 'Phase IV', value: 'phase_4' },
    { label: 'Not Applicable', value: 'not_applicable' }
  ];

  // Removed unused options arrays

  constructor() {
    this.parametersForm = this.createForm();
  }

  /**
   * Creates the reactive form with all controls and validators
   * @returns FormGroup with trial parameters configuration
   */
  private createForm(): FormGroup {
    return this.fb.group({
      // Basic Information
      trialName: ['', [Validators.required, Validators.minLength(3)]],
      trialDescription: [''],
      
      // Study Design
      studyType: ['', Validators.required],
      phase: [''],
      participants: [null, [Validators.min(1), Validators.max(10000)]],
      duration: [null, [Validators.min(1), Validators.max(120)]],
      
      // Removed unused form controls
    });
  }

  /**
   * Handles form submission
   * Validates form and emits parameters change event
   */
  onSubmit(): void {
    if (this.parametersForm.valid) {
      this.isSaving = true;
      
      // Simulate API call
      setTimeout(() => {
        this.isSaving = false;
        this.saveMessage = {
          severity: 'success',
          text: 'Trial parameters saved successfully'
        };
        
        console.log('Parameters saved successfully:', this.parametersForm.value);
      }, 1000);
    }
  }

  /**
   * Resets the form to initial state
   */
  onReset(): void {
    this.parametersForm.reset();
    this.clearMessage();
  }

  /**
   * Checks if a form field is invalid and has been touched
   * @param fieldName - Name of the form control
   * @returns True if field is invalid and touched
   */
  isFieldInvalid(fieldName: string): boolean {
    const field = this.parametersForm.get(fieldName);
    return !!(field && field.invalid && (field.touched || field.dirty));
  }

  /**
   * Clears the status message
   */
  clearMessage(): void {
    this.saveMessage = undefined;
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
