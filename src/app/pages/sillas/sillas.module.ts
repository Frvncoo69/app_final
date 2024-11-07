import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SillasPageRoutingModule } from './sillas-routing.module';

import { SillasPage } from './sillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SillasPageRoutingModule
  ],
  declarations: [SillasPage]
})
export class SillasPageModule {}
