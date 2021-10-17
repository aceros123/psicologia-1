import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PanelComponent } from './pages/panel/panel.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesComponent } from './pages/roles/roles.component';
import { CseguridadComponent } from './pages/cseguridad/cseguridad.component';
import { SupertadminnRoutesModule } from './supertadminn-routes.module';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    HomeComponent,
    PanelComponent,
    UsuariosComponent,
    RolesComponent,
    CseguridadComponent
  ],
  imports: [
    CommonModule,
    SupertadminnRoutesModule,
    PrimengModule
  ]
})
export class SuperadminModule { }
