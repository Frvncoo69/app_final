import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevacontrasenaPageRoutingModule } from './nuevacontrasena-routing.module';

import { NuevacontrasenaPage } from './nuevacontrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevacontrasenaPageRoutingModule
  ],
  declarations: [NuevacontrasenaPage]
})
export class NuevacontrasenaPageModule {}
