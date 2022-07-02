import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleApi } from './api/vheicle.api';
import { Vehicle } from './models/vehicle';

@Injectable()
export class VehicleFacade {
  constructor(private route: Router, private api: VehicleApi) {}

  public list!: Vehicle[];

  async insert(vehicle: Vehicle) {
    await this.api.insert(vehicle).subscribe(
      (resultado) => {
        this.route.navigate(['/lista']);
      },
      (error) => console.error(error)
    );
  }

  async save(vehicle: Vehicle) {
    if (vehicle.id_vehicles) this.update(vehicle);
    this.insert(vehicle);
  }

  async update(vehicle: Vehicle) {
    await this.api.update(vehicle).subscribe(
      (resultado) => {
        this.accessList();
      },
      (error) => console.error(error)
    );
  }

  public selectById(id: number) {
    return this.api.selectById(id);
  }

  async select() {
    await this.api.select().subscribe(
      (resultado) => {
        this.list = resultado.json.vehicle;
      },
      (error) => console.error(error)
    );
  }

  async delete(id: number) {
    await this.api.delete(id).subscribe(
      (_) => {
        this.select();
      },
      (error) => console.error(error)
    );
  }

  public accessList() {
    this.route.navigate(['/lista']);
  }

  public accessForm() {
    this.route.navigate(['/vehicle']);
  }
}
