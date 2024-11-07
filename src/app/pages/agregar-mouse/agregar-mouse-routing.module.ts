import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarMousePage } from './agregar-mouse.page';  // Importación consistente

const routes: Routes = [
  {
    path: '',
    component: AgregarMousePage  // Uso consistente del nombre de la clase
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarMousePageRoutingModule {}
