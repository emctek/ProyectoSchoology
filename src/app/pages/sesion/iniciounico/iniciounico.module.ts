import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciounicoPageRoutingModule } from './iniciounico-routing.module';

import { IniciounicoPage } from './iniciounico.page';
import { CabeceraComponent } from '../../cabecera/cabecera.component';
import { IniciounicoCComponent } from '../iniciounico-c/iniciounico-c.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciounicoPageRoutingModule
  ],
  declarations: [IniciounicoPage,CabeceraComponent,IniciounicoCComponent]
})
export class IniciounicoPageModule {}
