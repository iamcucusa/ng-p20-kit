import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CountrySelectComponent } from '@country/country-select.component';
import { TrialCountry } from '@country/country.d';
import { trialCountries } from '@country/country.settings';

@Component({
  selector: 'kit-country-select-example',
  standalone: true,
  imports: [CommonModule, FormsModule, CountrySelectComponent, ButtonModule],
  template: `
    <div class="pg-card pg-card--padding-lg">
      <header class="pg-card__header">
        <h2 class="pg-card__title">Country Select Examples</h2>
        <p class="pg-card__description">
          Demonstrates the CountrySelectComponent with loading state, clear and filter options, and selected country details.
        </p>
      </header>

      <div class="pg-card__content pg-country-select-examples">
        <!-- Selector and Details Side-by-Side -->
        <div class="pg-country-select-example pg-country-select-example--two-col">
          <div class="pg-country-select-example__control">
            <h3 class="text-lg font-medium">Basic Usage</h3>
            <label for="country-select" class="pg-country-select-example__label">Select Country</label>
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

          <div class="pg-country-select-example__details">
            <h3 class="text-lg font-medium">Selected Country Details</h3>
            <div class="pg-country-select-example__details-box">
              <p><strong>Name:</strong> {{ selectedCountry?.name || '---' }}</p>
              <p><strong>Code:</strong> {{ selectedCountry?.code || '---' }}</p>
              <p><strong>Code3:</strong> {{ selectedCountry?.code3 || '---' }}</p>
              <p><strong>Country Number:</strong> {{ selectedCountry?.countryNumber || '---' }}</p>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="pg-country-select-example">
          <div class="pg-country-select-example__actions">
            <p-button 
              label="Clear Selection" 
              severity="secondary" 
              (onClick)="clearSelection()">
            </p-button>

            <p-button 
              [label]="isLoading ? 'Stop Loading' : 'Start Loading'" 
              variant="outlined"
              (onClick)="toggleLoading()">
            </p-button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./country-select-example.component.scss']
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
