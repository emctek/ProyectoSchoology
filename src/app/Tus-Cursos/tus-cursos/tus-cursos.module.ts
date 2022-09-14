import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TusCursosPageRoutingModule } from './tus-cursos-routing.module';

import { TusCursosPage } from './tus-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TusCursosPageRoutingModule
  ],
  declarations: [TusCursosPage]
})
export class TusCursosPageModule {}
