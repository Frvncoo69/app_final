import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AgregarMousePageRoutingModule } from './agregar-mouse-routing.module';
import { AgregarMousePage } from './agregar-mouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarMousePageRoutingModule
  ],
  declarations: [AgregarMousePage]  // Declaración consistente del componente
})
export class AgregarMousePageModule {}
