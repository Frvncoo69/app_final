import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

@Component({
  selector: 'app-agregar-pc',
  templateUrl: './agregar-pc.page.html',
  styleUrls: ['./agregar-pc.page.scss'],
})
export class AgregarPCPage {
  pc = {
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    imagen: null as Blob | null,
  };

  constructor(
    private serviceBDService: ServiceBDService,
    private camaraService: CamaraService,
    private router: Router
  ) {}

  async capturarFoto() {
    try {
      this.pc.imagen = await this.camaraService.takePhoto();
      console.log('Imagen capturada:', this.pc.imagen);
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  }

  async seleccionarImagen() {
    try {
      this.pc.imagen = await this.camaraService.pickImage();
      console.log('Imagen seleccionada:', this.pc.imagen);
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  }

  agregarPC() {
    const categoriaId = 6;
    if (!this.pc.imagen) {
      console.error('Error: La imagen es obligatoria.');
      return;
    }

    this.serviceBDService.agregarProducto(
      this.pc.nombre,
      this.pc.precio,
      this.pc.stock,
      this.pc.descripcion,
      this.pc.imagen,
      categoriaId
    ).then(() => {
      this.router.navigateByUrl('/crud');
    }).catch(error => {
      console.error('Error al agregar el PC:', error);
    });
  }
}
