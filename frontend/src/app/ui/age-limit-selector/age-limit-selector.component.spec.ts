import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeLimitSelectorComponent } from './age-limit-selector.component';

describe('AgeLimitSelectorComponent', () => {
  let component: AgeLimitSelectorComponent;
  let fixture: ComponentFixture<AgeLimitSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeLimitSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeLimitSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
