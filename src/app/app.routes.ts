import { NgModule } from '@angular/core';
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
    { path: '**', redirectTo: '/Home' } 
   

];

@NgModule({
    
    imports: [RouterModule.forRoot(routes),CommonModule,BrowserModule, ReactiveFormsModule],
    exports: [RouterModule],
   
    
  })
  export class AppRoutesModule { }




