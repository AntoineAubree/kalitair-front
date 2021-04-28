import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorResultComponent } from './indicator-result.component';

describe('IndicatorResultComponent', () => {
  let component: IndicatorResultComponent;
  let fixture: ComponentFixture<IndicatorResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
