import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SnowEffectComponent } from "./snow-effect/snow-effect.component";
import { CalendarComponent } from "./calendar/calendar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, SnowEffectComponent, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'christmas-advent-calendar';
}
