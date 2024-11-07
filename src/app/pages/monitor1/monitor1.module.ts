import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Monitor1PageRoutingModule } from './monitor1-routing.module';

import { Monitor1Page } from './monitor1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Monitor1PageRoutingModule
  ],
  declarations: [Monitor1Page]
})
export class Monitor1PageModule {}
