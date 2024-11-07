import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mouse1PageRoutingModule } from './mouse1-routing.module';

import { Mouse1Page } from './mouse1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mouse1PageRoutingModule
  ],
  declarations: [Mouse1Page]
})
export class Mouse1PageModule {}
