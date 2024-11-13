import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {
  productos: any[] = []; // Arreglo para almacenar los productos
  private shouldReload = true; // Bandera para controlar si se debe recargar la lista

  constructor(
    private alertController: AlertController, 
    private serviceBD: ServiceBDService, 
    private router: Router
  ) {}

  async ngOnInit() {
    this.cargarProductos(); // Cargar productos al iniciar el componente
  }

  async ionViewWillEnter() {
    // Solo recargar si la bandera indica que se debe hacer
    if (this.shouldReload) {
      this.cargarProductos(); // Cargar productos cada vez que entras en esta vista
    }
    this.shouldReload = true; // Restablecer la bandera para futuras entradas
  }

  // Función para obtener todos los productos
  cargarProductos() {
    this.serviceBD.seleccionarProductos().then((productos) => {
      this.productos = productos;
    }).catch((error) => {
      console.error('Error al cargar los productos:', error);
    });
  }

  // Función para mostrar la alerta de confirmación y eliminar el producto
  async EliminarAlerta(id_producto: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.eliminarProducto(id_producto);
          }
        }
      ]
    });

    await alert.present();
  }

  // Función para eliminar el producto
  eliminarProducto(id_producto: string) {
    this.serviceBD.eliminarProducto(id_producto).then(() => {
      this.productos = this.productos.filter(producto => producto.id_producto !== id_producto);
      this.shouldReload = false; // No recargar al regresar, ya que la lista se actualizó aquí
    }).catch((error) => {
      console.error('Error al eliminar el producto:', error);
    });
  }

  // Método para agregar un producto
  agregarProducto(nombre: string, precio: number, stock: number, descripcion: string, foto: Blob, id_categoria: number) {
    this.serviceBD.agregarProducto(nombre, precio, stock, descripcion, foto, id_categoria).then(() => {
      this.cargarProductos(); // Recargar la lista de productos
      this.shouldReload = false; // No recargar al regresar, ya que la lista ya se actualizó
    }).catch((error) => {
      console.error('Error al agregar el producto:', error);
    });
  }

  irproductoSolo(x: any) {
    this.shouldReload = false; // Evita recargar al regresar de la vista de detalle

    let navigationExtras: NavigationExtras = {
      state: {
        productoVa: x
      }
    };
    this.router.navigate(['/detalle-producto'], navigationExtras);
  }

  modificarProducto(producto: any) {
    this.shouldReload = false; // Evita recargar al regresar de la vista de modificación

    const navigationExtras: NavigationExtras = {
      state: {
        productoData: producto
      }
    };
    this.router.navigate(['/modificar'], navigationExtras);
  }
}
