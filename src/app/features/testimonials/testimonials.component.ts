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
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
    name: 'John Doe',
    title: 'CEO',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2024-01-01'
   },
   {
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 4,
    name: 'Jane Doe',
    title: 'CTO',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2024-01-01'
   },
   {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    name: 'Carlos Rodríguez',
    title: 'Director de Marketing',
    text: 'Excelente servicio y atención al cliente. El equipo siempre está dispuesto a ayudar y encontrar soluciones innovadoras.',
    date: '2024-02-15'
   },
   {
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    rating: 3,
    name: 'María González',
    title: 'Product Manager',
    text: 'La plataforma es intuitiva y fácil de usar. Aunque hay algunas características que podrían mejorar, en general estoy satisfecha con el servicio.',
    date: '2024-03-01'
   }
  ]

}
