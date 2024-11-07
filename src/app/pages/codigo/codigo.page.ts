import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
})
export class CodigoPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async reenviarCorreo() {
    const toast = await this.toastController.create({
      message: 'Correo reenviado',
      duration: 5000,
      position: 'bottom',
    });
    toast.present();
  }

}
