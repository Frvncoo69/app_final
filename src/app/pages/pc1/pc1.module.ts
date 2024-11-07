import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pc1PageRoutingModule } from './pc1-routing.module';

import { Pc1Page } from './pc1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pc1PageRoutingModule
  ],
  declarations: [Pc1Page]
})
export class Pc1PageModule {}
