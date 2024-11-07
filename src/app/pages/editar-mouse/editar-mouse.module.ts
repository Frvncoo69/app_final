import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditarMousePageRoutingModule } from './editar-mouse-routing.module';
import { EditarMousePage } from './editar-mouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMousePageRoutingModule
  ],
  declarations: [EditarMousePage]
})
export class EditarMousePageModule {}
