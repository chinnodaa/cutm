import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf,AsyncPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule,NgIf,NgFor,AsyncPipe,FormsModule,RouterModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  selectedRole: string = 'admin';  // Default role
  apiUrl = 'http://localhost:5000/api/login'; // Your backend login endpoint

  constructor(private fb: FormBuilder,private router: Router,private http: HttpClient) {
    // Initialize the form group
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
   
  

  


  onSubmit() {
    if (this.loginForm.valid) {
      // Make HTTP POST request to the backend
      this.http.post('http://localhost:5000/api/login', {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          // Store token and role if available
          if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('role', response.role);
            // Redirect to dashboard or another component
            this.router.navigate(['/Home']);
          }
        },
        error: (err) => {
          console.error('Login failed', err);
          alert('Invalid login credentials.');
        }
      });
    } else {
      console.log('Form is invalid');
      alert('Please fill out all fields.');
    }
  }


  // Navigate to the sign-up page
  navigateToSignUp() {
    this.router.navigate(['/Signup']); // Make sure you have a signup route configured
  }
}