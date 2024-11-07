import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudaudifonosPage } from './crudaudifonos.page';

const routes: Routes = [
  {
    path: '',
    component: CrudaudifonosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudaudifonosPageRoutingModule {}
