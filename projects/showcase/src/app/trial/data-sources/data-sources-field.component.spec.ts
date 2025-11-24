import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourcesFieldComponent } from './data-sources-field.component';

describe('DataSourcesFieldComponent', () => {
  let component: DataSourcesFieldComponent;
  let fixture: ComponentFixture<DataSourcesFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSourcesFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataSourcesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
