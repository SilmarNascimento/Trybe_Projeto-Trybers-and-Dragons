import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _count = 0;
  private _energyType: EnergyType = 'mana';
  
  constructor(name: string) {
    super(name);
    Mage._count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._count;
  }
}
