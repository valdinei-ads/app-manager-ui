import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TiposAppRoutingModule } from './tipos-app-routing.module';
import { TiposAppListComponent } from './components/tipos-app-list/tipos-app-list.component';
import { TiposAppCreateComponent } from './components/tipos-app-create/tipos-app-create.component';
import { TiposAppEditComponent } from './components/tipos-app-edit/tipos-app-edit.component';

import { MatCardModule, MatButtonModule, MatDividerModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TiposAppRoutingModule,
    // Angular Material
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule
  ], 
  declarations: [TiposAppListComponent, TiposAppCreateComponent, TiposAppEditComponent],
})
export class TiposAppModule { }
