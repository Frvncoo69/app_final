import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular'; 
import { ServiceBDService } from 'src/app/services/service-bd.service'; // Servicio para BD
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx'; // Para el usuario logueado

@Component({
  selector: 'app-monitor1',
  templateUrl: './monitor1.page.html',
  styleUrls: ['./monitor1.page.scss'],
})
export class Monitor1Page implements OnInit {
  idusuario!: number; // Usuario logueado
  idProducto: number = 2; // ID del monitor (cámbialo según corresponda)
  cantidad: number = 1; // Cantidad inicial

  constructor(
    private toastController: ToastController,
    private dbService: ServiceBDService,
    private storage: NativeStorage
  ) {}

  async ngOnInit() {
    await this.obtenerUsuario(); // Obtener el usuario logueado al iniciar
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

  // Agregar el monitor al carrito
  async agregarAlCarrito() {
    try {
      // Llamar al servicio para agregar al carrito
      await this.dbService.agregarACarrito(this.idusuario, this.idProducto, this.cantidad);
      this.mostrarAlertaCarrito(); // Mostrar el toast de confirmación
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    }
  }

  // Mostrar un mensaje de confirmación (toast)
  async mostrarAlertaCarrito() {
    const toast = await this.toastController.create({
      message: 'Monitor añadido al carrito.',
      duration: 5000, // Duración del toast
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }
}
