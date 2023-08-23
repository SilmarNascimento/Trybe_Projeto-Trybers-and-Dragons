import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private player02: Fighter;

  constructor(player01: Fighter, player02: Fighter) {
    super(player01);
    this.player02 = player02;
  }

  fight(): number {
    while (this.player.lifePoints > 0) {
      const player02Life = this.player02.receiveDamage(this.player.strength);
      if (player02Life === -1) break;
      this.player.receiveDamage(this.player02.strength);
    }
    return this.player.lifePoints !== -1 ? 1 : -1;
  }
}