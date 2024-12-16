import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesListComponent } from './messages-list/messages-list.component';




@NgModule({
  declarations: [],  // Declare the component here
  imports: [CommonModule,MessagesListComponent],  // Import CommonModule for built-in Angular directives
  exports: []

})
export class MessagesModule { }
