import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-recruiters',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './top-recruiters.component.html',
  styleUrl: './top-recruiters.component.css'
})
export class TopRecruitersComponent {

}
