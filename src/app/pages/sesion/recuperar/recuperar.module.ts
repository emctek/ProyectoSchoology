import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarPageRoutingModule } from './recuperar-routing.module';

import { RecuperarPage } from './recuperar.page';
import { CabeceraComponent } from '../../cabecera/cabecera.component';
import { RecuperaCComponent } from '../recupera-c/recupera-c.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarPageRoutingModule
  ],
  declarations: [RecuperarPage,CabeceraComponent,RecuperaCComponent]
})
export class RecuperarPageModule {}
