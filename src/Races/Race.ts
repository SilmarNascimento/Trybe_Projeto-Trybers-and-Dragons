type RaceCount = {
  Dwarf: number;
  Elf: number;
  Halfling: number;
  Orc: number;  
};

export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;
  static instances: RaceCount;

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
