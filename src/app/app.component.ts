import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
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
