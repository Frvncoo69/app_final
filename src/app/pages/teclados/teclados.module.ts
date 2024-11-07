import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecladosPageRoutingModule } from './teclados-routing.module';

import { TecladosPage } from './teclados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecladosPageRoutingModule
  ],
  declarations: [TecladosPage]
})
export class TecladosPageModule {}
