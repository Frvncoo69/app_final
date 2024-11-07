import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MousePageRoutingModule } from './mouse-routing.module';

import { MousePage } from './mouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MousePageRoutingModule
  ],
  declarations: [MousePage]
})
export class MousePageModule {}
