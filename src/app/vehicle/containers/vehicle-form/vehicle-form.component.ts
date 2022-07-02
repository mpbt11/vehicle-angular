import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleFacade } from '../../vehicle.facade';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css'],
})
export class VehicleFormComponent implements OnInit {
  public form!: FormGroup;
  id: string | null = this.activatedRoute.snapshot.queryParamMap.get('id');
  constructor(
    private formBuilder: FormBuilder,
    private facade: VehicleFacade,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.preencheForm();
  }

  public save() {
    this.facade.save(this.form.value);
  }

  initForm() {
    this.form = this.formBuilder.group({
      id_vehicle: [null],
      placa: ['', [Validators.required]],
      chassi: ['', [Validators.required]],
      renavam: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      ano: ['', [Validators.required]],
    });
  }

  preencheForm() {
    if (this.id) {
       this.facade.selectById(+this.id).subscribe(
        (resultado) => {
          this.form.patchValue(resultado.json.vehicle);
        },
        (error) => console.error(error)
      );
    }
  }

  cancel() {
    this.facade.accessList();
  }
}
