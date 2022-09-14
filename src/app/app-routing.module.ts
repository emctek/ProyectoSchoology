import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'comienzo',
    loadChildren: () => import('./Comienzo/comienzo/comienzo.module').then( m => m.ComienzoPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./Cursos/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'tus-cursos',
    loadChildren: () => import('./Tus-Cursos/tus-cursos/tus-cursos.module').then( m => m.TusCursosPageModule)
  },
  {
    path: 'grupos',
    loadChildren: () => import('./Grupos/grupos/grupos.module').then( m => m.GruposPageModule)
  },
  {
    path: 'tus-grupos',
    loadChildren: () => import('./Tus-Grupos/tus-grupos/tus-grupos.module').then( m => m.TusGruposPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./Recursos/recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'calificaciones-asistencia',
    loadChildren: () => import('./Calificaciones/calificaciones-asistencia/calificaciones-asistencia.module').then( m => m.CalificacionesAsistenciaPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./Mensajes/mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'notificaciones-solicitudes',
    loadChildren: () => import('./Notificaciones/notificaciones-solicitudes/notificaciones-solicitudes.module').then( m => m.NotificacionesSolicitudesPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./Usuario/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
