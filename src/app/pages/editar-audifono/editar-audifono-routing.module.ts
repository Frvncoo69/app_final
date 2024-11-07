import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAudifonoPage } from './editar-audifono.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAudifonoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAudifonoPageRoutingModule {}
