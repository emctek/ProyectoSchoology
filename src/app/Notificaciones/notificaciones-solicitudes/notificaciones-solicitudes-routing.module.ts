import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacionesSolicitudesPage } from './notificaciones-solicitudes.page';

const routes: Routes = [
  {
    path: '',
    component: NotificacionesSolicitudesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificacionesSolicitudesPageRoutingModule {}
