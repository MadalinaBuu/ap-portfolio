import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuItems = [
    { label: 'Acasa', path: '#' },
    { label: 'Despre Mine', path: '#' },
    { label: 'Portofoliu', path: '#' },
    { label: 'Testimoniale', path: '#' },
    { label: 'Contact', path: '#' },
    { label: 'Q&A', path: '#' }
  ];
}
