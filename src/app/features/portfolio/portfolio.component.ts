import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { LanguageService } from '../../core/services/language.service';
import { spanishData, englishData, PortfolioData } from '../../core/data/portfolio.data';

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
  standalone: true,
  imports: [CommonModule, ProjectDetailComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
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
export class PortfolioComponent {
  data: PortfolioData['portfolio'] = {
    title: '',
    categories: {
      all: '',
      web: '',
      mobile: '',
      desktop: ''
    },
    projects: []
  };

  selectedProject: Project | null = null;
  selectedCategory: 'all' | 'web' | 'mobile' | 'desktop' = 'all';
  currentPage = 0;
  pageSize = 4;

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.data = lang === 'es' ? spanishData.portfolio : englishData.portfolio;
    });
  }

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.data.projects;
    }
    return this.data.projects.filter(project => project.category === this.selectedCategory);
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
}
