import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfisService } from '../../perfis.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-perfis-create',
  templateUrl: './perfis-create.component.html',
  styleUrls: ['./perfis-create.component.css']
})
export class PerfisCreateComponent {
  formulario: FormGroup;

  constructor(private perfisService: PerfisService, private toastrService: ToastrService, private router: Router, private location: Location) {
    this.formulario = new FormGroup({
      nome: new FormControl(),
      descricao: new FormControl()
    });
  }

  onSubmit() {
    this.perfisService
      .Post(this.formulario.value).subscribe(
        data => {
          this.toastrService.success('Perfil Cadastrado com sucesso!!!', 'Sucesso').onHidden.subscribe(() => {
            this.router.navigate(['/cliente']);
          });
        },
        error => {
          error.error.forEach(element => {
            this.toastrService.error(element.error, 'Erro')
          });
        });
  }

}
