import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  categoria: string = '';
  nombre: string = '';
  stock: number | null = null;
  precio: number | null = null;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async agregarProducto() {
    // Validar que ninguno de los campos esté vacío
    if (!this.categoria.trim() || !this.nombre.trim()) {
      this.mostrarAlerta('Categoría y nombre son requeridos.');
      return;
    }

    // Validar que stock y precio no sean menores a 0
    if (this.stock === null || this.stock < 0) {
      this.mostrarAlerta('El stock no puede ser menor a 0, ni estar vacío.');
      return;
    }

    if (this.precio === null || this.precio < 0) {
      this.mostrarAlerta('El precio no puede ser menor a 0, ni estar vacío.');
      return;
    }

    // Aquí puedes agregar la lógica para guardar el producto

    // Mostrar toast de éxito
    this.mostrarToast('Producto agregado con éxito.');

    // Redirigir a la página 'crud'
    this.router.navigate(['/crud']);
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000, // Duración del toast en milisegundos
      position: 'bottom' // Posición del toast en la pantalla
    });

    await toast.present();
  }
}
