import { Injectable, signal, computed, inject } from '@angular/core';
import { PlayerStatsService } from '../stat-inputs/player-stats.service';

@Injectable({
  providedIn: 'root',
})
export class LeagueSelectionService {
  private stats = inject(PlayerStatsService);

  selectedCountry = signal<string>('austria');
  selectedLeague = signal<string>('Bundesliga');
  weeksRemaining = signal<number>(1055);

  xpPerWeek = computed(() => this.stats.stars().reduce((a, b) => a + b, 0));
  xpUntilRetirement = computed(() => this.xpPerWeek() * this.weeksRemaining());

  earningsPerWeek = signal<number>(324000);
  earningsUntilRetirement = computed(() => this.earningsPerWeek() * this.weeksRemaining());

  expectedReputation = computed(() => {
    const xp = this.xpUntilRetirement();
    const logGrowth = xp > 0 ? Math.log(xp) : 0;
    return Math.round((this.stats.averageRating() + logGrowth) * 100) / 100;
  });
}
