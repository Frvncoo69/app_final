import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-teclado1',
  templateUrl: './teclado1.page.html',
  styleUrls: ['./teclado1.page.scss'],
})
export class Teclado1Page implements OnInit {
  idusuario!: number; // Usuario logueado
  idProducto: number = 1; // ID del teclado (ajustar según tu base de datos)
  cantidad: number = 1; // Cantidad inicial

  constructor(
    private toastController: ToastController,
    private dbService: ServiceBDService,
    private storage: NativeStorage
  ) {}

  async ngOnInit() {
    await this.obtenerUsuario(); // Obtener el usuario logueado al iniciar
  }

  // Método para obtener el usuario logueado
  async obtenerUsuario() {
    try {
      this.idusuario = await this.storage.getItem('Usuario_logueado');
      console.log('Usuario logueado:', this.idusuario);
    } catch (error) {
      console.error('Error al obtener usuario logueado:', error);
    }
  }

  // Método para agregar el producto al carrito
  async agregarAlCarrito() {
    if (!this.idusuario) {
      console.error('No hay usuario logueado. No se puede agregar al carrito.');
      return;
    }

    try {
      await this.dbService.agregarACarrito(
        this.idusuario,
        this.idProducto,
        this.cantidad
      );
      this.mostrarAlertaCarrito(); // Mostrar el mensaje de confirmación
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    }
  }

  // Mostrar mensaje de confirmación al agregar al carrito
  async mostrarAlertaCarrito() {
    const toast = await this.toastController.create({
      message: 'Teclado añadido al carrito.',
      duration: 5000,
      position: 'bottom',
      color: 'success',
    });
    await toast.present();
  }
}
