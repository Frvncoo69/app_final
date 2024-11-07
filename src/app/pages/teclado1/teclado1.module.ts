import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Teclado1PageRoutingModule } from './teclado1-routing.module';

import { Teclado1Page } from './teclado1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Teclado1PageRoutingModule
  ],
  declarations: [Teclado1Page]
})
export class Teclado1PageModule {}
