import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ RouterModule, CountdownComponent ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

}
