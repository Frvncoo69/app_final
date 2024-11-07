import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mouse1Page } from './mouse1.page';

const routes: Routes = [
  {
    path: '',
    component: Mouse1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mouse1PageRoutingModule {}
