import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

@Component({
  selector: 'app-editar-pc',
  templateUrl: './editar-pc.page.html',
  styleUrls: ['./editar-pc.page.scss'],
})
export class EditarPcPage implements OnInit {
  pc = {
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
    this.obtenerPc();
  }

  obtenerPc() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.serviceBDService.obtenerProductoPorId(id).then((data: any) => {
        if (data) {
          this.pc = {
            id: data.id_producto,
            nombre: data.nombre_prod,
            precio: data.precio_prod,
            stock: data.stock_prod,
            descripcion: data.descripcion_prod,
            imagen: data.foto_prod,
          };
        }
      }).catch(error => {
        console.error('Error al obtener el PC:', error);
      });
    } else {
      console.error('ID no proporcionado en la ruta.');
    }
  }

  async capturarFoto() {
    try {
      this.pc.imagen = await this.camaraService.takePhoto();
      console.log('Imagen capturada como Blob:', this.pc.imagen);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  async seleccionarImagen() {
    try {
      this.pc.imagen = await this.camaraService.pickImage();
      console.log('Imagen seleccionada como Blob:', this.pc.imagen);
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  }

  guardarCambios() {
    if (!this.pc.imagen) {
      console.error('Error: La imagen no está definida.');
      return;
    }

    this.serviceBDService.modificarProducto(
      this.pc.id!,
      this.pc.nombre,
      this.pc.precio,
      this.pc.stock,
      this.pc.descripcion,
      this.pc.imagen
    ).then(() => {
      console.log('Cambios guardados con éxito.');
      this.router.navigateByUrl('/pc');
    }).catch(error => {
      console.error('Error al guardar los cambios:', error);
    });
  }
}
