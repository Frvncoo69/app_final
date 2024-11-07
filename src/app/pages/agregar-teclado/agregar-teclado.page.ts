import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';  // Verifica que la ruta sea correcta
import { CamaraService } from 'src/app/services/camara.service';  // Verifica que la ruta sea correcta

@Component({
  selector: 'app-agregar-teclado',
  templateUrl: './agregar-teclado.page.html',
  styleUrls: ['./agregar-teclado.page.scss'],
})
export class AgregarTecladoPage {  // <-- Verificación del nombre en mayúsculas
  teclado = {
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    imagen: null as Blob | null,  // Almacena la imagen como Blob o null
  };

  constructor(
    private serviceBDService: ServiceBDService,
    private camaraService: CamaraService,
    private router: Router
  ) {}

  // Método para capturar una foto usando la cámara
  async capturarFoto() {
    try {
      this.teclado.imagen = await this.camaraService.takePhoto();
      console.log('Imagen capturada como Blob:', this.teclado.imagen);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  // Método para seleccionar una imagen desde la galería
  async seleccionarImagen() {
    try {
      this.teclado.imagen = await this.camaraService.pickImage();
      console.log('Imagen seleccionada como Blob:', this.teclado.imagen);
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  }

  // Método para agregar el teclado con los datos ingresados
  agregarTeclado() {
    const categoriaId = 1;  // Asumiendo que 9 es la categoría de teclados

    if (!this.teclado.imagen) {
      console.error('Error: La imagen no está definida.');
      return;
    }

    this.serviceBDService.agregarProducto(
      this.teclado.nombre,
      this.teclado.precio,
      this.teclado.stock,
      this.teclado.descripcion,
      this.teclado.imagen,  // Imagen en formato Blob
      categoriaId
    ).then(() => {
      this.router.navigateByUrl('/crud');  // Redirige a la lista de teclados
    }).catch(error => {
      console.error('Error al agregar el teclado:', error);
    });
  }
}
