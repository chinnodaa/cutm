import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { CourseplansComponent } from '../courseplans/courseplans.component';


@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule,RouterModule,CourseplansComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  categories = [
    { name: 'Technology', description: 'Learn coding, AI, and more.', image: 'assets/banners/tech.jpg' ,link: '/techology'},
    { name: 'Business', description: 'Develop management skills.', image: 'assets/banners/busniness.jpeg',link: '/business' },
    { name: 'Design', description: 'Master the art of design.', image: 'assets/banners/design.jpeg', link: '/design' }
  ];

 
}

