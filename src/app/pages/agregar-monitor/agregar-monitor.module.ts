import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarMonitorPage } from './agregar-monitor.page';
import { AgregarMonitorRoutingModule } from './agregar-monitor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarMonitorRoutingModule
  ],
  declarations: [AgregarMonitorPage]
})
export class AgregarMonitorPageModule {}
