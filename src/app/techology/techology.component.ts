import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-techology',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './techology.component.html',
  styleUrl: './techology.component.css'
})
export class TechologyComponent {
  courses = [
    {
      name: 'Artificial Intelligence',
      description: 'Explore the world of AI and machine learning.',
      image: 'assets/banners/ai.jpeg',
      link:"/ai"
    },
    {
      name: 'Data Science',
      description: 'Learn data analysis, visualization, and statistical methods.',
      image: 'assets/banners/data.jpg',
      link:"/data"
    },
    {
      name: 'Web Development',
      description: 'Master front-end and back-end web technologies.',
      image: 'assets/banners/web.jpg',
      link:"/web"
    },
    {
      name: 'Cybersecurity',
      description: 'Understand security protocols and threat prevention.',
      image: 'assets/banners/cyber.png',
      link:"/cyber"
    },
    {
      name: 'Computer Networks',
      description: 'The field of designing, building, and maintaining computer networks for businesses and organizations',
      image: 'assets/banners/cn.jpeg',
      link:"/cn"
    },
    {
      name: 'Bio Sciences',
      description: 'Biological and agricultural engineering has a strong focus on sustainability.',
      image: 'assets/banners/Biotech.webp',
      link:"/bio"
    },
    {
      name: 'Eelectric Communication Engineering',
      description: 'Wireless infrastructure: ECE engineers work on wireless infrastructure.',
      image: 'assets/banners/ece.jpg',
      link:"/ece"
    },
    {
      name: 'Mechanical Engineering',
      description: 'Mechanical engineering is one of the broadest engineering disciplines.',
      image: 'assets/banners/mechanical.jpg',
      link:"/mechanical"
    }
  ];
}
