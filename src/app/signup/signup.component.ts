import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule ,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
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

  // Function to handle form submission
  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      console.log('Signup Data:', formData);

      // Handle signup logic here (e.g., API call)

      // Redirect to a success page or dashboard after successful signup
      // For example, navigate to the login page after signup:
      this.router.navigate(['/Login']);
    } else {
      // Handle form errors
      console.log('Form is invalid');
    }
  }

  // Function to navigate to login page
  navigateToLogin() {
    this.router.navigate(['/Login']);
  }
}
