import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AgregarPCPageRoutingModule } from './agregar-pc-routing.module';
import { AgregarPCPage } from './agregar-pc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPCPageRoutingModule,
  ],
  declarations: [AgregarPCPage],
})
export class AgregarPCPageModule {}  // Asegúrate que el nombre sea consistente
