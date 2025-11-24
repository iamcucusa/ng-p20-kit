import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceLegendComponent } from './data-source-legend.component';

describe('DataSourceLegendComponent', () => {
  let component: DataSourceLegendComponent;
  let fixture: ComponentFixture<DataSourceLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSourceLegendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSourceLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
