import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterChipsComponentComponent } from './filter-chips-component.component';

describe('FilterChipsComponentComponent', () => {
  let component: FilterChipsComponentComponent;
  let fixture: ComponentFixture<FilterChipsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterChipsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterChipsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
