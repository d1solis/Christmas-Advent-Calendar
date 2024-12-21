import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-21',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './page-21.component.html',
  styleUrls: ['./page-21.component.css']
})
export class Page21Component {
  gifts = [
    { visible: false }, // Gift 1 visibility state
    { visible: false }, // Gift 2 visibility state
    { visible: false }, // Gift 3 visibility state
  ];

  // Toggle visibility for the selected gift
  toggleVisibility(index: number) {
    this.gifts[index].visible = !this.gifts[index].visible;
  }
}
