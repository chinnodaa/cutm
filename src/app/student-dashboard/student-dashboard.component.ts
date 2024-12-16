import { CommonModule } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AssignmentsDeadlinesComponent } from './assignments-deadlines/assignments-deadlines.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { EnrollmentOptionsComponent } from './enrollment-options/enrollment-options.component';
import { GradesAnalyticsComponent } from './grades-analytics/grades-analytics.component';
import { MessagesNotificationsComponent } from './messages-notifications/messages-notifications.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,AssignmentsDeadlinesComponent,CourseOverviewComponent,EnrollmentOptionsComponent,GradesAnalyticsComponent,MessagesNotificationsComponent,FormsModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css',
  
})
export class StudentDashboardComponent {

}
