import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-teclado1',
  templateUrl: './teclado1.page.html',
  styleUrls: ['./teclado1.page.scss'],
})
export class Teclado1Page implements OnInit {
  idusuario!: number; // Usuario logueado
  idProducto: number = 1; // ID del teclado (ajustar según tu base de datos)
  cantidad: number = 1; // Cantidad inicial
  idUserLogged!: any;
  idVentaActiva: number | null = null;
  estaEnCarrito!: boolean; // Estado inicial

  productoSolo: any;
  
  constructor(
    private toastController: ToastController,
    private bd: ServiceBDService,
    private storage: NativeStorage, 
    private router: Router, 
    private activedroute: ActivatedRoute,
    private alertasService: AlertasService,
  ) {
    this.activedroute.queryParams.subscribe((res) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.productoSolo = this.router.getCurrentNavigation()?.extras?.state?.['tecladoVa'];
      }
    });
  }

  async ionViewWillEnter() {
    await this.validarSiEstaEnCarrito();
  }

  ngOnInit() {
    this.bd.dbState().subscribe(async (data) => {
      if (data) {
        this.validarSiEstaEnCarrito();
      }
    });
  }

  ///CARRITO SECCION
  async verificarOCrearVenta() {
    try {
      this.idUserLogged = await this.bd.obtenerIdUsuarioLogueado();
      if (!this.idUserLogged) {
        this.alertasService.presentAlert('Error', 'Debes estar logueado para añadir al carrito.');
        return;
      }
  
      const venta = await this.bd.verificarOCrearVenta(this.idUserLogged);
      console.log('Venta activa encontrada:', venta);
  
      if (venta) {
        this.idVentaActiva = venta;
      } else {
        this.idVentaActiva = await this.bd.crearVenta(this.idUserLogged);
        console.log('Nueva venta creada con ID:', this.idVentaActiva);
      }
    } catch (error) {
      console.error('Error al verificar o crear la venta:', error);
      this.alertasService.presentAlert('Error', 'No se pudo verificar o crear la venta.');
    }
  }

  async agregarAlCarrito() {
    await this.verificarOCrearVenta();
    try {
      if (!this.idVentaActiva) {
        this.alertasService.presentAlert('Error', 'No se encontró una venta activa.');
        return;
      }
      await this.validarSiEstaEnCarrito();
      if (this.estaEnCarrito === true){
        return this.alertasService.presentAlert("ERROR","EL PRODUCTO YA ESTA EN EL CARRITO");
      }

      await this.bd.agregarDetalleVenta(
        this.idVentaActiva,
        this.productoSolo.precio_prod,
        this.productoSolo.id_producto
      );
      
      await this.bd.preciofinal(this.idVentaActiva);
      this.alertasService.presentAlert('Añadido al Carrito', 'El juego fue añadido correctamente.');
  
      
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      this.alertasService.presentAlert('Error', 'No se pudo añadir al carrito.');
    }
  }

  async validarSiEstaEnCarrito() {
    try {
      this.estaEnCarrito = await this.bd.consultarProdsCarro(this.productoSolo.id_producto, this.idVentaActiva);
    } catch (error) {
      console.error('Error al verificar si el producto está en el carrito:', error);
    }
  }


  ///CARRITO SECCION




}
