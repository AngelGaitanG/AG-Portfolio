import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor(
    private router: Router
  ){}
  @Output() homeActiveEvent = new EventEmitter<boolean>();

  goToAboutMe() {
    this.router.navigate(['about-me']);
  }
}
