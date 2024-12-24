import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SnowEffectComponent } from "./snow-effect/snow-effect.component";
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SnowEffectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
export class AppComponent {
  title = 'christmas-advent-calendar';
}
  */
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}