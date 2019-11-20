import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { UsuariosService } from '../../usuarios.service';
import { AppsService } from '../../../apps/apps.service';

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.css']
})
export class UsuariosEditComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService, private toastrService: ToastrService, private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute, private location: Location) {
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
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.usuariosService.GetById(params.id).subscribe((res: any) => {
          this.formulario.setValue({
            nome: res.data.nome,
            documento: res.data.documento,
            tipoDocumento: res.data.tipoDocumento,
            genero: res.data.genero,
            idade: res.data.idade,
            pai: res.data.pai,
            mae: res.data.mae,
            telefone: res.data.telefone,
            celular: res.data.celular,
            email: res.data.email,
            password: res.data.password,
            apps: res.data.apps
          });
        });
      }
    );
  }



}
