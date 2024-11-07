import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudifonosPageRoutingModule } from './audifonos-routing.module';

import { AudifonosPage } from './audifonos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudifonosPageRoutingModule
  ],
  declarations: [AudifonosPage]
})
export class AudifonosPageModule {}
