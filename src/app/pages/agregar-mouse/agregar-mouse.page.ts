import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

@Component({
  selector: 'app-agregar-mouse',
  templateUrl: './agregar-mouse.page.html',
  styleUrls: ['./agregar-mouse.page.scss'],
})
export class AgregarMousePage {
  mouse = {
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
      this.mouse.imagen = await this.camaraService.takePhoto();
      this.imagenVistaPrevia = URL.createObjectURL(this.mouse.imagen);  // Genera la URL de vista previa
      console.log('Imagen capturada como Blob:', this.mouse.imagen);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  async seleccionarImagen() {
    try {
      this.mouse.imagen = await this.camaraService.pickImage();
      this.imagenVistaPrevia = URL.createObjectURL(this.mouse.imagen);  // Genera la URL de vista previa
      console.log('Imagen seleccionada como Blob:', this.mouse.imagen);
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  }

  agregarMouse() {
    const categoriaId = 4;

    if (!this.mouse.imagen) {
      console.error('Error: La imagen no está definida.');
      return;
    }

    this.serviceBDService.agregarProducto(
      this.mouse.nombre,
      this.mouse.precio,
      this.mouse.stock,
      this.mouse.descripcion,
      this.mouse.imagen,
      categoriaId
    ).then(() => {
      this.router.navigateByUrl('/crud');
    }).catch(error => {
      console.error('Error al agregar el mouse:', error);
    });
  }
}
