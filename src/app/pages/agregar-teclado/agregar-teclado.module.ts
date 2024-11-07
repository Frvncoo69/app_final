import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AgregarTecladoPageRoutingModule } from './agregar-teclado-routing.module';
import { AgregarTecladoPage } from './agregar-teclado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarTecladoPageRoutingModule
  ],
  declarations: [AgregarTecladoPage]  // Declaración del componente
})
export class AgregarTecladoPageModule {}
