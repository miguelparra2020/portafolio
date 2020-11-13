import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoCursoTablasExcelComponent } from './certificado-curso-tablas-excel.component';

describe('CertificadoCursoTablasExcelComponent', () => {
  let component: CertificadoCursoTablasExcelComponent;
  let fixture: ComponentFixture<CertificadoCursoTablasExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoCursoTablasExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoCursoTablasExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
