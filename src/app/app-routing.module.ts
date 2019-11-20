import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './area/sign-in/components/sign-in/sign-in.component';
import { LayoutComponent } from './area/admin/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  }
  // ,{
  //   path: 'admin',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'admin/tipos-app',
  //       loadChildren: './area/admin/modules/tipos-app/tipos-app.module#TiposAppModule'
  //     },
  //     {
  //       path: 'admin/apps',
  //       loadChildren: './area/admin/modules/apps/apps.module#AppsModule'
  //     },
  //     {
  //       path: 'admin/usuarios',
  //       loadChildren: './area/admin/modules/usuarios/usuarios.module#UsuariosModule'
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
