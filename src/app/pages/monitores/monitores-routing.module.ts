import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoresPage } from './monitores.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoresPageRoutingModule {}
