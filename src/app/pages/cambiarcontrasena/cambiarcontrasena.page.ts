import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-cambiarcontrasena',
  templateUrl: './cambiarcontrasena.page.html',
  styleUrls: ['./cambiarcontrasena.page.scss'],
})
export class CambiarcontrasenaPage implements OnInit {
  correo: Usuario | null = null; // Cambiado a un único objeto o null
  contrasenaIngresada: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private dbService: ServiceBDService
  ) {}

  async ngOnInit() {
    const usuarios = await this.dbService.consultarUsuariosPorEstadoConectado();
    if (usuarios.length > 0) {
      this.correo = usuarios[0]; // Asigna el primer usuario del arreglo
    }
  }

  async verificarContrasena() {
    try {
      if (!this.correo) {
        await this.presentAlert('Error', 'No se encontró un usuario conectado.');
        return;
      }

      const usuario = await this.dbService.obtenerUsuarioPorCorreo(this.correo.correo_usu);
      if (usuario && usuario.clave_usu === this.contrasenaIngresada) {
        this.correo = null; // Limpia los datos al verificar
        this.contrasenaIngresada = '';
        this.router.navigate(['/nuevacontrasena', { correo: usuario.correo_usu }]); // Redirige si la contraseña es correcta
      } else {
        await this.presentAlert('Error', 'Contraseña incorrecta. Por favor, intente de nuevo.');
      }
    } catch (error) {
      console.error('Error al verificar la contraseña:', error);
      await this.presentAlert('Error', 'Hubo un problema al verificar la contraseña.');
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
