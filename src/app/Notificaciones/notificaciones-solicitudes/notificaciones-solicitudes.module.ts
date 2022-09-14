import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesSolicitudesPageRoutingModule } from './notificaciones-solicitudes-routing.module';

import { NotificacionesSolicitudesPage } from './notificaciones-solicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesSolicitudesPageRoutingModule
  ],
  declarations: [NotificacionesSolicitudesPage]
})
export class NotificacionesSolicitudesPageModule {}
