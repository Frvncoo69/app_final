import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

@Component({
  selector: 'app-editar-monitor',
  templateUrl: './editar-monitor.page.html',
  styleUrls: ['./editar-monitor.page.scss'],
})
export class EditarMonitorPage implements OnInit {
  monitor = {
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
    this.obtenerMonitor();
  }

  obtenerMonitor() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.serviceBDService.obtenerProductoPorId(id).then((data: any) => {
        if (data) {
          this.monitor = {
            id: data.id_producto,
            nombre: data.nombre_prod,
            precio: data.precio_prod,
            stock: data.stock_prod,
            descripcion: data.descripcion_prod,
            imagen: data.foto_prod,
          };
        }
      }).catch(error => {
        console.error('Error al obtener el monitor:', error);
      });
    } else {
      console.error('ID no proporcionado en la ruta.');
    }
  }

  async capturarFoto() {
    try {
      this.monitor.imagen = await this.camaraService.takePhoto();
      console.log('Imagen capturada como Blob:', this.monitor.imagen);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  async seleccionarImagen() {
    try {
      this.monitor.imagen = await this.camaraService.pickImage();
      console.log('Imagen seleccionada como Blob:', this.monitor.imagen);
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  }

  guardarCambios() {
    if (!this.monitor.imagen) {
      console.error('Error: La imagen no está definida.');
      return;
    }

    this.serviceBDService.modificarProducto(
      this.monitor.id!,
      this.monitor.nombre,
      this.monitor.precio,
      this.monitor.stock,
      this.monitor.descripcion,
      this.monitor.imagen
    ).then(() => {
      console.log('Cambios guardados con éxito.');
      this.router.navigateByUrl('/monitores');
    }).catch(error => {
      console.error('Error al guardar los cambios:', error);
    });
  }
}
