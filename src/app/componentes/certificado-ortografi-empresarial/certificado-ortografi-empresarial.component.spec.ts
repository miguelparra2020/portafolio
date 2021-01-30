import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoOrtografiEmpresarialComponent } from './certificado-ortografi-empresarial.component';

describe('CertificadoOrtografiEmpresarialComponent', () => {
  let component: CertificadoOrtografiEmpresarialComponent;
  let fixture: ComponentFixture<CertificadoOrtografiEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoOrtografiEmpresarialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoOrtografiEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
