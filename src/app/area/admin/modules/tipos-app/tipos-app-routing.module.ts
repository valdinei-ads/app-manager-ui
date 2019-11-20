import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposAppListComponent } from './components/tipos-app-list/tipos-app-list.component';
import { TiposAppCreateComponent } from './components/tipos-app-create/tipos-app-create.component';
import { TiposAppEditComponent } from './components/tipos-app-edit/tipos-app-edit.component';

const tiposAppRoutes: Routes = [
  { path:'', component: TiposAppListComponent },
  { path:'create', component: TiposAppCreateComponent},
  { path:'edit/:id', component: TiposAppEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(tiposAppRoutes)],
  exports: [RouterModule]
})
export class TiposAppRoutingModule { }
