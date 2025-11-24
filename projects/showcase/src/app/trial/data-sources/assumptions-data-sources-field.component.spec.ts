import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssumptionsDataSourcesFieldComponent } from './assumptions-data-sources-field.component';

describe('DataSourcesFieldComponent', () => {
  let component: AssumptionsDataSourcesFieldComponent;
  let fixture: ComponentFixture<AssumptionsDataSourcesFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssumptionsDataSourcesFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssumptionsDataSourcesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
