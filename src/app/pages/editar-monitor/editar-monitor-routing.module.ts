import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarMonitorPage } from './editar-monitor.page';

const routes: Routes = [
  {
    path: ':id',
    component: EditarMonitorPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarMonitorPageRoutingModule {}
