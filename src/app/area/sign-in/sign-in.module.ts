import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ToastrModule } from 'ngx-toastr';

import { MatCardModule, MatIconModule, MatButtonModule, MatSelectModule, MatDividerModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    SignInRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatCardModule, MatIconModule, MatButtonModule, MatSelectModule, MatDividerModule, MatTableModule, MatFormFieldModule, MatInputModule
  ]
})
export class SignInModule { }
