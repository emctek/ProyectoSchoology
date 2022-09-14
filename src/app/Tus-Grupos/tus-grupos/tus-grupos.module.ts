import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TusGruposPageRoutingModule } from './tus-grupos-routing.module';

import { TusGruposPage } from './tus-grupos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TusGruposPageRoutingModule
  ],
  declarations: [TusGruposPage]
})
export class TusGruposPageModule {}
