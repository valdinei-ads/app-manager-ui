import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxMaskModule} from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

import { UsuariosRoutingModule} from './usuarios-routing.module';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { UsuariosCreateComponent } from './components/usuarios-create/usuarios-create.component';
import { UsuariosEditComponent } from './components/usuarios-edit/usuarios-edit.component';

import { MatCardModule, MatCheckboxModule, MatButtonModule, MatSelectModule, MatDividerModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [UsuariosListComponent, UsuariosCreateComponent, UsuariosEditComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),

    //Angular Material
    MatCardModule, MatButtonModule, MatSelectModule, MatDividerModule, MatTableModule, MatFormFieldModule, MatInputModule, MatCheckboxModule
  ]
})
export class UsuariosModule { }
