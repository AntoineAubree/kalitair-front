import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDiscussionThreadComponent } from './delete-discussion-thread.component';

describe('DeleteDiscussionThreadComponent', () => {
  let component: DeleteDiscussionThreadComponent;
  let fixture: ComponentFixture<DeleteDiscussionThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDiscussionThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDiscussionThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
