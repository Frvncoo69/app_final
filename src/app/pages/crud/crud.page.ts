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

  constructor(private alertController: AlertController, private serviceBD: ServiceBDService, private router: Router) { }

  ngOnInit() {
    this.cargarProductos(); // Cargar productos al inicializar
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
            this.eliminarProducto(id_producto); // Llamar a la función para eliminar el producto
          }
        }
      ]
    });

    await alert.present();
  }

  // Función para eliminar el producto
  eliminarProducto(id_producto: string) {
    this.serviceBD.eliminarProducto(id_producto).then(() => {
      // Filtrar el producto eliminado de la lista local
      this.productos = this.productos.filter(producto => producto.id_producto !== id_producto);
    }).catch((error) => {
      console.error('Error al eliminar el producto:', error);
    });
  }

  // Método para agregar un producto
  agregarProducto(nombre: string, precio: number, stock: number, descripcion: string, foto: Blob, id_categoria: number) {
    this.serviceBD.agregarProducto(nombre, precio, stock, descripcion, foto, id_categoria).then(() => {
      this.cargarProductos(); // Recargar la lista de productos después de agregar uno nuevo
    }).catch((error) => {
      console.error('Error al agregar el producto:', error);
    });
  }

  irproductoSolo(x: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        productoVa: x
      }
    };
    this.router.navigate(['/detalle-producto'], navigationExtras);
  }
}
