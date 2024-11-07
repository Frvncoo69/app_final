import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

@Component({
  selector: 'app-editar-sillas',
  templateUrl: './editar-sillas.page.html',
  styleUrls: ['./editar-sillas.page.scss'],
})
export class EditarSillasPage implements OnInit {
  sillas = {
    id: null as number | null,
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    imagen: null as Blob | string | null,
  };

  constructor(
    private serviceBDService: ServiceBDService,
    private camaraService: CamaraService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.obtenerSillas();
  }

  obtenerSillas() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.serviceBDService.obtenerProductoPorId(id).then((data: any) => {
        if (data) {
          this.sillas = {
            id: data.id_producto,
            nombre: data.nombre_prod,
            precio: data.precio_prod,
            stock: data.stock_prod,
            descripcion: data.descripcion_prod,
            imagen: data.foto_prod,
          };
        }
      }).catch(error => {
        console.error('Error al obtener la silla:', error);
      });
    } else {
      console.error('ID no proporcionado en la ruta.');
    }
  }

  async capturarFoto() {
    try {
      this.sillas.imagen = await this.camaraService.takePhoto();
      console.log('Imagen capturada como Blob:', this.sillas.imagen);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  async seleccionarImagen() {
    try {
      this.sillas.imagen = await this.camaraService.pickImage();
      console.log('Imagen seleccionada como Blob:', this.sillas.imagen);
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  }

  guardarCambios() {
    if (!this.sillas.imagen) {
      console.error('Error: La imagen no está definida.');
      return;
    }

    this.serviceBDService.modificarProducto(
      this.sillas.id!,
      this.sillas.nombre,
      this.sillas.precio,
      this.sillas.stock,
      this.sillas.descripcion,
      this.sillas.imagen
    ).then(() => {
      console.log('Cambios guardados con éxito.');
      this.router.navigateByUrl('/sillas');
    }).catch(error => {
      console.error('Error al guardar los cambios:', error);
    });
  }
}
