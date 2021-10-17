import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path:'superadmin',
    loadChildren: ()=> import('./superadmin/superadmin.module').then((m)=>m.SuperadminModule)
  },
  {
    path:'admin',
    loadChildren: ()=> import('./admin/admin.module').then((m)=>m.AdminModule)
  },
  {
    path:'usuarios',
    loadChildren: ()=> import('./users/users.module').then((m)=>m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
