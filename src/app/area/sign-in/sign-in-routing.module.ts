import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';

const signInRoutes: Routes = [
  {
    path: '',
    component: SignInComponent

    // {
    //   path: 'admin/tipos-app',
    //   loadChildren: './area/admin/modules/tipos-app/tipos-app.module#TiposAppModule'
    // },
    // {
    //   path: 'admin/apps',
    //   loadChildren: './area/admin/modules/apps/apps.module#AppsModule'
    // },
    // {
    //   path: 'admin/usuarios',
    //   loadChildren: './area/admin/modules/usuarios/usuarios.module#UsuariosModule'
    // },
  }
];



@NgModule({
  imports: [RouterModule.forChild(signInRoutes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
