import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { TiposAppService } from '../../../tipos-app/tipos-app.service';
import { AppsService } from '../../apps.service';

@Component({
  selector: 'app-apps-create',
  templateUrl: './apps-create.component.html',
  styleUrls: ['./apps-create.component.css']
})
export class AppsCreateComponent {
  tiposApp: [];
  formulario: FormGroup;

  constructor(private appService: AppsService, private tiposAppService: TiposAppService, 
              private toastrService: ToastrService, private router: Router, private location: Location)
  { 
    this.formulario = new FormGroup ({
      nome: new FormControl(),
      descricao: new FormControl(),
      tipoAppId: new FormControl(),
    });

    this.tiposAppService.GetAll().subscribe((res: any) => {
      this.tiposApp = res.data;
    });
  }

  onSubmit() {
    this.appService
        .Post(this.formulario.value).subscribe(
            data => {
              this.toastrService.success("App cadastrado com sucesso!!!", "Sucesso").onHidden.subscribe(() => {
                this.router.navigate(['/cliente']);
             });
            },
            error => {
              if(error.error === []){
                error.error.forEach(element => {
                  this.toastrService.error(element.message, "Error");
                });
              } else{
                this.toastrService.error(error.error.message);
              }
            });
            Notification.apply
  }

  Back() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
