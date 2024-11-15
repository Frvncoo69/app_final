import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  rut: string = '';
  nombre: string = '';
  apellido: string = '';
  nombreUsuario: string = '';
  correo: string = '';
  contrasena: string = '';
  validarContrasena: string = '';
  preguntaSeguridad: string = '';
  respuestaSeguridad: string = '';
  
  preguntasPredefinidas: string[] = [
    '¿Cuál es el nombre de tu primera mascota?',
    '¿Cuál es tu comida favorita?',
    '¿Cuál fue tu primer trabajo?',
    '¿Cuál es el nombre de tu ciudad natal?'
  ];

  constructor(
    private alertController: AlertController,
    private router: Router,
    private dbService: ServiceBDService
  ) { }

  ngOnInit() { }

  async crearCuenta() {
    // Validación de campos vacíos
    if (!this.rut || !this.nombre || !this.apellido || !this.nombreUsuario || !this.correo || !this.contrasena || !this.validarContrasena || !this.preguntaSeguridad || !this.respuestaSeguridad) {
      await this.presentAlert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    // Validación de la contraseña
    const contrasenaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/;
    if (!contrasenaRegex.test(this.contrasena)) {
      await this.presentAlert('Error', 'La contraseña debe tener un mínimo de 6 caracteres, una mayúscula, un número y un carácter especial.');
      return;
    }

    // Validación de coincidencia de contraseñas
    if (this.contrasena !== this.validarContrasena) {
      await this.presentAlert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    // Validación de correo único en la base de datos
    const usuarioExistente = await this.dbService.obtenerUsuarioPorCorreo(this.correo);
    if (usuarioExistente) {
      await this.presentAlert('Error', 'El correo ya está en uso. Por favor, elige otro.');
      return;
    }

    // Insertar el usuario en la base de datos con la pregunta y respuesta de seguridad
    try {
      await this.dbService.insertarUsuarioConSeguridad(
        this.rut,
        this.nombre,
        this.apellido,
        this.nombreUsuario,
        this.contrasena,
        this.correo,
        true, // Estado inicial activo
        2, // Rol de usuario por defecto
        this.preguntaSeguridad,
        this.respuestaSeguridad
      );

      await this.presentAlert('Éxito', 'Cuenta creada con éxito.');
      this.router.navigate(['/login']); // Redirigir al perfil o página de inicio de sesión
    } catch (error) {
      await this.presentAlert('Error', 'Hubo un problema al crear la cuenta. Inténtalo nuevamente.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
