import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarMonitorPage } from './agregar-monitor.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarMonitorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarMonitorRoutingModule {}
