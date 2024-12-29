import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<Language>('es');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor() {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage) {
      this.currentLanguageSubject.next(savedLanguage);
    }
  }

  setLanguage(language: Language) {
    localStorage.setItem('preferred-language', language);
    this.currentLanguageSubject.next(language);
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }
} 