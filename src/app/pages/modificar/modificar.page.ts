import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, ActionSheetController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  id_producto!: number;
  categoria: string = '';
  nombre: string = '';
  stock: number = 0;
  precio: number = 0;
  descripcion: string = '';
  imagen: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private actionSheetController: ActionSheetController, // Añadido ActionSheetController
    private serviceBD: ServiceBDService,
    private camaraService: CamaraService
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state && navigation.extras.state['productoData']) {
      const producto = navigation.extras.state['productoData'];
      this.id_producto = producto.id_producto;
      this.categoria = producto.id_categoria;
      this.nombre = producto.nombre_prod;
      this.stock = producto.stock_prod;
      this.precio = producto.precio_prod;
      this.descripcion = producto.descripcion_prod;
      this.imagen = producto.foto_prod;
    }
  }

  // Cambiado de ToastController a ActionSheetController para opciones de captura de imagen
  async capturarImagen() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccione una opción',
      buttons: [
        {
          text: 'Cámara',
          handler: async () => {
            const blobImage = await this.camaraService.takePhoto();
            this.convertBlobToBase64(blobImage);
          },
          cssClass: 'action-sheet-button' // Clase CSS personalizada
        },
        {
          text: 'Galería',
          handler: async () => {
            const blobImage = await this.camaraService.pickImage();
            this.convertBlobToBase64(blobImage);
          },
          cssClass: 'action-sheet-button' // Clase CSS personalizada
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'action-sheet-cancel' // Clase CSS personalizada
        }
      ],
      cssClass: 'custom-action-sheet' // Clase CSS para el contenedor
    });
    await actionSheet.present();
  }

  convertBlobToBase64(blob: Blob) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imagen = reader.result as string;
    };
    reader.readAsDataURL(blob);
  }

  async guardarCambios() {
    if (!this.categoria || !this.nombre || this.stock < 0 || this.precio < 0) {
      const toast = await this.toastController.create({
        message: 'Por favor, completa todos los campos correctamente.',
        duration: 5000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present();
      return;
    }

    this.serviceBD.modificarProducto(
      this.id_producto,
      this.nombre,
      this.precio,
      this.stock,
      this.descripcion,
      this.imagen
    ).then(async () => {
      const toast = await this.toastController.create({
        message: 'Producto modificado correctamente',
        duration: 5000,
        position: 'bottom',
        color: 'success',
      });
      await toast.present();
      this.router.navigate(['/crud']); // Regresa a CRUD después de guardar los cambios
    }).catch(async (error) => {
      const toast = await this.toastController.create({
        message: 'Error al modificar el producto: ' + error,
        duration: 5000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present();
    });
  }
}
