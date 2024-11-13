import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

@Component({
  selector: 'app-agregar-teclado',
  templateUrl: './agregar-teclado.page.html',
  styleUrls: ['./agregar-teclado.page.scss'],
})
export class AgregarTecladoPage {
  teclado = {
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    imagen: null as Blob | null,
  };

  imagenVistaPrevia: string | null = null;  // URL para la vista previa de la imagen

  constructor(
    private serviceBDService: ServiceBDService,
    private camaraService: CamaraService,
    private router: Router
  ) {}

  // Método para capturar una foto usando la cámara
  async capturarFoto() {
    try {
      this.teclado.imagen = await this.camaraService.takePhoto();
      this.imagenVistaPrevia = URL.createObjectURL(this.teclado.imagen);
      console.log('Imagen capturada como Blob:', this.teclado.imagen);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  // Método para seleccionar una imagen desde la galería
  async seleccionarImagen() {
    try {
      this.teclado.imagen = await this.camaraService.pickImage();
      this.imagenVistaPrevia = URL.createObjectURL(this.teclado.imagen);
      console.log('Imagen seleccionada como Blob:', this.teclado.imagen);
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  }

  // Método para agregar el teclado con los datos ingresados
  agregarTeclado() {
    const categoriaId = 1;

    if (!this.teclado.imagen) {
      console.error('Error: La imagen no está definida.');
      return;
    }

    this.serviceBDService.agregarProducto(
      this.teclado.nombre,
      this.teclado.precio,
      this.teclado.stock,
      this.teclado.descripcion,
      this.teclado.imagen,
      categoriaId
    ).then(() => {
      this.router.navigateByUrl('/crud');
    }).catch(error => {
      console.error('Error al agregar el teclado:', error);
    });
  }
}
