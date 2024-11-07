import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAudifonoPageRoutingModule } from './editar-audifono-routing.module';

import { EditarAudifonoPage } from './editar-audifono.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAudifonoPageRoutingModule
  ],
  declarations: [EditarAudifonoPage]
})
export class EditarAudifonoPageModule {}
