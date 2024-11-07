import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudmousePageRoutingModule } from './crudmouse-routing.module';

import { CrudmousePage } from './crudmouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudmousePageRoutingModule
  ],
  declarations: [CrudmousePage]
})
export class CrudmousePageModule {}
