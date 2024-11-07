import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudpcarmadoPageRoutingModule } from './crudpcarmado-routing.module';

import { CrudpcarmadoPage } from './crudpcarmado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudpcarmadoPageRoutingModule
  ],
  declarations: [CrudpcarmadoPage]
})
export class CrudpcarmadoPageModule {}
