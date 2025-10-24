import { Component, Input, inject, TemplateRef } from '@angular/core';
import { StepHeadingComponent } from '../step';
import { TrialStepFacadeService } from '@trial-step/trial-step-facade.service';
import type { TrialStepId } from '@trial-step/trial-step.types';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CountrySelectComponent } from '@country/country-select.component';
import { TrialCountry } from '@country/country.d';
import { trialCountriesToken } from '@country/country.settings';

interface ClinicalSite {
  id: string;
  name: string;
  city: string;
  country: string;
  status: 'Available' | 'Pending Approval' | 'Unavailable';
  capacity: number;
}

@Component({
  selector: 'kit-step-four-container',
  templateUrl: './step-four-container.component.html',
  standalone: true,
  imports: [StepHeadingComponent, ButtonModule, RippleModule, CountrySelectComponent] // CountrySelectComponent used in template as kit-country-select
})
export class StepFourContainerComponent {
  private trialStepFacade = inject(TrialStepFacadeService);
  private trialCountries = inject(trialCountriesToken);

  @Input()
  set step(step: TrialStepId) {
    // Set the active step based on the route parameter
    this.trialStepFacade.setActiveStepByRoute(step);
  }

  /** Template reference for step actions */
  stepActions!: TemplateRef<unknown>;

  /** Pre-loaded set of countries for site selection */
  availableCountries: TrialCountry[] = this.getPreLoadedCountries();
  
  /** Selected country for site */
  selectedCountry: TrialCountry | null = null;
  
  /** Available sites for the selected country */
  availableSites: ClinicalSite[] = [];
  
  /** Loading state for sites */
  isLoadingSites: boolean = false;

  /**
   * Get pre-loaded countries (filtered subset for site selection)
   */
  private getPreLoadedCountries(): TrialCountry[] {
    // Filter to major countries commonly used for clinical trials
    const majorCountryCodes = ['US', 'CA', 'GB', 'DE', 'FR', 'ES', 'IT', 'NL', 'BE', 'CH', 'AT', 'SE', 'NO', 'DK', 'FI', 'AU', 'JP', 'KR', 'CN', 'IN', 'BR', 'MX', 'AR', 'CL', 'ZA'];
    return this.trialCountries.filter(country => majorCountryCodes.includes(country.code));
  }

  /**
   * Handle country selection and automatically load sites
   */
  onCountryChange(country: TrialCountry | null): void {
    this.selectedCountry = country;
    this.availableSites = []; // Clear previous sites
    
    if (country) {
      console.log('Selected country:', country);
      this.loadSitesForCountry(country);
    }
  }

  /**
   * Load sites for the selected country
   */
  private loadSitesForCountry(country: TrialCountry): void {
    this.isLoadingSites = true;
    
    // Simulate API call to load sites
    setTimeout(() => {
      // Mock data - in real implementation, this would be an API call
      this.availableSites = this.generateMockSites(country);
      this.isLoadingSites = false;
      console.log(`Loaded ${this.availableSites.length} sites for ${country.name}`);
    }, 1000);
  }

  /**
   * Generate mock sites for demonstration
   */
  private generateMockSites(country: TrialCountry): ClinicalSite[] {
    const siteCount = Math.floor(Math.random() * 5) + 2; // 2-6 sites
    const sites: ClinicalSite[] = [];
    
    for (let i = 1; i <= siteCount; i++) {
      const statusOptions: ('Available' | 'Pending Approval' | 'Unavailable')[] = ['Available', 'Pending Approval', 'Unavailable'];
      const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];
      
      sites.push({
        id: `${country.code}-${i}`,
        name: `${country.name} Clinical Site ${i}`,
        city: this.getRandomCity(country.code),
        country: country.name,
        status: randomStatus,
        capacity: Math.floor(Math.random() * 100) + 50
      });
    }
    
    return sites;
  }

  /**
   * Get random city for mock data
   */
  private getRandomCity(countryCode: string): string {
    const cities: { [key: string]: string[] } = {
      'US': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
      'CA': ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
      'GB': ['London', 'Manchester', 'Birmingham', 'Glasgow', 'Liverpool'],
      'DE': ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne'],
      'FR': ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice']
    };
    
    const cityList = cities[countryCode] || ['Capital City', 'Major City', 'Regional Center'];
    return cityList[Math.floor(Math.random() * cityList.length)];
  }

}
