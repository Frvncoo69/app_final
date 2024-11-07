import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular'; // Importa el ToastController
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx'; // Manejo de almacenamiento nativo
import { ServiceBDService } from 'src/app/services/service-bd.service'; // Servicio de la base de datos

@Component({
  selector: 'app-audifonos1',
  templateUrl: './audifonos1.page.html',
  styleUrls: ['./audifonos1.page.scss'],
})
export class Audifonos1Page implements OnInit {
  idusuario!: number;

  // Detalles del audífono a agregar al carrito
  audifono = {
    id_producto: 1,
    nombre_prod: 'Audífonos Gamer E1000',
    precio_prod: 16990,
    stock_prod: 20,
    foto_prod: '/assets/icon/audifono1.jpg',
  };

  constructor(
    private toastController: ToastController,
    private storage: NativeStorage,
    private dbService: ServiceBDService
  ) {}

  async ngOnInit() {
    await this.obtenerUsuario();
  }

  // Obtiene el ID del usuario logueado
  async obtenerUsuario() {
    try {
      this.idusuario = await this.storage.getItem('Usuario_logueado');
    } catch (error) {
      console.error('Error al obtener usuario logueado:', error);
    }
  }

  // Muestra un toast y agrega el producto al carrito
  async alarmaCarrito() {
    try {
      await this.dbService.agregarACarrito(this.idusuario, this.audifono.id_producto, 1);
      const toast = await this.toastController.create({
        message: 'Se añadió al carrito.',
        duration: 5000,
        position: 'bottom',
        color: 'success',
      });
      toast.present();
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      const toast = await this.toastController.create({
        message: 'No se pudo agregar al carrito.',
        duration: 5000,
        position: 'bottom',
        color: 'danger',
      });
      toast.present();
    }
  }
}
