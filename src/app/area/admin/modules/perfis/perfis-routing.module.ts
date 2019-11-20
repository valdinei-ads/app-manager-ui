import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfisCreateComponent } from './components/perfis-create/perfis-create.component';
import { PerfisEditComponent } from './components/perfis-edit/perfis-edit.component';
import { PerfisListComponent } from './components/perfis-list/perfis-list.component';

const perfisRoutes: Routes = [
  { path:'', component: PerfisListComponent },
  { path:'perfis/create', component: PerfisCreateComponent},
  { path:'perfis/edit/:id', component: PerfisEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(perfisRoutes)],
  exports: [RouterModule]
})
export class PerfisRoutingModule { }
