import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertasService } from 'src/app/services/alertas.service';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  productosDisponibles: any[] = [];
  productosNODisponibles: any[] = [];
  productosSinStock: any[] = [];
  productos: any[] = [];
  idVentaActiva: number | null = null;
  mostrarSinStock: boolean = true;
  totalVENTA: number = 0; 
  wasaborrar: any[] = [];
  wasmalasaborrar: any[] = [];
  private alertaMostrada: boolean = false; // Bandera para controlar una sola alerta


  constructor(
    private alertasService: AlertasService,
    private bd: ServiceBDService,
    private router: Router,
    private cd: ChangeDetectorRef // Detecta cambios manualmente si es necesario
  ) {}


  async ngOnInit() {
    await this.cargarProductos();
  }


  async ionViewWillEnter() {
    await this.cargarProductos();
    await this.actualizarPrecioTotal();  // Llama al calcular el total
  }


  async obtenerVentaActiva() {
    try {
      const idUsuario = await this.bd.obtenerIdUsuarioLogueado();
      if (!idUsuario) {
        this.alertasService.presentAlert('Error', 'Debes estar logueado.');
        return;
      }
      this.idVentaActiva = await this.bd.verificarOCrearVenta(idUsuario);
      console.log('ID de Venta Activa:', this.idVentaActiva);
    } catch (error) {
      console.error('Error al obtener la venta activa:', error);
      this.alertasService.presentAlert('Error', 'No se pudo obtener la venta activa.' + JSON.stringify(error));
    }
  }


  async cargarProductos() {
    await this.obtenerVentaActiva();
    if (!this.idVentaActiva) return;
  
    try {
      // Eliminar productos sin stock automáticamente
      await this.borrarProductosSinStock();
  
      // Obtener productos en el carrito después de eliminar los sin stock
      this.productos = await this.bd.obtenerCarroPorUsuario(this.idVentaActiva);
  
      // Separar productos sin stock y disponibles
      this.productosSinStock = this.productos.filter(p => p.estatus_prod === 0); 
      this.productosDisponibles = this.productos.filter(p => p.cantidad_d > 0);

      // Determinar si mostrar la sección de sin stock
      this.mostrarSinStock = this.productosSinStock.length > 0;
  
      console.log('Productos sin stock:', this.productosSinStock);
      console.log('Productos disponibles:', this.productosDisponibles);
  
      this.cd.detectChanges(); // Forzar actualización de la vista
    } catch (error) {
      console.error('Error al cargar productos del carrito:', error);
      this.alertasService.presentAlert('Error', 'No se pudieron cargar los productos.');
    }
  }
  
  async continuar() {
    await this.borrarProductosSinStock();
    this.productosSinStock = [];
    this.mostrarSinStock = false;
    await this.actualizarPrecioTotal();  // Actualizamos el total.
    await this.cargarProductos();
  }

  async incrementarCantidad(producto: any) {
    // Consulta el stock actual desde la base de datos
    const productos = await this.bd.consultarProductoPorId(producto.id_producto);

    if (productos && productos.length > 0) {
      const productoActual = productos[0]; // Extrae el producto con stock actualizado

      if (producto.cantidad_d < productoActual.stock_prod) {
        producto.cantidad_d++;
        await this.bd.agregarCantidad(this.idVentaActiva, producto.id_producto);
        this.actualizarPrecioTotal();
      } else {
        // Muestra una alerta si se alcanza el límite del stock
        this.alertasService.presentAlert("Alcanzado límite de stock", "No queda más de ese producto en inventario");
      }
    } else {
      console.error("Error al consultar el producto.");
    }
  }
  
  async decrementarCantidad(producto: any) {
    if (producto.cantidad_d > 0) {
      producto.cantidad_d--;  // Reducimos cantidad en la vista.
      await this.bd.restarCantidad(this.idVentaActiva, producto.id_producto);
      await this.cargarProductos();  // Recargar productos después de modificar.
      this.actualizarPrecioTotal();  // Actualizamos el total.
    }
  }

  async borrarProductosSinStock() {
    try {
      // Consulta directa para obtener productos sin stock en el carrito actual
      const query = `
        SELECT d.id_producto, p.nombre_prod
        FROM detalle d
        JOIN producto p ON d.id_producto = p.id_producto
        WHERE d.id_venta = ? AND (p.stock_prod = 0 OR p.estatus_prod = 0);
      `;

      const result = await this.bd.database.executeSql(query, [this.idVentaActiva]);
      const productosSinStockEnCarrito = [];

      for (let i = 0; i < result.rows.length; i++) {
        productosSinStockEnCarrito.push(result.rows.item(i));
      }

      // Solo procede a eliminar y mostrar la alerta si hay productos sin stock en el carrito
      if (productosSinStockEnCarrito.length > 0) {
        for (let producto of productosSinStockEnCarrito) {
          await this.bd.eliminarProductoDelCarrito(this.idVentaActiva, producto.id_producto);
        }

        // Muestra la alerta solo si no ha sido mostrada anteriormente
        if (!this.alertaMostrada) {
          this.alertasService.presentAlert('ÉXITO', 'Productos sin stock eliminados del carrito');
          this.alertaMostrada = true; // Cambia la bandera para evitar futuras alertas
        }
      }

    } catch (error) {
      console.error('Error al eliminar productos sin stock del carrito:', error);
      this.alertasService.presentAlert('ERROR', 'Error al eliminar productos sin stock: ' + JSON.stringify(error));
    }
  }

  
  

  async RestarStockAlComprar() {
    this.wasaborrar = this.productosDisponibles;
    try {
      for (let producto of this.wasaborrar) {
        await this.bd.restarStock(producto.id_producto, producto.cantidad_d);
      }
      await this.cargarProductos();  // Recargar productos
      this.wasaborrar = [];
    } catch (error) {
      console.error('Error al eliminar productos sin stock:', error);
    }
  } 


  async actualizarPrecioTotal() {
    if (this.idVentaActiva) {
      this.totalVENTA  = await this.bd.preciofinal(this.idVentaActiva);
      this.cd.detectChanges();  // Forzamos la actualización de la vista
    }
  }

  calcularTotal() {
    return this.productosDisponibles.reduce((total, producto) => total + producto.subtotal, 0);
  }

  alertascarro() {
    this.alertasService.presentAlert('Gracias Por Su Compra', '');
  }


  async COMPRAAAAR() {
    await this.alertasService.presentAlert('Compra realizada', 'La compra está realizada, ya puedes retirar en tienda.');
  
    const idUsuario = await this.bd.obtenerIdUsuarioLogueado();
    const totalVenta = this.totalVENTA;
  
    // Inserta una nueva venta en la tabla `venta`
    const idVenta = await this.bd.registrarVenta(idUsuario, totalVenta);
  
    // Registrar el detalle de cada producto en la tabla `detalle`
    for (const producto of this.productosDisponibles) {
      await this.bd.restarStock(producto.id_producto, producto.cantidad_d);
      await this.bd.registrarDetalle(idVenta, producto.id_producto, producto.cantidad_d, producto.subtotal);
    }
  
    // Verificar que `idVentaActiva` no sea null antes de usarla
    if (this.idVentaActiva !== null) {
      // Vacía el carrito después de registrar los productos
      await this.bd.vaciarCarrito(this.idVentaActiva);
    } else {
      console.error('Error: idVentaActiva es null y no se puede usar en vaciarCarrito.');
    }
  
    // Redirige al usuario al inicio después de la compra
    this.router.navigate(['/home']);
  }
  
  



}

