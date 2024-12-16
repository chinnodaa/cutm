import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css'
})
export class MessagesListComponent {
  messages = [
    { sender: 'Alice', content: 'Hello there!' },
    { sender: 'Bob', content: 'How are you?' },
    { sender: 'Charlie', content: 'Good morning!' }
  ];
}
