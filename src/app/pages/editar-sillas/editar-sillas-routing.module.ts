import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarSillasPage } from './editar-sillas.page';

const routes: Routes = [
  {
    path: ':id',
    component: EditarSillasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarSillasPageRoutingModule {}
