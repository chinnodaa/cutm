import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive,NavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuValue:boolean= false;
  menu_icon:string='bi bi-list';
  openMenu(){
    this.menuValue =!this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x':'bi bi-list';
  }

  closeMenu(){
    this.menuValue =false;
    this.menu_icon ='bi bi-list';
  }

}
