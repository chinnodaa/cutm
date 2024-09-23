import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.css'
})
export class AiComponent {
  registrationForm: FormGroup;
  showForm = false; // Control visibility of the registration form
  submitted = false;
  // Sample related courses data
  relatedCourses = [
    { name: 'Advanced AI', description: 'Deep dive into AI technologies.', link: '/advanced-ai', image: 'assets/banners/advances.png' },
    { name: 'Machine Learning', description: 'Learn various ML algorithms.', link: '/machine-learning', image: 'assets/banners/machine.jpg' },
    { name: 'Data Management', description: 'Explore data analysis techniques.', link: '/data-management', image: 'assets/banners/manage.webp' },
    { name: 'NLP', description: 'Explore data analysis techniques.', link: '/nlp', image: 'assets/banners/nlp.webp' },
    { name: 'Deep Learning', description: 'Explore data analysis techniques.', link: '/deep-learning ', image: 'assets/banners/deep.jpg' },
  ];
  colors: string[] = ['#FF5733', '#33FF57', '#fd5c63', '#F3FF33', '#FF33F6'];

  getCourseColor(index: number): string {
      return this.colors[index % this.colors.length];
  }

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.mustMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    console.log('Form Submitted', this.registrationForm.value);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  private mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch'] ){
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ ['mustMatch']: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


}
