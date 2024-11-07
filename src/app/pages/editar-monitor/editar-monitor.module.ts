import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditarMonitorPageRoutingModule } from './editar-monitor-routing.module';
import { EditarMonitorPage } from './editar-monitor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMonitorPageRoutingModule
  ],
  declarations: [EditarMonitorPage]
})
export class EditarMonitorPageModule {}
