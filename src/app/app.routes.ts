import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { QaComponent } from './qa/qa.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about-me', component: AboutMeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'qa', component: QaComponent},
];
