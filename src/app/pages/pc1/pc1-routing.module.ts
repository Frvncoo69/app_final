import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pc1Page } from './pc1.page';

const routes: Routes = [
  {
    path: '',
    component: Pc1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pc1PageRoutingModule {}
