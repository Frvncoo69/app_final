import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarAudifonoPage } from './agregar-audifono.page';
import { AgregarAudifonoRoutingModule } from './agregar-audifono-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarAudifonoRoutingModule
  ],
  declarations: [AgregarAudifonoPage]
})
export class AgregarAudifonoPageModule {}
