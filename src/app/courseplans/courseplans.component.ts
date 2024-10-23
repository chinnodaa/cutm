import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseComponent } from '../course/course.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-courseplans',
  standalone: true,
  imports: [CommonModule,RouterModule,HomeComponent],
  templateUrl: './courseplans.component.html',
  styleUrl: './courseplans.component.css'
})
export class CourseplansComponent {

}
