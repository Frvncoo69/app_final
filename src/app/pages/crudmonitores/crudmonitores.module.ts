import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudmonitoresPageRoutingModule } from './crudmonitores-routing.module';

import { CrudmonitoresPage } from './crudmonitores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudmonitoresPageRoutingModule
  ],
  declarations: [CrudmonitoresPage]
})
export class CrudmonitoresPageModule {}
