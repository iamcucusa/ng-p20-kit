import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountrySelectComponent } from './country-select.component';
import { TrialCountry } from './country.d';

describe('CountrySelectComponent', () => {
  let component: CountrySelectComponent;
  let fixture: ComponentFixture<CountrySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrySelectComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CountrySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty countries array', () => {
    expect(component.countries).toEqual([]);
  });


  it('should emit country change event', () => {
    spyOn(component.countryChange, 'emit');
    const mockCountry: TrialCountry = {
      code: 'US',
      code3: 'USA',
      name: 'United States',
      countryNumber: '840'
    };

    component.onCountryChange(mockCountry);

    expect(component.countryChange.emit).toHaveBeenCalledWith(mockCountry);
    expect(component.selectedCountry).toBe(mockCountry);
  });

  it('should emit null when country is cleared', () => {
    spyOn(component.countryChange, 'emit');
    
    component.onCountryChange(null);

    expect(component.countryChange.emit).toHaveBeenCalledWith(null);
    expect(component.selectedCountry).toBeNull();
  });
});
