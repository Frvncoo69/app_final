import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarMousePage } from './editar-mouse.page';

const routes: Routes = [
  {
    path: ':id',
    component: EditarMousePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarMousePageRoutingModule {}
