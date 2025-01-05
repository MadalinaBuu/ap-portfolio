import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems = [
    { label: 'Acasa', routerLink: '/' },
    { label: 'Despre Mine', routerLink: '/about-me' },
    { label: 'Portofoliu', routerLink: '/portfolio' },
    { label: 'Testimoniale', routerLink: '/testimonials' },
    { label: 'Contact', routerLink: '/contact' },
    { label: 'Q&A', routerLink: '/qa' },
  ];

  getMenuItems() {
    return this.menuItems;
  }
}
