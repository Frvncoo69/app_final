import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecladosPage } from './teclados.page';

const routes: Routes = [
  {
    path: '',
    component: TecladosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecladosPageRoutingModule {}
