import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular'; 
import { ServiceBDService } from 'src/app/services/service-bd.service'; 
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx'; 

@Component({
  selector: 'app-pc1',
  templateUrl: './pc1.page.html',
  styleUrls: ['./pc1.page.scss'],
})
export class Pc1Page implements OnInit {
  idusuario!: number; // Usuario logueado
  idProducto: number = 3; // ID del PC (modifícalo según corresponda)
  cantidad: number = 1; // Cantidad inicial

  constructor(
    private toastController: ToastController,
    private dbService: ServiceBDService,
    private storage: NativeStorage
  ) {}

  async ngOnInit() {
    await this.obtenerUsuario(); // Obtener el usuario logueado
  }

  // Obtener el usuario logueado desde NativeStorage
  async obtenerUsuario() {
    try {
      this.idusuario = await this.storage.getItem('Usuario_logueado');
      console.log('Usuario logueado:', this.idusuario);
    } catch (error) {
      console.error('Error al obtener usuario logueado:', error);
    }
  }

  // Agregar el PC al carrito
  async agregarAlCarrito() {
    try {
      await this.dbService.agregarACarrito(this.idusuario, this.idProducto, this.cantidad);
      this.mostrarAlertaCarrito(); // Mostrar el toast de confirmación
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    }
  }

  // Mostrar mensaje de confirmación (toast)
  async mostrarAlertaCarrito() {
    const toast = await this.toastController.create({
      message: 'PC añadido al carrito.',
      duration: 5000,
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }
}
