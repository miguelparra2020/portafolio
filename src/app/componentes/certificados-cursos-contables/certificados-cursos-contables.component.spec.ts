import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosCursosContablesComponent } from './certificados-cursos-contables.component';

describe('CertificadosCursosContablesComponent', () => {
  let component: CertificadosCursosContablesComponent;
  let fixture: ComponentFixture<CertificadosCursosContablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadosCursosContablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadosCursosContablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
