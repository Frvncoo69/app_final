import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

@Component({
  selector: 'app-agregar-monitor',
  templateUrl: './agregar-monitor.page.html',
  styleUrls: ['./agregar-monitor.page.scss'],
})
export class AgregarMonitorPage {
  monitor = {
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
      this.monitor.imagen = await this.camaraService.takePhoto();
      this.imagenVistaPrevia = URL.createObjectURL(this.monitor.imagen);
      console.log('Imagen capturada como Blob:', this.monitor.imagen);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  async seleccionarImagen() {
    try {
      this.monitor.imagen = await this.camaraService.pickImage();
      this.imagenVistaPrevia = URL.createObjectURL(this.monitor.imagen);
      console.log('Imagen seleccionada como Blob:', this.monitor.imagen);
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  }

  agregarMonitor() {
    const categoriaId = 2;

    if (!this.monitor.imagen) {
      console.error('Error: La imagen no está definida.');
      return;
    }

    this.serviceBDService.agregarProducto(
      this.monitor.nombre,
      this.monitor.precio,
      this.monitor.stock,
      this.monitor.descripcion,
      this.monitor.imagen,
      categoriaId
    ).then(() => {
      this.router.navigateByUrl('/crud');
    }).catch(error => {
      console.error('Error al agregar el monitor:', error);
    });
  }
}
