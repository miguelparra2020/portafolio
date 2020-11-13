import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoCursoHerramientasOfficeComponent } from './certificado-curso-herramientas-office.component';

describe('CertificadoCursoHerramientasOfficeComponent', () => {
  let component: CertificadoCursoHerramientasOfficeComponent;
  let fixture: ComponentFixture<CertificadoCursoHerramientasOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoCursoHerramientasOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoCursoHerramientasOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
