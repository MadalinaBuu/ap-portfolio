import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  categories = ['Nunti', 'Botezuri', 'Concerte', 'Majorate'];
  selectedCategory = 'Nunti';
  selectedImage: string = '';

  photos: { [key: string]: { subcategory: string; folder:string, link: string, images: string[] }[] } = {
    Nunti: [
      { subcategory: 'Nunta Elena si Andrei', folder:'nunta-1', link:'https://photos.google.com/share/AF1QipOkvj6pquiizHUPf4psEO4tE9AT-yuGYJBw4oVii1koiuMZ_mAjD51PyI9nR2bCCA?key=R3ZuZlRBdThJN2NIX2JWOFU3U2NUUFNGalFIUTdB', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'] },
      { subcategory: 'Cununie Marci si Daniel', folder:'nunta-2', link:'https://photos.google.com/share/AF1QipMGB6Rg0P-BI9lsJAwmuSFK3bZy_um1YnxDvnrTSCxIkh03VahVzCbCS91NKY9Y6g?key=azI3eHF1MnJpNEZhbU1XUk9qbjM4ODRCQjNGMmVn', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'] }
    ],
    Botezuri: [
      { subcategory: 'Botez Vera', folder:'botez-1', link:'https://photos.google.com/share/AF1QipN5GdjpdFjnfwnxQ_kGirZoLpc7NmwecybgOXtHrq6_ZaABOyjP7DvCXGgOOF83Zg?key=ZVFScXprZDA1V0UxVmxHM3VCN1ZVOG5tdXBrbXZB', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'] },
    ],
    Concerte: [
      { subcategory: 'Concert decembrie 2024', folder:'concert-1', link:'https://photos.google.com/share/AF1QipMS8zPYbU-Rs4RSmTjjcdWAW8Tqzwtjr4mCJqdT5BOQQUAA7Yx0WTcbtxbNzogshg?key=aUVITkVxNlZLck5UZS1UQXpzdFhMaDhLd3JMeFFn', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'] },
    ],
    Majorate: [
      { subcategory: 'Majorat Andreea', folder:'majorat-1', link:'https://photos.google.com/share/AF1QipM_z9JvxF-N8Qz5C3Zzpe8P-gNoMcp4KY9z0mCVqvktzRziaPdJgRL8_gOirDpe8w?key=djlxQWZzdnpHcjA2S0NRdXVIMU1weldKclVfRUhn', images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'] },
    ]
  };

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  openModal(image: string): void {
    console.log(image);
    this.selectedImage = image;
    const modalElement = document.getElementById('imageModal') as HTMLElement;
    const modal = new Modal(modalElement);
    modal.show();
  }
}
