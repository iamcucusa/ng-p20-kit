import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountrySelectComponent } from '@country/country-select.component';
import { TrialCountry } from '@country/country.d';
import { trialCountries } from '@country/country.settings';

@Component({
  selector: 'kit-country-select-example',
  standalone: true,
  imports: [CommonModule, FormsModule, CountrySelectComponent],
  template: `
    <div class="p-4">
      <h3>Country Select Example</h3>
      
      <div class="mb-4">
        <label for="country-select" class="block mb-2">Select Country:</label>
        <kit-country-select
          id="country-select"
          [selectedCountry]="selectedCountry"
          [countries]="availableCountries"
          [loading]="isLoading"
          (countryChange)="onCountryChange($event)"
          placeholder="Choose a country"
          [showClear]="true"
          [filter]="true"
          [required]="true"
          tooltip="Select your country from the list">
        </kit-country-select>
      </div>
      
      <div class="mb-4" *ngIf="selectedCountry">
        <h4>Selected Country Details:</h4>
        <div class="p-3 bg-gray-100 rounded">
          <p><strong>Name:</strong> {{ selectedCountry.name }}</p>
          <p><strong>Code:</strong> {{ selectedCountry.code }}</p>
          <p><strong>Code3:</strong> {{ selectedCountry.code3 }}</p>
          <p><strong>Country Number:</strong> {{ selectedCountry.countryNumber }}</p>
        </div>
      </div>
      
      <div class="mb-4 flex gap-2">
        <button 
          type="button" 
          class="p-button p-button-secondary"
          (click)="clearSelection()">
          Clear Selection
        </button>
        
        <button 
          type="button" 
          class="p-button p-button-outlined"
          (click)="toggleLoading()">
          {{ isLoading ? 'Stop Loading' : 'Start Loading' }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CountrySelectExampleComponent {
  selectedCountry: TrialCountry | null = null;
  availableCountries: TrialCountry[] = trialCountries;
  isLoading: boolean = false;

  onCountryChange(country: TrialCountry | null): void {
    this.selectedCountry = country;
    console.log('Country changed:', country);
  }

  clearSelection(): void {
    this.selectedCountry = null;
  }

  toggleLoading(): void {
    this.isLoading = !this.isLoading;
  }
}
