import { Component } from '@angular/core';
import { LanguageService, Language } from '../../../core/services/language.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  template: `
    <div class="language-selector">
      <button 
        (click)="toggleLanguage()"
        [attr.aria-label]="'Switch to ' + (currentLanguage === 'es' ? 'English' : 'Spanish')"
      >
        {{ currentLanguage === 'es' ? 'EN' : 'ES' }}
      </button>
    </div>
  `,
  styles: [`
    .language-selector {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
    }

    button {
      background: rgba(0, 0, 0, 0.8);
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 20px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(0, 0, 0, 0.9);
        transform: translateY(-2px);
      }
    }
  `]
})
export class LanguageSelectorComponent {
  currentLanguage: Language = 'es';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(
      lang => this.currentLanguage = lang
    );
  }

  toggleLanguage() {
    const newLanguage: Language = this.currentLanguage === 'es' ? 'en' : 'es';
    this.languageService.setLanguage(newLanguage);
  }
} 