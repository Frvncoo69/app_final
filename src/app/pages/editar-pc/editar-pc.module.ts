import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditarPcPageRoutingModule } from './editar-pc-routing.module';
import { EditarPcPage } from './editar-pc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPcPageRoutingModule
  ],
  declarations: [EditarPcPage]
})
export class EditarPcPageModule {}
