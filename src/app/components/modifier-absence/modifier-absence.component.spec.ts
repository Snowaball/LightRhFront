import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAbsenceComponent } from './modifier-absence.component';

describe('ModifierAbsenceComponent', () => {
  let component: ModifierAbsenceComponent;
  let fixture: ComponentFixture<ModifierAbsenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierAbsenceComponent]
    });
    fixture = TestBed.createComponent(ModifierAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
