import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-popular-courses',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './popular-courses.component.html',
  styleUrl: './popular-courses.component.css'
})
export class PopularCoursesComponent {
  programmingLanguages = [
    { name: 'Java', link: '/courses/java' },
    { name: 'Python', link: '/courses/python' },
    { name: 'C++', link: '/courses/cplusplus' },
    { name: 'C#', link: '/courses/csharp' },
    { name: 'Data structure', link: '/courses/datastructure' },
   
];

scriptingLanguages = [
    { name: 'JavaScript', link: '/courses/javascript' },
    { name: 'TypeScript', link: '/courses/typescript' },
    { name: 'PHP', link: '/courses/php' },
    { name: 'HTML', link: '/courses/HTML' },
    { name: 'CSS', link: '/courses/CSS' },
    { name: 'Bootstrap', link: '/courses/Bootstrap' },
   
];

databaseLanguages = [
    { name: 'SQL', link: '/courses/sql' },
    { name: 'PL/SQL (Oracle)', link: '/courses/plsql' },
    { name: 'T-SQL (SQL Server)', link: '/courses/tsql' },
    { name: 'MongoDB (NoSQL)', link: '/courses/mongodb' },
    { name: 'Django', link: '/courses/Django' }
];

}
