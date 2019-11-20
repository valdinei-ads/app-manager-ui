import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './area/admin/admin.module';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatTableModule} from '@angular/material/table';
import { FormDebugComponent } from './shared/components/form-debug/form-debug.component';
import { SignInModule } from './area/sign-in/sign-in.module';

@NgModule({
  declarations: [
    AppComponent,
    FormDebugComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTableModule,
    NgxMaskModule.forRoot({
      validation: true,
    }),
    SignInModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
