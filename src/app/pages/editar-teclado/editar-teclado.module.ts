import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditarTecladoPageRoutingModule } from './editar-teclado-routing.module';
import { EditarTecladoPage } from './editar-teclado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarTecladoPageRoutingModule
  ],
  declarations: [EditarTecladoPage]
})
export class EditarTecladoPageModule {}
