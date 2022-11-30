import { Adapter } from "src/app/utils/adapter";
import { Vehicle } from "../models/vehicle";

export class VehicleAdapter implements Adapter<Vehicle>{
  adapt(item: any): Vehicle {
    return new Vehicle(
      item.id_vehicles,
      item.placa,
      item.chassi,
      item.renavam,
      item.modelo,
      item.marca,
      item.ano
    )
  }

}
