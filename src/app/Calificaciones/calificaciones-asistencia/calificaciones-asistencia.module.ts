import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificacionesAsistenciaPageRoutingModule } from './calificaciones-asistencia-routing.module';

import { CalificacionesAsistenciaPage } from './calificaciones-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificacionesAsistenciaPageRoutingModule
  ],
  declarations: [CalificacionesAsistenciaPage]
})
export class CalificacionesAsistenciaPageModule {}
