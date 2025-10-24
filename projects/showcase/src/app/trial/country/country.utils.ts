import { AbstractControl, FormArray, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CountryCode3, TrialCountry, TrialCountryDictionary } from '@country/country';

export function regionChecksum(totalCheck = 100): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value > 0) {
      const parent: FormArray = control.parent as FormArray;
      const controls = parent?.controls as FormControl[];
      let total = 0;
      if (controls) {
        controls.forEach((control) => (total = total + Number(control.value)));
      }

      if (total > totalCheck) {
        return { regionChecksum: true };
      }
    }
    return null;
  };
}

/**
 * Retrieves a country by its three-letter country code.
 * @param code3 The three-letter ISO country code.
 * @returns The country details or `undefined` if not found.
 */
export function getCountryByCode3(code3: CountryCode3, countryDic: TrialCountryDictionary): TrialCountry | undefined {
  return countryDic[code3] ?? undefined;
}

/**
 * Retrieves a country name by its three-letter country code.
 * @param code3 The three-letter ISO country code.
 * @param countryDic
 * @returns The country details or `undefined` if not found.
 */
export function getCountryNameByCode3(code3: CountryCode3, countryDic: TrialCountryDictionary): string {
  return countryDic[code3]?.name ?? 'Unknown Country';
}

export function splitCountries(countriesSource: string, countryDic: TrialCountryDictionary): string {
  let countries = countriesSource.split(',');
  let focus = countries.map((code) => getCountryNameByCode3(code as CountryCode3, countryDic));
  return focus.toString();
}
