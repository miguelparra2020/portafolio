import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorpageComponent } from './contadorpage.component';

describe('ContadorpageComponent', () => {
  let component: ContadorpageComponent;
  let fixture: ComponentFixture<ContadorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
