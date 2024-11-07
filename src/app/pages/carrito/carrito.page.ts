import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Carritos } from 'src/app/services/carritos';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  idusuario!: number;
  carrito: Carritos[] = [];
  total: number = 0;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private dbService: ServiceBDService,
    private storage: NativeStorage
  ) {}

  async ngOnInit() {
    await this.obtenerUsuario();
    if (this.idusuario) {
      await this.cargarCarrito();
    }
  }

  // Obtener el usuario logueado desde NativeStorage
  async obtenerUsuario() {
    try {
      this.idusuario = await this.storage.getItem('Usuario_logueado');
    } catch (error) {
      console.error('Error al obtener usuario logueado:', error);
    }
  }

  // Cargar los productos del carrito
  async cargarCarrito() {
    try {
      await this.dbService.selectCarrito(this.idusuario);
      this.dbService.fetchCarrito().subscribe((data) => {
        this.carrito = data;
        this.calcularTotal();
      });
    } catch (error) {
      console.error('Error al cargar el carrito:', error);
    }
  }

  // Calcular el total del carrito
  calcularTotal() {
    this.total = this.carrito.reduce(
      (acc, producto) => acc + producto.precio_prod * producto.cantidad,
      0
    );
  }

  // Incrementar la cantidad de un producto
  aumentarCantidad(producto: Carritos) {
    producto.cantidad += 1;
    this.dbService.actualizarCantidad(
      producto.id_articulo_carrito,
      producto.cantidad
    ).then(() => this.calcularTotal());
  }

  // Decrementar la cantidad de un producto (sin bajar de 1)
  disminuirCantidad(producto: Carritos) {
    if (producto.cantidad > 1) {
      producto.cantidad -= 1;
      this.dbService.actualizarCantidad(
        producto.id_articulo_carrito,
        producto.cantidad
      ).then(() => this.calcularTotal());
    }
  }

  // Realizar el pago
  async pagar() {
    const toast = await this.toastController.create({
      message: 'Compra realizada',
      duration: 5000,
      position: 'bottom',
    });
    await toast.present();

    // Redirigir al home después del pago
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 5000);
  }

  // Vaciar el carrito
  async vaciarCarrito() {
    this.carrito = [];
    this.total = 0;

    const toast = await this.toastController.create({
      message: 'Carrito vaciado',
      duration: 5000,
      position: 'bottom',
    });
    await toast.present();
  }
}
