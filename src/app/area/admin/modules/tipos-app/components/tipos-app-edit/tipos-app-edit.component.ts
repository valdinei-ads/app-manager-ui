import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormControl } from '@angular/forms';
import { TiposAppService } from '../../tipos-app.service';

@Component({
  selector: 'app-tipos-app-edit',
  templateUrl: './tipos-app-edit.component.html',
  styleUrls: ['./tipos-app-edit.component.css']
})
export class TiposAppEditComponent implements OnInit {
  formulario: FormGroup;

  constructor(private tipoAppService: TiposAppService, private toastrService: ToastrService,
              private router: Router, private route: ActivatedRoute, private location: Location) {
    this.formulario = new FormGroup({
      tipoAppId: new FormControl(),
      nome: new FormControl(),
      descricao: new FormControl()
    });
  }

  ngOnInit() {
    this.route.params.subscribe(
        (params: any) => {
            this.tipoAppService.GetById(params.id).subscribe((res: any) => {
                this.formulario.setValue({
                  tipoAppId: res.data.tipoAppId,
                    nome: res.data.nome,
                    descricao: res.data.descricao,
                });
            });
        }
    );
  }

  onSubmit() {
    this.tipoAppService
        .Put(this.formulario.value).subscribe(
            data => {
              this.toastrService.success("Tipo de app editado com sucesso!!!", "Sucesso").onHidden.subscribe(() => {
                this.router.navigate(['/admin/tiposapp  ']);
             });
            },
            error => {
                
              error.error.forEach(element => {
                  this.toastrService.error(element.Message, "Error");
                });
            });
            Notification.apply
  }

  Back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}