import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoresPageRoutingModule } from './monitores-routing.module';

import { MonitoresPage } from './monitores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoresPageRoutingModule
  ],
  declarations: [MonitoresPage]
})
export class MonitoresPageModule {}
