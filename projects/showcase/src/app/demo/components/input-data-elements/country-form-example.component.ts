import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CountrySelectComponent } from '@country/country-select.component';
import { TrialCountry } from '@country/country.d';
import { trialCountries } from '@country/country.settings';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'kit-country-form-example',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CountrySelectComponent, ButtonModule],
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
          <div class="pg-country-form__field">
            <label for="country" class="pg-country-form__label">Country *</label>
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
            
            @if (countryForm.get('country')?.invalid && countryForm.get('country')?.touched) {
              <div class="pg-country-form__error">
                Country is required
              </div>
            }
          </div>
          
          <div class="pg-country-form__field">
            <label for="notes" class="pg-country-form__label">Notes</label>
            <textarea
              id="notes"
              formControlName="notes"
              placeholder="Additional notes about the country selection"
              rows="3"
              class="w-full p-2 border rounded">
            </textarea>
          </div>
          
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
  countryForm: FormGroup;
  selectedCountry: TrialCountry | null = null;
  submittedData: any = null;
  availableCountries: TrialCountry[] = trialCountries;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder) {
    this.countryForm = this.fb.group({
      country: [null, Validators.required],
      notes: ['']
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
