import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MousePage } from './mouse.page';

const routes: Routes = [
  {
    path: '',
    component: MousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MousePageRoutingModule {}
