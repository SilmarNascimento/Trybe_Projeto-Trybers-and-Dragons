import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Race.instances.Elf += 1;
    this._maxLifePoints = 99;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Race.instances.Elf;
  }
}
