import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { englishData, PortfolioData, spanishData } from '../../../core/data/portfolio.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  data: PortfolioData['header'] = {
    home: '',
    aboutMe: '',
    resume: '',
    portfolio: '',
    testimonials: '',
    contact: ''
  };

  @Output() homeActiveEvent = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.data = lang === 'es' ? spanishData.header : englishData.header;
    });
  }


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        const isHomeActive = this.router.url.startsWith('/home');
        console.log(this.router.url, isHomeActive);
        this.homeActiveEvent.emit(isHomeActive);
      }
    })
  }
}
