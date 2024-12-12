import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';
import { Page3Component } from './page-3/page-3.component';
import { Page4Component } from './page-4/page-4.component';
import { Page5Component } from './page-5/page-5.component';
import { Page6Component } from './page-6/page-6.component';
import { Page7Component } from './page-7/page-7.component';
import { Page8Component } from './page-8/page-8.component';
import { Page9Component } from './page-9/page-9.component';

export const routes: Routes = [
    {path:'', component:CalendarComponent},
    {path:'page-1', component:Page1Component},
    {path:'page-2', component:Page2Component},
    {path:'page-3', component:Page3Component},
    {path:'page-4', component:Page4Component},
    {path:'page-5', component:Page5Component},
    {path:'page-6', component:Page6Component},
    {path:'page-7', component:Page7Component},
    {path:'page-8', component:Page8Component},
    {path:'page-9', component:Page9Component},
];
