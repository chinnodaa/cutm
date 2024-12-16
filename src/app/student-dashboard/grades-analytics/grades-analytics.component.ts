import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-grades-analytics',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './grades-analytics.component.html',
  styleUrl: './grades-analytics.component.css'
})
export class GradesAnalyticsComponent {
  grades = [
    { course: 'Angular Basics', grade: 'A', progress: 75 },
    { course: 'Advanced Node.js', grade: 'B', progress: 50 }
  ];
}
