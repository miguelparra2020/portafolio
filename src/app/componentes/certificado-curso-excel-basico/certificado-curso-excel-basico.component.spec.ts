import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoCursoExcelBasicoComponent } from './certificado-curso-excel-basico.component';

describe('CertificadoCursoExcelBasicoComponent', () => {
  let component: CertificadoCursoExcelBasicoComponent;
  let fixture: ComponentFixture<CertificadoCursoExcelBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoCursoExcelBasicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoCursoExcelBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
