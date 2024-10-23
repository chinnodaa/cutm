import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf,AsyncPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule,NgIf,NgFor,AsyncPipe,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  selectedRole: string = 'admin';  // Default role

  constructor(private fb: FormBuilder,private router: Router) {
    // Initialize the form group
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  

  



  // Submit login form
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(`Logging in as ${this.selectedRole}`, this.loginForm.value);
      // Perform login logic here for the selected role (e.g., call to authentication service)
    } else {
      console.log('Form is invalid');
    }
  }

  // Navigate to the sign-up page
  navigateToSignUp() {
    this.router.navigate(['/Signup']); // Make sure you have a signup route configured
  }
}

