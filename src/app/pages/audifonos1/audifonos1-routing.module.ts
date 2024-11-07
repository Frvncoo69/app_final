import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Audifonos1Page } from './audifonos1.page';

const routes: Routes = [
  {
    path: '',
    component: Audifonos1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Audifonos1PageRoutingModule {}
