import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PerfisService } from '../../perfis.service';

@Component({
  selector: 'app-perfis-edit',
  templateUrl: './perfis-edit.component.html',
  styleUrls: ['./perfis-edit.component.css']
})
export class PerfisEditComponent implements OnInit {

  formulario: FormGroup;

  constructor(private perfisService: PerfisService, private toastrService: ToastrService, private router: Router, private route: ActivatedRoute, private location: Location) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      nome: new FormControl(),
      descricao: new FormControl()
    });
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.perfisService.GetById(params.id).subscribe((res: any) => {
          this.formulario.setValue({
            id: res.data.id,
            nome: res.data.nome,
            descricao: res.data.descricao,
          });
        });
      }
    );
  }

  onSubmit() {
    this.perfisService
      .Put(this.formulario.value).subscribe(
        data => {
          this.toastrService.success("Perfil editado com sucesso!!!", "Sucesso").onHidden.subscribe(() => {
            this.router.navigate(['/cliente']);
          });
        },
        error => {
          error.error.forEach(element => {
            this.toastrService.error(element.message, "Error");
          });
        });
    // Notification.apply
  }

  Back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
