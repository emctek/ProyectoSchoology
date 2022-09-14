import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TusCursosPage } from './tus-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: TusCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TusCursosPageRoutingModule {}
