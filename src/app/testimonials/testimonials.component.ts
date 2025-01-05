import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Alexandra Ungureanu',
      feedback: 'Multumesc frumos! Sunt faine poZele, si o lectie pt mine sa nu mai stau in asa pozitii :)). Glumesc, sunt funny in cateva :).',
      image: '/images/testimoniale/alexandra.jpeg'
    },
    {
      name: 'Trupa Let\'s go dance ',
      feedback: 'Vreau să vă mulțumesc din suflet pentru inițiativa dumneavoastră de a imortaliza acele momente frumoase din cadrul programului artistic de la scenă! Au ieșit extraordinare şi le-am trimis lui Faydee, iar el le-a apreciat atât de mult încât le-a postat în story-urile lui pe Instagram. Felicitări pentru talentul și pentru contribuția la acest moment special!',
      image: '/images/testimoniale/trupa.jpg'
    },
    {
      name: 'Raluca Angel',
      feedback: 'Mulţumim din suflet pentru poze! Sunt deosebite. Ai surprins foarte frumos momentele din concert. Felicitări!',
      image: '/images/testimoniale/raluca.png'
    },
    {
      name: 'Bobiță Catusanu',
      feedback: 'Salut Paul! Sunt Bobiță Catusanu (Antract) și vreau sa te rog îmi poţi trimite și mie prin WeTransfer pozele făcute de tine la Ivan Patzaichin Fest? Sunt foarte frumoase si am vrea sa le avem la rezoluție mare.',
      image: '/images/testimoniale/bobita.jpg'
    }
  ];
}
