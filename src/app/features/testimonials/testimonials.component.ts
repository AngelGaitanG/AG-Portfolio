import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';
import { spanishData, englishData, PortfolioData } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  data: PortfolioData['testimonials'] = {
    title: '',
    items: []
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.data = lang === 'es' ? spanishData.testimonials : englishData.testimonials;
    });
  }
}
