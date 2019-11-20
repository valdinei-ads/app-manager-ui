import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppsRoutingModule } from './apps-routing.module';
import { AppsListComponent } from './components/apps-list/apps-list.component';
import { AppsCreateComponent } from './components/apps-create/apps-create.component';
import { AppsEditComponent } from './components/apps-edit/apps-edit.component';

import { MatCardModule, MatButtonModule, MatSelectModule, MatDividerModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [AppsListComponent, AppsCreateComponent, AppsEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppsRoutingModule,
    // Angular Material
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule
  ]
})
export class AppsModule { }
