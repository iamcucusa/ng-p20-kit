import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, ControlContainer, FormGroupDirective } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { AssumptionsCaptarioSource } from '@core/source.settings';

/**
 * Assumptions Field Component
 * 
 * A reusable wrapper component for form fields in assumptions sections.
 * Provides consistent styling, validation, loading states, and autofill functionality
 * across all assumption form fields.
 * 
 * @component
 * @selector pg-assumptions-field
 * @standalone true
 * 
 * @example
 * ```html
 * <pg-assumptions-field
 *   [title]="'Study Synopsis'"
 *   [name]="'studySynopsis'"
 *   [formField]="formGroup"
 *   [field]="fieldTemplate"
 *   [required]="true"
 *   [loading]="isLoading">
 *   <ng-template #fieldTemplate>
 *     <p-datepicker formControlName="studySynopsis"></p-datepicker>
 *   </ng-template>
 * </pg-assumptions-field>
 * ```
 * 
 * @since 1.0.0
 */
@Component({
  selector: 'pg-assumptions-field',
  standalone: true,
  imports: [CommonModule, SkeletonModule, TooltipModule],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  template: `
    <div 
      class="pg-assumptions-field" 
      [ngClass]="{ 
        'pg-assumptions-field--loading': loading,
        'pg-assumptions-field--disabled': formField && formField.disabled,
        'pg-assumptions-field--readonly': formField && formField.value && !formField.enabled
      }"
      role="group"
      [attr.aria-labelledby]="name + '-label'"
      [attr.aria-describedby]="getAriaDescribedBy()"
    >
      <div class="pg-assumptions-field__container" [ngClass]="{ 'pg-assumptions-field__container--no-margin': labelHidden }">
        <div
          class="pg-assumptions-field__header"
          [ngClass]="{
            'pg-assumptions-field__header--with-source': dataSource,
            'pg-assumptions-field__header--responsive': true
          }"
        >
          @if (dataSource) {
            <div class="pg-assumptions-field__source-indicator" role="img" [attr.aria-label]="'Data source: ' + dataSource">
              <div
                pTooltip="{{ dataSource }}"
                tooltipPosition="bottom"
                class="pg-assumptions-field__source-indicator-dot"
                [ngClass]="'pg-assumptions-field__source-indicator-dot--' + dataSource.toLowerCase()"
                tabindex="0"
                role="button"
                [attr.aria-label]="'Data source indicator: ' + dataSource"
              ></div>
            </div>
          }
          <label
            pTooltip="{{ info }}"
            tooltipPosition="bottom"
            [id]="name + '-label'"
            [for]="name"
            class="pg-assumptions-field__label"
            [ngClass]="{ 
              'p-required': isFieldRequired,
              'pg-assumptions-field__label--sr-only': labelHidden, 
              'pg-assumptions-field__label--with-source': dataSource 
            }"
            >{{ title }}
            @if (unit) {
              <sup class="pg-assumptions-field__unit" [attr.aria-label]="'Unit: ' + unit">{{ unit }}</sup>
            }
          </label>
          <div class="pg-assumptions-field__actions">
            @if (metricInfo) {
              <span
                pTooltip="{{ metricInfo }}"
                tooltipPosition="bottom"
                class="pg-assumptions-field__metric-info"
                role="button"
                tabindex="0"
                [attr.aria-label]="'Metric information: ' + metricInfo"
              >
                <i class="pi pi-box" aria-hidden="true"></i>
              </span>
            }
          </div>
        </div>
        @if (loading) {
          <p-skeleton height="2rem" [attr.aria-label]="'Loading ' + title"></p-skeleton>
        } @else {
          <div class="pg-assumptions-field__field-container">
            <ng-container *ngTemplateOutlet="field"></ng-container>
          </div>
          @if (formField && formField.errors && formField.invalid && formField.touched) {
            @for (fieldError of errorsToValidate; track fieldError) {
              @if (formField.hasError(fieldError) || formField.errors[fieldError] === false) {
                <small 
                  [id]="name + '-' + fieldError + '-error'" 
                  class="pg-assumptions-field__error"
                  role="alert"
                  [attr.aria-live]="'polite'"
                >
                  {{ errorsMessages[fieldError] }}
                </small>
              }
            }
          }
          @if (autoFill && suggestion) {
            <div
              class="pg-assumptions-field__autofill-suggestion"
              (click)="fillInWithValue(suggestion)"
              (keydown.enter)="fillInWithValue(suggestion)"
              (keydown.space)="fillInWithValue(suggestion)"
              role="button"
              tabindex="0"
              [attr.aria-label]="'Autofill suggestion: ' + suggestion"
            >
              <div class="pg-assumptions-field__autofill-suggestion-content">
                <span class="pg-assumptions-field__autofill-suggestion-label" aria-hidden="true">CTMS</span>
                <span class="sr-only">Suggested by CTMS: </span>{{ suggestion }}
              </div>
            </div>
          }
          @if (!autoFill && advice && formField && !formField.invalid) {
            <small id="{{ name }}-help" class="pg-assumptions-field__advice">
              {{ advice }}
            </small>
          }
        }
      </div>
    </div>
  `,
  styleUrls: ['./assumptions-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssumptionsFieldComponent {
  /** Event emitted when autofill value is selected */
  @Output() fillIn: EventEmitter<string | null | undefined> = new EventEmitter<string | null | undefined>();

  /** Whether the field is required */
  @Input() required = false;
  
  /** Whether to hide the field label */
  @Input() labelHidden = false;
  
  /** Whether the field is in loading state */
  @Input() loading = false;
  
  /** Field title/label text */
  @Input() title = 'Assumptions Field';
  
  /** Field name for form binding */
  @Input() name = 'assumptions-field';
  
  /** Form control or form group for validation */
  @Input() formField: FormControl | FormGroup | null = null;
  
  /** Template reference for the field content */
  @Input() field: TemplateRef<HTMLSpanElement> | null = null;
  
  /** Array of error keys to validate */
  @Input() errorsToValidate: string[] = [];
  
  /** Error messages mapping */
  @Input() errorsMessages: { [key: string]: string } = {};
  
  /** Whether autofill is enabled */
  @Input() autoFill = false;
  
  /** Advice text to display below field */
  @Input() advice: string | null = null;
  
  /** Data source indicator */
  @Input() dataSource: AssumptionsCaptarioSource | undefined;
  
  /** Info tooltip text */
  @Input() info: string | null | undefined = null;
  
  /** Metric color theme */
  @Input() metricColor: 'purple' | 'blue' | 'green' = 'blue';
  
  /** Metric info tooltip text */
  @Input() metricInfo: string | undefined;
  
  /** Unit text to display as superscript */
  @Input() unit: string | undefined;

  /** Current suggestion value for autofill */
  suggestion: string | null = null;
  
  /** Data source color mapping */
  dataSourceMapping: { [key: string]: string } = {
    CAPTARIO: 'bg-purple-400 border-purple-400',
  };

  /**
   * Sets the autofill suggestion value
   * 
   * @param {string | null | undefined} value - The suggestion value
   */
  @Input() set autoFillValue(value: unknown | null | undefined) {
    this.suggestion = value == null ? null : value.toString().trim().replace(/\s/g, '');
  }

  /**
   * Handles autofill value selection
   * 
   * @param {string | null | undefined} value - The selected value
   */
  fillInWithValue(value: string | null | undefined): void {
    this.fillIn.emit(value);
    this.suggestion = null;
  }

  /**
   * Generates aria-describedby attribute value for accessibility
   * 
   * @returns {string} Space-separated list of element IDs
   */
  getAriaDescribedBy(): string {
    const ids: string[] = [];
    
    if (this.formField && this.formField.errors && this.formField.invalid && this.formField.touched) {
      this.errorsToValidate.forEach(error => {
        if (this.formField?.hasError(error) || this.formField?.errors?.[error] === false) {
          ids.push(`${this.name}-${error}-error`);
        }
      });
    }
    
    if (!this.autoFill && this.advice && this.formField && !this.formField?.invalid) {
      ids.push(`${this.name}-help`);
    }
    
    return ids.join(' ');
  }

  /**
   * Checks if the form field has required validators
   * This automatically detects if the field is required based on form validators
   * 
   * @returns {boolean} True if the field has required validators
   */
  get isFieldRequired(): boolean {
    if (!this.formField || !this.formField.validator) {
      return this.required; // Fallback to input property
    }
    
    // Check if the field has required validators
    const validators = this.formField.validator({} as any);
    return validators !== null && validators['required'] !== undefined;
  }
}
