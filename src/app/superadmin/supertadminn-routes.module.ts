import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PanelComponent } from './pages/panel/panel.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CseguridadComponent } from './pages/cseguridad/cseguridad.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'panel',
        component: PanelComponent
      },
      {
        path:'roles',
        component: RolesComponent
      },
      {
        path:'usuarios',
        component:UsuariosComponent
      },
      {
        path:'cseguridad',
        component:CseguridadComponent
      },
      {
        path:'**',
        redirectTo:'panel'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupertadminnRoutesModule { }
