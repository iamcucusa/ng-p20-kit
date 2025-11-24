import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceMetadataTitleComponent } from './data-source-metadata-title.component';

describe('DataSourceMetadataTitleComponent', () => {
  let component: DataSourceMetadataTitleComponent;
  let fixture: ComponentFixture<DataSourceMetadataTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSourceMetadataTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSourceMetadataTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
