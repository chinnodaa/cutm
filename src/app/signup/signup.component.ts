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
  apiUrl = 'http://localhost:5000/api/signup'; // URL of your backend API

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

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
  
      this.http.post(this.apiUrl, formData).subscribe({
        next: (response: any) => {
          console.log('Signup successful', response);
          this.router.navigate(['/Login']);
        },
        error: (err) => {
          console.error('Signup failed', err);
          alert('Signup failed. Please try again.');
        }
      });
    } else {
      alert('Please fill out all fields correctly.');
    }
  }

  navigateToLogin() {
    this.router.navigate(['/Login']);
  }
}