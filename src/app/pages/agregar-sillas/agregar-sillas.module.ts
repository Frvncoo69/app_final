import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AgregarSillasPageRoutingModule } from './agregar-sillas-routing.module';
import { AgregarSillasPage } from './agregar-sillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarSillasPageRoutingModule
  ],
  declarations: [AgregarSillasPage]  // Declaración consistente
})
export class AgregarSillasPageModule {}
