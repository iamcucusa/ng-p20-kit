import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';
import { TrialCountry } from './country.d';

/**
 * Country Select Component
 * 
 * A reusable Angular component for selecting countries using PrimeNG 20's `p-select` 
 * with custom templates for displaying country flags and names.
 * 
 * @example
 * ```typescript
 * // Basic usage
 * <kit-country-select
 *   [selectedCountry]="selectedCountry"
 *   [countries]="availableCountries"
 *   (countryChange)="onCountryChange($event)"
 *   placeholder="Select a country">
 * </kit-country-select>
 * ```
 * 
 * @example
 * ```typescript
 * // Advanced usage with all options
 * <kit-country-select
 *   [selectedCountry]="selectedCountry"
 *   [countries]="availableCountries"
 *   (countryChange)="onCountryChange($event)"
 *   placeholder="Choose your country"
 *   [showClear]="true"
 *   [filter]="true"
 *   [required]="true"
 *   [disabled]="false"
 *   [invalid]="false"
 *   cssClass="my-custom-class"
 *   tooltip="Select your country from the list"
 *   tooltipPosition="top">
 * </kit-country-select>
 * ```
 * 
 * @since 1.0.0
 * @author Angular Team
 */
@Component({
  selector: 'kit-country-select',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectModule, TooltipModule],
  template: `
    <p-select
      [options]="countries"
      [(ngModel)]="selectedCountry"
      (ngModelChange)="onCountryChange($event)"
      [placeholder]="placeholder"
      [showClear]="showClear"
      [filter]="filter"
      [filterBy]="filterBy"
      [optionLabel]="optionLabel"
      [optionValue]="optionValue"
      [disabled]="disabled"
      [loading]="loading"
      [required]="required"
      [invalid]="invalid"
      [class]="cssClass"
      [style]="style"
      [pTooltip]="tooltip"
      [tooltipPosition]="tooltipPosition">
      
      <!-- Selected Item Template -->
      <ng-template #selectedItem let-selectedOption>
        <div class="flex items-center gap-2">
          <img
            [src]="'https://flagcdn.com/16x12/' + (selectedCountry?.code || '').toLowerCase() + '.png'"
            class="pg-country-flag"
            [alt]="(selectedCountry?.name || '') + ' flag'"
            onerror="this.src='https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png'">
          <div>{{ selectedOption.name }}</div>
        </div>
      </ng-template>
      
      <!-- Item Template -->
      <ng-template let-country #item>
        <div class="flex items-center gap-2">
          <img
            [src]="'https://flagcdn.com/16x12/' + country.code.toLowerCase() + '.png'"
            class="pg-country-flag"
            [alt]="country.name + ' flag'"
            onerror="this.src='https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png'">
          <div>{{ country.name }}</div>
        </div>
      </ng-template>
      
    </p-select>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .pg-country-flag {
      width: 1.125rem; /* 18px */
      height: 0.75rem; /* 12px */
      object-fit: cover;
      border-radius: 0.125rem; /* 2px */
      border: 1px solid var(--surface-border);
    }
  `]
})
export class CountrySelectComponent {
  /** The currently selected country */
  @Input() selectedCountry: TrialCountry | null = null;
  
  /** Array of countries to display (required) */
  @Input() countries: TrialCountry[] = [];
  
  /** Placeholder text for the select input */
  @Input() placeholder: string = 'Select a country';
  
  /** Whether to show the clear button */
  @Input() showClear: boolean = true;
  
  /** Whether to enable filtering/search functionality */
  @Input() filter: boolean = true;
  
  /** Property to filter by (default: 'name') */
  @Input() filterBy: string = 'name';
  
  /** Property to display as label (default: 'name') */
  @Input() optionLabel: string = 'name';
  
  /** Property to use as value (default: '') */
  @Input() optionValue: string = '';
  
  /** Whether the select is disabled */
  @Input() disabled: boolean = false;
  
  /** Whether the select is in loading state */
  @Input() loading: boolean = false;
  
  /** Whether the field is required */
  @Input() required: boolean = false;
  
  /** Whether the field is in invalid state */
  @Input() invalid: boolean = false;
  
  /** Additional CSS classes to apply */
  @Input() cssClass: string = '';
  
  /** Inline styles to apply */
  @Input() style: string = '';
  
  /** Tooltip text to display */
  @Input() tooltip: string = '';
  
  /** Position of the tooltip */
  @Input() tooltipPosition: 'top' | 'left' | 'right' | 'bottom' = 'top';

  /** Event emitted when country selection changes */
  @Output() countryChange = new EventEmitter<TrialCountry | null>();

  /**
   * Handles country selection change
   * 
   * Updates the selected country and emits the change event to parent components.
   * 
   * @param country - The selected country or null if cleared
   * 
   * @example
   * ```typescript
   * onCountryChange(country: TrialCountry | null): void {
   *   this.selectedCountry = country;
   *   if (country) {
   *     console.log('Selected country:', country.name);
   *   }
   * }
   * ```
   */
  onCountryChange(country: TrialCountry | null): void {
    this.selectedCountry = country;
    this.countryChange.emit(country);
  }
}
