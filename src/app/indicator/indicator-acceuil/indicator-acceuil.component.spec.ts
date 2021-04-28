import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorAcceuilComponent } from './indicator-acceuil.component';

describe('IndicatorAcceuilComponent', () => {
  let component: IndicatorAcceuilComponent;
  let fixture: ComponentFixture<IndicatorAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
