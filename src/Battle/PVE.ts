import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private mobs: SimpleFighter[];
  private enemyIndex = 0;

  constructor(player: Fighter, mobs: SimpleFighter[]) {
    super(player);
    this.mobs = mobs;
  }

  fight(): number {
    while (this.player.lifePoints > 0) {
      const hasBattleFinished = this.playerAttackingTurn(this.enemyIndex);
      if (hasBattleFinished) {
        break;
      }
      this.mobAttackingTurn();
    }
    return this.player.lifePoints !== -1 ? 1 : -1;
  }

  playerAttackingTurn(index: number): boolean {
    while (this.mobs[index]?.lifePoints === -1) {
      this.enemyIndex += 1;
    }
    if (this.enemyIndex >= this.mobs.length) {
      return true;
    }
    const mobLife = this.mobs[this.enemyIndex]
      .receiveDamage(this.player.strength);
    if (mobLife === -1) this.enemyIndex += 1;
    return false;
  }

  mobAttackingTurn(): void {
    this.mobs.forEach((mob) => {
      this.player.receiveDamage(mob.strength);
    });
  }
}