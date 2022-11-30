import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleAdapter } from './vehicle/adapter/vehicle.adapter';
import { VehicleApi } from './vehicle/api/vheicle.api';
import { VehicleFormComponent } from './vehicle/containers/vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './vehicle/containers/vehicle-list/vehicle-list.component';
import { VehicleState } from './vehicle/state/vehicle.state';
import { VehicleFacade } from './vehicle/vehicle.facade';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    VehicleApi,
    VehicleState,
    VehicleFacade,
    VehicleAdapter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
