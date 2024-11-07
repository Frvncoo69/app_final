import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudmousePage } from './crudmouse.page';

const routes: Routes = [
  {
    path: '',
    component: CrudmousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudmousePageRoutingModule {}
