import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleFacade } from '../../vehicle.facade';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  constructor(public facade: VehicleFacade, private route: Router) {}

  ngOnInit(): void {
    this.facade.select();
  }

  accessForm(id: number) {
    this.route.navigateByUrl(`vehicle?id=${id}`);
  }
}
