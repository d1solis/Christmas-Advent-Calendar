import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snow-effect',
  standalone: true, // Indicates it's a standalone component
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './snow-effect.component.html',
  styleUrls: ['./snow-effect.component.css']
})
export class SnowEffectComponent {
  snowflakes: any[] = [];

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.snowflakes.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 5,
        speed: Math.random() * 2 + 1
      });
    }
  }

  snowflakeStyle(snowflake: any) {
    return {
      left: `${snowflake.x}%`,
      top: `${snowflake.y}%`,
      width: `${snowflake.size}px`,
      height: `${snowflake.size}px`,
      animationDuration: `${snowflake.speed}s`
    };
  }
}
