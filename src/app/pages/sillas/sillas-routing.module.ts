import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SillasPage } from './sillas.page';

const routes: Routes = [
  {
    path: '',
    component: SillasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SillasPageRoutingModule {}
