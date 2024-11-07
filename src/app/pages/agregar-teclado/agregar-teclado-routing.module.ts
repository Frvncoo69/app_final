import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTecladoPage } from './agregar-teclado.page';  // Importación consistente

const routes: Routes = [
  {
    path: '',
    component: AgregarTecladoPage  // Referencia correcta del componente
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarTecladoPageRoutingModule {}
