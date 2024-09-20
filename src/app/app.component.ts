import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NavbarComponent,LoginComponent,SignupComponent,HomeComponent,ProfileComponent,AboutComponent,ServicesComponent,FooterComponent,CourseComponent,TechologyComponent,BusinessComponent,DesignComponent,AiComponent,DataComponent,WebComponent,CyberComponent,CnComponent,BioComponent,EceComponent,MechanicalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cutm';


}
