import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';

@NgModule({
  exports: [
    MenubarModule,
    ButtonModule
  ]
})
export class PrimengModule { }
