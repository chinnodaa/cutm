import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-course-overview',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './course-overview.component.html',
  styleUrl: './course-overview.component.css'
})
export class CourseOverviewComponent {
  courses = [
    { name: 'Angular Basics', progress: 75, completion: 'In Progress' },
    { name: 'Advanced Node.js', progress: 50, completion: 'In Progress' }
  ];
}
