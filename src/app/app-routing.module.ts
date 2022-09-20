import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'sesion',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'sesion',
    loadChildren: () => import('./pages/sesion/sesion/sesion.module').then( m => m.SesionPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'grupos',
    loadChildren: () => import('./pages/grupos/grupos/grupos.module').then( m => m.GruposPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./pages/recursos/recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./pages/calificaciones/calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/sesion/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'iniciounico',
    loadChildren: () => import('./pages/sesion/iniciounico/iniciounico.module').then( m => m.IniciounicoPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
