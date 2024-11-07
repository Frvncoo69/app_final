import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditarSillasPageRoutingModule } from './editar-sillas-routing.module';
import { EditarSillasPage } from './editar-sillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarSillasPageRoutingModule
  ],
  declarations: [EditarSillasPage]
})
export class EditarSillasPageModule {}
