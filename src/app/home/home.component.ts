import { Component } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { TopRecruitersComponent } from '../top-recruiters/top-recruiters.component';
import { AboutPaltformComponent } from '../about-paltform/about-paltform.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseComponent,TopRecruitersComponent,AboutPaltformComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  


  

}
