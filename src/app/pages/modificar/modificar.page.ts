import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  // Variables para almacenar los valores del formulario
  id_producto!: number; // Usar el operador ! para indicar que será asignado
  categoria: string = '';
  nombre: string = '';
  stock: number = 0;
  precio: number = 0;
  descripcion: string = '';
  imagen: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private serviceBD: ServiceBDService
  ) {}

  ngOnInit() {
    this.id_producto = Number(this.activatedRoute.snapshot.paramMap.get('id')); // Obtener el ID del producto desde la ruta
    this.cargarProducto(this.id_producto); // Cargar el producto al inicializar
  }

  cargarProducto(id: number) {
    this.serviceBD.seleccionarProductoPorId(id).then(producto => {
      if (producto) {
        this.categoria = producto.id_categoria; // Asigna la categoría
        this.nombre = producto.nombre_prod;
        this.stock = producto.stock_prod;
        this.precio = producto.precio_prod;
        this.descripcion = producto.descripcion_prod;
        this.imagen = producto.foto_prod;
      }
    }).catch(error => {
      console.error('Error al cargar el producto:', error);
    });
  }

  async guardarCambios() {
    // Validar los campos del formulario
    if (!this.categoria || !this.nombre || this.stock < 0 || this.precio < 0) {
      const toast = await this.toastController.create({
        message: 'Por favor, completa todos los campos correctamente.',
        duration: 5000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present(); // Asegúrate de usar await aquí
      return;
    }

    // Llama al método modificarProducto en el servicio
    this.serviceBD.modificarProducto(
      this.id_producto,
      this.nombre,
      this.precio,
      this.stock,
      this.descripcion,
      this.imagen
    ).then(async () => { // Asegúrate de usar async aquí
      const toast = await this.toastController.create({
        message: 'Producto modificado correctamente',
        duration: 5000,
        position: 'bottom',
        color: 'success',
      });
      await toast.present(); // Asegúrate de usar await aquí

      // Redirige a la página 'crud'
      this.router.navigate(['/crud']);
    }).catch(async (error) => {
      const toast = await this.toastController.create({
        message: 'Error al modificar el producto: ' + error,
        duration: 5000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present(); // Asegúrate de usar await aquí
    });
  }
}
