import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sillas1Page } from './sillas1.page';

const routes: Routes = [
  {
    path: '',
    component: Sillas1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sillas1PageRoutingModule {}
