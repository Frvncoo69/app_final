import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular'; // Importa el ToastController

@Component({
  selector: 'app-mouse1',
  templateUrl: './mouse1.page.html',
  styleUrls: ['./mouse1.page.scss'],
})
export class Mouse1Page implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async alarmaCarrito() {
    const toast = await this.toastController.create({
      message: 'Se añadió al carrito.',
      duration: 2000, // Duración en milisegundos
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }
}
