import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Output() homeActiveEvent = new EventEmitter<boolean>();


  constructor(
    private router: Router
  ) {}


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
