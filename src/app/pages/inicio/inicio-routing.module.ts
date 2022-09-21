import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { BarraComponent } from '../barra/barra.component';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },

  {
    path: 'cabecera',
    component: CabeceraComponent
  },
  {
    path: 'barra',
    component:BarraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
