import { Component } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { TopRecruitersComponent } from '../top-recruiters/top-recruiters.component';
import { AboutPaltformComponent } from '../about-paltform/about-paltform.component';
import { PopularCoursesComponent } from '../popular-courses/popular-courses.component';
import { FaqComponent } from '../faq/faq.component';
import { CourseplansComponent } from '../courseplans/courseplans.component';
import { SubscriptionPlansComponent } from '../subscription-plans/subscription-plans.component';
import { SubscriptionDetailComponent } from '../subscription-detail/subscription-detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseComponent,TopRecruitersComponent,AboutPaltformComponent,PopularCoursesComponent,FaqComponent,CourseplansComponent,SubscriptionPlansComponent,SubscriptionDetailComponent,DashboardComponent,StudentDashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  


  

}
