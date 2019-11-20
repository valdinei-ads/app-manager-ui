import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaskModule} from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { TiposAppModule } from './modules/tipos-app/tipos-app.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { ContentComponent } from './layout/content/content.component';

import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppsModule } from './modules/apps/apps.module';
import { HomeModule } from './modules/home/home.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { PerfisModule } from './modules/perfis/perfis.module';

@NgModule({
  declarations: [SidebarComponent, LayoutComponent, ContentComponent],
  imports: [
    // Angular
    CommonModule,
    RouterModule,
    HttpClientModule,
    // Material
    MatFormFieldModule,
    MatSidenavModule,
    MatTableModule,
    
    NgxMaskModule.forRoot({ validation: true }),

    //AppManager
    HomeModule,
    TiposAppModule,
    AppsModule,
    UsuariosModule,
    PerfisModule,
    
    AdminRoutingModule,
  ]
})
export class AdminModule { }
