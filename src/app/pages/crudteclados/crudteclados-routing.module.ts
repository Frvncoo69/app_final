import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudtecladosPage } from './crudteclados.page';

const routes: Routes = [
  {
    path: '',
    component: CrudtecladosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudtecladosPageRoutingModule {}
