import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsolaDetallePageRoutingModule } from './consola-detalle-routing.module';

import { ConsolaDetallePage } from './consola-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsolaDetallePageRoutingModule
  ],
  declarations: [ConsolaDetallePage]
})
export class ConsolaDetallePageModule {}
