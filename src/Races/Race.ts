export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;
  static instances: number;

  constructor(name:string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;

    Race.createdRacesInstances();
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
