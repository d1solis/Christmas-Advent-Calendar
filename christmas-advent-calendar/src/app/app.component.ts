import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from "./calendar/calendar.component";
import { SnowComponent } from './snow/snow.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalendarComponent, SnowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'christmas-advent-calendar';
}
