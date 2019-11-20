import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TiposAppService } from '../../../tipos-app/tipos-app.service';
import { AppsService } from '../../apps.service';

@Component({
  selector: 'app-apps-edit',
  templateUrl: './apps-edit.component.html',
  styleUrls: ['./apps-edit.component.css']
})
export class AppsEditComponent implements OnInit {
  tiposApp: [];
  formulario: FormGroup;

  constructor(private appsService: AppsService, private tiposAppservice: TiposAppService, private toastrService: ToastrService,
              private router: Router, private route: ActivatedRoute, private location: Location) {
    this.formulario = new FormGroup({
      appId: new FormControl(),
      nome: new FormControl(),
      descricao: new FormControl(),
      tipoAppId: new FormControl()
    });

    this.tiposAppservice.GetAll().subscribe((res: any) => {
      this.tiposApp = res.data;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.appsService.GetById(params.id).subscribe((res: any) => {
          this.formulario.setValue({
            appId: res.data.appId,
            nome: res.data.nome,
            descricao: res.data.descricao,
            tipoAppId: res.data.tipoAppId
          });
        });
      }
    );
  }

  onSubmit() {
    this.appsService
        .Put(this.formulario.value).subscribe(
            data => {
              this.toastrService.success("App editado com sucesso!!!", "Sucesso").onHidden.subscribe(() => {
                this.router.navigate(['/cliente']);
             });
            },
            error => {
              if(error.error === []){
                error.error.forEach(element => {
                  this.toastrService.error(element.message, "Error");
                });
              } else {
                this.toastrService.error(error.error.message, "Error");
              }
            });
            Notification.apply
  }

  Back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}