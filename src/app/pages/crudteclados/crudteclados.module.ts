import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudtecladosPageRoutingModule } from './crudteclados-routing.module';

import { CrudtecladosPage } from './crudteclados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudtecladosPageRoutingModule
  ],
  declarations: [CrudtecladosPage]
})
export class CrudtecladosPageModule {}
