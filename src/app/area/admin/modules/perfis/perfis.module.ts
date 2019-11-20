import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PerfisListComponent } from './components/perfis-list/perfis-list.component';
import { PerfisCreateComponent } from './components/perfis-create/perfis-create.component';
import { PerfisEditComponent } from './components/perfis-edit/perfis-edit.component';
import { PerfisRoutingModule } from './perfis-routing.module';

import { MatCardModule, MatButtonModule, MatDividerModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [PerfisListComponent, PerfisCreateComponent, PerfisEditComponent],
  imports: [
    CommonModule,
    PerfisRoutingModule,
    ReactiveFormsModule,
    MatCardModule, MatButtonModule, MatDividerModule, MatTableModule, MatFormFieldModule, MatInputModule 
  ]
})
export class PerfisModule { }
