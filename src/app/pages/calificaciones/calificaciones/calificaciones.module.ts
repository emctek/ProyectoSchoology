import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificacionesPageRoutingModule } from './calificaciones-routing.module';

import { CalificacionesPage } from './calificaciones.page';
import { BarraComponent } from '../../barra/barra.component';
import { CabeceraComponent } from '../../cabecera/cabecera.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificacionesPageRoutingModule
  ],
  declarations: [CalificacionesPage,BarraComponent,CabeceraComponent]
})
export class CalificacionesPageModule {}
