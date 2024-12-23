import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-9',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './page-9.component.html',
  styleUrls: ['./page-9.component.css']
})
export class Page9Component {
  protected visible = false;
}
