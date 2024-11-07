import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudaudifonosPageRoutingModule } from './crudaudifonos-routing.module';

import { CrudaudifonosPage } from './crudaudifonos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudaudifonosPageRoutingModule
  ],
  declarations: [CrudaudifonosPage]
})
export class CrudaudifonosPageModule {}
