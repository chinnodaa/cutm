import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SubscriptionDetailComponent } from '../subscription-detail/subscription-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscription-plans',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './subscription-plans.component.html',
  styleUrl: './subscription-plans.component.css'
})
export class SubscriptionPlansComponent {

  constructor(private router: Router) {}

  // Function to handle subscription based on plan type
  subscribe(planType: string) {
    this.router.navigate(['/subscription-details'], { queryParams: { type: planType } });
  }
}
