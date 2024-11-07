import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPCPage } from './agregar-pc.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPCPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPCPageRoutingModule {}
