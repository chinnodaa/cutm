import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-enrollment-options',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './enrollment-options.component.html',
  styleUrl: './enrollment-options.component.css'
})
export class EnrollmentOptionsComponent {
  coursesToEnroll = ['React Basics', 'Python for Data Science', 'Machine Learning'];
}
