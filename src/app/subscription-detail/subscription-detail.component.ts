import { Component,OnInit} from '@angular/core';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-subscription-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './subscription-detail.component.html',
  styleUrl: './subscription-detail.component.css'
})
export class SubscriptionDetailComponent implements OnInit {
  subscriptionType: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}
    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
          this.subscriptionType = params['type'];
      });
  }

  confirmSubscription() {
    console.log("Subscription confirmed!");
    // Navigate to a confirmation or dashboard page after confirmation
    this.router.navigate(['/dashboard']);
  }
}
