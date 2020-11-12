import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoTecnicoContabilidadFinanzasComponent } from './certificado-tecnico-contabilidad-finanzas.component';

describe('CertificadoTecnicoContabilidadFinanzasComponent', () => {
  let component: CertificadoTecnicoContabilidadFinanzasComponent;
  let fixture: ComponentFixture<CertificadoTecnicoContabilidadFinanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoTecnicoContabilidadFinanzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoTecnicoContabilidadFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
