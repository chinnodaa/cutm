import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesNotificationsComponent } from './messages-notifications.component';

describe('MessagesNotificationsComponent', () => {
  let component: MessagesNotificationsComponent;
  let fixture: ComponentFixture<MessagesNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
