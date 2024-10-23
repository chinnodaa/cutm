import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
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
import { NLPComponent } from './nlp/nlp.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
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



export const routes: Routes = [
    {path:"Home",component:HomeComponent},
    {path:"About",component:AboutComponent},
    {path:"profile",component:ProfileComponent},
    {path:"Contact-us",component:ContactUsComponent},
    {path:"services",component:ServicesComponent},
    {path:"Login",component:LoginComponent},
    {path:"Signup",component:SignupComponent},
    {path:"footer",component:FooterComponent},

    { path: '', redirectTo: '/Home', pathMatch: 'full' }, // Default route
    { path: 'course', component: CourseComponent },
    { path: 'techology', component: TechologyComponent },
    { path: 'business', component: BusinessComponent },
    { path: 'design', component: DesignComponent },
    { path: 'ai', component: AiComponent},
    { path: 'data', component: DataComponent },
    { path: 'web', component: WebComponent },
    { path: 'cyber', component: CyberComponent },
    { path: 'cn', component: CnComponent },
    { path: 'bio', component: BioComponent },
    { path: 'ece', component: EceComponent},
    { path: 'mechanical', component: MechanicalComponent },
    { path: 'advanced-ai', component: AdvancedAiComponent },
    { path: 'nlp', component: NLPComponent },
    { path: 'data-management', component: DataManagementComponent},
    { path: 'machine-learning', component: MachineLearningComponent},
    { path: 'deep-learning', component: DeepLearningComponent},
    { path: '**', redirectTo: '/Home' },
    { path: 'videos', component: VedioComponent },
    { path: 'assignments/assignment', component: AssignmentComponent },
    { path: 'tests/midterm', component: MidtremTestComponent },
    { path: 'tests/final', component: FinalTestComponent },
    { path: 'top', component: TopRecruitersComponent },
    { path: 'about-platform', component: AboutPaltformComponent },
    { path: 'popular-courses', component: PopularCoursesComponent },
    { path: 'faq', component: FaqComponent},
    { path: 'courseplans', component: CourseplansComponent},
    { path: 'subscription-plans', component: SubscriptionPlansComponent},
    { path: 'subscription-details', component: SubscriptionDetailComponent },
     

];

@NgModule({
   
    imports: [RouterModule.forRoot(routes),CommonModule,BrowserModule, ReactiveFormsModule],
    exports: [RouterModule],
  
   
    
  })
  export class AppRoutesModule { }




