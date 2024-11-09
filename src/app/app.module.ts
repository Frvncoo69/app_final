import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importaciones de Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Importar SQLite y Native Storage
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

// Importar HttpClientModule para las solicitudes HTTP
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule, // Necesario para Angular Material
    MatIconModule,           // Módulo de iconos de Angular Material
    HttpClientModule         // Módulo para solicitudes HTTP
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,                   // SQLite en los providers
    NativeStorage,            // NativeStorage en los providers
    provideAnimationsAsync(), // Proveedor de animaciones asincrónicas
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
