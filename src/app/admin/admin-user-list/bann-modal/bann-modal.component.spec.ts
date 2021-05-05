import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannModalComponent } from './bann-modal.component';

describe('BannModalComponent', () => {
  let component: BannModalComponent;
  let fixture: ComponentFixture<BannModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
