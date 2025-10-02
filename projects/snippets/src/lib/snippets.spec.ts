import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snippets } from './snippets';

describe('Snippets', () => {
  let component: Snippets;
  let fixture: ComponentFixture<Snippets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Snippets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Snippets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
