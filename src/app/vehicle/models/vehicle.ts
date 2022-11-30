export class Vehicle {
  constructor(
    public id: number,
    public placa: string,
    public chassi: string,
    public renavam: string,
    public modelo: string,
    public marca: string,
    public ano: string
  ) {}
}

export interface VehiclesResponse {
  json: {
    mensagem: string;
    status: number;
    vehicle: Vehicle[];
  };
}

export interface VehicleResponse {
  json: {
    mensagem: string;
    status: number;
    vehicle: Vehicle;
  };
}
