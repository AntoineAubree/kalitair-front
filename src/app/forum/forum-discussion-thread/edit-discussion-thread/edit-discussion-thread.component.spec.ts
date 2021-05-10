import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiscussionThreadComponent } from './edit-discussion-thread.component';

describe('EditDiscussionThreadComponent', () => {
  let component: EditDiscussionThreadComponent;
  let fixture: ComponentFixture<EditDiscussionThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDiscussionThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiscussionThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
