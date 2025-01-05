import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuItems:any = [];
  isMenuCollapsed = true;

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.getMenuItems();
  }

  toggleMenu (){
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeMenu() {
    this.isMenuCollapsed = true; // Închide meniul
  }
}
