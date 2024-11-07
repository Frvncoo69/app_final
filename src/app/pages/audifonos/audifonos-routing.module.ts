import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudifonosPage } from './audifonos.page';

const routes: Routes = [
  {
    path: '',
    component: AudifonosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudifonosPageRoutingModule {}
