import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAudifonoPage } from './agregar-audifono.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarAudifonoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarAudifonoRoutingModule {}
