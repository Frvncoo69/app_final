import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-nuevacontrasena',
  templateUrl: './nuevacontrasena.page.html',
  styleUrls: ['./nuevacontrasena.page.scss'],
})
export class NuevacontrasenaPage implements OnInit {

  nuevaContrasena: string = '';  // Almacena la nueva contraseña
  confirmarContrasena: string = '';  // Almacena la contraseña de confirmación
  correo: string = '';  // Almacena el correo del usuario

  constructor(
    private alertController: AlertController,
    private router: Router,
    private dbService: ServiceBDService
  ) { }

  ngOnInit() {
    // Aquí podrías obtener el correo del usuario actual si está almacenado en localStorage o sesión
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.correo = userData.correo;
  }

  async cambiarContrasena() {
    if (this.nuevaContrasena !== this.confirmarContrasena) {
      // Si las contraseñas no coinciden, mostrar una alerta
      await this.presentAlert('Error', 'Las contraseñas no coinciden. Intente nuevamente.');
      return;
    }

    try {
      // Actualizar la contraseña en la base de datos
      const usuario = await this.dbService.obtenerUsuarioPorCorreo(this.correo);
      if (usuario) {
        await this.dbService.actualizarContrasena(usuario.id, this.nuevaContrasena);
        
        // Redirigir al perfil
        this.router.navigate(['/perfil']);
        
        // Mostrar mensaje de éxito
        await this.presentAlert('Éxito', 'La contraseña ha sido actualizada.');
      } else {
        await this.presentAlert('Error', 'Usuario no encontrado.');
      }
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
      await this.presentAlert('Error', 'Hubo un problema al cambiar la contraseña.');
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
