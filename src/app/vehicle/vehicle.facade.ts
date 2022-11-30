import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleAdapter } from './adapter/vehicle.adapter';
import { VehicleApi } from './api/vheicle.api';
import { Vehicle } from './models/vehicle';
import { VehicleState } from './state/vehicle.state';

@Injectable()
export class VehicleFacade {
  constructor(
    private route: Router,
    private api: VehicleApi,
    private state: VehicleState,
    private adapter: VehicleAdapter
  ) {}

  public list!: Vehicle[];
  public vehicles$ = this.state.vehicles.collection$;

  async insert(vehicle: Vehicle) {
    await this.api.insert(vehicle).subscribe(
      (resultado) => {
        this.route.navigate(['/lista']);
      },
      (error) => console.error(error)
    );
  }

  async save(vehicle: Vehicle) {
    if (vehicle.id) this.update(vehicle);
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
        this.state.vehicles.collection = resultado.json.vehicle.map((value) =>
          this.adapter.adapt(value)
        );
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
