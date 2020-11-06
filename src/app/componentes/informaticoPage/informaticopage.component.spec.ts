import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticopageComponent } from './informaticopage.component';

describe('InformaticopageComponent', () => {
  let component: InformaticopageComponent;
  let fixture: ComponentFixture<InformaticopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformaticopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformaticopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
