import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicoPageComponent } from './electronico-page.component';

describe('ElectronicoPageComponent', () => {
  let component: ElectronicoPageComponent;
  let fixture: ComponentFixture<ElectronicoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
