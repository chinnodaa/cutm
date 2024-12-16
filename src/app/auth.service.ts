import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:5000/api';

    constructor(private http: HttpClient) { }

    signup(userData: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/signup`, userData);
    }
    loginp(loginData: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, loginData);
    }
     // Fetch Assignments
  getAssignments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/assignments`);
  }

  // Add Assignment
  addAssignment(assignmentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/assignments`, assignmentData);
  }

  // Update Assignment (optional)
  updateAssignment(assignmentId: string, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/assignments/${assignmentId}`, updatedData);
  }

  // Delete Assignment (optional)
  deleteAssignment(assignmentId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/assignments/${assignmentId}`);
  }
}
