import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiscussionThreadComponent } from './create-discussion-thread.component';

describe('CreateDiscussionThreadComponent', () => {
  let component: CreateDiscussionThreadComponent;
  let fixture: ComponentFixture<CreateDiscussionThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDiscussionThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiscussionThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
