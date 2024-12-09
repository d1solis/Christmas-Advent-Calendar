import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SnowComponent } from './snow/snow.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SnowComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'christmas-advent-calendar';
}
