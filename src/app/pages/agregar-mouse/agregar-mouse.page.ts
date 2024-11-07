import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';  // Verifica que la ruta sea correcta
import { CamaraService } from 'src/app/services/camara.service';  // Verifica que la ruta sea correcta

@Component({
  selector: 'app-agregar-mouse',
  templateUrl: './agregar-mouse.page.html',
  styleUrls: ['./agregar-mouse.page.scss'],
})
export class AgregarMousePage {  // <-- Asegúrate de que el nombre esté en mayúsculas y consistente
  mouse = {
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    imagen: null as Blob | null,  // Aquí se guarda la imagen como Blob o null
  };

  constructor(
    private serviceBDService: ServiceBDService,
    private camaraService: CamaraService, 
    private router: Router
  ) {}

  // Método para capturar una foto con la cámara
  async capturarFoto() {
    try {
      this.mouse.imagen = await this.camaraService.takePhoto();  // Captura la imagen como Blob
      console.log('Imagen capturada como Blob:', this.mouse.imagen);  // Verificación en consola
    } catch (error) {
      console.error('Error al capturar la imagen:', error);  // Manejo de errores
    }
  }

  // Método para seleccionar una imagen desde la galería
  async seleccionarImagen() {
    try {
      this.mouse.imagen = await this.camaraService.pickImage();  // Selecciona la imagen como Blob
      console.log('Imagen seleccionada como Blob:', this.mouse.imagen);  // Verificación en consola
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);  // Manejo de errores
    }
  }

  // Método para agregar un mouse con los datos del formulario
  agregarMouse() {
    const categoriaId = 4;  // Suponiendo que 7 es la categoría de mouse

    if (!this.mouse.imagen) {
      console.error('Error: La imagen no está definida.');
      return;  // No continúa si no hay una imagen
    }

    this.serviceBDService.agregarProducto(
      this.mouse.nombre,
      this.mouse.precio,
      this.mouse.stock,
      this.mouse.descripcion,
      this.mouse.imagen,  // Imagen en formato Blob
      categoriaId
    ).then(() => {
      this.router.navigateByUrl('/crud');  // Redirige a la lista de mouse
    }).catch(error => {
      console.error('Error al agregar el mouse:', error);  // Manejo de errores
    });
  }
}
