import { StateCollection } from 'src/app/utils/state-collection';
import { Vehicle } from '../models/vehicle';

export class VehicleState {
  constructor() {}

  public vehicles = new StateCollection(<Vehicle[]>[]);
}
