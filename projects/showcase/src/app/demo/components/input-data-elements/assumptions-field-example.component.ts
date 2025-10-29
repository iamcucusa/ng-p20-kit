import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AssumptionsFieldComponent } from '@assumptions/sections/assumptions-field.component';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

/**
 * Assumptions Field Component Example
 * 
 * Demonstrates all the different states and configurations of the AssumptionsFieldComponent:
 * - Required fields (automatic detection from validators)
 * - Optional fields
 * - Loading states
 * - Error states
 * - Different field types (text, number, date, textarea, select, checkbox)
 * - Autofill suggestions
 * - Source indicators
 * - Different field sizes and layouts
 * 
 * @since 1.0.0
 */
@Component({
  selector: 'kit-assumptions-field-example',
  standalone: true,
  imports: [
    CommonModule,
    AssumptionsFieldComponent,
    DatePickerModule,
    InputTextModule,
    InputNumberModule,
    TextareaModule,
    SelectModule,
    CheckboxModule,
    SkeletonModule,
    TooltipModule,
    ButtonModule
  ],
  template: `
    <div class="pg-assumptions-field-examples">
      <!-- Basic Examples -->
      <div class="pg-card pg-card--padding-lg">
        <header class="pg-card__header">
          <h2 class="pg-card__title">Assumptions Field: Basic Field Examples</h2>
          <p class="pg-card__description">Core text and numeric inputs showing required detection, optional fields, manual required, and unit suffix.</p>
        </header>
        <div class="pg-assumptions-field-section pg-assumptions-field-section--two-col">
          <!-- Required Text Field -->
          <pg-assumptions-field
            title="Required Text Field"
            name="requiredText"
            [field]="requiredTextField"
            [formField]="getFormControl('requiredText', basicForm)"
            [errorsMessages]="{ required: 'This field is required' }"
            [errorsToValidate]="['required']"
            info="This field is automatically detected as required due to Validators.required"
          >
            <ng-template #requiredTextField>
              <input
                pInputText
                formControlName="requiredText"
                placeholder="Enter required text"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>

          <!-- Optional Text Field -->
          <pg-assumptions-field
            title="Optional Text Field"
            name="optionalText"
            [field]="optionalTextField"
            [autoFill]="autofillState.keyResults"
            [formField]="getFormControl('optionalText', basicForm)"
            [autoFillValue]="autofill.keyResults"
            (fillIn)="onAutofillFillIn($event)"
            info="This field has no validators, so no red asterisk appears, but has autofill"
          >
            <ng-template #optionalTextField>
              <input
                pInputText
                formControlName="optionalText"
                placeholder="Enter optional text"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>

          <!-- Manually Required Field -->
          <pg-assumptions-field
            title="Manually Required Field"
            name="manualRequired"
            [field]="manualRequiredField"
            [required]="true"
            [formField]="getFormControl('manualRequired', basicForm)"
            info="This field uses [required]='true' input property"
          >
            <ng-template #manualRequiredField>
              <input
                pInputText
                formControlName="manualRequired"
                placeholder="Enter manually required text"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>

          <!-- Field with Unit -->
          <pg-assumptions-field
            title="Field with Unit"
            name="fieldWithUnit"
            [field]="fieldWithUnitTemplate"
            unit="kg"
            [formField]="getFormControl('fieldWithUnit', basicForm)"
            info="This field includes a unit display"
          >
            <ng-template #fieldWithUnitTemplate>
              <p-inputNumber
                formControlName="fieldWithUnit"
                placeholder="Enter weight"
                [suffix]="'kg'"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>
        </div>
      </div>

      <!-- Different Field Types -->
      <div class="pg-card pg-card--padding-lg">
        <header class="pg-card__header">
          <h2 class="pg-card__title">Assumptions Field: Different Field Types</h2>
          <p class="pg-card__description">Examples of date picker, number, textarea, select, and checkbox inputs with appropriate configuration.</p>
        </header>
        <div class="pg-assumptions-field-section pg-assumptions-field-section--two-col">
          <!-- Date Field -->
          <pg-assumptions-field
            title="Date Field"
            name="dateField"
            [field]="dateFieldTemplate"
            [formField]="getFormControl('dateField', fieldTypesForm)"
            [errorsMessages]="{ required: 'Date is required' }"
            [errorsToValidate]="['required']"
            info="PrimeNG DatePicker with automatic required detection"
          >
            <ng-template #dateFieldTemplate>
              <p-datepicker
                formControlName="dateField"
                placeholder="Select date"
                [showIcon]="true"
                [iconDisplay]="'input'"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>

          <!-- Number Field -->
          <pg-assumptions-field
            title="Number Field"
            name="numberField"
            [field]="numberFieldTemplate"
            unit="%"
            [formField]="getFormControl('numberField', fieldTypesForm)"
            info="PrimeNG InputNumber with unit display"
          >
            <ng-template #numberFieldTemplate>
              <p-inputNumber
                formControlName="numberField"
                placeholder="Enter percentage"
                [min]="0"
                [max]="100"
                [suffix]="'%'"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>

          <!-- Textarea Field -->
          <pg-assumptions-field
            title="Textarea Field"
            name="textareaField"
            [field]="textareaFieldTemplate"
            [autoFill]="autofillState.studySynopsis"
            [formField]="getFormControl('textareaField', fieldTypesForm)"
            [autoFillValue]="autofill.studySynopsis"
            [errorsMessages]="{ required: 'Description is required' }"
            [errorsToValidate]="['required']"
            (fillIn)="onAutofillFillIn($event)"
            info="Multi-line text input with validation and autofill"
          >
            <ng-template #textareaFieldTemplate>
              <textarea
                pTextarea
                formControlName="textareaField"
                rows="4"
                placeholder="Enter description"
                class="w-full"
              ></textarea>
            </ng-template>
          </pg-assumptions-field>

          <!-- Select Field -->
          <pg-assumptions-field
            title="Select Field"
            name="selectField"
            [field]="selectFieldTemplate"
            [formField]="getFormControl('selectField', fieldTypesForm)"
            info="Dropdown selection with options"
          >
            <ng-template #selectFieldTemplate>
              <p-select
                formControlName="selectField"
                [options]="selectOptions"
                placeholder="Choose an option"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>

          <!-- Checkbox Field -->
          <pg-assumptions-field
            title="Checkbox Field"
            name="checkboxField"
            [field]="checkboxFieldTemplate"
            [formField]="getFormControl('checkboxField', fieldTypesForm)"
            info="Boolean input with checkbox"
          >
            <ng-template #checkboxFieldTemplate>
              <div class="flex items-center space-x-2">
                <p-checkbox
                  formControlName="checkboxField"
                  [binary]="true"
                />
                <label class="text-sm text-gray-700">I agree to the terms and conditions</label>
              </div>
            </ng-template>
          </pg-assumptions-field>
        </div>
      </div>

      <!-- Field States -->
      <div class="pg-card pg-card--padding-lg">
        <header class="pg-card__header">
          <h2 class="pg-card__title">Assumptions Field: Field States</h2>
          <p class="pg-card__description">Loading, error, disabled, and readonly states to validate visual behavior and accessibility.</p>
        </header>
        <div class="pg-assumptions-field-section pg-assumptions-field-section--two-col">
          <!-- Loading State -->
          <pg-assumptions-field
            title="Loading State"
            name="loadingField"
            [field]="loadingFieldTemplate"
            [loading]="true"
            [formField]="getFormControl('loadingField', statesForm)"
            info="Field in loading state with skeleton animation"
          >
            <ng-template #loadingFieldTemplate>
              <p-skeleton height="2.5rem" />
            </ng-template>
          </pg-assumptions-field>

          <!-- Error State -->
          <pg-assumptions-field
            title="Error State"
            name="errorField"
            [field]="errorFieldTemplate"
            [formField]="getFormControl('errorField', statesForm)"
            [errorsMessages]="{ required: 'This field is required', minlength: 'Minimum 3 characters required' }"
            [errorsToValidate]="['required', 'minlength']"
            info="Field with validation errors"
          >
            <ng-template #errorFieldTemplate>
              <input
                pInputText
                formControlName="errorField"
                placeholder="This will show errors"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>

          <!-- Disabled State -->
          <pg-assumptions-field
            title="Disabled State"
            name="disabledField"
            [field]="disabledFieldTemplate"
            [formField]="getFormControl('disabledField', statesForm)"
            info="Field that is disabled and cannot be edited"
          >
            <ng-template #disabledFieldTemplate>
              <input
                pInputText
                formControlName="disabledField"
                placeholder="This field is disabled"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>

          <!-- Readonly State -->
          <pg-assumptions-field
            title="Readonly State"
            name="readonlyField"
            [field]="readonlyFieldTemplate"
            [formField]="getFormControl('readonlyField', statesForm)"
            info="Field that is readonly and cannot be edited"
          >
            <ng-template #readonlyFieldTemplate>
              <input
                pInputText
                formControlName="readonlyField"
                placeholder="This field is readonly"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>
        </div>
      </div>

      <!-- Autofill and Source Examples -->
      <div class="pg-card pg-card--padding-lg">
        <header class="pg-card__header">
          <h2 class="pg-card__title">Assumptions Field: Autofill and Source Indicators</h2>
          <p class="pg-card__description">Demonstrates autofill suggestion banner, data source indicator, and the combined case.</p>
        </header>
        <div class="pg-assumptions-field-section pg-assumptions-field-section--two-col">
          <!-- Field with Autofill Suggestion -->
          <pg-assumptions-field
            title="Field with Autofill"
            name="autofillField"
            [field]="autofillFieldTemplate"
            [autoFill]="autofillState.autofillField"
            [formField]="getFormControl('autofillField', autofillForm)"
            [autoFillValue]="autofill.autofillField"
            (fillIn)="onAutofillFillIn($event)"
            info="Field with autofill suggestion from external source"
          >
            <ng-template #autofillFieldTemplate>
              <input
                pInputText
                formControlName="autofillField"
                placeholder="Type to see autofill suggestion"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>

          <!-- Field with Source Indicator -->
          <pg-assumptions-field
            title="Field with Source"
            name="sourceField"
            [field]="sourceFieldTemplate"
            dataSource="CAPTARIO"
            [formField]="getFormControl('sourceField', autofillForm)"
            info="Field with data source indicator (purple dot)"
          >
            <ng-template #sourceFieldTemplate>
              <input
                pInputText
                formControlName="sourceField"
                placeholder="Field with source indicator"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>

          <!-- Field with Both Autofill and Source -->
          <pg-assumptions-field
            title="Field with Both"
            name="bothField"
            [field]="bothFieldTemplate"
            dataSource="CAPTARIO"
            [autoFill]="autofillState.bothField"
            [formField]="getFormControl('bothField', autofillForm)"
            [autoFillValue]="autofill.bothField"
            (fillIn)="onAutofillFillIn($event)"
            info="Field with both autofill and source indicator"
          >
            <ng-template #bothFieldTemplate>
              <input
                pInputText
                formControlName="bothField"
                placeholder="Field with both features"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>
        </div>
      </div>

      <!-- Accessibility Features -->
      <div class="pg-card pg-card--padding-lg">
        <header class="pg-card__header">
          <h2 class="pg-card__title">Assumptions Field: Accessibility Features</h2>
          <p class="pg-card__description">Accessibility-focused configurations such as visually hidden labels and advice text.</p>
        </header>
        <div class="pg-assumptions-field-section pg-assumptions-field-section--two-col">
          <!-- Field with Hidden Label -->
          <pg-assumptions-field
            title="Hidden Label Field"
            name="hiddenLabelField"
            [field]="hiddenLabelFieldTemplate"
            [labelHidden]="true"
            [formField]="getFormControl('hiddenLabelField', accessibilityForm)"
            info="Field with visually hidden label for screen readers"
          >
            <ng-template #hiddenLabelFieldTemplate>
              <input
                pInputText
                formControlName="hiddenLabelField"
                placeholder="Label is hidden but accessible"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>

          <!-- Field with Advice Text -->
          <pg-assumptions-field
            title="Field with Advice"
            name="adviceField"
            [field]="adviceFieldTemplate"
            [formField]="getFormControl('adviceField', accessibilityForm)"
            advice="This is helpful advice text that appears below the field"
            info="Field with additional advice text for users"
          >
            <ng-template #adviceFieldTemplate>
              <input
                pInputText
                formControlName="adviceField"
                placeholder="Field with advice text"
                class="w-full"
              />
            </ng-template>
          </pg-assumptions-field>
        </div>
      </div>

      <!-- Form Values Display -->
      <div class="pg-card pg-card--padding-lg">
        <header class="pg-card__header">
          <h2 class="pg-card__title">Assumptions Field: Current Form Values</h2>
          <p class="pg-card__description">Snapshot of all reactive form groups used in these examples.</p>
        </header>
        <div class="pg-card__content">
          <div class="pg-assumptions-field-actions">
            <p-button 
              type="button"
              label="Reset All Forms"
              severity="secondary"
              (onClick)="resetForms()">
            </p-button>
            <p-button 
              type="button"
              label="Validate All Forms"
              severity="primary"
              (onClick)="validateForms()">
            </p-button>
          </div>
          <pre class="pg-assumptions-field-pre">{{ getFormValues() }}</pre>
        </div>
      </div>
    </div>
  `
  ,
  styleUrls: ['./assumptions-field-example.component.scss']
})
export class AssumptionsFieldExampleComponent {
  private fb = inject(FormBuilder);

  // Basic form examples
  basicForm: FormGroup = this.fb.group({
    requiredText: ['', Validators.required],
    optionalText: [''],
    manualRequired: [''],
    fieldWithUnit: ['']
  });

  // Different field types
  fieldTypesForm: FormGroup = this.fb.group({
    dateField: ['', Validators.required],
    numberField: [''],
    textareaField: ['', Validators.required],
    selectField: [''],
    checkboxField: [false]
  });

  // Field states
  statesForm: FormGroup = this.fb.group({
    loadingField: [''],
    errorField: ['', [Validators.required, Validators.minLength(3)]],
    disabledField: [{ value: 'Disabled value', disabled: true }],
    readonlyField: [{ value: 'Readonly value' }]
  });

  // Autofill and source
  autofillForm: FormGroup = this.fb.group({
    autofillField: [''],
    sourceField: [''],
    bothField: ['']
  });

  // Accessibility
  accessibilityForm: FormGroup = this.fb.group({
    hiddenLabelField: [''],
    adviceField: ['']
  });

  // Select options
  selectOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  // Autofill state
  autofillState = {
    autofillField: true,
    bothField: true,
    keyResults: true,
    studySynopsis: true
  };

  // Mock autofill data
  autofill = {
    keyResults: 'Suggested key results value',
    studySynopsis: 'Suggested study synopsis value',
    autofillField: 'Suggested autofill value',
    bothField: 'Suggested both field value'
  };


  /**
   * Handles autofill value selection
   */
  onAutofillFillIn(value: string | null | undefined): void {
    console.log('Autofill value selected:', value);
  }

  /**
   * Resets all forms to their initial state
   */
  resetForms(): void {
    this.basicForm.reset();
    this.fieldTypesForm.reset();
    this.statesForm.reset();
    this.autofillForm.reset();
    this.accessibilityForm.reset();
  }

  /**
   * Validates all forms and marks fields as touched
   */
  validateForms(): void {
    Object.values(this.basicForm.controls).forEach(control => control.markAsTouched());
    Object.values(this.fieldTypesForm.controls).forEach(control => control.markAsTouched());
    Object.values(this.statesForm.controls).forEach(control => control.markAsTouched());
    Object.values(this.autofillForm.controls).forEach(control => control.markAsTouched());
    Object.values(this.accessibilityForm.controls).forEach(control => control.markAsTouched());
  }

  /**
   * Gets a FormControl from a FormGroup
   */
  getFormControl(controlName: string, form: FormGroup): FormControl {
    return form.get(controlName) as FormControl;
  }

  /**
   * Gets current form values for display
   */
  getFormValues(): string {
    return JSON.stringify({
      basicForm: this.basicForm.value,
      fieldTypesForm: this.fieldTypesForm.value,
      statesForm: this.statesForm.value,
      autofillForm: this.autofillForm.value,
      accessibilityForm: this.accessibilityForm.value
    }, null, 2);
  }
}
