import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sillas1PageRoutingModule } from './sillas1-routing.module';

import { Sillas1Page } from './sillas1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sillas1PageRoutingModule
  ],
  declarations: [Sillas1Page]
})
export class Sillas1PageModule {}
