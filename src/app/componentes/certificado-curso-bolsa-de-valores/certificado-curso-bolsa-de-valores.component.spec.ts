import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoCursoBolsaDeValoresComponent } from './certificado-curso-bolsa-de-valores.component';

describe('CertificadoCursoBolsaDeValoresComponent', () => {
  let component: CertificadoCursoBolsaDeValoresComponent;
  let fixture: ComponentFixture<CertificadoCursoBolsaDeValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoCursoBolsaDeValoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoCursoBolsaDeValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
