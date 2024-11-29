import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';
import { spanishData, englishData, PortfolioData } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  data: PortfolioData['resume'] = {
    title: '',
    education: [],
    experience: []
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.data = lang === 'es' ? spanishData.resume : englishData.resume;
    });
  }
}
