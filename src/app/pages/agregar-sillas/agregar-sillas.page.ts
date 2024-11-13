import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

@Component({
  selector: 'app-agregar-sillas',
  templateUrl: './agregar-sillas.page.html',
  styleUrls: ['./agregar-sillas.page.scss'],
})
export class AgregarSillasPage {
  sillas = {
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

  async capturarFoto() {
    try {
      this.sillas.imagen = await this.camaraService.takePhoto();
      this.imagenVistaPrevia = URL.createObjectURL(this.sillas.imagen);  // Genera la URL de vista previa
      console.log('Imagen capturada como Blob:', this.sillas.imagen);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  async seleccionarImagen() {
    try {
      this.sillas.imagen = await this.camaraService.pickImage();
      this.imagenVistaPrevia = URL.createObjectURL(this.sillas.imagen);  // Genera la URL de vista previa
      console.log('Imagen seleccionada como Blob:', this.sillas.imagen);
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  }

  agregarSillas() {
    const categoriaId = 5;

    if (!this.sillas.imagen) {
      console.error('Error: La imagen no está definida.');
      return;
    }

    this.serviceBDService.agregarProducto(
      this.sillas.nombre,
      this.sillas.precio,
      this.sillas.stock,
      this.sillas.descripcion,
      this.sillas.imagen,
      categoriaId
    ).then(() => {
      this.router.navigateByUrl('/crud');
    }).catch(error => {
      console.error('Error al agregar las sillas:', error);
    });
  }
}
