import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { UsuariosCreateComponent } from './components/usuarios-create/usuarios-create.component';
import { UsuariosEditComponent } from './components/usuarios-edit/usuarios-edit.component';

const usuariosRoutes: Routes = [
  { path:'', component: UsuariosListComponent },
  { path:'create', component: UsuariosCreateComponent },
  { path:'edit/:id', component: UsuariosEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
