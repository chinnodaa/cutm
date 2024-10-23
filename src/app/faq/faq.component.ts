import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent  implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Fetch all FAQ items and apply event listener for toggling active class
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question?.addEventListener('click', () => {
        item.classList.toggle('active'); // Toggle the active class
      });
    });
  }
  

}
