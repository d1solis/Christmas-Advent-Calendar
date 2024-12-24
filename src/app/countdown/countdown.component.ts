import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  timeLeft: { days: number; hours: number; minutes: number; seconds: number } = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  private intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startCountdown(): void {
    const christmas = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0, 0); // Christmas: Dec 25
    const now = new Date();

    if (now > christmas) {
      // If it's past Christmas, use next year's Christmas
      christmas.setFullYear(christmas.getFullYear() + 1);
    }

    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = christmas.getTime() - now;

      if (distance <= 0) {
        clearInterval(this.intervalId);
        this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      } else {
        this.timeLeft = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
      }
    }, 1000);
  }
}
