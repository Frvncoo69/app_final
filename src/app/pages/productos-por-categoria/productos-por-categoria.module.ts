import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPorCategoriaPageRoutingModule } from './productos-por-categoria-routing.module';

import { ProductosPorCategoriaPage } from './productos-por-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPorCategoriaPageRoutingModule
  ],
  declarations: [ProductosPorCategoriaPage]
})
export class ProductosPorCategoriaPageModule {}
