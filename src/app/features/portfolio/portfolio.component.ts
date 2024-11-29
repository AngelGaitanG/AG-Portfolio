import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

interface Project {
  id: number;
  title: string;
  category: 'web' | 'mobile' | 'desktop';
  thumbnail: string;
  description: string;
  technologies: string[];
  images: string[];
  details: {
    client: string;
    date: string;
    url?: string;
    challenge: string;
    solution: string;
  };
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  standalone: true,
  imports: [CommonModule, ProjectDetailComponent],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {
  selectedProject: Project | null = null;
  selectedCategory: 'all' | 'web' | 'mobile' | 'desktop' = 'all';
  
  projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      category: "web",
      thumbnail: "https://picsum.photos/id/180/800/600",
      description: "Dashboard administrativo para gestión de e-commerce con análisis en tiempo real",
      technologies: ["Angular", "NestJS", "PostgreSQL", "Docker"],
      images: [
        "https://picsum.photos/id/180/800/600",
        "https://picsum.photos/id/181/800/600",
        "https://picsum.photos/id/182/800/600"
      ],
      details: {
        client: "TechStore Inc.",
        date: "2023",
        url: "https://techstore-dashboard.com",
        challenge: "Crear una interfaz intuitiva para gestionar grandes volúmenes de productos y pedidos en tiempo real.",
        solution: "Implementación de arquitectura escalable con microservicios y sistema de caché para optimizar el rendimiento."
      }
    },
    {
      id: 2,
      title: "Fitness App",
      category: "mobile",
      thumbnail: "https://picsum.photos/id/183/800/600",
      description: "Aplicación móvil para seguimiento de rutinas de ejercicio y nutrición",
      technologies: ["Ionic", "Angular", "Firebase", "NodeJS"],
      images: [
        "https://picsum.photos/id/183/800/600",
        "https://picsum.photos/id/184/800/600",
        "https://picsum.photos/id/185/800/600"
      ],
      details: {
        client: "FitLife Solutions",
        date: "2023",
        url: "https://fitlife-app.com",
        challenge: "Desarrollar una aplicación intuitiva que motive a los usuarios a mantener un estilo de vida saludable.",
        solution: "Implementación de gamificación y sistema de recompensas para mantener el engagement de los usuarios."
      }
    },
    {
      id: 3,
      title: "Task Management Platform",
      category: "web",
      thumbnail: "https://picsum.photos/id/186/800/600",
      description: "Plataforma de gestión de proyectos y tareas colaborativa",
      technologies: ["React", "Redux", "Express", "MongoDB"],
      images: [
        "https://picsum.photos/id/186/800/600",
        "https://picsum.photos/id/187/800/600",
        "https://picsum.photos/id/188/800/600"
      ],
      details: {
        client: "ProjectPro Inc.",
        date: "2022",
        url: "https://projectpro-platform.com",
        challenge: "Crear una plataforma que simplifique la gestión de proyectos complejos en equipos distribuidos.",
        solution: "Desarrollo de una interfaz drag-and-drop intuitiva con actualizaciones en tiempo real."
      }
    },
    {
      id: 4,
      title: "Smart Home Control System",
      category: "desktop",
      thumbnail: "https://picsum.photos/id/189/800/600",
      description: "Aplicación de escritorio para control domótico integral",
      technologies: ["Electron", "Vue.js", "Python", "MQTT"],
      images: [
        "https://picsum.photos/id/189/800/600",
        "https://picsum.photos/id/190/800/600",
        "https://picsum.photos/id/191/800/600"
      ],
      details: {
        client: "SmartTech Solutions",
        date: "2023",
        challenge: "Desarrollar una interfaz unificada para controlar múltiples dispositivos IoT.",
        solution: "Implementación de arquitectura modular y protocolo MQTT para comunicación en tiempo real."
      }
    },
    {
      id: 5,
      title: "Inventory Management System",
      category: "web",
      thumbnail: "https://picsum.photos/id/192/800/600",
      description: "Sistema de gestión de inventario multialmacén",
      technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
      images: [
        "https://picsum.photos/id/192/800/600",
        "https://picsum.photos/id/193/800/600",
        "https://picsum.photos/id/194/800/600"
      ],
      details: {
        client: "LogisticsPro Corp",
        date: "2023",
        challenge: "Optimizar la gestión de inventario en múltiples ubicaciones.",
        solution: "Sistema predictivo de stock y automatización de pedidos."
      }
    },
    {
      id: 6,
      title: "Plataforma de Aprendizaje Online",
      category: "web",
      thumbnail: "https://picsum.photos/id/195/800/600",
      description: "LMS con funcionalidades de videoconferencia y evaluación en tiempo real",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      images: [
        "https://picsum.photos/id/195/800/600",
        "https://picsum.photos/id/196/800/600",
        "https://picsum.photos/id/197/800/600"
      ],
      details: {
        client: "EduTech Solutions",
        date: "2023",
        url: "https://edutech-platform.com",
        challenge: "Crear una plataforma educativa escalable con soporte para miles de usuarios simultáneos.",
        solution: "Implementación de arquitectura serverless y optimización de streaming de video."
      }
    },
    {
      id: 7,
      title: "App de Delivery",
      category: "mobile",
      thumbnail: "https://picsum.photos/id/198/800/600",
      description: "Aplicación móvil para gestión de entregas y seguimiento en tiempo real",
      technologies: ["Flutter", "Firebase", "Google Maps API"],
      images: [
        "https://picsum.photos/id/198/800/600",
        "https://picsum.photos/id/199/800/600",
        "https://picsum.photos/id/200/800/600"
      ],
      details: {
        client: "FastDelivery",
        date: "2023",
        challenge: "Desarrollar un sistema preciso de tracking y asignación de repartidores.",
        solution: "Implementación de algoritmos de optimización de rutas y geolocalización en tiempo real."
      }
    },
    {
      id: 8,
      title: "Sistema POS",
      category: "desktop",
      thumbnail: "https://picsum.photos/id/201/800/600",
      description: "Software de punto de venta con gestión de inventario",
      technologies: ["Electron", "React", "SQLite", "Node.js"],
      images: [
        "https://picsum.photos/id/201/800/600",
        "https://picsum.photos/id/202/800/600",
        "https://picsum.photos/id/203/800/600"
      ],
      details: {
        client: "RetailTech",
        date: "2022",
        challenge: "Crear un sistema offline-first con sincronización en la nube.",
        solution: "Desarrollo de sistema de cola de sincronización y manejo de conflictos."
      }
    },
    {
      id: 9,
      title: "CRM Empresarial",
      category: "web",
      thumbnail: "https://picsum.photos/id/204/800/600",
      description: "Sistema de gestión de relaciones con clientes",
      technologies: ["Angular", "Java Spring", "PostgreSQL"],
      images: [
        "https://picsum.photos/id/204/800/600",
        "https://picsum.photos/id/205/800/600",
        "https://picsum.photos/id/206/800/600"
      ],
      details: {
        client: "Business Solutions Corp",
        date: "2023",
        challenge: "Migrar sistema legacy a arquitectura moderna.",
        solution: "Implementación de microservicios y migración gradual de funcionalidades."
      }
    },
    {
      id: 10,
      title: "App de Finanzas Personales",
      category: "mobile",
      thumbnail: "https://picsum.photos/id/207/800/600",
      description: "Aplicación para control de gastos y presupuesto",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      images: [
        "https://picsum.photos/id/207/800/600",
        "https://picsum.photos/id/208/800/600",
        "https://picsum.photos/id/209/800/600"
      ],
      details: {
        client: "FinanceApp Inc",
        date: "2023",
        challenge: "Desarrollar algoritmos de categorización automática de gastos.",
        solution: "Implementación de ML para clasificación de transacciones."
      }
    },
    {
      id: 11,
      title: "Sistema de Gestión Hospitalaria",
      category: "desktop",
      thumbnail: "https://picsum.photos/id/210/800/600",
      description: "Software para administración de hospitales y clínicas",
      technologies: ["C#", ".NET", "SQL Server", "WPF"],
      images: [
        "https://picsum.photos/id/210/800/600",
        "https://picsum.photos/id/211/800/600",
        "https://picsum.photos/id/212/800/600"
      ],
      details: {
        client: "HealthTech Solutions",
        date: "2022",
        challenge: "Integrar múltiples sistemas legacy y garantizar disponibilidad 24/7.",
        solution: "Arquitectura modular con sistema de respaldo y alta disponibilidad."
      }
    },
    {
      id: 12,
      title: "Plataforma de Streaming",
      category: "web",
      thumbnail: "https://picsum.photos/id/213/800/600",
      description: "Servicio de streaming de contenido multimedia",
      technologies: ["Next.js", "AWS", "Redis", "FFmpeg"],
      images: [
        "https://picsum.photos/id/213/800/600",
        "https://picsum.photos/id/214/800/600",
        "https://picsum.photos/id/215/800/600"
      ],
      details: {
        client: "StreamMedia",
        date: "2023",
        challenge: "Optimizar la entrega de contenido y reducir latencia.",
        solution: "Implementación de CDN y transcodificación adaptativa."
      }
    },
    {
      id: 13,
      title: "App de Reservas de Restaurantes",
      category: "mobile",
      thumbnail: "https://picsum.photos/id/216/800/600",
      description: "Aplicación para reservas y pedidos en restaurantes",
      technologies: ["Flutter", "Node.js", "PostgreSQL"],
      images: [
        "https://picsum.photos/id/216/800/600",
        "https://picsum.photos/id/217/800/600",
        "https://picsum.photos/id/218/800/600"
      ],
      details: {
        client: "DineEasy",
        date: "2023",
        challenge: "Gestionar reservas en tiempo real y evitar conflictos.",
        solution: "Sistema de reservas con confirmación inmediata y lista de espera."
      }
    },
    {
      id: 14,
      title: "Software de Análisis de Datos",
      category: "desktop",
      thumbnail: "https://picsum.photos/id/219/800/600",
      description: "Herramienta de análisis y visualización de datos",
      technologies: ["Python", "Qt", "Pandas", "Matplotlib"],
      images: [
        "https://picsum.photos/id/219/800/600",
        "https://picsum.photos/id/220/800/600",
        "https://picsum.photos/id/221/800/600"
      ],
      details: {
        client: "DataViz Corp",
        date: "2022",
        challenge: "Procesar grandes volúmenes de datos eficientemente.",
        solution: "Implementación de procesamiento paralelo y optimización de memoria."
      }
    },
    {
      id: 15,
      title: "Plataforma IoT",
      category: "web",
      thumbnail: "https://picsum.photos/id/222/800/600",
      description: "Dashboard para monitoreo de dispositivos IoT",
      technologies: ["Vue.js", "Node.js", "MQTT", "InfluxDB"],
      images: [
        "https://picsum.photos/id/222/800/600",
        "https://picsum.photos/id/223/800/600",
        "https://picsum.photos/id/224/800/600"
      ],
      details: {
        client: "IoT Solutions",
        date: "2023",
        challenge: "Manejar miles de conexiones simultáneas de dispositivos.",
        solution: "Arquitectura basada en WebSockets y procesamiento en tiempo real."
      }
    }
  ];
  
  currentPage = 0;
  pageSize = 4;
  
  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }
  
  get currentPageProjects(): Project[] {
    const start = this.currentPage * this.pageSize;
    return this.filteredProjects.slice(start, start + this.pageSize);
  }
  
  get totalPages(): number {
    return Math.ceil(this.filteredProjects.length / this.pageSize);
  }
  
  filterProjects(category: 'all' | 'web' | 'mobile' | 'desktop'): void {
    this.selectedCategory = category;
    this.currentPage = 0; // Reset a la primera página al filtrar
  }
  
  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }
  
  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  showProjectDetail(project: Project) {
    this.selectedProject = project;
  }

  closeProjectDetail() {
    this.selectedProject = null;
  }

  ngOnInit() {
    // Lógica para inicializar el componente
  }
}
