import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { TiposAppService } from '../../tipos-app.service';

@Component({
  selector: 'app-tipos-app-create',
  templateUrl: './tipos-app-create.component.html',
  styleUrls: ['./tipos-app-create.component.css']
})
export class TiposAppCreateComponent {
  formulario: FormGroup;
  
  constructor(private tipoAppService: TiposAppService, private toastrService: ToastrService, private router: Router, private location: Location)
  { 
    this.formulario = new FormGroup ({
      nome: new FormControl(),
      descricao: new FormControl()
    });
  }

  onSubmit() {
    this.tipoAppService
        .Post(this.formulario.value).subscribe(
            data => {
              this.toastrService.success("Tipo de app cadastrado com sucesso!!!", "Sucesso").onHidden.subscribe(() => {
                this.router.navigate(['/cliente']);
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
