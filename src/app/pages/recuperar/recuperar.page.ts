import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service'; // Importa tu servicio de base de datos

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
  respuestaSeleccionada: boolean = false; // Nueva variable para saber si se seleccionó una pregunta
  preguntasPredefinidas: string[] = [
    '¿Cuál es el nombre de tu primera mascota?',
    '¿Cuál es tu comida favorita?',
    '¿Cuál fue tu primer trabajo?',
    '¿Cuál es el nombre de tu ciudad natal?'
  ];

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
          this.mostrarPregunta = true; // Cambia a true para mostrar la opción de pregunta
        } else {
          await this.mostrarAlerta('Error', 'El correo no está registrado.');
        }
      } catch (error) {
        console.error('Error al verificar el correo:', error);
        await this.mostrarAlerta('Error', 'Hubo un problema al verificar el correo.');
      }
    }
  }

  // Método para manejar la selección de la pregunta de seguridad
  seleccionarPregunta() {
    if (this.preguntaSeguridad) {
      this.respuestaSeleccionada = true; // Marca como seleccionada una pregunta
    }
  }

  // Método para verificar la respuesta
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
