import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { CourseComponent } from './course/course.component';
import { TechologyComponent } from './techology/techology.component';
import { BusinessComponent } from './business/business.component';
import { DesignComponent } from './design/design.component';
import { AiComponent } from './ai/ai.component';
import { DataComponent } from './data/data.component';
import { WebComponent } from './web/web.component';
import { CyberComponent } from './cyber/cyber.component';
import { CnComponent } from './cn/cn.component';
import { BioComponent } from './bio/bio.component';
import { EceComponent } from './ece/ece.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { AdvancedAiComponent } from './advanced-ai/advanced-ai.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { NLPComponent } from './nlp/nlp.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { VedioComponent } from './vedio/vedio.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { MidtremTestComponent } from './midtrem-test/midtrem-test.component';
import { FinalTestComponent } from './final-test/final-test.component';
import { TopRecruitersComponent } from './top-recruiters/top-recruiters.component';
import { AboutPaltformComponent } from './about-paltform/about-paltform.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';
import { FaqComponent } from './faq/faq.component';
import { CourseplansComponent } from './courseplans/courseplans.component';
import { SubscriptionPlansComponent } from './subscription-plans/subscription-plans.component';
import { SubscriptionDetailComponent } from './subscription-detail/subscription-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NavbarComponent,LoginComponent,SignupComponent,HomeComponent,ProfileComponent,AboutComponent,ServicesComponent,FooterComponent,CourseComponent,TechologyComponent,BusinessComponent,DesignComponent,AiComponent,DataComponent,WebComponent,CyberComponent,CnComponent,BioComponent,EceComponent,MechanicalComponent,AdvancedAiComponent,DeepLearningComponent,NLPComponent,MachineLearningComponent,DataManagementComponent,VedioComponent,AssignmentComponent,MidtremTestComponent,FinalTestComponent,TopRecruitersComponent,AboutPaltformComponent,PopularCoursesComponent,FaqComponent,CourseplansComponent,SubscriptionPlansComponent,SubscriptionDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cutm';


}
