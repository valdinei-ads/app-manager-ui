import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { SignInService } from '../../sign-in.service';
import { fail } from 'assert';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  
  formulario: FormGroup;

  constructor(private signInService: SignInService, private toastrService: ToastrService, private router: Router, private location: Location) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    console.log('teste');
    this.signInService.authenticate(this.formulario.value).subscribe(
      (res: any) => {
        this.toastrService.success('Usuario Autenticado com sucesso!!!', 'Sucesso').onHidden.subscribe(() => {
          localStorage.setItem('user', JSON.stringify(res.user));
          localStorage.setItem('token', res.token);
          this.router.navigate(['/admin']);
        });
      },
      error => {
        // for array of notific ations
        if(error.error === []){
          error.error.forEach(element => {
            this.toastrService.error(element.message, 'Erro');
          });
        } else {
            this.toastrService.error(error.error.message, 'Erro');
        }
      }
    );
    Notification.apply
  }

}
