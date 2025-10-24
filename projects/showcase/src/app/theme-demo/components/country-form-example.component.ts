import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CountrySelectComponent } from '@country/country-select.component';
import { TrialCountry } from '@country/country.d';
import { trialCountries } from '@country/country.settings';

@Component({
  selector: 'kit-country-form-example',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CountrySelectComponent],
  template: `
    <div class="p-4">
      <h3>Country Form Example</h3>
      
      <form [formGroup]="countryForm" (ngSubmit)="onSubmit()" class="space-y-4">
        <div class="mb-4">
          <label for="country" class="block mb-2">Country *</label>
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
            <div class="text-red-500 text-sm mt-1">
              Country is required
            </div>
          }
        </div>
        
        <div class="mb-4">
          <label for="notes" class="block mb-2">Notes</label>
          <textarea
            id="notes"
            formControlName="notes"
            placeholder="Additional notes about the country selection"
            rows="3"
            class="w-full p-2 border rounded">
          </textarea>
        </div>
        
        <div class="flex gap-2">
          <button 
            type="submit" 
            class="p-button p-button-primary"
            [disabled]="countryForm.invalid">
            Submit
          </button>
          
          <button 
            type="button" 
            class="p-button p-button-secondary"
            (click)="resetForm()">
            Reset
          </button>
          
          <button 
            type="button" 
            class="p-button p-button-outlined"
            (click)="toggleLoading()">
            {{ isLoading ? 'Stop Loading' : 'Start Loading' }}
          </button>
        </div>
      </form>
      
      <div class="mt-4 p-3 bg-gray-100 rounded" *ngIf="submittedData">
        <h4>Submitted Data:</h4>
        <pre>{{ submittedData | json }}</pre>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
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
