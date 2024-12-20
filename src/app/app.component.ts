import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { routeTransition } from './animations/route-transition';
import { LanguageSelectorComponent } from './shared/components/language-selector/language-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    CommonModule,
    LanguageSelectorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeTransition], 
})
export class AppComponent implements OnInit {
  constructor(
    protected route: ActivatedRoute, 
    private router: Router
  ) {}

  isHomeActive: boolean = false;

  onHomeActiveChange(isHomeActive: boolean) {
    this.isHomeActive = isHomeActive;
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomeActive = this.router.url === '/home';
      }
    });
  }
}
