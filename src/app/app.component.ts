import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { routeTransition } from './animations/route-transition';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    routeTransition
  ], 
})
export class AppComponent implements OnInit{
  constructor(protected route: ActivatedRoute) {}

  isHomeActive: boolean = false;

  onHomeActiveChange(isHomeActive: boolean) {
    this.isHomeActive = isHomeActive;
  }

  ngOnInit(): void {
    if(this.isHomeActive) {
    const elem = document.querySelector('app-header') as HTMLElement;
    elem.classList.toggle('home-active');
    const elem2 = document.querySelector('main') as HTMLElement;
    elem2.classList.toggle('home-active');
  }
  }

  
}
