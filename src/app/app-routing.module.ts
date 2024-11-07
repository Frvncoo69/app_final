import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./pages/crud/crud.module').then( m => m.CrudPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'codigo',
    loadChildren: () => import('./pages/codigo/codigo.module').then( m => m.CodigoPageModule)
  },
  {
    path: 'nueva',
    loadChildren: () => import('./pages/nueva/nueva.module').then( m => m.NuevaPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'teclado1',
    loadChildren: () => import('./pages/teclado1/teclado1.module').then( m => m.Teclado1PageModule)
  },
  {
    path: 'monitor1',
    loadChildren: () => import('./pages/monitor1/monitor1.module').then( m => m.Monitor1PageModule)
  },
  {
    path: 'audifonos1',
    loadChildren: () => import('./pages/audifonos1/audifonos1.module').then( m => m.Audifonos1PageModule)
  },
  {
    path: 'mouse1',
    loadChildren: () => import('./pages/mouse1/mouse1.module').then( m => m.Mouse1PageModule)
  },
  {
    path: 'sillas1',
    loadChildren: () => import('./pages/sillas1/sillas1.module').then( m => m.Sillas1PageModule)
  },
  {
    path: 'pc1',
    loadChildren: () => import('./pages/pc1/pc1.module').then( m => m.Pc1PageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./pages/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'agregar-audifono',
    loadChildren: () => import('./pages/agregar-audifono/agregar-audifono.module').then( m => m.AgregarAudifonoPageModule)
  },
  {
    path: 'editar-audifono',
    loadChildren: () => import('./pages/editar-audifono/editar-audifono.module').then( m => m.EditarAudifonoPageModule)
  },
  {
    path: 'agregar-monitor',
    loadChildren: () => import('./pages/agregar-monitor/agregar-monitor.module').then( m => m.AgregarMonitorPageModule)
  },
  {
    path: 'editar-monitor',
    loadChildren: () => import('./pages/editar-monitor/editar-monitor.module').then( m => m.EditarMonitorPageModule)
  },
  {
    path: 'agregar-mouse',
    loadChildren: () => import('./pages/agregar-mouse/agregar-mouse.module').then( m => m.AgregarMousePageModule)
  },
  {
    path: 'editar-mouse',
    loadChildren: () => import('./pages/editar-mouse/editar-mouse.module').then( m => m.EditarMousePageModule)
  },
  {
    path: 'agregar-teclado',
    loadChildren: () => import('./pages/agregar-teclado/agregar-teclado.module').then( m => m.AgregarTecladoPageModule)
  },
  {
    path: 'editar-teclado',
    loadChildren: () => import('./pages/editar-teclado/editar-teclado.module').then( m => m.EditarTecladoPageModule)
  },
  {
    path: 'agregar-pc',
    loadChildren: () => import('./pages/agregar-pc/agregar-pc.module').then(m => m.AgregarPCPageModule)
  },
  {
    path: 'editar-pc',
    loadChildren: () => import('./pages/editar-pc/editar-pc.module').then( m => m.EditarPcPageModule)
  },
  {
    path: 'agregar-sillas',
    loadChildren: () => import('./pages/agregar-sillas/agregar-sillas.module').then( m => m.AgregarSillasPageModule)
  },
  {
    path: 'editar-sillas',
    loadChildren: () => import('./pages/editar-sillas/editar-sillas.module').then( m => m.EditarSillasPageModule)
  },
  {
    path: 'productos-por-categoria',
    loadChildren: () => import('./pages/productos-por-categoria/productos-por-categoria.module').then( m => m.ProductosPorCategoriaPageModule)
  },
  {
    path: 'crudteclados',
    loadChildren: () => import('./pages/crudteclados/crudteclados.module').then( m => m.CrudtecladosPageModule)
  },
  {
    path: 'crudmonitores',
    loadChildren: () => import('./pages/crudmonitores/crudmonitores.module').then( m => m.CrudmonitoresPageModule)
  },
  {
    path: 'crudaudifonos',
    loadChildren: () => import('./pages/crudaudifonos/crudaudifonos.module').then( m => m.CrudaudifonosPageModule)
  },
  {
    path: 'crudmouse',
    loadChildren: () => import('./pages/crudmouse/crudmouse.module').then( m => m.CrudmousePageModule)
  },
  {
    path: 'crudsillas',
    loadChildren: () => import('./pages/crudsillas/crudsillas.module').then( m => m.CrudsillasPageModule)
  },
  {
    path: 'crudpcarmado',
    loadChildren: () => import('./pages/crudpcarmado/crudpcarmado.module').then( m => m.CrudpcarmadoPageModule)
  },

  {
    path: 'detalle-producto',
    loadChildren: () => import('./pages/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  {
    path: 'teclados',
    loadChildren: () => import('./pages/teclados/teclados.module').then( m => m.TecladosPageModule)
  },
  {
    path: 'sillas',
    loadChildren: () => import('./pages/sillas/sillas.module').then( m => m.SillasPageModule)
  },
  {
    path: 'pc',
    loadChildren: () => import('./pages/pc/pc.module').then( m => m.PcPageModule)
  },
  {
    path: 'mouse',
    loadChildren: () => import('./pages/mouse/mouse.module').then( m => m.MousePageModule)
  },
  {
    path: 'monitores',
    loadChildren: () => import('./pages/monitores/monitores.module').then( m => m.MonitoresPageModule)
  },
  {
    path: 'audifonos',
    loadChildren: () => import('./pages/audifonos/audifonos.module').then( m => m.AudifonosPageModule)
  },

  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then(m => m.CarritoPageModule)
  },
  
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then(m => m.CarritoPageModule)
  },
  {
    path: 'cambiarcontrasena',
    loadChildren: () => import('./pages/cambiarcontrasena/cambiarcontrasena.module').then( m => m.CambiarcontrasenaPageModule)
  },
  {
    path: 'nuevacontrasena',
    loadChildren: () => import('./pages/nuevacontrasena/nuevacontrasena.module').then( m => m.NuevacontrasenaPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
