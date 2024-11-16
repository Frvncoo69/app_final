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
  productosFiltrados: any[] = []; // Arreglo para almacenar los productos filtrados
  searchTerm: string = ''; // Término de búsqueda

  constructor(
    private alertController: AlertController, 
    private serviceBD: ServiceBDService, 
    private router: Router
  ) {}

  async ngOnInit() {
    /*const usuarios = await this.serviceBD.consultarUsuariosPorEstadoConectado();
    if (usuarios.length > 0) {
      const usuarioLogueado = usuarios[0];
      if (usuarioLogueado.id_rol === 2) {
        // Redirige al usuario no autorizado
        this.router.navigate(['/home']);
      }
    } else {
      // Si no hay usuario conectado, redirige a login
      this.router.navigate(['/login']);
    }*/
    this.cargarProductos(); // Cargar productos al inicializar
  }

  async ionViewWillEnter() {
    this.cargarProductos(); // Recargar productos cada vez que la vista esté activa
  }

  // Función para obtener todos los productos
  cargarProductos() {
    this.serviceBD.seleccionarProductos().then((productos) => {
      this.productos = productos;
      this.productosFiltrados = productos; // Inicialmente, muestra todos los productos
    }).catch((error) => {
      console.error('Error al cargar los productos:', error);
    });
  }

  // Función para filtrar productos en base al término de búsqueda
  filtrarProductos(event: any) {
    const query = event.target.value.toLowerCase();
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre_prod.toLowerCase().includes(query)
    );
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
      this.productos = this.productos.filter(producto => producto.id_producto !== id_producto);
      this.productosFiltrados = this.productosFiltrados.filter(producto => producto.id_producto !== id_producto);
    }).catch((error) => {
      console.error('Error al eliminar el producto:', error);
    });
  }

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

  modificarProducto(producto: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        productoData: producto
      }
    };
    this.router.navigate(['/modificar'], navigationExtras);
  }
}
