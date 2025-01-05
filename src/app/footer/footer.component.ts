import { Component, Input } from '@angular/core';
import { MenuService } from '../menu.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  menuItems:any = [];

    constructor(private menuService: MenuService) {
      this.menuItems = this.menuService.getMenuItems();
    }
}
