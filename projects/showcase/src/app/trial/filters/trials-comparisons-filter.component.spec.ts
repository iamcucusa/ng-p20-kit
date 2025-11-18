import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialsComparisonsFilterComponent } from './trials-comparisons-filter.component';

describe('TrialsComparisonsFilterComponent', () => {
  let component: TrialsComparisonsFilterComponent;
  let fixture: ComponentFixture<TrialsComparisonsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialsComparisonsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialsComparisonsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
