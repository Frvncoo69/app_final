import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarTecladoPage } from './editar-teclado.page';

const routes: Routes = [
  {
    path: ':id',
    component: EditarTecladoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarTecladoPageRoutingModule {}
