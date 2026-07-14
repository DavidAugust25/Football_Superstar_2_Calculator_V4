import { Component, ElementRef, inject } from '@angular/core';
import { PlayerStatsService } from './player-stats.service';

@Component({
  selector: 'app-stat-inputs',
  imports: [],
  templateUrl: './stat-inputs.html',
  styleUrl: './stat-inputs.css',
})
export class StatInputs {
  private stats = inject(PlayerStatsService);
  private el = inject(ElementRef);

  onInput(): void {
    const inputs = this.el.nativeElement.querySelectorAll('input.statInput') as HTMLInputElement[];
    const ratings: number[] = [];
    const stars: number[] = [];

    inputs.forEach((input, i) => {
      const val = Number(input.value);
      if (i % 2 === 0) {
        ratings.push(val);
      } else {
        stars.push(val);
      }
    });

    this.stats.updateFromInputs(ratings, stars);
  }
}
