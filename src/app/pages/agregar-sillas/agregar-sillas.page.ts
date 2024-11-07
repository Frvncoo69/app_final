import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';  // Verifica la ruta correcta
import { CamaraService } from 'src/app/services/camara.service';  // Verifica la ruta correcta

@Component({
  selector: 'app-agregar-sillas',
  templateUrl: './agregar-sillas.page.html',
  styleUrls: ['./agregar-sillas.page.scss'],
})
export class AgregarSillasPage {  // <-- Asegúrate de usar mayúsculas consistentes
  sillas = {
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    imagen: null as Blob | null,  // Imagen como Blob o null
  };

  constructor(
    private serviceBDService: ServiceBDService,
    private camaraService: CamaraService,
    private router: Router
  ) {}

  // Método para capturar una foto con la cámara
  async capturarFoto() {
    try {
      this.sillas.imagen = await this.camaraService.takePhoto();
      console.log('Imagen capturada como Blob:', this.sillas.imagen);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  // Método para seleccionar una imagen desde la galería
  async seleccionarImagen() {
    try {
      this.sillas.imagen = await this.camaraService.pickImage();
      console.log('Imagen seleccionada como Blob:', this.sillas.imagen);
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  }

  // Método para agregar sillas con los datos del formulario
  agregarSillas() {
    const categoriaId = 5;  // Asumiendo que 8 es la categoría de sillas

    if (!this.sillas.imagen) {
      console.error('Error: La imagen no está definida.');
      return;
    }

    this.serviceBDService.agregarProducto(
      this.sillas.nombre,
      this.sillas.precio,
      this.sillas.stock,
      this.sillas.descripcion,
      this.sillas.imagen,  // Imagen en formato Blob
      categoriaId
    ).then(() => {
      this.router.navigateByUrl('/crud');  // Redirige a la lista de sillas
    }).catch(error => {
      console.error('Error al agregar las sillas:', error);
    });
  }
}
