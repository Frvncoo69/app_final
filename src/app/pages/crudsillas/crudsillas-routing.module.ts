import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudsillasPage } from './crudsillas.page';

const routes: Routes = [
  {
    path: '',
    component: CrudsillasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudsillasPageRoutingModule {}
