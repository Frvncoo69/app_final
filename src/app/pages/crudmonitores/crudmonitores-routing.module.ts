import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudmonitoresPage } from './crudmonitores.page';

const routes: Routes = [
  {
    path: '',
    component: CrudmonitoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudmonitoresPageRoutingModule {}
