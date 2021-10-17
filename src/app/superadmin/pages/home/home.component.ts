import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Panel',
          icon: 'pi pi-chart-bar',
          routerLink:'panel'
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-user',
        routerLink:'usuarios'
      },
      {
        label: 'Roles',
        icon: 'pi pi-sitemap',
        routerLink:'roles'
    },
    {
      label: 'Copia Seguridad',
      icon: 'pi pi-shield',
      routerLink:'cseguridad'
    },

  ];
  }

}
