import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoTecnologoContabilidadyFinanzasComponent } from './certificado-tecnologo-contabilidady-finanzas.component';

describe('CertificadoTecnologoContabilidadyFinanzasComponent', () => {
  let component: CertificadoTecnologoContabilidadyFinanzasComponent;
  let fixture: ComponentFixture<CertificadoTecnologoContabilidadyFinanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoTecnologoContabilidadyFinanzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoTecnologoContabilidadyFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
