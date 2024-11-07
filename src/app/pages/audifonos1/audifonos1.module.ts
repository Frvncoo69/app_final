import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Audifonos1PageRoutingModule } from './audifonos1-routing.module';

import { Audifonos1Page } from './audifonos1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Audifonos1PageRoutingModule
  ],
  declarations: [Audifonos1Page]
})
export class Audifonos1PageModule {}
