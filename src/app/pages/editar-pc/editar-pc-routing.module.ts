import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPcPage } from './editar-pc.page';

const routes: Routes = [
  {
    path: ':id',
    component: EditarPcPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPcPageRoutingModule {}
