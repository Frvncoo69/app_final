import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

@Component({
  selector: 'app-nuevacontrasena',
  templateUrl: './nuevacontrasena.page.html',
  styleUrls: ['./nuevacontrasena.page.scss'],
})
export class NuevacontrasenaPage implements OnInit {
  nuevaContrasena: string = '';
  confirmarContrasena: string = '';
  correo: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dbService: ServiceBDService
  ) {}

  ngOnInit() {
    // Obtener el correo del usuario desde los parámetros de la ruta o desde el servicio
    this.correo = this.activatedRoute.snapshot.paramMap.get('correo') || '';

    if (!this.correo) {
      // Si no hay un correo disponible, redirigir o mostrar un mensaje de error
      this.presentAlert('Error', 'No se encontró información del usuario.');
      this.router.navigate(['/login']); // Ajusta la ruta según corresponda
    }
  }

  async cambiarContrasena() {
    if (this.nuevaContrasena !== this.confirmarContrasena) {
      await this.presentAlert('Error', 'Las contraseñas no coinciden. Intente nuevamente.');
      return;
    }

    try {
      // Validar y actualizar contraseña en la base de datos
      const usuario = await this.dbService.obtenerUsuarioPorCorreo2(this.correo);
      if (usuario) {
        await this.dbService.actualizarContrasena(usuario.id_usu, this.nuevaContrasena);

        // Redirigir después de éxito
        this.router.navigate(['/perfil']);
        await this.presentAlert('Éxito', 'La contraseña ha sido actualizada correctamente.');
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
