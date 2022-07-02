export interface Vehicle {
  id_vehicles: number;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: string;
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
