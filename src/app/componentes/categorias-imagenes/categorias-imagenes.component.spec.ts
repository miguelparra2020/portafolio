import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasImagenesComponent } from './categorias-imagenes.component';

describe('CategoriasImagenesComponent', () => {
  let component: CategoriasImagenesComponent;
  let fixture: ComponentFixture<CategoriasImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
