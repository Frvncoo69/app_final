import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

@Component({
  selector: 'app-agregar-audifono',
  templateUrl: './agregar-audifono.page.html',
  styleUrls: ['./agregar-audifono.page.scss'],
})
export class AgregarAudifonoPage {
  audifono = {
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
      this.audifono.imagen = await this.camaraService.takePhoto();
      this.imagenVistaPrevia = URL.createObjectURL(this.audifono.imagen);
      console.log('Imagen capturada como Blob:', this.audifono.imagen);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  async seleccionarImagen() {
    try {
      this.audifono.imagen = await this.camaraService.pickImage();
      this.imagenVistaPrevia = URL.createObjectURL(this.audifono.imagen);
      console.log('Imagen seleccionada como Blob:', this.audifono.imagen);
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  }

  agregarAudifono() {
    const categoriaId = 3;

    if (!this.audifono.imagen) {
      console.error('Error: La imagen no está definida.');
      return;
    }

    this.serviceBDService.agregarProducto(
      this.audifono.nombre,
      this.audifono.precio,
      this.audifono.stock,
      this.audifono.descripcion,
      this.audifono.imagen,
      categoriaId
    ).then(() => {
      this.router.navigateByUrl('/crud');
    }).catch(error => {
      console.error('Error al agregar el audífono:', error);
    });
  }
}
