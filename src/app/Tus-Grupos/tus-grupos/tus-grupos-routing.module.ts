import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TusGruposPage } from './tus-grupos.page';

const routes: Routes = [
  {
    path: '',
    component: TusGruposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TusGruposPageRoutingModule {}
