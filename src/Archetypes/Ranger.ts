import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _count = 0;
  private _energyType: EnergyType = 'stamina';
  
  constructor(name: string) {
    super(name);
    Ranger._count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._count;
  }
}
