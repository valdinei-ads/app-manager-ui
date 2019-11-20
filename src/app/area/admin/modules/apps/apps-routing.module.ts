import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppsListComponent } from './components/apps-list/apps-list.component';
import { AppsCreateComponent } from './components/apps-create/apps-create.component';
import { AppsEditComponent } from './components/apps-edit/apps-edit.component';

const appsRouting: Routes = [
  { path:'', component: AppsListComponent },
  { path:'create', component: AppsCreateComponent},
  { path:'apps/edit/:id', component: AppsEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appsRouting)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
