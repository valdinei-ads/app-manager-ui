import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DefaultComponent } from './default/default.component';

import { MatCardModule, MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatIconModule} from '@angular/material';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule
  ]
})
export class HomeModule { }
