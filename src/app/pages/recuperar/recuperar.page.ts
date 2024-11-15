import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';// Importa tu servicio de base de datos

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  correo: string = '';
  preguntaSeguridad: string = '';
  respuesta: string = '';
  mostrarPregunta: boolean = false;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private serviceBD: ServiceBDService
  ) {}

  ngOnInit() {}

 // Método para verificar el correo y mostrar la pregunta de seguridad
async verificarCorreo() {
  if (!this.correo) {
    await this.mostrarAlerta('Error', 'Por favor, complete todos los campos.');
  } else if (!this.correo.includes('@')) {
    await this.mostrarAlerta('Error', 'Ingrese un correo electrónico válido.');
  } else {
    try {
      const usuario = await this.serviceBD.obtenerUsuarioPorCorreo(this.correo);
      if (usuario) {
        this.preguntaSeguridad = usuario.pregunta_seguridad;
        this.mostrarPregunta = true; // Cambia a true para ocultar el campo de correo y mostrar la pregunta
      } else {
        await this.mostrarAlerta('Error', 'El correo no está registrado.');
      }
    } catch (error) {
      console.error('Error al verificar el correo:', error);
      await this.mostrarAlerta('Error', 'Hubo un problema al verificar el correo.');
    }
  }
}

// Método para verificar la respuesta de seguridad
async verificarRespuesta() {
  try {
    const usuario = await this.serviceBD.obtenerUsuarioPorCorreo(this.correo);
    if (usuario && this.respuesta === usuario.respuesta_seguridad) {
      // Redirige a la página de cambio de contraseña, pasando el id del usuario
      this.router.navigate(['/nueva'], { state: { id_usu: usuario.id_usu } });
    } else {
      await this.mostrarAlerta('Error', 'Respuesta de seguridad incorrecta.');
    }
  } catch (error) {
    console.error('Error al verificar la respuesta:', error);
    await this.mostrarAlerta('Error', 'Hubo un problema al verificar la respuesta.');
  }
}


  private async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
