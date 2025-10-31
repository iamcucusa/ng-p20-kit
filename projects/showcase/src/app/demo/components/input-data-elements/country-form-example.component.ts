import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CountrySelectComponent } from '@country/country-select.component';
import { TrialCountry } from '@country/country.d';
import { trialCountries } from '@country/country.settings';
import { ButtonModule } from 'primeng/button';
import { AssumptionsFieldComponent } from '@assumptions/sections/assumptions-field.component';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'kit-country-form-example',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CountrySelectComponent, ButtonModule, AssumptionsFieldComponent, TextareaModule],
  template: `
    <div class="pg-card pg-card--padding-lg">
      <header class="pg-card__header">
        <h2 class="pg-card__title">Country Form Example</h2>
        <p class="pg-card__description">
          Demonstrates the CountrySelectComponent integrated with Angular reactive forms, including validation and form submission.
        </p>
      </header>
      
      <div class="pg-card__content pg-country-form-examples">
        <form [formGroup]="countryForm" (ngSubmit)="onSubmit()" class="pg-country-form">
          <pg-assumptions-field
            title="Country"
            name="country"
            [field]="countryField"
            [formField]="countryForm.controls['country']"
            [errorsMessages]="{ required: 'Country is required' }"
            [errorsToValidate]="['required']"
            info="Choose your country from the list">
            <ng-template #countryField>
              <kit-country-select
                id="country"
                [selectedCountry]="selectedCountry"
                [countries]="availableCountries"
                [loading]="isLoading"
                (countryChange)="onCountryChange($event)"
                placeholder="Select your country"
                [showClear]="true"
                [filter]="true"
                [required]="true"
                [invalid]="(countryForm.get('country')?.invalid ?? false) && (countryForm.get('country')?.touched ?? false)"
                tooltip="Choose your country from the list">
              </kit-country-select>
            </ng-template>
          </pg-assumptions-field>

          <pg-assumptions-field
            title="Notes"
            name="notes"
            [field]="notesField"
            [formField]="countryForm.controls['notes']"
            info="Optional additional information">
            <ng-template #notesField>
              <textarea
                pTextarea
                formControlName="notes"
                rows="3"
                placeholder="Additional notes about the country selection"
                class="w-full"
              ></textarea>
            </ng-template>
          </pg-assumptions-field>
          
          <div class="pg-country-form__actions">
            <p-button 
              type="submit" 
              label="Submit"
              severity="primary"
              [disabled]="countryForm.invalid">
            </p-button>
            
            <p-button 
              type="button" 
              label="Reset"
              severity="secondary"
              (onClick)="resetForm()">
            </p-button>
            
            <p-button 
              type="button" 
              [label]="isLoading ? 'Stop Loading' : 'Start Loading'"
              variant="outlined"
              (onClick)="toggleLoading()">
            </p-button>
          </div>
        </form>
        
        <div class="pg-country-form__submitted" *ngIf="submittedData">
          <h3 class="text-lg font-medium">Submitted Data</h3>
          <div class="pg-country-form__submitted-content">
            <pre>{{ submittedData | json }}</pre>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./country-form-example.component.scss']
})
export class CountryFormExampleComponent {
  countryForm: FormGroup<{
    country: FormControl<TrialCountry | null>;
    notes: FormControl<string | null>;
  }>;
  selectedCountry: TrialCountry | null = null;
  submittedData: any = null;
  availableCountries: TrialCountry[] = trialCountries;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder) {
    this.countryForm = this.fb.group({
      country: this.fb.control<TrialCountry | null>(null, { validators: [Validators.required] }),
      notes: this.fb.control<string | null>('')
    });
  }

  onCountryChange(country: TrialCountry | null): void {
    this.selectedCountry = country;
    this.countryForm.patchValue({ country: country });
  }

  onSubmit(): void {
    if (this.countryForm.valid) {
      this.submittedData = {
        country: this.selectedCountry,
        notes: this.countryForm.get('notes')?.value
      };
      console.log('Form submitted:', this.submittedData);
    }
  }

  resetForm(): void {
    this.countryForm.reset();
    this.selectedCountry = null;
    this.submittedData = null;
  }

  toggleLoading(): void {
    this.isLoading = !this.isLoading;
  }
}
