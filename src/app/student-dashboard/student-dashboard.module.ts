import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesNotificationsComponent } from './messages-notifications/messages-notifications.component';
import { StudentDashboardComponent } from './student-dashboard.component';
import { RouterLink, RouterModule } from '@angular/router';
import { GradesAnalyticsComponent } from './grades-analytics/grades-analytics.component';
import { EnrollmentOptionsComponent } from './enrollment-options/enrollment-options.component';
import { AssignmentsDeadlinesComponent } from './assignments-deadlines/assignments-deadlines.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,StudentDashboardComponent,MessagesNotificationsComponent,RouterModule,GradesAnalyticsComponent,EnrollmentOptionsComponent,AssignmentsDeadlinesComponent,BrowserModule, RouterModule.forRoot([])
  ]
})
export class StudentDashboardModule { }
