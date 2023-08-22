import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Race.instances.Orc += 1;
    this._maxLifePoints = 74;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Race.instances.Orc;
  }
}