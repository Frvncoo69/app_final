import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsolaDetallePage } from './consola-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ConsolaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsolaDetallePageRoutingModule {}
