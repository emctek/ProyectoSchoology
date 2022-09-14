import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificacionesAsistenciaPage } from './calificaciones-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: CalificacionesAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificacionesAsistenciaPageRoutingModule {}
