import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourcesLegendComponent } from './data-sources-legend.component';

describe('DataSourcesLegendComponent', () => {
  let component: DataSourcesLegendComponent;
  let fixture: ComponentFixture<DataSourcesLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSourcesLegendComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataSourcesLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
