import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiereConnexionComponent } from './premiere-connexion.component';

describe('PremiereConnexionComponent', () => {
  let component: PremiereConnexionComponent;
  let fixture: ComponentFixture<PremiereConnexionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiereConnexionComponent]
    });
    fixture = TestBed.createComponent(PremiereConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
