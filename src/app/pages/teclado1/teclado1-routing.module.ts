import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Teclado1Page } from './teclado1.page';

const routes: Routes = [
  {
    path: '',
    component: Teclado1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Teclado1PageRoutingModule {}
