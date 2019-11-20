import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: 'admin/tiposapp',
        loadChildren: './modules/tipos-app/tipos-app.module#TiposAppModule'
      },
      {
        path: 'admin/apps',
        loadChildren: './modules/apps/apps.module#AppsModule'
      },
      {
        path: 'admin/usuarios',
        loadChildren: './modules/usuarios/usuarios.module#UsuariosModule'
      },
      {
        path: 'admin/perfis',
        loadChildren: './modules/perfis/perfis.module#PerfisModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
