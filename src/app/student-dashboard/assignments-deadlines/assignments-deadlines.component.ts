import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';
export interface Assignment {
  title: string;
  dueDate: string;
  name?: string; // If 'name' is optional
}
@Component({
  selector: 'app-assignments-deadlines',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './assignments-deadlines.component.html',
  styleUrl: './assignments-deadlines.component.css'
})
export class AssignmentsDeadlinesComponent implements OnInit {
  assignments: any[] = [];
  newAssignment = { title: '', dueDate: '' }; // Object for form input values

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchAssignments();
  }

  fetchAssignments() {
    this.http.get<any[]>('http://localhost:5000/api/assignments').subscribe({
      next: (data) => {
        this.assignments = data;
      },
      error: (err) => {
        console.error('Error fetching assignments:', err);
      },
    });
  }

  addAssignment() {
    this.http.post('http://localhost:5000/api/assignments', this.newAssignment).subscribe({
      next: (response) => {
        console.log('Assignment added:', response);
        this.fetchAssignments(); // Refresh the list
        this.newAssignment = { title: '', dueDate: '' }; // Reset form
      },
      error: (err) => {
        console.error('Error adding assignment:', err);
      },
    });
  }
}