import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionPageRoutingModule } from './sesion-routing.module';

import { SesionPage } from './sesion.page';
import { LoginComponent } from '../login/login.component';
import { CabeceraComponent } from '../../cabecera/cabecera.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionPageRoutingModule
  ],
  declarations: [SesionPage,LoginComponent,CabeceraComponent]
})
export class SesionPageModule {}
