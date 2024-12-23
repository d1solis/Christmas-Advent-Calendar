import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snow-effect',
  standalone: true, // Indicates it's a standalone component
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './snow-effect.component.html',
  styleUrls: ['./snow-effect.component.css']
})

export class SnowEffectComponent implements OnInit {
  snowflakes: any[] = [];

  ngOnInit() {
    const snowflakeCount = 90; // Adjust as needed
    for (let i = 0; i < snowflakeCount; i++) {
      const leftSnow = Math.random() * 100; // Percentage for left position
      const topSnow = Math.random() * 100; // Percentage for top position
      const widthSnow = Math.random() * 40; // Size of the snowflake
      const timeSnow = Math.random() * 2 + 2; // Animation duration
      const blurSnow = Math.random() * 2; // Blur effect

      this.snowflakes.push({
        x: leftSnow,
        y: topSnow,
        size: widthSnow,
        speed: timeSnow,
        blur: blurSnow 
      });
    }
  }

  snowflakeStyle(snowflake: any) {
    return {
      left: `${snowflake.x}%`,
      top: `${snowflake.y}%`,
      width: `${snowflake.size}px`,
      height: `${snowflake.size}px`,
      animationDuration: `${snowflake.speed}s`,
      filter: `blur(${snowflake.blur}px)`
    };
  }
}
