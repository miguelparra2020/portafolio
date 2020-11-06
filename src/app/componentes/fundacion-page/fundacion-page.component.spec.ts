import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundacionPageComponent } from './fundacion-page.component';

describe('FundacionPageComponent', () => {
  let component: FundacionPageComponent;
  let fixture: ComponentFixture<FundacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundacionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
