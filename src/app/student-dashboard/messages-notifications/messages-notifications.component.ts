import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-messages-notifications',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink],
  templateUrl: './messages-notifications.component.html',
  styleUrl: './messages-notifications.component.css'
})
export class MessagesNotificationsComponent implements OnInit {
  notifications: { type: string; message: string; content: string }[] = [
    { type: 'Info', message: 'You have a new message', content: 'Message content here' },
    { type: 'Warning', message: 'Assignment deadline approaching', content: 'Deadline in 2 days' }
  ];

  ngOnInit() {
    // Data can be fetched or set here
  }
}
