import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Race.instances.Halfling += 1;
    this._maxLifePoints = 60;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Race.instances.Halfling;
  }
}
