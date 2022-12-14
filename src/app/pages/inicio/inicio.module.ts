import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { BarraComponent } from '../barra/barra.component';
import { LoginComponent } from '../sesion/login/login.component';
import { CabeceraComponent } from '../cabecera/cabecera.component';

@NgModule({


  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule


  ],
  declarations: [InicioPage,BarraComponent,CabeceraComponent]
})
export class InicioPageModule {}
