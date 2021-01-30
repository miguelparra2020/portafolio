import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoCursoRedaccionyOrtografiaComponent } from './certificado-curso-redacciony-ortografia.component';

describe('CertificadoCursoRedaccionyOrtografiaComponent', () => {
  let component: CertificadoCursoRedaccionyOrtografiaComponent;
  let fixture: ComponentFixture<CertificadoCursoRedaccionyOrtografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoCursoRedaccionyOrtografiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoCursoRedaccionyOrtografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
