import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudsillasPageRoutingModule } from './crudsillas-routing.module';

import { CrudsillasPage } from './crudsillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudsillasPageRoutingModule
  ],
  declarations: [CrudsillasPage]
})
export class CrudsillasPageModule {}
