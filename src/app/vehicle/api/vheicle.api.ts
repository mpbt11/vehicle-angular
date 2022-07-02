import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle, VehicleResponse, VehiclesResponse } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleApi {
  private url = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}
  select() {
    return this.httpClient.get<VehiclesResponse>(this.url);
  }

  insert(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient.post<Vehicle>(this.url, vehicle);
  }

  delete(id_vehicles: number) {
    return this.httpClient.delete(`${this.url}` + `${id_vehicles}`);
  }

  update(vehicle: Vehicle) {
    return this.httpClient.put(`${this.url}/${vehicle.id_vehicles}`, vehicle);
  }

  selectById(id_vehicles: number) {
    return this.httpClient.get<VehicleResponse>(`${this.url}` + `${id_vehicles}`);
  }
}
