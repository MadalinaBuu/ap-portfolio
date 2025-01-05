import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutMeComponent } from "../about-me/about-me.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutMeComponent, TestimonialsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  images: string[] = [
    '/images/banner/banner1.jpg',
    '/images/banner/banner2.jpg',
    '/images/banner/banner3.jpg',
  ];

  // Variabilă pentru indexul imaginii curente
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    // Schimbă imaginea automat la fiecare 5 secunde
    setInterval(() => {
      this.changeImage();
    }, 7000); // Schimbă imaginea la fiecare 7 secunde
  }

  // Funcție pentru schimbarea imaginii
  changeImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
