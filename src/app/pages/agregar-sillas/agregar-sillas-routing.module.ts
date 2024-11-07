import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarSillasPage } from './agregar-sillas.page';  // Importación consistente

const routes: Routes = [
  {
    path: '',
    component: AgregarSillasPage  // Referencia consistente
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarSillasPageRoutingModule {}
