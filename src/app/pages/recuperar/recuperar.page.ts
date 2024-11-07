import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  correo: string = ''; // Para almacenar el valor del input

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() { }

  // Método que se llama cuando se hace clic en el botón "Enviar Código"
  async enviarCodigo() {
    if (!this.correo) { // Verifica si el campo de correo está vacío
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
    } else if (!this.correo.includes('@')) { // Verifica si el campo de correo contiene un '@'
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingrese un correo electrónico válido el cual contenga "@"',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Redirige a la página de código si el campo no está vacío y contiene '@'
      this.router.navigate(['/codigo']);
    }
  }
}
