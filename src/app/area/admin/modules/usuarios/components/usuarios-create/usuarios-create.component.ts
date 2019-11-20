import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormBuilder,  FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from '../../usuarios.service';
import { AppsService } from '../../../apps/apps.service';

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent {
  formulario: FormGroup;
  appsData: any[];
  displayedColumns: string[] = ['#', 'app'];

  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService, private toastrService: ToastrService, private appService: AppsService, private router: Router, private location: Location) {
    this.formulario = this.formBuilder.group({
      nome: new FormControl(),
      documento: new FormControl(),
      tipoDocumento: new FormControl(),
      genero: new FormControl(),
      idade: new FormControl(),
      // udade: new FormControl(),
      pai: new FormControl(),
      mae: new FormControl(),
      telefone: new FormControl(),
      celular: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      apps: new FormArray([])
    });

    this.appService.GetAll().subscribe((res: any) => {
      res.data.forEach((o, i) => {
        const control = new FormControl();
        (this.formulario.controls.apps as FormArray).push(control);
      })
      this.appsData = res.data;
    });
  }


  onSubmit() {

    const selectedAppsIds  = this.formulario.value.apps
    .map((v, i) => v ? this.appsData[i].appId : null)
    .filter(v => v !== null);

    let usuario = { nome:this.formulario.value.nome,
                    documento:this.formulario.value.documento,
                    tipoDocumento: this.formulario.value.tipoDocumento,
                    genero: this.formulario.value.genero,
                    idade: this.formulario.value.idade,
                    pai: this.formulario.value.pai,
                    mae: this.formulario.value.mae,
                    telefone: this.formulario.value.telefone,
                    celular: this.formulario.value.celular,
                    email: this.formulario.value.email,
                    password: this.formulario.value.password,
                    apps: selectedAppsIds                    
                  }

    this.usuariosService
      .Post(usuario).subscribe(
        data => {
          this.toastrService.success("Usuario cadastrado com sucesso!!!", "Sucesso").onHidden.subscribe(() => {
            this.router.navigate(['admin/usuarios']);
          });
        },
        error => {
          if (error.error === []) {
            error.error.forEach(element => {
              this.toastrService.error(element.message, "Erro");
            });
          } else {
            this.toastrService.error(error.error.message, "Erro");
          }
        });
    Notification.apply

   
  }

  Back() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  private addCheckboxes() {
    this.appsData.forEach((o, i) => {
      const control = new FormControl();
      (this.formulario.controls.apps as FormArray).push(control);
    });
  }
}