import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';
import { spanishData, englishData, PortfolioData } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  data: PortfolioData['aboutMe'] = {
    title: '',
    subtitle: '',
    description: '',
    metrics: {
      experience: '',
      clients: '',
      projects: '',
      awards: ''
    },
    whatIDo: {
      title: '',
      services: []
    }
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.data = lang === 'es' ? spanishData.aboutMe : englishData.aboutMe;
    });
  }
}
