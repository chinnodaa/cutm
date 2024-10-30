import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient,  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule ,RouterModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup;
  apiUrl = 'http://localhost:5000/api/signup';
  constructor(private fb: FormBuilder, private router: Router, private http:HttpClient) {
    // Initialize the form group
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator }); // Validate that passwords match
  }

  ngOnInit(): void {
    // Any additional initialization can go here
  }

  // Password matching validation
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = {
        username: this.signupForm.value.username,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      };
  
      // Make HTTP POST request to the backend
      this.http.post(this.apiUrl, formData).subscribe({
        next: (response: any) => {
          console.log('Signup successful', response);
  
          // If a token or role is provided in response, store it (optional)
          if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('role', response.role);
          }
  
          // Redirect to the login page after successful signup
          this.router.navigate(['/Login']);
        },
        error: (err) => {
          console.error('Signup failed', err);
          alert('Signup failed. Please try again.');
        }
      });
    } else {
      console.log('Form is invalid');
      alert('Please fill out all fields correctly.');
    }
  }

  // Function to navigate to login page
  navigateToLogin() {
    this.router.navigate(['/Login']);
  }
}