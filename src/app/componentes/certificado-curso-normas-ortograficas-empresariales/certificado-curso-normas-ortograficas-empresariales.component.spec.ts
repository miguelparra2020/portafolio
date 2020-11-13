import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoCursoNormasOrtograficasEmpresarialesComponent } from './certificado-curso-normas-ortograficas-empresariales.component';

describe('CertificadoCursoNormasOrtograficasEmpresarialesComponent', () => {
  let component: CertificadoCursoNormasOrtograficasEmpresarialesComponent;
  let fixture: ComponentFixture<CertificadoCursoNormasOrtograficasEmpresarialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoCursoNormasOrtograficasEmpresarialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoCursoNormasOrtograficasEmpresarialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
