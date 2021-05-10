import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumDiscussionThreadComponent } from './forum-discussion-thread.component';

describe('ForumSectionComponent', () => {
  let component: ForumDiscussionThreadComponent;
  let fixture: ComponentFixture<ForumDiscussionThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumDiscussionThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumDiscussionThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
