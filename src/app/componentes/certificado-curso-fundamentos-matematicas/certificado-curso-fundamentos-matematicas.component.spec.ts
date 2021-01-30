import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoCursoFundamentosMatematicasComponent } from './certificado-curso-fundamentos-matematicas.component';

describe('CertificadoCursoFundamentosMatematicasComponent', () => {
  let component: CertificadoCursoFundamentosMatematicasComponent;
  let fixture: ComponentFixture<CertificadoCursoFundamentosMatematicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoCursoFundamentosMatematicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoCursoFundamentosMatematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
