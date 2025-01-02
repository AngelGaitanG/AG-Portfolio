import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';
import { spanishData, englishData, PortfolioData } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data: PortfolioData['home'] = {
    greeting: '',
    title: '',
    name: '',
    profession: '',
    description: '',
    buttonText: ''
  };
  
  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.data = lang === 'es' ? spanishData.home : englishData.home;
    });
  }

  @Output() homeActiveEvent = new EventEmitter<boolean>();

  goToAboutMe() {
    this.router.navigate(['about-me']);
  }
}
