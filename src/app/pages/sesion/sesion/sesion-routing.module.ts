import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionPage } from './sesion.page';
import { CabeceraComponent } from '../../cabecera/cabecera.component';
import { BarraComponent } from '../../barra/barra.component';

const routes: Routes = [
  {
    path: '',
    component: SesionPage
  },
  {
    path: 'cabecera',
    component: CabeceraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionPageRoutingModule {}
