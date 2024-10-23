import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PortfolioItem {
  categoria: string;
  imagen: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioItems: PortfolioItem[] = [
    {
      categoria: 'disenos-web',
      imagen: 'https://picsum.photos/300/200?random=1',
      titulo: 'Diseño Web Moderno',
      descripcion: 'Un sitio web responsive con diseño minimalista'
    },
    {
      categoria: 'aplicaciones-moviles',
      imagen: 'https://picsum.photos/300/200?random=2',
      titulo: 'Aplicación Móvil Innovadora',
      descripcion: 'Una app móvil con interfaz intuitiva y funcionalidades avanzadas'
    },
    {
      categoria: 'marketing-digital',
      imagen: 'https://picsum.photos/300/200?random=3',
      titulo: 'Campaña de Marketing Digital',
      descripcion: 'Estrategia integral de marketing online con resultados medibles'
    },
    {
      categoria: 'backend',
      imagen: 'https://picsum.photos/300/200?random=4',
      titulo: 'Sistema de Backend Robusto',
      descripcion: 'Una arquitectura de servidor escalable y segura'
    },
    {
      categoria: 'disenos-web',
      imagen: 'https://picsum.photos/300/200?random=5',
      titulo: 'Sitio Web E-commerce',
      descripcion: 'Una plataforma de comercio electrónico con diseño atractivo y funcional'
    },
  ];

  showItem(categoria: string): boolean {
    return true;
  }

}
