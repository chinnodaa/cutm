import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive,NavbarComponent,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuValue:boolean= false;
  menu_icon:string='bi bi-list';
  isProfileDropdownOpen: boolean = false; // Dropdown state
  profileImage: string = 'assets/profile.jpg'; 
  constructor(private router: Router) {}
  openMenu(){
    this.menuValue =!this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x':'bi bi-list';
  }

  closeMenu(){
    this.menuValue =false;
    this.menu_icon ='bi bi-list';
  }

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen; // Toggle dropdown visibility
  }

  navigateToActivities() {
    this.router.navigate(['/activities']); // Navigate to user activities page
  }

  navigateToCertificates() {
    this.router.navigate(['/certificates']); // Navigate to user certificates page
  }

  logout() {
    // Implement your logout logic here, such as clearing user session, tokens, etc.
    console.log('User logged out');
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

}
