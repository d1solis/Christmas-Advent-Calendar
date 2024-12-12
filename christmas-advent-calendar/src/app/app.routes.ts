import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { Page1Component } from './page-1/page-1.component';

export const routes: Routes = [
    {path:'', component:CalendarComponent},
    {path:'page-1', component:Page1Component}
];
